// .netlify/functions/contactform.js

const sgMail = require('@sendgrid/mail');

// Set your SendGrid API Key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async (event, context) => {
  try {
    const data = JSON.parse(event.body);

    const { name, phone, email, subject, message } = data;

    const emailContent = `
      New message from ${name}
      Phone: ${phone}
      Email: ${email}

      Subject: ${subject}
      Message:
      ${message}
    `;

    const msg = {
      to: ['malsini.masachchige@dcmail.ca'], //, 'adam.kunz+somealias@dc-uoit.ca'
      from: 'malsini.masachchige@dcmail.ca',
      subject: `[Auto Message] ${subject}`,
      text: emailContent,
    };

    // Send the email
    await sgMail.send(msg);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully!' }),
    };
  } catch (err) {
    console.error('Email sending error:', err);

    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Server error while sending the email.' }),
    };
  }
};
