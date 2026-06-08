export const colors = {
  rutinas: {
    primary: '#6C63FF',
    light: '#EEF0FF',
    dark: '#4A42CC',
  },
  sesiones: {
    primary: '#00C896',
    light: '#E0FAF3',
    dark: '#008F6A',
  },
  objetivos: {
    primary: '#FF6B35',
    light: '#FFF0EB',
    dark: '#CC4A1A',
  },
  inicio: {
    primary: '#0EA5E9',
    light: '#E0F4FD',
    dark: '#0873A8',
  },

  // Colores base
  background: {
    light: '#F4F6FA',
    dark: '#0F1117',
  },
  surface: {
    light: '#FFFFFF',
    dark: '#1A1D27',
  },
  surfaceAlt: {
    light: '#ECEEF5',
    dark: '#22263A',
  },
  text: {
    primary: {
      light: '#111827',
      dark: '#F1F5F9',
    },
    secondary: {
      light: '#6B7280',
      dark: '#94A3B8',
    },
  },
  border: {
    light: '#E2E8F0',
    dark: '#2D3148',
  },
  danger: '#EF4444',
  success: '#22C55E',
  warning: '#F59E0B',
};

export const typography = {
  sizes: {
    xs: 11,
    sm: 13,
    md: 15,
    lg: 17,
    xl: 20,
    xxl: 24,
    xxxl: 32,
  },
  weights: {
    regular: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: '700' as const,
    extrabold: '800' as const,
  },
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
  xxxl: 48,
};

export const borderRadius = {
  sm: 6,
  md: 10,
  lg: 16,
  xl: 24,
  full: 9999,
};

export const shadows = {
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 2,
    elevation: 1,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.10,
    shadowRadius: 6,
    elevation: 4,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.14,
    shadowRadius: 12,
    elevation: 8,
  },
};

export const theme = {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
};

export default theme;