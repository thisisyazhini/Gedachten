import { createContext } from 'preact';
import { lightTheme } from '../styles/themes';
import type { Theme } from '../models/theme';

type ThemeProps = {
  theme: Theme;
  setTheme(theme: Theme): void;
};

export const ThemeContext = createContext<ThemeProps>({
  theme: lightTheme,
  setTheme: () => {},
});
