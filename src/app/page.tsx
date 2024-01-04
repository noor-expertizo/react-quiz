"use client"; // This is a client component

import Loader from "@/components/Loader";
import ProgressBar from "@/components/ProgressBar";
import Question from "@/components/Question";
import QuestionHeading from "@/components/QuestionHeading";
import StarRating from "@/components/StarRating";
import StepperProgressBar from "@/components/StepperProgressBar";
import { decodeURIComponentForStringOrArray } from "@/helpers/helpers";
import { useQuizStore } from "@/store/store";
import { useEffect, useState } from "react";

const Home = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

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

  const correctAnswers =
    userAnswers &&
    userAnswers.length > 0 &&
    userAnswers.reduce((acc, next) => acc + next);

  const maxScorePercent = 75;
  const correctPercent = Math.min(
    parseFloat(((correctAnswers / questions.length) * 100).toFixed(2)),
    maxScorePercent
  );
  const currentQuestion = questions[currentQuestionIndex];

  let newRating = 0;

  if (currentQuestion?.difficulty === "easy") {
    newRating = 1;
  } else if (currentQuestion?.difficulty === "medium") {
    newRating = 2;
  } else if (currentQuestion?.difficulty === "hard") {
    newRating = 3;
  } else {
    newRating = 5;
  }

  const encodedCategoryString = currentQuestion?.category;

  let decodedCategoryString;
  if (encodedCategoryString) {
    decodedCategoryString = decodeURIComponent(
      encodedCategoryString?.replace(/%\d+/g, " ")
    );
  } else {
    decodedCategoryString = "";
  }

  return (
    <>
      <div className="max-w-3xl mx-auto mt-4 pb-6 border-2 border-gray-400 rounded shadow-lg">
        <div className="mb-8">
          {/* <StepperProgressBar percent={currentQuestionIndex} /> */}
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
                <StarRating totalStars={5} rating={newRating} />
              </div>
              <div>
                <Question
                  currentQuestionIndex={currentQuestionIndex}
                  setCurrentQuestionIndex={setCurrentQuestionIndex}
                  setUserAnswers={setUserAnswers}
                  userAnswers={userAnswers}
                  questions={questions}
                />
              </div>
              <div className="mt-4">
                {/* <ProgressBar percent={correctPercent} maxPercent={75} /> */}
                <ProgressBar
                  totalScore={100}
                  obtainedScore={correctPercent}
                  minimumScore={10}
                />
                {/* <ProgressBar
                  totalQuestions={100}
                  currentQuestions={65}
                  correctAnswers={correctPercent}
                /> */}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
