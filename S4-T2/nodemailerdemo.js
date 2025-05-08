const nm = require('nodemailer');

var transport = nm.createTransport({
    service : 'gmail',
    // host : 'smtp.gmail.com',
    // part : '465',
    // secure : true
    auth : {
        user : 'rdonga800@gmail.com',
        pass : 'gajj ahiv qqim ffsc'
    }
});

var mo = {to:'sphostel0@gmail.com',
          from:'rdonga800@gmail.com',
          subject:'test email',
          text:'some message', 
}

transport.sendMail(mo, (error, info)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log("Email Sent: "+info.response);
    }
});