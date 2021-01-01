const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: "dwij.mehta@gmail.com",
        subject: "thanks for joining",
        text: "Welcome to this app " + name + ".",
    });
};

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: "dwij.mehta@gmail.com",
        subject: "Sorry to see you go",
        text: "Why did you go? " + name,
    });
};

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail,
};
