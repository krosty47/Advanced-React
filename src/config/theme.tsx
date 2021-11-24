import { FC, useState } from 'react';
// This unused import is disabled to enable declaration merging in the default theme of styled component
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ThemeProvider } from 'styled-components';
import themes, { Themes } from '../constants/themes';

declare module 'styled-components' {
  export interface DefaultTheme {
    main: any;
    selectedTheme: Themes;
    changeTheme: (theme: Themes) => void;
  }
}

const Theme: FC = ({ children }) => {
  const [theme, setTheme] = useState(Themes.Default);
  const changeTheme = (newTheme: Themes) => {
    setTheme(newTheme);
  };
  return (
    <ThemeProvider
      theme={{ main: themes[theme], selectedTheme: theme, changeTheme }}
    >
      {children}
    </ThemeProvider>
  );
};

export default Theme;
