const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = async () => {
    const params = {
        TableName: 'CourseTable1',
        ProjectionExpression: 'courseID, title, price' // Specify the attributes you want to include
    };
    
    try {
        const data = await dynamodb.scan(params).promise();
        return { statusCode: 200, body: JSON.stringify(data.Items) };
    } catch (error) {
        console.error('Error retrieving courses: ', error);
        return { statusCode: 500, body: 'Error retrieving courses' };
    }
};
