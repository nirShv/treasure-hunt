import React from 'react';

function HeroSection() {
  const whatsappLink =
    "https://api.whatsapp.com/send?phone=972556895816&text=%D7%A9%D7%9C%D7%95%D7%9D%2C%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%91%D7%A8%D7%A8%20%D7%9C%D7%92%D7%91%D7%99%20%D7%AA%D7%90%D7%A8%D7%99%D7%9B%D7%99%D7%9D%20%D7%90%D7%A4%D7%A9%D7%A8%D7%99%D7%99%D7%9D%20%D7%9C%D7%A4%D7%A2%D7%99%D7%9C%D7%95%D7%AA";

  return (
    <section className="hero-section">
      <h1>יום הולדת בלתי נשכח בטבע</h1>
      <p>חפש את המטמון, פיתות על הסאג', ואתגרי נינג'ה</p>
      
      <div className="cta-buttons">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button whatsapp-button"
        >
          בדקו זמינות לתאריך שלכם!
        </a>
        
        <a
          href="#contact"
          className="cta-button contact-button"
        >
          השאירו פרטים ונחזור אליכם
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
