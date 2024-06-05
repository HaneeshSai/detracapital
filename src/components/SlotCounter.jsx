import React, { useState, useEffect, useRef } from "react";

const SlotCounter = ({
  startValue,
  value,
  animateUnchanged = false,
  direction = "bottom-up",
  autoAnimationStart = true,
  animationDuration = 1.5, // Adjust duration (seconds)
  delay = 0.5, // Adjust delay before next animation (seconds)
}) => {
  const [currentDigit, setCurrentDigit] = useState(startValue.split(""));
  const animationRef = useRef(null);

  const animateDigits = () => {
    const animationSteps = currentDigit.length;
    const directionFactor = direction === "bottom-up" ? 1 : -1;

    let animationIndex = 0;
    let intervalId;

    const animateStep = () => {
      if (animationIndex === animationSteps) {
        clearInterval(intervalId);
        if (animateUnchanged) {
          setCurrentDigit(startValue.split(""));
        } else {
          setCurrentDigit(value.split(""));
        }
        animationIndex = 0; // Reset counters for next loop
        setTimeout(() => {
          animateStep(); // Start animation again after delay
        }, delay * 1000);
        return;
      }

      const updatedDigit = currentDigit.slice();
      updatedDigit[animationIndex] = String.fromCharCode(
        currentDigit[animationIndex].charCodeAt(0) + directionFactor * 1
      );
      setCurrentDigit(updatedDigit);
      animationIndex++;
    };

    intervalId = setInterval(
      animateStep,
      (animationDuration * 1000) / animationSteps
    );
    animationRef.current = intervalId; // Store for potential cleanup
  };

  useEffect(() => {
    if (autoAnimationStart) {
      animateDigits();
    }

    return () => clearInterval(animationRef.current); // Cleanup animation on unmount
  }, []);

  return (
    <div className="slot-counter">
      {currentDigit.map((digit, index) => (
        <span key={index} className={`digit digit-${index}`}>
          {digit}
        </span>
      ))}
    </div>
  );
};

export default SlotCounter;
