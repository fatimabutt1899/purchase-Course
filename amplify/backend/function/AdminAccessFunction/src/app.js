const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    const params = {
        TableName: 'CourseTable1',
        Item: {
            courseID: event.courseID,
            title: event.title,
            price: event.price
            // Add other attributes as needed
        }
    };
    
    try {
        await dynamodb.put(params).promise();
        return { statusCode: 200, body: 'Course inserted successfully' };
    } catch (error) {
        console.error('Error inserting course: ', error);
        return { statusCode: 500, body: 'Error inserting course' };
    }
};
