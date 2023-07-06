import React, {useState} from 'react';
import axios from 'axios';
import Title from './Title';
import QuoteBlock from './QuoteBlock';
import './App.css';
import Button from './Button';
import Ingredients from './Ingredients';

const randomCocktail = () => {
  const cocktails = ['Espresso Martini', 'Manhattan', 'White Russian','Dirty Martini', 'PornStar Martini', 'Margarita', 'Negroni', 'Mai Tai', 'Whiskey Sour']
  let randomNum = Math.random();
  let index = Math.floor(randomNum * cocktails.length);
  return cocktails[index]
}

console.log(randomCocktail())

function App() {
  const [quote, setQuote] = useState("Click a button below to choose a category!");
  const [ingredients, setIngredients] = useState([]);
  const [toggled, setToggled] = useState(false)


  const clickHandler = (ext, type, isQuote,) => {
    axios.get(`https://api.api-ninjas.com/v1/${ext}${type}`, {
        headers: {
            'X-Api-Key': '+/Kdimt7p9mi5p8FKv8mxQ==Hy6oJnoDukSahBMM'
        }
    }).then((response) => {
      if (isQuote === true && toggled === false) {
        setQuote(response.data[0].quote)}
      else if (isQuote === true && toggled === true){
        setQuote(response.data[0].quote)
        setIngredients([])
        setToggled(false)}
      else {
        setQuote((response.data[0].name).toUpperCase())
        setIngredients(response.data[0].ingredients)
        setToggled(true)
      };
    }).catch((err) => {
        console.log(err);
    })}
  return (
    <div className ='container'>
      <Title/>
      <div className = 'block'>
      <QuoteBlock
      quote = {quote}/>
       {toggled ? <Ingredients 
      data = {ingredients}/> : undefined}
      </div>
      <div className ='allButtonContainer'>
      <div className='buttonContainer'>
        <Button 
        id = 'button1'
        innerHtml = "Funny"
        type= "funny"
        handler = {clickHandler}
        ext = 'quotes?category='
        isQuote = {true}
        colour = 'pink'
        />
        <Button 
        id = 'button2'
        innerHtml = "Inspirational"
        type = "inspirational"
        handler = {clickHandler}
        ext = 'quotes?category='
        isQuote = {true}
        colour = 'pink'
        />
        <Button 
        id = 'button3'
        innerHtml = "Happiness"
        type = "happiness"
        handler = {clickHandler}
        ext = 'quotes?category='
        isQuote = {true}
        colour = 'pink'
        />
      </div>
        <Button
        id = 'button4'
        innerHtml = 'Still not happy?'
        type = {randomCocktail()}
        handler = {clickHandler}
        ext = 'cocktail?name='
        isQuote = {false}
        colour = 'lightSkyBlue'
        />
      </div>
    </div>
  );
}

export default App;
