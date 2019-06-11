// exposed on the endPoint
// https://a4f1v6cts9.execute-api.us-east-1.amazonaws.com/prod/distinct-verticals
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'us-east-1'});
// use DynamoDB.DocumentClient  instead of DynamoDB service object for better Marshalling Input and Unmarshalling Response Data
var ddb = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});

exports.handler = function (event, context,callback){
    const params = {
       TableName : "Sales",
       ProjectionExpression: "Vertical",
    };

    ddb.scan(params, function(err, data) {
       if (err) {
        console.log("inside the error callback");
        console.log(err, err.stack); // an error occurred
        callback(err.stack, null);
       }
       else {   
        console.log("inside the successful callback");
        const unique = [...new Set(data.Items.map(item => item.Vertical))];
        console.log(unique);
        callback(null,unique);
       }
    });
};


