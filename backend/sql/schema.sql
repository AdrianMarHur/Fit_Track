-- ─────────────────────────────────────────────
-- EXTENSIONES
-- ─────────────────────────────────────────────
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ─────────────────────────────────────────────
-- USERS
-- ─────────────────────────────────────────────
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  name VARCHAR(255) NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ─────────────────────────────────────────────
-- EXERCISES
-- ─────────────────────────────────────────────
CREATE TABLE exercises (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  muscle_group VARCHAR(50) NOT NULL CHECK (
    muscle_group IN (
      'pecho',
      'espalda',
      'hombros',
      'biceps',
      'triceps',
      'piernas',
      'abdomen',
      'cardio',
      'fullbody'
    )
  )
);

-- ─────────────────────────────────────────────
-- ROUTINES
-- ─────────────────────────────────────────────
CREATE TABLE routines (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ─────────────────────────────────────────────
-- ROUTINE DAYS (dias asignados)
-- ─────────────────────────────────────────────
CREATE TABLE routine_days (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  routine_id UUID REFERENCES routines(id) ON DELETE CASCADE,
  day VARCHAR(20) NOT NULL CHECK (
    day IN (
      'lunes',
      'martes',
      'miercoles',
      'jueves',
      'viernes',
      'sabado',
      'domingo'
    )
  )
);

-- ─────────────────────────────────────────────
-- ROUTINE EXERCISES
-- ─────────────────────────────────────────────
CREATE TABLE routine_exercises (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  routine_id UUID REFERENCES routines(id) ON DELETE CASCADE,
  exercise_id UUID REFERENCES exercises(id) ON DELETE CASCADE,
  sets INTEGER NOT NULL,
  reps INTEGER NOT NULL,
  intensity VARCHAR(20) CHECK (intensity IN ('baja', 'media', 'alta')),
  notes TEXT
);

-- ─────────────────────────────────────────────
-- SESSIONS (historial de entrenamientos)
-- ─────────────────────────────────────────────
CREATE TABLE sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  routine_id UUID REFERENCES routines(id) ON DELETE SET NULL,
  completed_at TIMESTAMPTZ DEFAULT NOW(),
  duration INTEGER,
  notes TEXT
);

-- ─────────────────────────────────────────────
-- SESSION EXERCISES (lo que realmente hiciste)
-- ─────────────────────────────────────────────
CREATE TABLE session_exercises (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id UUID REFERENCES sessions(id) ON DELETE CASCADE,
  exercise_id UUID REFERENCES exercises(id) ON DELETE CASCADE,
  sets INTEGER NOT NULL,
  reps INTEGER NOT NULL,
  weight DECIMAL(6,2),
  intensity VARCHAR(20) CHECK (intensity IN ('baja', 'media', 'alta')),
  notes TEXT
);

-- ─────────────────────────────────────────────
-- GOALS
-- ─────────────────────────────────────────────
CREATE TABLE goals (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  target DECIMAL NOT NULL,
  current DECIMAL DEFAULT 0,
  unit VARCHAR(50),
  status VARCHAR(20) DEFAULT 'activo' CHECK (
    status IN ('activo', 'completado', 'pausado')
  ),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);