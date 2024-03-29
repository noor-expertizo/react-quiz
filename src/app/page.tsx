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
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [countCorrectAnswers, setCountCorrectAnswers] = useState<number>(0);
  const [countAttempetedAnswers, setCountAttemptedAnswers] =
    useState<number>(0);
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

  const difficultyStars: { [key: string]: number } = {
    easy: 1,
    medium: 2,
    hard: 3,
  };

  const newRating = difficultyStars[currentQuestion?.difficulty] || 0;

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setCountCorrectAnswers(0);
    setCountAttemptedAnswers(0);
  };

  const wronglyAnswered =
    ((countAttempetedAnswers - countCorrectAnswers) / questions.length) * 100;
  const maximumScore =
    100 -
    ((countAttempetedAnswers - countCorrectAnswers) / questions.length) * 100;
  const obtainedScore = (countCorrectAnswers / questions.length) * 100;
  const minimumScore =
    (countCorrectAnswers /
      questions.length /
      (countAttempetedAnswers / questions.length)) *
    100;

  console.log(
    "max",
    maximumScore,
    "mini",
    minimumScore,
    "ob",
    obtainedScore,
    "wrong",
    wronglyAnswered
  );

  return (
    <>
      <div className="max-w-2xl mx-auto mt-1 pb-6 border-2 border-gray-400 rounded shadow-lg">
        <div className="mb-4">
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
                  <div className="px-8">
                    <div className="mb-2">
                      <QuestionHeading
                        count={currentQuestionIndex + 1}
                        total={questions.length}
                        title={
                          currentQuestion?.category &&
                          (decodeURIComponentForStringOrArray(
                            currentQuestion?.category
                          ) as string)
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
                  <div className="mt-2">
                    <MultiProgressBar
                      obtainedScore={obtainedScore}
                      totalScore={maximumScore}
                      maximumScore={maximumScore}
                      minimumScore={minimumScore}
                    />
                  </div>
                </>
              ) : (
                <div className="text-center mb-2">
                  <p className="text-2xl font-medium">
                    {((countCorrectAnswers / questions.length) * 100).toFixed(
                      0
                    )}
                    %
                  </p>
                  <p className="text-4xl font-medium mb-4">
                    {countCorrectAnswers >= questions.length / 2
                      ? "Success"
                      : "Fail"}
                  </p>

                  <Button variant="success" onClick={() => restartQuiz()}>
                    Restart
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
