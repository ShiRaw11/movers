
// Set your app credentials
const credentials = {
    apiKey: 'MyAppAPIkey',
    username: 'MyAppUsername',
}

// Initialize the SDK
const AfricasTalking = require('africastalking')(credentials);

// Get the SMS service
const sms = AfricasTalking.SMS;

function sendMessage() {
    const options = {
        // Set the numbers you want to send to in international format
        to: ['+254711XXXYYY', '+254733YYYZZZ'],
        // Set your message
        message: "I'm a lumberjack and its ok, I sleep all night and I work all day",
        // Set your shortCode or senderId
        from: 'XXYYZZ'
    }

    // That’s it, hit send and we’ll take care of the rest
    sms.send(options)
        .then(console.log)
        .catch(console.log);
}

sendMessage();



