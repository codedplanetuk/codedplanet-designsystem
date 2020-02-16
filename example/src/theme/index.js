const lightTheme = {
  '--color-solid': 'black',
  '--color-surface': 'white'
};
const darkTheme = {
  '--color-solid': 'white',
  '--color-surface': 'black'
};

const applyTheme = nextTheme => {
  const theme = nextTheme === 'dark' ? lightTheme : darkTheme;
  Object.keys(theme).forEach(key => {
    const value = theme[key];
    document.documentElement.style.setProperty(key, value);
  });
};

export { applyTheme };
