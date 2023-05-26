import React, {useEffect, useState} from 'react'
import '../style/game.scss'
import Data from '../Data/myData.json'
import Alfa from '../Data/alfabet.json'

function Game() {
    const [word, setWord] = useState()
    const [comparison, setComparison] = useState()
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentIndexTwo, setCurrentIndexTwo] = useState(0);
    const [currentIndexThree, setCurrentIndexThree] = useState(0);
    const [currentIndexFour, setCurrentIndexFour] = useState(0);
    const [currentIndexFive, setCurrentIndexFive] = useState(0);
    const [currentIndexSix, setCurrentIndexSix] = useState(0);

    const [lettersOne, setLettersOne] = useState(['','','','',''])
    const [lettersTwo, setLettersTwo] = useState(['','','','',''])
    const [lettersThree, setLettersThree] = useState(['','','','',''])
    const [lettersFour, setLettersFour] = useState(['','','','',''])
    const [lettersFive, setLettersFive] = useState(['','','','',''])
    const [lettersSix, setLettersSix] = useState(['','','','',''])

    const handleDraw = () => {
        const i = Math.floor(Math.random() * Data.length)
        setTimeout(() => {
            setWord(Data[i].word)
        })
    }

    useEffect (() => {
        setComparison(lettersOne.join(""))
        console.log(comparison)
    },[lettersOne])

    const handleCheck = () => {
        console.log(comparison, word)

            for (var i = 0; i < comparison.length; i++) {
                for (var j = 0; j < word.length; j++){
                    if (comparison.charAt(i) === word.charAt(j)){
                        console.log('pom')
                    }
                }
    
                if (comparison.charAt(i) === word.charAt(i)){
                    console.log('cielmm')
                }
            }
    }

    const handleLetter = (items) => {
        if (currentIndex < 5){
            setLettersOne(prevLettersOne => {
                const updatedLettersOne = [...prevLettersOne];
                updatedLettersOne[currentIndex] = items[0]; 
                setCurrentIndex(currentIndex + 1);
                return updatedLettersOne;
            });
        } else if (currentIndex === 5 && currentIndexTwo < 5){
            setLettersTwo(prevLettersTwo => {
                const updatedLettersTwo = [...prevLettersTwo];
                updatedLettersTwo[currentIndexTwo] = items[0]; 
                console.log(updatedLettersTwo, currentIndexTwo)
                setCurrentIndexTwo(currentIndexTwo + 1);
                return updatedLettersTwo;
            });
        }
    }


  return (
    <div>
        <button onClick={() => handleDraw()}>Draw</button>
        <p>{word}</p>
            {Alfa.map((item) => (
                <button onClick={() => handleLetter(item.letter)}>{item.letter}</button>
            ))}

            <button onClick={() => handleCheck()}>Check</button>

            <div className='placeOnLetters'>
            {lettersOne.map((items) => (
            <div className='placeOnLetter'><p>{items}</p></div>
            ))}
            </div> 
            <div className='placeOnLetters'>
            {lettersTwo.map((items) => (
            <div className='placeOnLetter'><p>{items}</p></div>
            ))}
            </div> 
            <div className='placeOnLetters'>
            {lettersThree.map((items) => (
            <div className='placeOnLetter'><p>{items}</p></div>
            ))}
            </div> 
            <div className='placeOnLetters'>
            {lettersFour.map((items) => (
            <div className='placeOnLetter'><p>{items}</p></div>
            ))}
            </div> 
            <div className='placeOnLetters'>
            {lettersFive.map((items) => (
            <div className='placeOnLetter'><p>{items}</p></div>
            ))}
            </div> 
            <div className='placeOnLetters'>
            {lettersSix.map((items) => (
            <div className='placeOnLetter'><p>{items}</p></div>
            ))}
            </div> 


    </div>
  )
}

export default Game