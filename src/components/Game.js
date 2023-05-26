import React, {useEffect, useState} from 'react'
import '../style/game.scss'
import Data from '../Data/myData.json'
import Alfa from '../Data/alfabet.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons'

function Game() {
    const [word, setWord] = useState()
    const [step, setStep] = useState(1)
    const [route, setRoute] = useState(3)

    const [comparison, setComparison] = useState()
    const [comparisonTwo, setComparisonTwo] = useState()
    const [comparisonThree, setComparisonThree] = useState()
    const [comparisonFour, setComparisonFour] = useState()
    const [comparisonFive, setComparisonFive] = useState()
    const [comparisonSix, setComparisonSix] = useState()

    const [highlightedIndexes, setHighlightedIndexes] = useState([]);
    const [highlightedIndexesTwo, setHighlightedIndexesTwo] = useState([]);
    const [highlightedIndexesThree, setHighlightedIndexesThree] = useState([]);
    const [highlightedIndexesFour, setHighlightedIndexesFour] = useState([]);
    const [highlightedIndexesFive, setHighlightedIndexesFive] = useState([]);
    const [highlightedIndexesSix, setHighlightedIndexesSix] = useState([]);

    const [checkClicked, setCheckClicked] = useState(false);
    const [checkClickedTwo, setCheckClickedTwo] = useState(false);
    const [checkClickedThree, setCheckClickedThree] = useState(false);
    const [checkClickedFour, setCheckClickedFour] = useState(false);
    const [checkClickedFive, setCheckClickedFive] = useState(false);
    const [checkClickedSix, setCheckClickedSix] = useState(false);

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

            setRoute(2)
            setStep(1)

            setLettersOne(['','','','',''])
            setLettersTwo(['','','','',''])
            setLettersThree(['','','','',''])
            setLettersFour(['','','','',''])
            setLettersFive(['','','','',''])
            setLettersSix(['','','','',''])

            setCurrentIndex(0);
            setCurrentIndexTwo(0);
            setCurrentIndexThree(0);
            setCurrentIndexFour(0);
            setCurrentIndexFive(0);
            setCurrentIndexSix(0);

            setCheckClicked(false);
            setCheckClickedTwo(false);
            setCheckClickedThree(false);
            setCheckClickedFour(false);
            setCheckClickedFive(false);
            setCheckClickedSix(false);

            setHighlightedIndexes([]);
            setHighlightedIndexesTwo([]);
            setHighlightedIndexesThree([]);
            setHighlightedIndexesFour([]);
            setHighlightedIndexesFive([]);
            setHighlightedIndexesSix([]);

            setComparison()
            setComparisonTwo()
            setComparisonThree()
            setComparisonFour()
            setComparisonFive()
            setComparisonSix()


        })
    }

    useEffect (() => {
        setComparison(lettersOne.join(""))
        setComparisonTwo(lettersTwo.join(""))
        setComparisonThree(lettersThree.join(""))
        setComparisonFour(lettersFour.join(""))
        setComparisonFive(lettersFive.join(""))
        setComparisonSix(lettersSix.join(""))
    },[lettersOne, lettersTwo, lettersThree, lettersFour, lettersFive, lettersSix])

    const handleCheck = () => {

        if (step === 1 && currentIndex === 5){
            const newHighlightedIndexes = [];

            if (comparison === word){
                setRoute(3)
            }
        
            for (var i = 0; i < comparison.length; i++) {
                for (var j = 0; j < word.length; j++){
                    if (comparison.charAt(i) === word.charAt(j)){
                        newHighlightedIndexes.push(i);
                        setHighlightedIndexes(newHighlightedIndexes);
                    }
                }
                if (comparison.charAt(i) === word.charAt(i)){
                    newHighlightedIndexes.push(i);
                }
            }
            setStep(2)
            setCheckClicked(true);
        }

        if (step === 2 && currentIndexTwo === 5){
            const newHighlightedIndexesTwo = [];

            if (comparisonTwo === word){
                setRoute(3)
            }
        
            for (var i = 0; i < comparisonTwo.length; i++) {
                for (var j = 0; j < word.length; j++){
                    if (comparisonTwo.charAt(i) === word.charAt(j)){
                        newHighlightedIndexesTwo.push(i);
                        setHighlightedIndexesTwo(newHighlightedIndexesTwo);
                    }
                }
                if (comparisonTwo.charAt(i) === word.charAt(i)){
                    newHighlightedIndexesTwo.push(i);
                }
            }
            setStep(3)
            setCheckClickedTwo(true);
        }
        if (step === 3 && currentIndexThree === 5){
            const newHighlightedIndexesThree = [];

            if (comparisonThree === word){
                setRoute(3)
            }
        
            for (var i = 0; i < comparisonThree.length; i++) {
                for (var j = 0; j < word.length; j++){
                    if (comparisonThree.charAt(i) === word.charAt(j)){
                        newHighlightedIndexesThree.push(i);
                        setHighlightedIndexesThree(newHighlightedIndexesThree);
                    }
                }
                if (comparisonThree.charAt(i) === word.charAt(i)){
                    newHighlightedIndexesThree.push(i);
                }
            }
            setStep(4)
            setCheckClickedThree(true);
        }
        if (step === 4 && currentIndexFour === 5){
            const newHighlightedIndexesFour = [];

            if (comparisonFour === word){
                setRoute(3)
            }
        
            for (var i = 0; i < comparisonFour.length; i++) {
                for (var j = 0; j < word.length; j++){
                    if (comparisonFour.charAt(i) === word.charAt(j)){
                        newHighlightedIndexesFour.push(i);
                        setHighlightedIndexesFour(newHighlightedIndexesFour);
                    }
                }
                if (comparisonFour.charAt(i) === word.charAt(i)){
                    newHighlightedIndexesFour.push(i);
                }
            }
            setStep(5)
            setCheckClickedFour(true);
        }
        if (step === 5 && currentIndexFive === 5){
            const newHighlightedIndexesFive = [];

            if (comparisonFive === word){
                setRoute(3)
            }
        
            for (var i = 0; i < comparisonFive.length; i++) {
                for (var j = 0; j < word.length; j++){
                    if (comparisonFive.charAt(i) === word.charAt(j)){
                        newHighlightedIndexesFive.push(i);
                        setHighlightedIndexesFive(newHighlightedIndexesFive);
                    }
                }
                if (comparisonFive.charAt(i) === word.charAt(i)){
                    newHighlightedIndexesFive.push(i);
                }
            }
            setStep(6)
            setCheckClickedFive(true);
        }
        if (step === 6 && currentIndexSix === 5){
            const newHighlightedIndexesSix = [];

            if (comparisonSix === word){
                setRoute(3)
            }
        
            for (var i = 0; i < comparisonSix.length; i++) {
                for (var j = 0; j < word.length; j++){
                    if (comparisonSix.charAt(i) === word.charAt(j)){
                        newHighlightedIndexesSix.push(i);
                        setHighlightedIndexesSix(newHighlightedIndexesSix);
                    }
                }
                if (comparisonSix.charAt(i) === word.charAt(i)){
                    newHighlightedIndexesSix.push(i);
                }
            }
            setCheckClickedSix(true);
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
        } else if (step === 2 && currentIndexTwo < 5){
            setLettersTwo(prevLettersTwo => {
                const updatedLettersTwo = [...prevLettersTwo];
                updatedLettersTwo[currentIndexTwo] = items[0]; 
                setCurrentIndexTwo(currentIndexTwo + 1);
                return updatedLettersTwo;
            });
        } else if (step === 3 && currentIndexThree < 5){
            setLettersThree(prevLettersThree => {
                const updatedLettersThree = [...prevLettersThree];
                updatedLettersThree[currentIndexThree] = items[0]; 
                setCurrentIndexThree(currentIndexThree + 1);
                return updatedLettersThree;
            });
        } else if (step === 4 && currentIndexFour < 5){
            setLettersFour(prevLettersFour => {
                const updatedLettersFour = [...prevLettersFour];
                updatedLettersFour[currentIndexFour] = items[0]; 
                setCurrentIndexFour(currentIndexFour + 1);
                return updatedLettersFour;
            });
        } else if (step === 5 && currentIndexFive < 5){
            setLettersFive(prevLettersFive => {
                const updatedLettersFive = [...prevLettersFive];
                updatedLettersFive[currentIndexFive] = items[0]; 
                setCurrentIndexFive(currentIndexFive + 1);
                return updatedLettersFive;
            });
        } else if (step === 6 && currentIndexSix < 5){
            setLettersSix(prevLettersSix => {
                const updatedLettersSix = [...prevLettersSix];
                updatedLettersSix[currentIndexSix] = items[0]; 
                setCurrentIndexSix(currentIndexSix + 1);
                return updatedLettersSix;
            });
        } 
    }

    const handleBack = () => {
        if (currentIndex > 0) {
            if (step === 1) {
                setLettersOne(prevLettersOne => {
                    const updatedLettersOne = [...prevLettersOne];
                    updatedLettersOne[currentIndex - 1] = ''; 
                    setCurrentIndex(currentIndex - 1);
                    return updatedLettersOne;
                });
            } else if (step === 2) {
                setLettersTwo(prevLettersTwo => {
                    const updatedLettersTwo = [...prevLettersTwo];
                    updatedLettersTwo[currentIndexTwo - 1] = ''; 
                    setCurrentIndexTwo(currentIndexTwo - 1);
                    return updatedLettersTwo;
                });
            } else if (step === 3) {
                setLettersThree(prevLettersThree => {
                    const updatedLettersThree = [...prevLettersThree];
                    updatedLettersThree[currentIndexThree - 1] = ''; 
                    setCurrentIndexThree(currentIndexThree - 1);
                    return updatedLettersThree;
                });
            } else if (step === 4) {
                setLettersFour(prevLettersFour => {
                    const updatedLettersFour = [...prevLettersFour];
                    updatedLettersFour[currentIndexFour - 1] = ''; 
                    setCurrentIndexFour(currentIndexFour - 1);
                    return updatedLettersFour;
                });
            } else if (step === 5) {
                setLettersFive(prevLettersFive => {
                    const updatedLettersFive = [...prevLettersFive];
                    updatedLettersFive[currentIndexFive - 1] = ''; 
                    setCurrentIndexFive(currentIndexFive - 1);
                    return updatedLettersFive;
                });
            } else if (step === 6) {
                setLettersSix(prevLettersSix => {
                    const updatedLettersSix = [...prevLettersSix];
                    updatedLettersSix[currentIndexSix - 1] = ''; 
                    setCurrentIndexSix(currentIndexSix - 1);
                    return updatedLettersSix;
                });
            } 
        }
    }


  return (
    <div className='bg'>

        {(() => {
             if(route === 1) {
                 return (
                     <div className='containerBody'>
                        {/* <h1 className='welcome'>Welcome in Wordle</h1>
                        <h2 className='welcome'>Draw your Word</h2>
                        <h3 className='welcome'>And have fun!</h3> */}
                        <button onClick={() => handleDraw()} className='buttonDraw'>Draw</button>
                        {/* <p>{word}</p>  */}
                     </div>
                 )
             } else if (route ===2) {
                 return (
                     <div className='containerBody'>
                        <p>{word}</p>
                        <div className='containerOnWords'>
            <div className='placeOnLetters'>
            {lettersOne.map((items, index) => (
            <div className={`placeOnLetter ${highlightedIndexes.includes(index) ? 'highlighted' : ''} ${checkClicked && word && comparison.charAt(index) === word.charAt(index) ? 'highlighted-green' : 'highlighted-none'}`}
            key={index}><p>{items}</p></div>
            ))}
            </div> 
            <div className='placeOnLetters'>
            {lettersTwo.map((items, index) => (
            <div className={`placeOnLetter ${highlightedIndexesTwo.includes(index) ? 'highlighted' : ''} ${checkClickedTwo && word && comparisonTwo.charAt(index) === word.charAt(index) ? 'highlighted-green' : ''}`}
            key={index}><p>{items}</p></div>
            ))}
            </div> 
            <div className='placeOnLetters'>
            {lettersThree.map((items, index) => (
            <div className={`placeOnLetter ${highlightedIndexesThree.includes(index) ? 'highlighted' : ''} ${checkClickedThree && word && comparisonThree.charAt(index) === word.charAt(index) ? 'highlighted-green' : ''}`}
            key={index}><p>{items}</p></div>
            ))}
            </div> 
            <div className='placeOnLetters'>
            {lettersFour.map((items, index) => (
            <div className={`placeOnLetter ${highlightedIndexesFour.includes(index) ? 'highlighted' : ''} ${checkClickedFour && word && comparisonFour.charAt(index) === word.charAt(index) ? 'highlighted-green' : ''}`}
            key={index}><p>{items}</p></div>
            ))}
            </div> 
            <div className='placeOnLetters'>
            {lettersFive.map((items, index) => (
            <div className={`placeOnLetter ${highlightedIndexesFive.includes(index) ? 'highlighted' : ''} ${checkClickedFive && word && comparisonFive.charAt(index) === word.charAt(index) ? 'highlighted-green' : ''}`}
            key={index}><p>{items}</p></div>
            ))}
            </div> 
            <div className='placeOnLetters'>
            {lettersSix.map((items, index) => (
            <div className={`placeOnLetter ${highlightedIndexesSix.includes(index) ? 'highlighted' : ''} ${checkClickedSix && word && comparisonSix.charAt(index) === word.charAt(index) ? 'highlighted-green' : ''}`}
            key={index}><p>{items}</p></div>
            ))}
            </div>


            <div className='containerLetter'>
                {/* {Alfa.map((item) => (
                    <button onClick={() => handleLetter(item.letter)} className='letter'>{item.letter}</button>
                ))} */}
                <div className='rowOne'>
                    <button className='letter' onClick={() => handleLetter("Q")}>Q</button>
                    <button className='letter' onClick={() => handleLetter("W")}>W</button>
                    <button className='letter' onClick={() => handleLetter("E")}>E</button>
                    <button className='letter' onClick={() => handleLetter("R")}>R</button>
                    <button className='letter' onClick={() => handleLetter("T")}>T</button>
                    <button className='letter' onClick={() => handleLetter("Y")}>Y</button>
                    <button className='letter' onClick={() => handleLetter("U")}>U</button>
                    <button className='letter' onClick={() => handleLetter("I")}>I</button>
                    <button className='letter' onClick={() => handleLetter("O")}>O</button>
                    <button className='letter' onClick={() => handleLetter("P")}>P</button>
                </div>
                <div className='rowTwo'>
                    <button className='letter' onClick={() => handleLetter("A")}>A</button>
                    <button className='letter' onClick={() => handleLetter("S")}>S</button>
                    <button className='letter' onClick={() => handleLetter("D")}>D</button>
                    <button className='letter' onClick={() => handleLetter("F")}>F</button>
                    <button className='letter' onClick={() => handleLetter("G")}>G</button>
                    <button className='letter' onClick={() => handleLetter("H")}>H</button>
                    <button className='letter' onClick={() => handleLetter("J")}>J</button>
                    <button className='letter' onClick={() => handleLetter("K")}>K</button>
                    <button className='letter' onClick={() => handleLetter("L")}>L</button>
                </div>
                <div className='rowThree'>
                    <button onClick={() => handleBack()} className='back'><FontAwesomeIcon icon={faDeleteLeft} className='iconBack'/></button>
                    <button className='letter' onClick={() => handleLetter("Z")}>Z</button>
                    <button className='letter' onClick={() => handleLetter("X")}>X</button>
                    <button className='letter' onClick={() => handleLetter("C")}>C</button>
                    <button className='letter' onClick={() => handleLetter("V")}>V</button>
                    <button className='letter' onClick={() => handleLetter("B")}>B</button>
                    <button className='letter' onClick={() => handleLetter("N")}>N</button>
                    <button className='letter' onClick={() => handleLetter("M")}>M</button>
                    <button onClick={() => handleCheck()} className='enter'>Enter</button>
                </div>
            </div>

            </div>
                     </div>
                 )
             } else if (route ===3) {
                 return (
                 <div className='containerBody'>
                    <h1 className='guess'>Hurra! You guess Word! Again?</h1>

                    <button onClick={() => handleDraw()} className='buttonDraw'>Draw</button>
                 </div>
                 )
         }
         })()}
        
            
    </div>
  )
}

export default Game