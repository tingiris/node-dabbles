var aws = require('aws-sdk');
var ses = new aws.SES({
   region: 'us-east-1'
});

function close(sessionAttributes, fulfillmentState, message) {
    return {
        sessionAttributes,
        dialogAction: {
            type: 'Close',
            fulfillmentState,
            message,
        },
    };
}

exports.handler = function(event, context) {
    console.log("Incoming: ", event);
   // var output = querystring.parse(event);
    const slots = event.currentIntent.slots;

    var inputs = {
        FirstName : slots.FirstName,
        CompanyName : slots.CompanyName,
        AverageCustomerValue : slots.AverageCustomerValue,

    }

    var eParams = {
        Destination: {
            ToAddresses: ["steve@dabblelab.com"]
        },
        Message: {
            Body: {
                Text: {
                    Data: "First Name: " + slots.FirstName + "\nCompany: " + slots.CompanyName + "\nAverageCustomerValue: " + slots.AverageCustomerValue
                }
            },
            Subject: {
                Data: "Startup Modeler Lex Results"
            }
        },
        Source: "info@dabblelab.com"
    };

    console.log('===SENDING EMAIL===');
    var email = ses.sendEmail(eParams, function(err, data){
        if(err) console.log(err);
        else {
            console.log("===EMAIL SENT===");
            console.log(data);


            console.log("EMAIL CODE END");
            console.log('EMAIL: ', email);
            context.succeed(close(event.sessionAttributes, 'Fulfilled',
            { contentType: 'PlainText', content: 'Thanks! That is all the questions for now.' }));
            //callback();


        }
    });

};
