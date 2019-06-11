// exposed on the endpoint 
// https://a4f1v6cts9.execute-api.us-east-1.amazonaws.com/prod/filter-by-period-and-vertical?dateFilter=all&verticalFilter=all
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({ region: 'us-east-1' });
// use DynamoDB.DocumentClient  instead of DynamoDB service object for better Marshalling Input and Unmarshalling Response Data
var ddb = new AWS.DynamoDB.DocumentClient({ apiVersion: '2012-08-10' });

exports.handler = function(event, context, callback) {

     console.log("verticalFilter is : " + event.verticalFilter);
     console.log("dateFilter is : " + event.dateFilter);

    var d = new Date();
    var to;
    var from;
    var period = event.dateFilter;

    switch (period) {
        case "today":
            to = new Date();
            from = new Date();
            break;
        case "last_week":
            from = d.setTime(d.getTime() - 6 * 24 * 60 * 60 * 1000);
            to = d.setTime(d.getTime() - (d.getDay() ? d.getDay() : 7) * 24 * 60 * 60 * 1000);
            break;
        case "last_month":
            from = new Date(d.getFullYear(), d.getMonth() - 1, 1);
            to = new Date(d.getFullYear(), d.getMonth(), 0);
            break;
        case "this_quarter":
            const quarter = Math.floor((d.getMonth() / 3));
            from = new Date(d.getFullYear(), quarter * 3, 1);
            to = new Date(from.getFullYear(), from.getMonth() + 3, 0);
            break;
        case "this_year":
            from = new Date(new Date().getFullYear(), 0, 1);
            to = new Date(new Date().getFullYear(), 11, 31);
            break;
        case "all":
            from = new Date(-8640000000000000);
            to = new Date(8640000000000000);
            break;
        default:
            to = new Date();
            from = new Date();
            break;
    }

    console.log('start date1: ' + formatDate(from));
    console.log('end   date2: ' + formatDate(to));

    function formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [year, month, day].join('-');
    }

    function GetFilterExpression() {
        var exp = 'meetingDate >= :date1 and meetingDate <=:date2 ';
        if (typeof event.verticalFilter != "undefined" && event.verticalFilter != "all")
            exp += 'and Vertical = :verticalName';
        return exp;
    }

    const params = {
        TableName: "Sales",
        FilterExpression: GetFilterExpression(),
        ExpressionAttributeValues: {
            ":date1": formatDate(from),
            ":date2": formatDate(to),
        }
    };

    console.log("params FilterExpression is " + params.FilterExpression);

    if (typeof event.verticalFilter != "undefined" && event.verticalFilter != "all") {
        params.ExpressionAttributeValues[":verticalName"] = event.verticalFilter;
        console.log("params ExpressionAttributeValues.verticalName is " + params.ExpressionAttributeValues[":verticalName"]);

    }
    console.log("params ExpressionAttributeValues is " + params.ExpressionAttributeValues);

    ddb.scan(params, function(err, data) {
        if (err) {
            callback(err.stack, null);
        }
        else {
            callback(null, data);
        }
    });
};
