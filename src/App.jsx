import React, { useState } from "react";

const Dog1 = "/src/images/dog1.gif";
const Dog2 = "/src/images/dog2.gif";
const Dog3 = "/src/images/dog3.gif";
const Dog4 = "/src/images/dog4.gif";
const Dog5 = "/src/images/dog5.gif";
const Dog6 = "/src/images/dog6.gif";

const App = () => {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [showSuccess, setShowSuccess] = useState(false);
  const [moveCount, setMoveCount] = useState(0);
  const [noClickCount, setNoClickCount] = useState(0);

  const moveButton = () => {
    const newX = (Math.random() - 0.5) * 300;
    const newY = (Math.random() - 0.5) * 300;
    const boundedX = Math.min(Math.max(newX, -150), 150);
    const boundedY = Math.min(Math.max(newY, -150), 150);
    setNoButtonPosition({ x: boundedX, y: boundedY });
  };

  const handleYesClick = () => {
    setShowSuccess(true);
  };

  const handleNoClick = () => {
    if (moveCount < 5) {
      moveButton();
      const newMoveCount = moveCount + 1;
      setMoveCount(newMoveCount);

      if (newMoveCount === 5) {
        setNoButtonPosition({ x: 0, y: 0 });
      }
    } else {
      setNoClickCount((prev) => prev + 1);
    }
  };

  const renderSadDog = () => {
    if (noClickCount === 0) return null;

    const sadDogMessages = [
      { message: "Please dont say no... 🥺", image: Dog1 },
      { message: "But I made you a Valentines card... 😪", image: Dog2 },
      { message: "Maybe we can talk about it? 😁", image: Dog3 },
      { message: "I promise Im nice! 😪", image: Dog4 },
      { message: "Last chance to say yes! 😁💕", image: Dog5 },
    ];

    return (
      <div className="mt-6 text-center">
        <div className="relative">
          <img
            src={sadDogMessages[noClickCount - 1].image}
            alt="Sad but cute cat"
            className="rounded-lg mx-auto shadow-lg object-cover w-full"
          />

          <div>
            <p className="absolute bottom-[-5] left-0 right-0 text-lg font-medium">
              {sadDogMessages[noClickCount - 1].message}
            </p>
          </div>
        </div>
      </div>
    );
  };

  if (showSuccess) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-pink-50 p-8">
        <div className="max-w-lg w-full bg-white rounded-xl shadow-lg p-8 space-y-6">
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold text-red-600">Yay! 💖</h1>
            <p className="text-xl text-gray-700">
              I knew you'd say yes! See you on the 14th! 🌷
            </p>
          </div>

          <div className="relative mt-6">
            <img
              src={Dog6}
              alt="Yayyyyy"
              className="rounded-lg mx-auto shadow-lg object-cover"
            />
            <p className="absolute left-0 right-0 text-xl font-medium text-center">
              happy tail wags and joyful barks! 🐶💕
            </p>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {"❤️💖💝".split("").map((heart, i) => (
              <span
                key={i}
                className="animate-bounce"
                style={{ animationDelay: `${i * 200}ms` }}
              >
                💙
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 p-8">
      <div className="max-w-lg w-full bg-white rounded-xl shadow-lg p-8 space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold text-red-600">
            Will you be my Valentine?
          </h1>
          <p className="text-gray-600">
            I promise to make you smile every day! 🌷
          </p>
        </div>

        <div className="flex justify-center gap-4 pt-4 relative">
          <button
            onClick={handleYesClick}
            className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 
                     transition-colors duration-200 font-semibold shadow-md hover:shadow-lg"
          >
            Yes! 💙
          </button>

          {noClickCount < 5 && (
            <button
              onClick={handleNoClick}
              style={{
                transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
                transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
              className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 
                       transition-colors duration-200 font-semibold shadow-md hover:shadow-lg"
            >
              No 💔
            </button>
          )}
        </div>

        {moveCount >= 5 && noClickCount === 0 && (
          <p className="text-center text-gray-600 mt-4 animate-bounce">
            Okay, you caught me! I'm giving you one last chance to answer? 🥺
          </p>
        )}

        {renderSadDog()}
      </div>
    </div>
  );
};

export default App;
