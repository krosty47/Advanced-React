export enum Themes {
  Default = "default",
  Dark = "dark",
}

interface ThemeProperties {
  background: string;
  inputBorder: string;
  black: string;
  lightBlack: string;
  grey: string;
}

const themes: { [key in Themes]: ThemeProperties } = {
  [Themes.Default]: {
    background: "#ffffff",
    inputBorder: "#dadada",
    black: "#070606",
    lightBlack: "rgba(0, 0, 0, 0.85)",
    grey: "#E5E5E5",
  },
  [Themes.Dark]: {
    background: "rgb(60,41,41)",
    inputBorder: "#dadada",
    black: "#070606",
    lightBlack: "rgba(0, 0, 0, 0.85)",
    grey: "#E5E5E5",
  },
};

export default themes;
