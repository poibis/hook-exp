import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';

const themes = {
  light: {
    title: "light",
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    title: "dark",
    foreground: "#ffffff",
    background: "#222222"
  }
};


const ThemeContext = createContext({
  theme: themes.dark,
  toggleTheme: ()=> {},
});

function Toolbar() {
  return (
    <div>
      <ThemeButton />
    </div>
  );
}

function ThemeButton() {
  
  const theme = useContext(ThemeContext);

  useEffect(() => {
      console.log('theme button effect');

      return() => {
          console.log('theme button clean up');
      };
  });

  return (
    <button style={ {background: theme.background, color: theme.foreground, cursor: "pointer"} }>
      I am styled by theme context!
    </button>
  )
}

// 
// 
// 
// 


const moods = {
  dark: {
    title: "dark",
    background: "#000000",
    color: "#FFFFFF"
  },
  light: {
    title: "light",
    background: "#FFFFFF",
    color: "#000000"
  }
}

const boxShape = {
  typical: {
    width: "200px",
    height: "50px",
    border: "1px solid #000000",
    lineHeight: "50px",
    textAlign: "center",
    margin: "30px 30px 30px 30px",
    cursor: "pointer"
  }
}

const MyContext = createContext({
  box: boxShape.typical
});

function useMyContext() {
  return useContext(MyContext);
}

function MoodChange () {

  const [mood, setMood] = useState('dark');
  const boxCss = useMyContext();
  const fSize = useMemo( ()=> ({ fontSize: "15px" }) );

  const onChangeMood = ()=> {
    mood === "dark" ? setMood('light') : setMood('dark');
  };

  const modBox = {
    background: moods[mood].background,
    color: moods[mood].color,
  }
  return (
    <div style={ Object.assign({transition: "all 0.3s ease-out"}, boxCss.box, modBox, fSize) } onClick={onChangeMood}>
      It&apos;s button test
    </div>
  );
}

const ContextSample = () => {

  return (
    <React.Fragment>
      <ThemeContext.Provider value={themes.dark}>
        <Toolbar/>
      </ThemeContext.Provider>
      <MoodChange/>
    </React.Fragment>
  );
};

export default ContextSample;