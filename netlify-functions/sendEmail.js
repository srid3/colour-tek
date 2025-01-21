import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
  }

  try {
    const { name, email, phone, subject, message } = JSON.parse(event.body);

    if (!name || !email || !phone || !subject || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'All fields are required' }),
      };
    }

    const mailOptions = {
      to: 'sridamul@gmail.com',
      from: 'colourtek07@gmail.com',
      subject: `New Message from ${name}: ${subject}`,
      text: `
      Name: ${name}  
      -------------------------  
  
      Message:  
      =========  
      ${message}  
      =========  
  
      Contact Information:  
      Phone: ${phone || 'N/A'}  
      Email: ${email}  
    `,
    };

    await sgMail.send(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully!' }),
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Failed to send email', error: error.message }),
    };
  }
};
