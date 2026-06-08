export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: string;
}

export interface Exercise {
  id: string;
  name: string;
  muscleGroup: MuscleGroup;
}

export interface Routine {
  id: string;
  name: string;
  description?: string;
  days: WeekDay[];
  createdAt: string;
  updatedAt: string;
}

export interface RoutineExercise {
  id: string;
  routineId: string;
  exerciseId: string;
  sets: number;
  reps: number;
  intensity: Intensity;
  notes?: string;
}

export interface Session {
  id: string;
  routineId: string;
  completedAt: string;
  duration?: number;
  notes?: string;
}

export interface SessionExercise {
  id: string;
  sessionId: string;
  exerciseId: string;
  sets: number;
  reps: number;
  weight?: number;
  intensity: Intensity;
  notes?: string;
}

export interface Goal {
  id: string;
  title: string;
  description?: string;
  target: number;
  current: number;
  unit: string;
  status: GoalStatus;
  createdAt: string;
  updatedAt: string;
}

export type WeekDay =
  | 'lunes'
  | 'martes'
  | 'miercoles'
  | 'jueves'
  | 'viernes'
  | 'sabado'
  | 'domingo';

export type MuscleGroup =
  | 'pecho'
  | 'espalda'
  | 'hombros'
  | 'biceps'
  | 'triceps'
  | 'piernas'
  | 'abdomen'
  | 'cardio'
  | 'fullbody';

export type Intensity = 'baja' | 'media' | 'alta';

export type GoalStatus = 'activo' | 'completado' | 'pausado';