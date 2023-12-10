import React, { useState } from "react";
import "./Reviews.css";

export const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    "Sarah W.: Absolutely fantastic experience with Bar Department! The Classic Elegance Package added the perfect touch to my wedding. The bartenders were professional, the drinks were exquisite, and the bar setup was stunning. Our guests couldn't stop raving about the service. Thank you for making our special day even more memorable!",

    "Alex M.: Bar Department brought the wow factor to our corporate event with the Signature Mixology Experience. The mixologists were not only skilled but also entertaining. The customized cocktails were a huge hit, and the mobile bar setup was a game-changer. The attention to detail and professionalism were top-notch. Highly recommend!",

    "Mark and Emily: Bar Department made our backyard celebration a breeze with the Casual Celebrations Package. The bartenders were friendly, the setup was perfect for our laid-back vibe, and the flexible beverage menu pleased everyone. Coordinating with the caterers was seamless, and the cleanup afterward was thorough. Will definitely hire them for future events!",

    "Isabella R.: Bar Department elevated our gala with the Luxury Libations Experience. The master mixologists created a unique and sophisticated drink menu that impressed our VIP guests. The top-shelf bar setup and luxurious decor added a touch of glamour. Outstanding service from start to finish. A class act!",

    "Ryan H.: Bar Department is our go-to for our weekly Thirsty Thursdays events. The social bartenders are not only skilled but also create a lively atmosphere. The rotating beverage menus keep things exciting, and the themed bar nights have become a crowd favorite. Their social media engagement adds an extra layer of fun. Highly recommended for regular social gatherings!",

    "Jessica P.: Bar Department made our family celebration unforgettable with the Family-Friendly Fiesta Package. The bartenders were not only professional but also great with the kids. The kid-friendly drink options were a hit, and the all-ages activities kept everyone entertained. The themed decor tied everything together perfectly. Can't thank them enough for making our event a success!",
  ];

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
    );
  };
  return (
    <section className='reviews-container' id='reviews'>
      <div className='reviews-container'>
        <div className='reviews-title'>WHAT OUR CLIENTS SAY ABOUT US</div>
        <div className='review-item'>
          <p>{reviews[currentIndex]}</p>
        </div>
        <div className='navigation-buttons'>
          <button onClick={prevReview}>Previous</button>
          <button onClick={nextReview}>Next</button>
        </div>
      </div>
    </section>
  );
};
