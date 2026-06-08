import { create } from 'zustand';
import { Routine, Session, Goal } from '@/types';

interface FitTrackStore {
  routines: Routine[];
  sessions: Session[];
  goals: Goal[];
  isLoading: boolean;
  error: string | null;

  // Setters globales (para cuando conectemos la API)
  setRoutines: (routines: Routine[]) => void;
  setSessions: (sessions: Session[]) => void;
  setGoals: (goals: Goal[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;

  // Rutinas
  addRoutine: (routine: Routine) => void;
  updateRoutine: (id: string, data: Partial<Routine>) => void;
  deleteRoutine: (id: string) => void;

  // Sesiones
  addSession: (session: Session) => void;
  updateSession: (id: string, data: Partial<Session>) => void;
  deleteSession: (id: string) => void;

  // Objetivos
  addGoal: (goal: Goal) => void;
  updateGoal: (id: string, data: Partial<Goal>) => void;
  deleteGoal: (id: string) => void;
}

export const useFitTrackStore = create<FitTrackStore>((set) => ({
  routines: [],
  sessions: [],
  goals: [],
  isLoading: false,
  error: null,

  // ── Setters ───────────────────────────────────────────────
  setRoutines: (routines) => set({ routines }),
  setSessions: (sessions) => set({ sessions }),
  setGoals: (goals) => set({ goals }),
  setLoading: (loading) => set({ isLoading: loading }),
  setError: (error) => set({ error }),

  // ── Rutinas ───────────────────────────────────────────────
  addRoutine: (routine) =>
    set((state) => ({ routines: [...state.routines, routine] })),

  updateRoutine: (id, data) =>
    set((state) => ({
      routines: state.routines.map((r) =>
        r.id === id ? { ...r, ...data } : r
      ),
    })),

  deleteRoutine: (id) =>
    set((state) => ({
      routines: state.routines.filter((r) => r.id !== id),
    })),

  // ── Sesiones ──────────────────────────────────────────────
  addSession: (session) =>
    set((state) => ({ sessions: [...state.sessions, session] })),

  updateSession: (id, data) =>
    set((state) => ({
      sessions: state.sessions.map((s) =>
        s.id === id ? { ...s, ...data } : s
      ),
    })),

  deleteSession: (id) =>
    set((state) => ({
      sessions: state.sessions.filter((s) => s.id !== id),
    })),

  // ── Objetivos ─────────────────────────────────────────────
  addGoal: (goal) =>
    set((state) => ({ goals: [...state.goals, goal] })),

  updateGoal: (id, data) =>
    set((state) => ({
      goals: state.goals.map((g) =>
        g.id === id ? { ...g, ...data } : g
      ),
    })),

  deleteGoal: (id) =>
    set((state) => ({
      goals: state.goals.filter((g) => g.id !== id),
    })),
}));