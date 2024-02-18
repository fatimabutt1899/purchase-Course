import React, { useEffect, useState } from 'react';
import './App.css';
import amplifyconfig from './amplifyconfiguration.json';
import { withAuthenticator, Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from 'aws-amplify';
import { generateClient } from '@aws-amplify/api';
import { Paper, IconButton } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { get, ApiError } from 'aws-amplify/api';

// import { fetchCourses } from './api'; // Assuming you have an api.js file where you define API functions
import { Courses } from './models/schema'; // Import the Course interface from your schema



Amplify.configure(amplifyconfig);

const client = generateClient();

function App() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetchCourses();
    }, []);


    async function fetchCourses() {
        const apiName = 'coursesapi';
        const path = '/courses';
    
        try {
            const restOperation = get({
                apiName,
                path,
            });
            const response = await restOperation.response;
    
            if (!response.body) {
                throw new Error('No data received from the API');
            }
    
            const reader = response.body.getReader();
            const decoder = new TextDecoder('utf-8');
            let data = '';
    
            while (true) {
                const { done, value } = await reader.read();
                if (done) break;
                data += decoder.decode(value, { stream: true });
            }
    
            const jsonData = JSON.parse(data);
            console.log('Courses:', jsonData);
            // return jsonData;
            setCourses(jsonData); // Update state with fetched courses
        } catch (error) {
            console.error('Error fetching courses:', error);
            throw error;
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
