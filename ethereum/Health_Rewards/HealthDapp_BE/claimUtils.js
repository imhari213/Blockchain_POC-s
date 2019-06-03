

var request = require('request');
 function formatDate(d) {
    var month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [month, day, year].join('-');
}
module.exports = {
    
    getStepsFromGoogleFit: function (accessToken) {
        return new Promise(resolve => {
            var headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken
            }
            var dateObj = new Date(); // Today!
            dateObj.setDate(dateObj.getDate() - 1); // Yesterday!
            var yesterdayDate = formatDate(dateObj);
            var startDate = new Date(yesterdayDate + " 00:00:00"); // some mock date
            var endDate = new Date(yesterdayDate + " 23:59:59");
            var startTimeMillis = startDate.getTime();
            var endTimeMillis = endDate.getTime();
            console.log(accessToken,'printing acceess token')
            var body = {
                "aggregateBy": [{
                    "dataTypeName": "com.google.step_count.delta",
                    "dataSourceId": "derived:com.google.step_count.delta:com.google.android.gms:estimated_steps"
                }],
                "bucketByTime": { "durationMillis": 86400000 },
                "startTimeMillis": startTimeMillis,
                "endTimeMillis": endTimeMillis
            };
            var steps = 0;
            request({
                url: 'https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate',
                headers: headers,
                method: 'POST',
                body: body,
                json: true
            },
                function (error, response, body) {
                    console.log('error:', error); // Print the error if one occurred
                    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
                    console.log('response', body);
                    console.log('body:', body.bucket[0].dataset[0].point[0].value[0].intVal); // Print the HTML for the Google homepage.
                    console.log('checing')
                    steps = body.bucket[0].dataset[0].point[0].value[0].intVal;
                    if (error) {
                        resolve(error)
                    }
                    resolve(steps);
                    console.log(steps, 'inside req')

                });
        });
    }
}