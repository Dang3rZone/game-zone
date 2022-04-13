import create from 'zustand';

type Store = {
  user: string | null;
  score: number;
  setUser: (user: string | null) => void;
  addToScore: (amount: number) => void;
};
