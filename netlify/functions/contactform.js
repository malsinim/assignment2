const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method not allowed' }),
    };
  }

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
      to: 'mohammed.h.p.2003@gmail.com',
      from: 'malsinimasachchige@gmail.com',
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
    console.error('Email sending error:', err.message);

    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Server error', error: err.message }),
    };
  }
};
