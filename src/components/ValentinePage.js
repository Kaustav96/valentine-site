import React, { useState } from 'react';
import Calendar from './Calendar';
import './ValentinePage.css';

function ValentinePage({ onBack }) {
  const [showCalendar, setShowCalendar] = useState(false);
  const [showFullMessage, setShowFullMessage] = useState(false);

  return (
    <div className="valentine-page">
      <div className="valentine-content">
        <div className="valentine-card">
          <div className="hearts-decoration">
            💕 💖 💗 💓 💝
          </div>

          <div className="valentine-message">
            <div className="personal-letter">
              <p className="letter-intro">
                Being with you since <strong>10th July 2025</strong>, has meant more to me than I can say out loud.
                We have been together for <strong>7 months</strong> now and each passing day makes me feel more closer to you.
                I am glad we have met. I am learning how to love with more calm trust and understanding -
                and I really want to keep getting better at it.
              </p>

              {showFullMessage && (
                <div className="letter-full">
                  <p>
                    I might be possessive or over-possessive if I have to say sometimes but yes I trust you with all my body parts ummm ahhhh :p.
                    Tum meri bubu ho. Tumhare saath rehke mujhe bahut kuch sikhne milta hai, how to handle people pressure.
                    How to be a good person. Ha mein bahut zyada time ladkiyon saath spend kiya hai to maybe thought process thoda darr ke taraf zyada hai
                    but I promise mein usko change karne ka trying.
                  </p>
                  <p>
                    Tumhare saath rehke khana banane mein bhi bahut maza aata hai bhale hi vo chai maggie hi kyu na ho.
                    Ghanto baat karna tumse video call pe baat karte hue so jana even mere kharrante and tumhare kharrente ke awaz mein so jana,
                    hum dono bahut comfortable ho gye hai.
                  </p>
                  <p>
                    Also I loved our first scooty ride bhale hi zyada dur nahi gye the (<strong>10th Jan 2026</strong>) exactly the day we completed
                    7 months. I still read the cute letter you sent me on <strong>20th August 2025</strong> with yummy in tummy chicken and paratha.
                  </p>
                  <p className="letter-closing">
                    I really wish hum log saath rhe humesha aur ye sab karte rhe, and we stay the same childish serious adults
                    as and when required based on situations. 💕
                  </p>
                </div>
              )}

              <button
                className="see-more-button"
                onClick={() => setShowFullMessage(!showFullMessage)}
              >
                {showFullMessage ? '← See Less' : 'See More →'}
              </button>
            </div>

            <p className="intro-text">
              Every moment with you feels like magic ✨<br />
              Your smile lights up my world 🌟<br />
              Your laugh is my favorite sound 🎵<br />
              And your presence makes everything better 💫
            </p>

            <p className="main-question">
              So, my beautiful one...<br />
              <strong>Will you be my Valentine? 💝🌹</strong>
            </p>

            <p className="closing">
              I promise to make every day feel special,<br />
              to cherish every moment,<br />
              and to always make you smile. 😊
            </p>
          </div>

          <div className="hearts-decoration">
            💕 💖 💗 💓 💝
          </div>
        </div>

        <button
          className="calendar-toggle-button"
          onClick={() => setShowCalendar(!showCalendar)}
        >
          {showCalendar ? '💌 Hide Our Special Dates' : '📅 View Our Special Dates'}
        </button>

        {showCalendar && <Calendar />}

        <button className="back-button" onClick={onBack}>
          ← Back
        </button>
      </div>
    </div>
  );
}

export default ValentinePage;
