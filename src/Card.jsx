import { useState } from "react";

export default () => {
  const [showMessage, setShowMessage] = useState(false);

  const handleGiftClick = () => {
    setShowMessage(!showMessage);
  };

  return (
    <div className="birthdayCardContainer">
      <div className="birthdayCard">
        <div className="cardFront">
          <h3 className="happy">HAPPY BIRTHDAY</h3>
          <div className="balloons">
            <div className="balloonOne" />
            <div className="balloonTwo" />
            <div className="balloonThree" />
            <div className="balloonFour" />
          </div>
        </div>
        <div className="cardInside">
          <h3 className="back">HAPPY BIRTHDAY Birigu</h3>
          <p>Dear Friend, Biligjargal</p>
          <p>Төрсөн өдрийн мэнд хүргэе!! хурдан ирж ах нартаа үнсүүл!!!!!!!</p>
          <p>Тоорт, Пирошкинд даагаарай</p>
          <p className="name"></p>
          <div className="emojiDecorations">
            <span className="emoji emojiTopLeft">🎉</span>
            <span className="emoji emojiTopRight">🎂</span>
            <span className="emoji emojiBottomLeft">🎈</span>
            <span className="emoji emojiBottomRight">✨</span>
          </div>
        </div>
      </div>

      <button className="giftButton" onClick={handleGiftClick}>
        🎁
      </button>

      {showMessage && (
        <div className="messagePopup">
          <p>
            Энэхүү өдрийг тохиолдуулан Монгол руу ирэх эрхийг Бархас бид 2-ийн
            зүгээс бэлэглэж байна. 🎁 Have a fantastic day!
          </p>
        </div>
      )}
    </div>
  );
};
