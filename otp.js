// ````````````````` Generate OTP ````````````````` 
var axios = require('axios');
var data = JSON.stringify({
    "originator": "SignOTP",
    "recipient": "+917058072782",
    "content": "Greetings from D7 API, your mobile verification code is: {}",
    "expiry": "600",
    "data_coding": "text"
});

var config = {
    method: 'post',
    url: 'https://api.d7networks.com/verify/v1/otp/send-otp',
    headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhdXRoLWJhY2tlbmQ6YXBwIiwic3ViIjoiODM3ZjU2YTgtNzMzNS00NTcxLWFmMTktYTMzZGM0NWUyYWExIn0.GoALYkSIW49RuZh_IX2fyzW4YUL1FCqQuTJBmdsjj7M',
        'Content-Type': 'application/json'
    },
    data: data
};


axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });



