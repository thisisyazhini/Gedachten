import { useState } from 'preact/hooks';
import { Header } from './components/header/header';
import { ThemeContext } from './context/ThemeContext';
import { lightTheme } from './styles/themes';
import type { Theme } from './models/theme';

export function App() {
  const [theme, setTheme] = useState<Theme>(lightTheme);

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme: (theme) => setTheme(theme) }}
    >
      <Header></Header>
    </ThemeContext.Provider>
  );
}
