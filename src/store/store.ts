import { create } from "zustand";

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
      // const response = await fetch("http://localhost:3004/data");
      const response = await fetch("/.netlify/functions/questions");
      const data = await response.json();
      set({ questions: data.data });
      // set({ questions: data });
      return data;
    } catch (error) {
      console.error("Error fetching questions:", error);
      return [];
    }
  },
}));

interface User {
  username: string;
  password: string;
}

interface AuthStore {
  user: User | null;
  loginUser: (username: string, password: string) => void;
  signupUser: (username: string, password: string) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  loginUser: (username, password) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(
      (u: User) => u.username === username && u.password === password
    );

    if (user) {
      set({ user });
      alert("Login successful");
    } else {
      alert("Invalid username or password");
    }
  },
  signupUser: (username, password) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Signup successful");
  },
}));
