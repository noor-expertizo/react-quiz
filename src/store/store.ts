// import create from 'zustand';

// interface QuizState {
//   currentQuestionIndex: number;
//   userAnswers: number[];
//   rating: number;
//   setCurrentQuestionIndex: (index: number) => void;
//   setUserAnswers: (answers: number[]) => void;
//   setRating: (value: number) => void;
// }

// export const useQuizStore = create<QuizState>((set) => ({
//   currentQuestionIndex: 0,
//   userAnswers: [],
//   rating: 0,
//   setCurrentQuestionIndex: (index) => set({ currentQuestionIndex: index }),
//   setUserAnswers: (answers) => set({ userAnswers: answers }),
//   setRating: (value) => set({ rating: value }),
// }));


import create from 'zustand';

interface QuestionItem {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

interface QuizStore {
  questions: QuestionItem[];
  fetchQuestions: () => Promise<void>;
}
export const useQuizStore = create<QuizStore>((set) => ({
  questions: [],
  fetchQuestions: async () => {
    try {
      const response = await fetch('http://localhost:3004/data');
      const data = await response.json();
      set({ questions: data });
      return data; // Return the fetched data
    } catch (error) {
      console.error('Error fetching questions:', error);
      return [];
    }
  },
}));

