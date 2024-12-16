import React, { useEffect, useState } from 'react';

function Testimonials() {
  const [profiles, setProfiles] = useState([]);

  // משיכת תמונות מתיקיית /assets/profiles/
  useEffect(() => {
    const importAll = (requireContext) => 
      requireContext.keys().map(requireContext);

    const images = importAll(require.context('../assets/profiles', false, /\.(png|jpe?g|svg)$/));
    setProfiles(images);
  }, []);

  // דוגמה להמלצות טקסט
  const testimonials = [
    { name: 'יעל מ.', feedback: 'חוויה מדהימה! הילדים לא מפסיקים לדבר על זה.' },
    { name: 'דני ל.', feedback: 'פיתות על הסאג\' זה היה פשוט להיט!' },
    { name: 'נועה ש.', feedback: 'כיף בלתי נשכח בטבע! הילדים יצאו מאושרים.' },
    { name: 'יונתן ק.', feedback: 'החוויה הכי טובה שחוויתי עם המשפחה בחוץ!' },
    { name: 'אורנה ב.', feedback: 'הילדים חזרו מאושרים עם חוויות שלא מפסיקים לדבר עליהן.' },
    { name: 'שי ג.', feedback: 'כל כך כיף בטבע, הילדים לא רצו ללכת הביתה!' },
  ];

  return (
    <section id="testimonials" className="testimonials">
      <h2>לקוחות מספרים</h2>
      {testimonials.map((testimonial, index) => (
        <div key={index} className="testimonial">
          <img 
            src={profiles[index % profiles.length]} 
            alt="פרופיל" 
            className="profile-pic" 
          />
          <div>
            <strong>{testimonial.name}</strong>
            <p>{testimonial.feedback}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Testimonials;
