// MainContent.js
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';


const root = document.getElementById("mainb");


const MainContent = () => {
  const { isDarkMode } = useContext(ThemeContext);
  // const app=document.getElementsByClassName
  if(isDarkMode){
    return(
      
      root.style.backgroundColor="white"
    );
  }

  return(
    root.style.backgroundColor="Black"

  );
 
};

export default MainContent;