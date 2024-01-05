"use client";

import Loader from "@/components/Loader";
import MultiProgressBar from "@/components/ProgressBar";
import Question from "@/components/Question";
import QuestionHeading from "@/components/QuestionHeading";
import StarRating from "@/components/StarRating";
import StepperProgressBar from "@/components/StepperProgressBar";
import { decodeURIComponentForStringOrArray } from "@/helpers/helpers";
import { useQuizStore } from "@/store/store";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "@/components/Button";

const Home = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [countCorrectAnswers, setCountCorrectAnswers] = useState(0);
  const [countAttempetedAnswers, setCountAttemptedAnswers] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const { questions, fetchQuestions } = useQuizStore();

  useEffect(() => {
    const fetchData = async () => {
      const fetchedQuestions = await fetchQuestions();
      console.log("quest", fetchedQuestions);
    };

    fetchData();
  }, [fetchQuestions]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  const currentQuestion = questions[currentQuestionIndex];

  const difficultyStars: any = {
    easy: 1,
    medium: 2,
    hard: 3,
  };

  const newRating = difficultyStars[currentQuestion?.difficulty] || 0;

  let progressBars = [
    { value: countCorrectAnswers, color: "black" },
    { value: countAttempetedAnswers, color: "gray" },
    { value: questions.length, color: "lightgray" },
  ];

  const restartQuiz = () => {
    progressBars = [
      { value: 0, color: "black" },
      { value: 0, color: "gray" },
      { value: questions.length, color: "lightgray" },
    ];
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setCountCorrectAnswers(0);
    setCountAttemptedAnswers(0);
  };

  return (
    <>
      <div className="max-w-3xl mx-auto mt-4 pb-6 border-2 border-gray-400 rounded shadow-lg">
        <div className="mb-8">
          <StepperProgressBar
            currentQuestionIndex={currentQuestionIndex}
            totalQuestions={questions.length}
          />
        </div>
        <div className="flex flex-col justify-center items-center px-4 sm:px-0">
          {loading ? (
            <Loader />
          ) : (
            <div>
              {currentQuestionIndex !== questions.length - 1 ? (
                <>
                  <div>
                    <div className="mb-8">
                      <QuestionHeading
                        count={currentQuestionIndex + 1}
                        total={questions.length}
                        title={
                          currentQuestion?.category &&
                          decodeURIComponentForStringOrArray(
                            currentQuestion?.category
                          )
                        }
                      />
                      <StarRating totalStars={3} rating={newRating} />
                    </div>
                    <div>
                      <Question
                        currentQuestionIndex={currentQuestionIndex}
                        setCurrentQuestionIndex={setCurrentQuestionIndex}
                        questions={questions}
                        countAttempetedAnswers={countAttempetedAnswers}
                        countCorrectAnswers={countCorrectAnswers}
                        setCountAttemptedAnswers={setCountAttemptedAnswers}
                        setCountCorrectAnswers={setCountCorrectAnswers}
                        selectedOption={selectedOption}
                        setSelectedOption={setSelectedOption}
                      />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="text-center mb-10">
                    <p className="text-2xl font-medium">
                      {countCorrectAnswers} %
                    </p>
                    <p className="text-4xl font-medium mb-12">
                      {countCorrectAnswers >= questions.length / 2
                        ? "Success"
                        : "Fail"}
                    </p>

                    <>
                      <Button variant="success" onClick={() => restartQuiz()}>
                        Restart
                      </Button>
                    </>
                  </div>
                </>
              )}
              <div className="mt-4">
                <MultiProgressBar
                  bars={progressBars}
                  obtainedScore={countCorrectAnswers}
                  totalScore={questions.length}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;



// const encodedCategoryString = currentQuestion?.category;

// let decodedCategoryString;
// if (encodedCategoryString) {
//   decodedCategoryString = decodeURIComponent(
//     encodedCategoryString?.replace(/%\d+/g, " ")
//   );
// } else {
//   decodedCategoryString = "";
// }
