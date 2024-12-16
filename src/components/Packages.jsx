import React from 'react';

function Packages() {
  const packages = [
    { name: 'חבילת בסיס', price: '2700 ש"ח', details: 'חפש את המטמון בטבע, עם הפעלות הקשורות לטבע שסביבנו ולילד/ת היומולדת' },
    { name: 'חבילה מלאה', price: '3500 ש"ח', details: ' חפש את המטמון + פיתות על הסאג\' + מתקן נינג\'ה' },
    { name: 'חבילה מורחבת', price: '4500 ש"ח', details: 'כל הפעילויות כולל עמדת יצירה בטבע' }
  ];

  return (
    <section id="packages" className="packages">
      {packages.map((pkg, index) => (
        <div key={index} className={`package ${index === 1 ? 'featured' : ''}`}>
          <h3>{pkg.name}</h3>
          <p>{pkg.details}</p>
          <p>{pkg.price}</p>
          <a href={`https://api.whatsapp.com/send?phone=972556895816&text=שלום, ראיתי באתר את החבילות ואני מעוניין ב${pkg.name}`} className="cta-button">בחר חבילה</a>
        </div>
      ))}
    </section>
  );
}

export default Packages;
