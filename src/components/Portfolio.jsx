import React, { useState, useEffect } from 'react';
const Portfolio = () => {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);

    useEffect(() => {
      const timeout1 = setTimeout(() => {
        setShow1(true);
      }, 500);
      const timeout2 = setTimeout(() => {
        setShow2(true);
      }, 1500);
      const timeout3 = setTimeout(() => {
        setShow3(true);
      }, 2500);
      const timeout4 = setTimeout(() => {
        setShow4(true);
      }, 3500);
      return () => {
        clearTimeout(timeout1);
        clearTimeout(timeout2);
        clearTimeout(timeout3);
        clearTimeout(timeout4);
      };
    }, []); // Empty dependency array ensures this effect runs only once on compone
  return (
    <div>
      <h1 className={show1 ? 'show' : ''}>I've done a lot of coding alongside my full-time work.</h1>
      <h3 className={show2 ? 'show' : ''}>I completed a number of projects from the Odin Project front-end course, such as making a <a href="https://dansnow.co.uk/calculator/">calculator</a> and designing a simple <a href="https://dansnow.co.uk/etchasketch/">etch-a-sketch.</a></h3>
      <h3 className={show3 ? 'show' : ''}>Most years I enjoy the Advent of Code challenges, which are useful for getting up to scratch in a new language, as well as being extremelly fun. I tend to get to around Day 10 before they start to take up too much of my time... (I once spent a full four days trying to solve Day 14!)</h3>
      <h3 className={show4 ? 'show' : ''}>You can check out all of my public projects on <a href="https://github.com/Dan2796">GitHub</a>- the front-end ones have live demo links in the README.md.</h3>
    </div>
  )
}

export default Portfolio;
