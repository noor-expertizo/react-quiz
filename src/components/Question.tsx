import React, { useMemo, useState } from "react";
import Button from "./Button";
import {
  decodeURIComponentForStringOrArray,
  shuffleArray,
} from "@/helpers/helpers";
import { QuestionInterface } from "./types";



const Question: React.FC<QuestionInterface> = ({
  currentQuestionIndex,
  setCurrentQuestionIndex,
  questions,
  countAttempetedAnswers,
  countCorrectAnswers,
  setCountAttemptedAnswers,
  setCountCorrectAnswers,
  selectedOption,
  setSelectedOption,
}: QuestionInterface) => {
  const [isSelected, setIsSelected] = useState<number>(0);

  const currentQuestion = questions[currentQuestionIndex];
  let updatedArr: any = [];

  updatedArr = [
    currentQuestion?.correct_answer,
    ...currentQuestion?.incorrect_answers,
  ];

  updatedArr =
    updatedArr &&
    updatedArr.length > 0 &&
    decodeURIComponentForStringOrArray(updatedArr);

  const shuffledArray = useMemo(
    () => shuffleArray([...updatedArr]),
    [currentQuestionIndex]
  );
  console.log(shuffledArray, "suffle");

  const handleAnswer = (selectedOptionIndex: number) => {
    setSelectedOption(selectedOptionIndex);
    const options = shuffledArray;
    const selectedOption = options[selectedOptionIndex];
    const decodedStr = decodeURIComponentForStringOrArray(
      currentQuestion?.correct_answer
    );
    const isCorrect = selectedOption === decodedStr;
    if (isCorrect) {
      setCountCorrectAnswers(countCorrectAnswers + 1);
    }
    setCountAttemptedAnswers(countAttempetedAnswers + 1);
    setIsSelected(isCorrect ? 1 : 0);
  };

  const handleNext = () => {
    setSelectedOption(null);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <div>
          <div>
            <p className="text-black font-medium text-lg leading-5 max-w-lg mb-10">
              {currentQuestion?.question &&
                decodeURIComponentForStringOrArray(currentQuestion?.question)}
            </p>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
              {shuffledArray &&
                shuffledArray.length > 0 &&
                shuffledArray?.map((option: string, index: number) => (
                  <div
                    key={index}
                    className={
                      index === 0 || index === 2 ? "col-span-1" : "col-span-1"
                    }
                  >
                    <Button
                      variant={
                        selectedOption !== null
                          ? index === currentQuestion.correct_answer
                            ? "secondary"
                            : index === selectedOption
                            ? "secondary"
                            : "primary"
                          : "primary"
                      }
                      disabled={selectedOption !== null}
                      onClick={() => {
                        handleAnswer(index);
                      }}
                    >
                      {option}
                    </Button>
                  </div>
                ))}
            </div>

            <div className="flex flex-col justify-center items-center">
              <p className="text-black font-medium text-2xl leading-5 max-w-lg my-12">
                {selectedOption !== null
                  ? isSelected === 1
                    ? "Correct"
                    : "Sorry!"
                  : null}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            {selectedOption !== null && (
              <Button variant="success" onClick={() => handleNext()}>
                Next Question
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Question;
