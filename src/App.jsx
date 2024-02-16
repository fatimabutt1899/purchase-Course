import React, { useEffect, useState } from 'react';
import './App.css';
import awsconfig from './aws-exports';
import { withAuthenticator, Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from 'aws-amplify';
import { listCourses } from './graphql/queries';
import { generateClient } from '@aws-amplify/api';
import { Paper, IconButton } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

Amplify.configure(awsconfig);

const client = generateClient();

function App() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetchCourses();
    }, []);

    useEffect(() => {
        // Fetch courses whenever the authentication state changes
        fetchCourses();
    }, []);

    async function fetchCourses() {
        try {
            const courseData = await client.graphql({
                query: listCourses,
            });
            const courseList = courseData.data.listCourses.items;
            console.log('course List', courseList);
            setCourses(courseList);
        } catch (error) {
            console.error('Error on fetching courses: ', error);
        }
    }

    return (
        <Authenticator onStateChange={() => fetchCourses()}>
            {({ signOut}) => (
                <main>
                    <div className="App">
                        <header className="App-header">
                            <h2>Purchase Your Course</h2>
                            <button onClick={signOut}>Sign out</button>
                        </header>
                        <div className='courseList'>
                            <div className="columnHeadings">
                                <div>ID</div>
                                <div>Title</div>
                                <div>Price</div>
                            </div>
                            {courses.map((course) => {
                                return (
                                    <Paper variant='outlined' elevation={0}>
                                        <div className="courseCard">
                                            <div className='courseContent'>
                                                <div className='courseId'>{course.id}</div>
                                                <div className='courseTitle'>{course.title}</div>
                                                <div className='coursePrice'>{course.price}</div>
                                            </div>
                                            <IconButton className="icon" color="primary" aria-label="add to shopping cart">
                                                <AddShoppingCartIcon />
                                            </IconButton>
                                        </div>
                                    </Paper>
                                )
                            })}
                        </div>
                    </div>
                </main>
            )}
        </Authenticator>
    );
}

export default withAuthenticator(App);
