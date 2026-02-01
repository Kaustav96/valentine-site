import React, { useState } from 'react';
import Modal from './Modal';
import './Calendar.css';

function Calendar() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(0); // 0: July 2025, 1: Aug 2025, 2: Jan 2026

  // Define your special dates here
  const specialDates = {
    'July-2025': {
      '10': {
        title: "Our Beginning 💕",
        message: "10th July 2025 - The day our story began! The universe brought us together and everything changed. This is where it all started, and I'm so grateful for every moment since then.",
        images: [`${process.env.PUBLIC_URL}/images/july10-1.jpg`,`${process.env.PUBLIC_URL}/images/july10-2.jpg`],
        hasMedia: true
      },
      '12': {
        title: "Our First Movie 🎬",
        message: "12th July 2025 - Our first movie date! Just two days after we met, and I already knew I wanted to spend more time with you. The movie was great, but honestly, I was just happy to be sitting next to you.",
        images: [`${process.env.PUBLIC_URL}/images/july12-1.jpg`],
        hasMedia: true
      },
      '19': {
        title: "Our First Photos Together 📸💕",
        message: "19th July 2025 - The day before you left. We knew we had to meet even though you needed to pack and prepare. We took our first photos together that day - memories I'll treasure forever. That's when I knew distance wouldn't matter.",
        images: [`${process.env.PUBLIC_URL}/images/july19-1.jpg`],
        hasMedia: true
      }
    },
    'August-2025': {
      '10': {
        title: "One Month Together 🎉",
        message: "Celebrating our first month! Every day with you has been an adventure. Can't believe how quickly time flies when I'm with you!",
        images: [],
        hasMedia: false
      },
      '20': {
        title: "Letter & Yummy Food 💌🍗",
        message: "20th August 2025 - You surprised me with the sweetest letter and delicious chicken with paratha! I still read that letter when I miss you. That day showed me how thoughtful and caring you are.",
        images: [`${process.env.PUBLIC_URL}/images/aug20-1.jpg`,`${process.env.PUBLIC_URL}/images/aug20-3.jpg`,`${process.env.PUBLIC_URL}/images/aug20-4.jpg`],
        hasMedia: true
      },
      '24': {
        title: "First Pub Outing 🍻",
        message: "24th August 2025 - Our first pub outing at Reservoir! We had so much fun together, and even the little moments of you being late and us being silly made it special. Those playful moments just show how comfortable we are with each other!",
        images: [`${process.env.PUBLIC_URL}/images/aug24-1.jpg`,`${process.env.PUBLIC_URL}/images/aug24-2.jpg`],
        hasMedia: true
      }
    },
    'November-2025': {
      '20': {
        title: "Your Birthday at Isha 🎂🕉️",
        message: "20th November 2025 - Your special day! Even though you were away at Isha Foundation, you thought of me and brought back a beautiful Shiv ji murti. You made me promise that once I get a job, we'll go there together. Mannat pura karna zaruri hai, and I promise we'll do it this year for sure! 🙏",
        images: [`${process.env.PUBLIC_URL}/images/nov20-1.jpg`,`${process.env.PUBLIC_URL}/images/nov20-2.jpg`,`${process.env.PUBLIC_URL}/images/nov20-3.jpg`],
        hasMedia: true
      }
    },
    'December-2025': {
      '25': {
        title: "First Christmas Together 🎄",
        message: "25th December 2025 - Our first Christmas together! We went to Jollygunj and had drinks together for the first time. It felt so special celebrating this day with you. Here's to many more holidays together!",
        images: [`${process.env.PUBLIC_URL}/images/dec25-1.jpg`, `${process.env.PUBLIC_URL}/images/dec25-2.jpg`],
        hasMedia: true
      }
    },
    'January-2026': {
      '1': {
        title: "New Year, Same Love 🎊",
        message: "Starting 2026 together! Here's to more memories, more laughs, and more love. You're my forever person.",
        images: [],
        hasMedia: false
      },
      '10': {
        title: "7 Months & Scooty Ride & Skincare 🛵💕✨",
        message: "10th January 2026 - Seven beautiful months together! Our first scooty ride - even though we didn't go far, being with you made it perfect. And our first skincare session together! From adventures to self-care, every moment with you is special.",
        images: [`${process.env.PUBLIC_URL}/images/jan10-1.jpg`, `${process.env.PUBLIC_URL}/images/jan10-2.jpg`],
        hasMedia: true
      },
      '16': {
        title: "You getting your desired role in IBM! 🎉💼",
        message: "Finally after 3 days of tension and month long interview process, you got your desired role in IBM. I'm so proud of you and all your hard work. This is just the beginning of many more achievements to come. Let's celebrate this milestone together!",
        images: [],
        hasMedia: true
      },
      '18': {
        title: "Our first stand-up comedy show together 😂🎤",
        message: "18th January 2026 - Our first stand-up comedy show together! We laughed so hard that our cheeks hurt. Sharing those joyful moments with you makes everything better. Can't wait for more fun evenings/nights like this!",
        images: [`${process.env.PUBLIC_URL}/images/jan18-2.jpg`, `${process.env.PUBLIC_URL}/images/jan18-3.jpg`,`${process.env.PUBLIC_URL}/images/jan18-1.jpg`],
        hasMedia: true
      },
      '23': {
        title: "Our first flight together ✈️💕",
        message: "23rd January 2026 - Our first flight together, where we go and see each others parents for first time and hoping everything goes well. I'm so proud of us for taking this step together. Here's to many more journeys and adventures with you by my side.",
        images: [],
        hasMedia: true
      },
      '24': {
        title: "Full Family trip in Siliguri! 👨‍👩‍👧‍👦🌄",
        message: "24th January 2026 - Our first full family trip to Siliguri! It was so special to see you bond with my family and create memories together. " +
            "From exploring new places to sharing laughs, this trip was unforgettable because of you." +
            "Also getting the nod from both our families for marriage is a huge milestone for us.",
        images: [],
        hasMedia: true
      },
      '31':{
        title: "Hospital visit for general checkup",
        message: "Our first hospital visit for my general checkup and getting Vitamin tablets",
        images: [],
        hasMedia: true
      }
    }
  };

  const months = [
    { name: 'July 2025', key: 'July-2025', daysInMonth: 31, startDay: 2 }, // July 2025 starts on Tuesday
    { name: 'August 2025', key: 'August-2025', daysInMonth: 31, startDay: 5 }, // August 2025 starts on Friday
    { name: 'November 2025', key: 'November-2025', daysInMonth: 30, startDay: 6 }, // November 2025 starts on Saturday
    { name: 'December 2025', key: 'December-2025', daysInMonth: 31, startDay: 1 }, // December 2025 starts on Monday
    { name: 'January 2026', key: 'January-2026', daysInMonth: 31, startDay: 4 } // January 2026 starts on Thursday
  ];

  const currentMonthData = months[currentMonth];
  const monthDates = specialDates[currentMonthData.key] || {};

  const handleDateClick = (day) => {
    if (monthDates[day]) {
      setSelectedDate({ day, ...monthDates[day] });
    }
  };

  const handleCloseModal = () => {
    setSelectedDate(null);
  };

  const renderCalendar = () => {
    const days = [];

    // Add empty cells for days before the month starts
    for (let i = 0; i < currentMonthData.startDay; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }

    // Add actual days
    for (let day = 1; day <= currentMonthData.daysInMonth; day++) {
      const isSpecial = monthDates[day.toString()];
      days.push(
        <div
          key={day}
          className={`calendar-day ${isSpecial ? 'special-day' : ''}`}
          onClick={() => handleDateClick(day.toString())}
        >
          <span className="day-number">{day}</span>
          {isSpecial && <span className="heart-indicator">❤️</span>}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="calendar-container">
      <h2 className="calendar-title">💕 Our Special Moments Together 💕</h2>
      <p className="calendar-subtitle">Click on the hearts to relive our memories! 💌</p>

      <div className="month-selector">
        <button
          onClick={() => setCurrentMonth((currentMonth - 1 + months.length) % months.length)}
          className="month-nav-button"
        >
          ← Previous
        </button>
        <h3 className="current-month">{currentMonthData.name}</h3>
        <button
          onClick={() => setCurrentMonth((currentMonth + 1) % months.length)}
          className="month-nav-button"
        >
          Next →
        </button>
      </div>

      <div className="calendar-grid">
        <div className="calendar-header">Sun</div>
        <div className="calendar-header">Mon</div>
        <div className="calendar-header">Tue</div>
        <div className="calendar-header">Wed</div>
        <div className="calendar-header">Thu</div>
        <div className="calendar-header">Fri</div>
        <div className="calendar-header">Sat</div>

        {renderCalendar()}
      </div>

      {selectedDate && (
        <Modal
          title={selectedDate.title}
          message={selectedDate.message}
          images={selectedDate.images}
          video={selectedDate.video}
          hasMedia={selectedDate.hasMedia}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

export default Calendar;
