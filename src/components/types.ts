import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "success" | "danger";
  disabled?: boolean;
}

export interface ProgressBar {
  value: number ;
  color: string;
}

export interface MultiProgressBarProps {
  bars: ProgressBar[];
  totalScore: number;
  obtainedScore: number;
}

export interface QuestionInterface {
  currentQuestionIndex: number;
  setCurrentQuestionIndex: (value: number) => void;
  questions: any;
  countCorrectAnswers: number;
  countAttempetedAnswers: number;
  setCountCorrectAnswers: (value: number) => void;
  setCountAttemptedAnswers: (value: number) => void;
  selectedOption: number | null;
  setSelectedOption: (value: number | null) => void;
}

export interface QuestionHeading {
  count: number;
  total: number;
  title: string;
}

export interface StarRatingProps {
  totalStars: number;
  onChange?: (rating: number) => void;
  rating: number;
}

export interface StepperProgressBarProps {
  currentQuestionIndex: number;
  totalQuestions: number;
}
