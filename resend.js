// ````````````````` Resend OTP ````````````````` 
var axios = require('axios');
var data = JSON.stringify({
    "otp_id": "8d963dbf-d655-4fe6-9157-48885a036050"
});

var config = {
    method: 'post',
    url: 'https://api.d7networks.com/verify/v1/otp/resend-otp',
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

