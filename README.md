# SalesAppClient

## Technologies used

1. Front-end: Angular -7 .
2. Rest api using AWS Lambda and API Gateway.
3. Database: AWS dynamodb.
4. Hosted in AWS S3.

## Hosedted Links

- Application http://sales-app-client-v1.s3-website-us-east-1.amazonaws.com/
- All Sales API https://a4f1v6cts9.execute-api.us-east-1.amazonaws.com/prod/sales
- API for distinct verticals https://a4f1v6cts9.execute-api.us-east-1.amazonaws.com/prod/distinct-verticals
- Filter sales by Verticals and Period https://a4f1v6cts9.execute-api.us-east-1.amazonaws.com/prod/filter-by-period-and-vertical?dateFilter=all&verticalFilter=all 
  -  you can pass dateFilter argument as one of the following 
      - today
      - last_week
      - last_month
      - this_quarter
      - this_year
      - all
  - you can pass the vertical name as verticalFilter argument to filter results by vertical.

## Important Files
 - All the lambda functions are kept in the 
  ```
    .
    ├── src                                      
          ├── assets                             
                ├── allSales.js                   # All Sales Lambda
                ├── FilterByPeriodAndVertical.js  # Filter sales by Verticals and Period Lambda
                ├── getDistinctVerticals.js       # Lambda for distinct verticals
                └── Sales.json                    # sample json records from dynamodb
 ```
