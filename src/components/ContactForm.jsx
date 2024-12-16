import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICEID, // ה-service_id מתוך .env
      process.env.REACT_APP_EMAILJS_TEMPLATEID, // ה-template_id מתוך .env
      formData,
      process.env.REACT_APP_EMAILJS_USERID // ה-user_id מתוך .env
    ).then((response) => {
      console.log('Email sent successfully!', response.status, response.text);
      alert('הטופס נשלח בהצלחה!');
      setFormData({ name: '', email: '', phone: '', message: '' });
    }).catch((error) => {
      console.error('Failed to send email:', error);
      alert('אירעה שגיאה בשליחת הטופס, נסה שוב מאוחר יותר.');
    });
  };

  return (
    <section id="contact" className="contact-form">
      <h2>צור קשר</h2>
      <form onSubmit={handleSubmit}>
        <label>שם מלא</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="הכנס את שמך המלא"
          required
        />

        <label>אימייל</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="הכנס את כתובת האימייל שלך"
          required
        />

        <label>טלפון</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="הכנס את מספר הטלפון שלך"
          pattern="^[0-9]{10}$" 
          title="אנא הכנס מספר טלפון תקין (10 ספרות)"
          required
        />

        <label>הודעה</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="כתוב כאן את הודעתך"
          required
        />

        <button type="submit">שלח</button>
      </form>
    </section>
  );
}

export default ContactForm;
