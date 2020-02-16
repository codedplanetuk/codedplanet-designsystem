import { Colors } from "codedplanet-designsystem";

const lightTheme = {
  "--color-solid": Colors["color-dark"],
  "--color-surface": Colors["color-light"]
};
const darkTheme = {
  "--color-solid": Colors["color-light"],
  "--color-surface": Colors["color-dark"]
};

const applyTheme = nextTheme => {
  const theme = nextTheme === "dark" ? lightTheme : darkTheme;
  Object.keys(theme).forEach(key => {
    const value = theme[key];
    document.documentElement.style.setProperty(key, value);
  });
};

export { applyTheme };
