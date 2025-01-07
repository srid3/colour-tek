const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'colourtek07@gmail.com',
    pass: 'Q1kd6acwwH2vyKz',
  },
});

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
  }

  const { name, email, subject, message } = JSON.parse(event.body);

  const mailOptions = {
    from: email,
    to: 'sridamul@gmail.com',
    subject: `New Message from ${name}: ${subject}`,
    text: `Message: ${message}\nFrom: ${name}\nEmail: ${email}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully!' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Failed to send email', error: error.message }),
    };
  }
};
