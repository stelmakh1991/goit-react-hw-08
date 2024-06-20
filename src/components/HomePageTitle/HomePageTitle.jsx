import { useEffect, useState } from "react";
import * as S from "./HomePageTitle.styled";

const HomePageTitle = () => {
  const text = "   A personal contact book is always at hand";
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (textIndex < text.length) {
        setDisplayText((prevText) => `${prevText}${text[textIndex]}`);
        setTextIndex((prevIndex) => prevIndex + 1);
      }
    }, 100);
  }, [text, displayText]);

  return <S.TypingText>{displayText}</S.TypingText>;
};

export default HomePageTitle;