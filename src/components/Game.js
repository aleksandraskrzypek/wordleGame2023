import React, {useEffect, useState} from 'react'
import '../style/game.scss'
//import DataPL from '../Data/myData.json'
import DataPL from '../Data/dataWordlePL.json'
import DataENG from '../Data/dataWordle.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft, faDoorOpen } from '@fortawesome/free-solid-svg-icons'
import Flag from 'react-world-flags'

import transPL from '../Data/translationsPL.json'
import transENG from '../Data/translationsENG.json'

function Game() {
    const [lang, setLang] = useState('eng')
    const [usedLettersOrange, setUsedLettersOrange] = useState([]);
    const [usedLettersGreen, setUsedLettersGreen] = useState([]);
    const [usedLettersBlack, setUsedLettersBlack] = useState([]);

    const [word, setWord] = useState()
    const [step, setStep] = useState(1)
    const [route, setRoute] = useState(1)

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


    const handleBackToLang = () => {
        setRoute(1)
    }

    const handleDraw = () => {
        if(lang === 'eng'){
            const i = Math.floor(Math.random() * DataENG.length)
            setTimeout(() => {
                setWord(DataENG[i].word);
            })
        } else if (lang === 'pl'){
            const i = Math.floor(Math.random() * DataPL.length)
            setTimeout(() => {
                setWord(DataPL[i].word)
            })
        }
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

                setUsedLettersOrange([]);
                setUsedLettersGreen([]);
                setUsedLettersBlack([]);

    }

    useEffect (() => {
        setComparison(lettersOne.join(""))
        setComparisonTwo(lettersTwo.join(""))
        setComparisonThree(lettersThree.join(""))
        setComparisonFour(lettersFour.join(""))
        setComparisonFive(lettersFive.join(""))
        setComparisonSix(lettersSix.join(""))
    },[lettersOne, lettersTwo, lettersThree, lettersFour, lettersFive, lettersSix])

    const handleCheckWord = () => {
        if (lang === 'eng'){
            if (step === 1){
                var wordFound = false;
                for (var k = 0; k < DataENG.length; k++){
                    if (comparison === DataENG[k].word){
                        handleCheck()
                        var wordFound = true;
                        break;
                    }
                }
                if (!wordFound) {
                    alert(lang === 'pl' ? transPL[0].alert : transENG[0].alert);
                    setLettersOne(['','','','',''])
                    setComparison()
                    setCurrentIndex(0);
                }
            } else if (step === 2){
                var wordFoundTwo = false;
                for (var l = 0; l < DataENG.length; l++){
                    if (comparisonTwo === DataENG[l].word){
                        handleCheck()
                        var wordFoundTwo = true;
                        break;
                    } 
                }
                if (!wordFoundTwo) {
                    alert(lang === 'pl' ? transPL[0].alert : transENG[0].alert);
                    setLettersTwo(['','','','',''])
                    setComparisonTwo()
                    setCurrentIndexTwo(0);
                }
            } else if (step === 3){
                var wordFoundThree = false;
                for (var m = 0; m < DataENG.length; m++){
                    if (comparisonThree === DataENG[m].word){
                        handleCheck()
                        var wordFoundThree = true;
                        break;
                    }
                }
                if (!wordFoundThree) {
                    alert(lang === 'pl' ? transPL[0].alert : transENG[0].alert);
                    setLettersThree(['','','','',''])
                    setComparisonThree()
                    setCurrentIndexThree(0);
                }
            } else if (step === 4){
                var wordFoundFour = false;
                for (var n = 0; n < DataENG.length; n++){
                    if (comparisonFour === DataENG[n].word){
                        handleCheck()
                        var wordFoundFour = true;
                        break;
                    }
                }
                if (!wordFoundFour) {
                    alert(lang === 'pl' ? transPL[0].alert : transENG[0].alert);
                    setLettersFour(['','','','',''])
                    setComparisonFour()
                    setCurrentIndexFour(0);
                }
            } else if (step === 5){
                var wordFoundFive = false;
                for (var o = 0; o < DataENG.length; o++){
                    if (comparisonFive === DataENG[o].word){
                        handleCheck()
                        var wordFoundFive = true;
                        break;
                    } 
                }
                if (!wordFoundFive) {
                    alert(lang === 'pl' ? transPL[0].alert : transENG[0].alert);
                    setLettersFive(['','','','',''])
                    setComparisonFive()
                    setCurrentIndexFive(0);
                }
            } else if (step === 6){
                var wordFoundSix = false;
                for (var p = 0; p < DataENG.length; p++){
                    if (comparisonSix === DataENG[p].word){
                        handleCheck()
                        var wordFoundSix = true;
                        break;
                    }  
                }
                if (!wordFoundSix) {
                    alert(lang === 'pl' ? transPL[0].alert : transENG[0].alert);
                    setLettersSix(['','','','',''])
                    setComparisonSix()
                    setCurrentIndexSix(0);
                }
            }
        } else if (lang === 'pl'){
            if (step === 1){
                var wordFound = false;
                for (var k = 0; k < DataPL.length; k++){
                    if (comparison === DataPL[k].word){
                        handleCheck()
                        var wordFound = true;
                        break;
                    }
                }
                if (!wordFound) {
                    alert(lang === 'pl' ? transPL[0].alert : transENG[0].alert);
                    setLettersOne(['','','','',''])
                    setComparison()
                    setCurrentIndex(0);
                }
            } else if (step === 2){
                var wordFoundTwo = false;
                for (var l = 0; l < DataPL.length; l++){
                    if (comparisonTwo === DataPL[l].word){
                        handleCheck()
                        var wordFoundTwo = true;
                        break;
                    } 
                }
                if (!wordFoundTwo) {
                    alert(lang === 'pl' ? transPL[0].alert : transENG[0].alert);
                    setLettersTwo(['','','','',''])
                    setComparisonTwo()
                    setCurrentIndexTwo(0);
                }
            } else if (step === 3){
                var wordFoundThree = false;
                for (var m = 0; m < DataPL.length; m++){
                    if (comparisonThree === DataPL[m].word){
                        handleCheck()
                        var wordFoundThree = true;
                        break;
                    }
                }
                if (!wordFoundThree) {
                    alert(lang === 'pl' ? transPL[0].alert : transENG[0].alert);
                    setLettersThree(['','','','',''])
                    setComparisonThree()
                    setCurrentIndexThree(0);
                }
            } else if (step === 4){
                var wordFoundFour = false;
                for (var n = 0; n < DataPL.length; n++){
                    if (comparisonFour === DataPL[n].word){
                        handleCheck()
                        var wordFoundFour = true;
                        break;
                    }
                }
                if (!wordFoundFour) {
                    alert(lang === 'pl' ? transPL[0].alert : transENG[0].alert);
                    setLettersFour(['','','','',''])
                    setComparisonFour()
                    setCurrentIndexFour(0);
                }
            } else if (step === 5){
                var wordFoundFive = false;
                for (var o = 0; o < DataPL.length; o++){
                    if (comparisonFive === DataPL[o].word){
                        handleCheck()
                        var wordFoundFive = true;
                        break;
                    } 
                }
                if (!wordFoundFive) {
                    alert(lang === 'pl' ? transPL[0].alert : transENG[0].alert);
                    setLettersFive(['','','','',''])
                    setComparisonFive()
                    setCurrentIndexFive(0);
                }
            } else if (step === 6){
                var wordFoundSix = false;
                for (var p = 0; p < DataPL.length; p++){
                    if (comparisonSix === DataPL[p].word){
                        handleCheck()
                        var wordFoundSix = true;
                        break;
                    }  
                }
                if (!wordFoundSix) {
                    alert(lang === 'pl' ? transPL[0].alert : transENG[0].alert);
                    setLettersSix(['','','','',''])
                    setComparisonSix()
                    setCurrentIndexSix(0);
                }
            }
        }
    }

    const handleCheck = () => {

        if (step === 1 && currentIndex === 5){
            const newHighlightedIndexes = [];
            const newUsedLettersOrange = [];
            const newUsedLettersGreen = [];
            const newUsedLettersBlack = [];

            if (comparison === word){
                setRoute(3)
            }
        
            for (var i = 0; i < comparison.length; i++) {
                for (var j = 0; j < word.length; j++){
                    var foundInWord = false;
                    if (comparison.charAt(i) === word.charAt(j)){
                        newHighlightedIndexes.push(i);
                        setHighlightedIndexes(newHighlightedIndexes);
                        newUsedLettersOrange.push(comparison.charAt(i));
                        foundInWord = true;
                    }
                }
                if (comparison.charAt(i) === word.charAt(i)){
                    newHighlightedIndexes.push(i);
                    newUsedLettersGreen.push(comparison.charAt(i));
                    foundInWord = true;
                }  if (!foundInWord) {
                    newUsedLettersBlack.push(comparison.charAt(i));
                  }
            }
            setUsedLettersBlack((prevUsedLettersBlack) => [...prevUsedLettersBlack, ...newUsedLettersBlack]);
            setUsedLettersOrange((prevUsedLettersOrange) => [...prevUsedLettersOrange, ...newUsedLettersOrange]);
            setUsedLettersGreen((prevUsedLettersGreen) => [...prevUsedLettersGreen, ...newUsedLettersGreen]);
            setStep(2)
            setCheckClicked(true);
        }

        if (step === 2 && currentIndexTwo === 5){
            const newHighlightedIndexesTwo = [];
            const newUsedLettersOrange = [];
            const newUsedLettersGreen = [];
            const newUsedLettersBlack = [];

            if (comparisonTwo === word){
                setRoute(3)
            }
        
            for (var i = 0; i < comparisonTwo.length; i++) {
                var foundInWord = false;
                for (var j = 0; j < word.length; j++){
                    if (comparisonTwo.charAt(i) === word.charAt(j)){
                        newHighlightedIndexesTwo.push(i);
                        setHighlightedIndexesTwo(newHighlightedIndexesTwo);
                        newUsedLettersOrange.push(comparisonTwo.charAt(i));
                        foundInWord = true;
                    }
                }
                if (comparisonTwo.charAt(i) === word.charAt(i)){
                    newHighlightedIndexesTwo.push(i);
                    newUsedLettersGreen.push(comparisonTwo.charAt(i));
                    foundInWord = true;
                }
                if (!foundInWord) {
                    newUsedLettersBlack.push(comparisonTwo.charAt(i));
                  }
            }
            setUsedLettersBlack((prevUsedLettersBlack) => [...prevUsedLettersBlack, ...newUsedLettersBlack]);
            setUsedLettersOrange((prevUsedLettersOrange) => [...prevUsedLettersOrange, ...newUsedLettersOrange]);
            setUsedLettersGreen((prevUsedLettersGreen) => [...prevUsedLettersGreen, ...newUsedLettersGreen]);
            setStep(3)
            setCheckClickedTwo(true);
        }
        if (step === 3 && currentIndexThree === 5){
            const newHighlightedIndexesThree = [];
            const newUsedLettersOrange = [];
            const newUsedLettersGreen = [];
            const newUsedLettersBlack = [];

            if (comparisonThree === word){
                setRoute(3)
            }
        
            for (var i = 0; i < comparisonThree.length; i++) {
                var foundInWord = false;
                for (var j = 0; j < word.length; j++){
                    if (comparisonThree.charAt(i) === word.charAt(j)){
                        newHighlightedIndexesThree.push(i);
                        setHighlightedIndexesThree(newHighlightedIndexesThree);
                        newUsedLettersOrange.push(comparisonThree.charAt(i));
                        foundInWord = true;
                    }
                }
                if (comparisonThree.charAt(i) === word.charAt(i)){
                    newHighlightedIndexesThree.push(i);
                    newUsedLettersGreen.push(comparisonThree.charAt(i));
                    foundInWord = true;
                } if (!foundInWord) {
                    newUsedLettersBlack.push(comparisonThree.charAt(i));
                  }
            }
            setUsedLettersBlack((prevUsedLettersBlack) => [...prevUsedLettersBlack, ...newUsedLettersBlack]);
            setUsedLettersOrange((prevUsedLettersOrange) => [...prevUsedLettersOrange, ...newUsedLettersOrange]);
            setUsedLettersGreen((prevUsedLettersGreen) => [...prevUsedLettersGreen, ...newUsedLettersGreen]);
            setStep(4)
            setCheckClickedThree(true);
        }
        if (step === 4 && currentIndexFour === 5){
            const newHighlightedIndexesFour = [];
            const newUsedLettersOrange = [];
            const newUsedLettersGreen = [];
            const newUsedLettersBlack = [];

            if (comparisonFour === word){
                setRoute(3)
            }
        
            for (var i = 0; i < comparisonFour.length; i++) {
                var foundInWord = false;
                for (var j = 0; j < word.length; j++){
                    if (comparisonFour.charAt(i) === word.charAt(j)){
                        newHighlightedIndexesFour.push(i);
                        setHighlightedIndexesFour(newHighlightedIndexesFour);
                        newUsedLettersOrange.push(comparisonFour.charAt(i));
                        foundInWord = true;
                    }
                }
                if (comparisonFour.charAt(i) === word.charAt(i)){
                    newHighlightedIndexesFour.push(i);
                    newUsedLettersGreen.push(comparisonFour.charAt(i));
                    foundInWord = true;
                } if (!foundInWord) {
                    newUsedLettersBlack.push(comparisonFour.charAt(i));
                  }
            }
            setUsedLettersBlack((prevUsedLettersBlack) => [...prevUsedLettersBlack, ...newUsedLettersBlack]);
            setUsedLettersOrange((prevUsedLettersOrange) => [...prevUsedLettersOrange, ...newUsedLettersOrange]);
            setUsedLettersGreen((prevUsedLettersGreen) => [...prevUsedLettersGreen, ...newUsedLettersGreen]);
            setStep(5)
            setCheckClickedFour(true);
        }
        if (step === 5 && currentIndexFive === 5){
            const newHighlightedIndexesFive = [];
            const newUsedLettersOrange = [];
            const newUsedLettersGreen = [];
            const newUsedLettersBlack = [];

            if (comparisonFive === word){
                setRoute(3)
            }
        
            for (var i = 0; i < comparisonFive.length; i++) {
                var foundInWord = false;
                for (var j = 0; j < word.length; j++){
                    if (comparisonFive.charAt(i) === word.charAt(j)){
                        newHighlightedIndexesFive.push(i);
                        setHighlightedIndexesFive(newHighlightedIndexesFive);
                        newUsedLettersOrange.push(comparisonFive.charAt(i));
                        foundInWord = true;
                    }
                }
                if (comparisonFive.charAt(i) === word.charAt(i)){
                    newHighlightedIndexesFive.push(i);
                    newUsedLettersGreen.push(comparisonFive.charAt(i));
                    foundInWord = true;
                } if (!foundInWord) {
                    newUsedLettersBlack.push(comparisonFive.charAt(i));
                  }
            }
            setUsedLettersBlack((prevUsedLettersBlack) => [...prevUsedLettersBlack, ...newUsedLettersBlack]);
            setUsedLettersOrange((prevUsedLettersOrange) => [...prevUsedLettersOrange, ...newUsedLettersOrange]);
            setUsedLettersGreen((prevUsedLettersGreen) => [...prevUsedLettersGreen, ...newUsedLettersGreen]);
            setStep(6)
            setCheckClickedFive(true);
        }
        if (step === 6 && currentIndexSix === 5){
            const newHighlightedIndexesSix = [];
            const newUsedLettersOrange = [];
            const newUsedLettersGreen = [];
            const newUsedLettersBlack = [];

            if (comparisonSix === word){
                setRoute(3)
            } else {
                setRoute(4)
            }
        
            for (var i = 0; i < comparisonSix.length; i++) {
                var foundInWord = false;
                for (var j = 0; j < word.length; j++){
                    if (comparisonSix.charAt(i) === word.charAt(j)){
                        newHighlightedIndexesSix.push(i);
                        setHighlightedIndexesSix(newHighlightedIndexesSix);
                        newUsedLettersOrange.push(comparisonSix.charAt(i));
                        foundInWord = true;
                    }
                }
                if (comparisonSix.charAt(i) === word.charAt(i)){
                    newHighlightedIndexesSix.push(i);
                    newUsedLettersGreen.push(comparisonSix.charAt(i));
                    foundInWord = true;
                } if (!foundInWord) {
                    newUsedLettersBlack.push(comparisonSix.charAt(i));
                  }
            }
            setUsedLettersBlack((prevUsedLettersBlack) => [...prevUsedLettersBlack, ...newUsedLettersBlack]);
            setCheckClickedSix(true);
            setUsedLettersOrange((prevUsedLettersOrange) => [...prevUsedLettersOrange, ...newUsedLettersOrange]);
            setUsedLettersGreen((prevUsedLettersGreen) => [...prevUsedLettersGreen, ...newUsedLettersGreen]);
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
                        <div className='flags'>
                            <button className='btnChangeLang' onClick={() =>setLang('pl')}><Flag code="POL" style={{ width: 'auto', height: '25px'}}/></button>
                            <button className='btnChangeLang' onClick={() =>setLang('eng')}><Flag code="GBR" style={{ width: 'auto', height: '25px' }}/></button>
                        </div>
                        <button onClick={() => handleDraw()} className='buttonDraw'>{lang === 'pl' ? transPL[0].draw : transENG[0].draw}</button>
                     </div>
                 )
             } else if (route ===2) {
                 return (
                     <div className='containerBody'>
                        <div className='backToLang'><button onClick={() => handleBackToLang()} className='btnBackToLang'><FontAwesomeIcon icon={faDoorOpen} className='iconBackToLang'/></button></div>
                        <p>{word}</p>
                        <div className='containerOnWords'>
            <div className='placeOnLetters'>
            {lettersOne.map((items, index) => (
            <div
            className={`placeOnLetter ${
              highlightedIndexes.includes(index) ? 'highlighted' : ''
            } ${
              checkClicked && word && comparison.charAt(index) === word.charAt(index)
                ? 'highlighted-green'
                : ''
            } ${
              checkClicked &&
              word &&
              comparison.charAt(index) !== word.charAt(index) &&
              !word.includes(comparison.charAt(index))
                ? 'highlighted-none'
                : ''
            }`}
            key={index}
          ><p>{items}</p></div>
            ))}
            </div> 
            <div className='placeOnLetters'>
            {lettersTwo.map((items, index) => (
            <div 
            className={`placeOnLetter ${
                highlightedIndexesTwo.includes(index) ? 'highlighted' : ''
            } ${
                checkClickedTwo && word && comparisonTwo.charAt(index) === word.charAt(index) 
                ? 'highlighted-green' : ''
            }${
                checkClickedTwo &&
                word &&
                comparisonTwo.charAt(index) !== word.charAt(index) &&
                !word.includes(comparisonTwo.charAt(index))
                  ? 'highlighted-none'
                  : ''
            }`}
            key={index}><p>{items}</p></div>
            ))}
            </div> 
            <div className='placeOnLetters'>
            {lettersThree.map((items, index) => (
            <div 
            className={`placeOnLetter ${
                highlightedIndexesThree.includes(index) ? 'highlighted' : ''
            } ${
                checkClickedThree && word && comparisonThree.charAt(index) === word.charAt(index) ? 'highlighted-green' : ''
            }${
                checkClickedThree &&
                word &&
                comparisonThree.charAt(index) !== word.charAt(index) &&
                !word.includes(comparisonThree.charAt(index))
                  ? 'highlighted-none'
                  : ''
            
            
            }`}
            key={index}><p>{items}</p></div>
            ))}
            </div> 
            <div className='placeOnLetters'>
            {lettersFour.map((items, index) => (
            <div 
            className={`placeOnLetter ${
                highlightedIndexesFour.includes(index) ? 'highlighted' : ''
            } ${
                checkClickedFour && word && comparisonFour.charAt(index) === word.charAt(index) ? 'highlighted-green' : ''
            }${
                checkClickedFour &&
                word &&
                comparisonFour.charAt(index) !== word.charAt(index) &&
                !word.includes(comparisonFour.charAt(index))
                  ? 'highlighted-none'
                  : ''
            }`}
            key={index}><p>{items}</p></div>
            ))}
            </div> 
            <div className='placeOnLetters'>
            {lettersFive.map((items, index) => (
            <div 
            className={`placeOnLetter ${
                highlightedIndexesFive.includes(index) ? 'highlighted' : ''
            } ${
                checkClickedFive && word && comparisonFive.charAt(index) === word.charAt(index) ? 'highlighted-green' : ''
            }${
                checkClickedFive &&
                word &&
                comparisonFive.charAt(index) !== word.charAt(index) &&
                !word.includes(comparisonFive.charAt(index))
                  ? 'highlighted-none'
                  : ''
            }`}
            key={index}><p>{items}</p></div>
            ))}
            </div> 
            <div className='placeOnLetters'>
            {lettersSix.map((items, index) => (
            <div 
            className={`placeOnLetter ${
                highlightedIndexesSix.includes(index) ? 'highlighted' : ''
            } ${
                checkClickedSix && word && comparisonSix.charAt(index) === word.charAt(index) ? 'highlighted-green' : ''
            }${
                checkClickedSix &&
                word &&
                comparisonSix.charAt(index) !== word.charAt(index) &&
                !word.includes(comparisonSix.charAt(index))
                  ? 'highlighted-none'
                  : ''
            }`}
            key={index}><p>{items}</p></div>
            ))}
            </div>


            <div className='containerLetter'>
                {/* {Alfa.map((item) => (
                    <button onClick={() => handleLetter(item.letter)} className='letter'>{item.letter}</button>
                ))} */}
                {(() => {
                    if(lang === "pl") {
                        return (
                <div className='rowZero'>
                    <button className={`letter ${usedLettersOrange.includes("Ą") ? 'orange' : ''} ${usedLettersGreen.includes("Ą") ? 'green' : ''} ${usedLettersBlack.includes("Ą") ? 'black' : ''}`} onClick={() => handleLetter("Ą")}>Ą</button>
                    <button className={`letter ${usedLettersOrange.includes("Ć") ? 'orange' : ''} ${usedLettersGreen.includes("Ć") ? 'green' : ''} ${usedLettersBlack.includes("Ć") ? 'black' : ''}`} onClick={() => handleLetter("Ć")}>Ć</button>
                    <button className={`letter ${usedLettersOrange.includes("Ę") ? 'orange' : ''} ${usedLettersGreen.includes("Ę") ? 'green' : ''} ${usedLettersBlack.includes("Ę") ? 'black' : ''}`} onClick={() => handleLetter("Ę")}>Ę</button>
                    <button className={`letter ${usedLettersOrange.includes("Ł") ? 'orange' : ''} ${usedLettersGreen.includes("Ł") ? 'green' : ''} ${usedLettersBlack.includes("Ł") ? 'black' : ''}`} onClick={() => handleLetter("Ł")}>Ł</button>
                    <button className={`letter ${usedLettersOrange.includes("Ó") ? 'orange' : ''} ${usedLettersGreen.includes("Ó") ? 'green' : ''} ${usedLettersBlack.includes("Ó") ? 'black' : ''}`} onClick={() => handleLetter("Ó")}>Ó</button>
                    <button className={`letter ${usedLettersOrange.includes("Ś") ? 'orange' : ''} ${usedLettersGreen.includes("Ś") ? 'green' : ''} ${usedLettersBlack.includes("Ś") ? 'black' : ''}`} onClick={() => handleLetter("Ś")}>Ś</button>
                    <button className={`letter ${usedLettersOrange.includes("Ń") ? 'orange' : ''} ${usedLettersGreen.includes("Ń") ? 'green' : ''} ${usedLettersBlack.includes("Ń") ? 'black' : ''}`} onClick={() => handleLetter("Ń")}>Ń</button>
                    <button className={`letter ${usedLettersOrange.includes("Ź") ? 'orange' : ''} ${usedLettersGreen.includes("Ź") ? 'green' : ''} ${usedLettersBlack.includes("Ź") ? 'black' : ''}`} onClick={() => handleLetter("Ź")}>Ź</button>
                    <button className={`letter ${usedLettersOrange.includes("Ż") ? 'orange' : ''} ${usedLettersGreen.includes("Ż") ? 'green' : ''} ${usedLettersBlack.includes("Ż") ? 'black' : ''}`} onClick={() => handleLetter("Ż")}>Ż</button>
                </div>
                        )}
                    })()}
                <div className='rowOne'>
                    <button className={`letter ${usedLettersOrange.includes("Q") ? 'orange' : ''} ${usedLettersGreen.includes("Q") ? 'green' : ''} ${usedLettersBlack.includes("Q") ? 'black' : ''}`} onClick={() => handleLetter("Q")}>Q</button>
                    <button className={`letter ${usedLettersOrange.includes("W") ? 'orange' : ''} ${usedLettersGreen.includes("W") ? 'green' : ''} ${usedLettersBlack.includes("W") ? 'black' : ''}`} onClick={() => handleLetter("W")}>W</button>
                    <button className={`letter ${usedLettersOrange.includes("E") ? 'orange' : ''} ${usedLettersGreen.includes("E") ? 'green' : ''} ${usedLettersBlack.includes("E") ? 'black' : ''}`} onClick={() => handleLetter("E")}>E</button>
                    <button className={`letter ${usedLettersOrange.includes("R") ? 'orange' : ''} ${usedLettersGreen.includes("R") ? 'green' : ''} ${usedLettersBlack.includes("R") ? 'black' : ''}`} onClick={() => handleLetter("R")}>R</button>
                    <button className={`letter ${usedLettersOrange.includes("T") ? 'orange' : ''} ${usedLettersGreen.includes("T") ? 'green' : ''} ${usedLettersBlack.includes("T") ? 'black' : ''}`} onClick={() => handleLetter("T")}>T</button>
                    <button className={`letter ${usedLettersOrange.includes("Y") ? 'orange' : ''} ${usedLettersGreen.includes("Y") ? 'green' : ''} ${usedLettersBlack.includes("Y") ? 'black' : ''}`} onClick={() => handleLetter("Y")}>Y</button>
                    <button className={`letter ${usedLettersOrange.includes("U") ? 'orange' : ''} ${usedLettersGreen.includes("U") ? 'green' : ''} ${usedLettersBlack.includes("U") ? 'black' : ''}`} onClick={() => handleLetter("U")}>U</button>
                    <button className={`letter ${usedLettersOrange.includes("I") ? 'orange' : ''} ${usedLettersGreen.includes("I") ? 'green' : ''} ${usedLettersBlack.includes("I") ? 'black' : ''}`} onClick={() => handleLetter("I")}>I</button>
                    <button className={`letter ${usedLettersOrange.includes("O") ? 'orange' : ''} ${usedLettersGreen.includes("O") ? 'green' : ''} ${usedLettersBlack.includes("O") ? 'black' : ''}`} onClick={() => handleLetter("O")}>O</button>
                    <button className={`letter ${usedLettersOrange.includes("P") ? 'orange' : ''} ${usedLettersGreen.includes("P") ? 'green' : ''} ${usedLettersBlack.includes("P") ? 'black' : ''}`} onClick={() => handleLetter("P")}>P</button>
                </div>
                <div className='rowTwo'>
                    <button className={`letter ${usedLettersOrange.includes("A") ? 'orange' : ''} ${usedLettersGreen.includes("A") ? 'green' : ''} ${usedLettersBlack.includes("A") ? 'black' : ''}`} onClick={() => handleLetter("A")}>A</button>
                    <button className={`letter ${usedLettersOrange.includes("S") ? 'orange' : ''} ${usedLettersGreen.includes("S") ? 'green' : ''} ${usedLettersBlack.includes("S") ? 'black' : ''}`} onClick={() => handleLetter("S")}>S</button>
                    <button className={`letter ${usedLettersOrange.includes("D") ? 'orange' : ''} ${usedLettersGreen.includes("D") ? 'green' : ''} ${usedLettersBlack.includes("D") ? 'black' : ''}`} onClick={() => handleLetter("D")}>D</button>
                    <button className={`letter ${usedLettersOrange.includes("F") ? 'orange' : ''} ${usedLettersGreen.includes("F") ? 'green' : ''} ${usedLettersBlack.includes("F") ? 'black' : ''}`} onClick={() => handleLetter("F")}>F</button>
                    <button className={`letter ${usedLettersOrange.includes("G") ? 'orange' : ''} ${usedLettersGreen.includes("G") ? 'green' : ''} ${usedLettersBlack.includes("G") ? 'black' : ''}`} onClick={() => handleLetter("G")}>G</button>
                    <button className={`letter ${usedLettersOrange.includes("H") ? 'orange' : ''} ${usedLettersGreen.includes("H") ? 'green' : ''} ${usedLettersBlack.includes("H") ? 'black' : ''}`} onClick={() => handleLetter("H")}>H</button>
                    <button className={`letter ${usedLettersOrange.includes("J") ? 'orange' : ''} ${usedLettersGreen.includes("J") ? 'green' : ''} ${usedLettersBlack.includes("J") ? 'black' : ''}`} onClick={() => handleLetter("J")}>J</button>
                    <button className={`letter ${usedLettersOrange.includes("K") ? 'orange' : ''} ${usedLettersGreen.includes("K") ? 'green' : ''} ${usedLettersBlack.includes("K") ? 'black' : ''}`} onClick={() => handleLetter("K")}>K</button>
                    <button className={`letter ${usedLettersOrange.includes("L") ? 'orange' : ''} ${usedLettersGreen.includes("L") ? 'green' : ''} ${usedLettersBlack.includes("L") ? 'black' : ''}`} onClick={() => handleLetter("L")}>L</button>
                </div>
                <div className='rowThree'>
                    <button onClick={() => handleBack()} className='back'><FontAwesomeIcon icon={faDeleteLeft} className='iconBack'/></button>
                    <button className={`letter ${usedLettersOrange.includes("Z") ? 'orange' : ''} ${usedLettersGreen.includes("Z") ? 'green' : ''} ${usedLettersBlack.includes("Z") ? 'black' : ''}`} onClick={() => handleLetter("Z")}>Z</button>
                    <button className={`letter ${usedLettersOrange.includes("X") ? 'orange' : ''} ${usedLettersGreen.includes("X") ? 'green' : ''} ${usedLettersBlack.includes("X") ? 'black' : ''}`} onClick={() => handleLetter("X")}>X</button>
                    <button className={`letter ${usedLettersOrange.includes("C") ? 'orange' : ''} ${usedLettersGreen.includes("C") ? 'green' : ''} ${usedLettersBlack.includes("C") ? 'black' : ''}`} onClick={() => handleLetter("C")}>C</button>
                    <button className={`letter ${usedLettersOrange.includes("V") ? 'orange' : ''} ${usedLettersGreen.includes("V") ? 'green' : ''} ${usedLettersBlack.includes("V") ? 'black' : ''}`} onClick={() => handleLetter("V")}>V</button>
                    <button className={`letter ${usedLettersOrange.includes("B") ? 'orange' : ''} ${usedLettersGreen.includes("B") ? 'green' : ''} ${usedLettersBlack.includes("B") ? 'black' : ''}`} onClick={() => handleLetter("B")}>B</button>
                    <button className={`letter ${usedLettersOrange.includes("N") ? 'orange' : ''} ${usedLettersGreen.includes("N") ? 'green' : ''} ${usedLettersBlack.includes("N") ? 'black' : ''}`} onClick={() => handleLetter("N")}>N</button>
                    <button className={`letter ${usedLettersOrange.includes("M") ? 'orange' : ''} ${usedLettersGreen.includes("M") ? 'green' : ''} ${usedLettersBlack.includes("M") ? 'black' : ''}`} onClick={() => handleLetter("M")}>M</button>
                    <button onClick={() => handleCheckWord()} className='enter'>Enter</button>
                </div>
            </div>

            </div>
                     </div>
                 )
             } else if (route ===3) {
                 return (
                 <div className='containerBody'>
                    <h1 className='guess'>{lang === 'pl' ? transPL[0].guess : transENG[0].guess}</h1>

                    <button onClick={() => handleDraw()} className='buttonDraw'>{lang === 'pl' ? transPL[0].draw : transENG[0].draw}</button>
                 </div>
                 )
         } else if (route === 4){
            return(
                <div className='containerBody'>
                    <h1 className='guess'>{lang === 'pl' ? transPL[0].notGuess : transENG[0].notGuess}</h1>
                    <button onClick={() => handleDraw()} className='buttonDraw'>{lang === 'pl' ? transPL[0].draw : transENG[0].draw}</button>
                </div>
            )
         }
         })()}
        
            
    </div>
  )
}

export default Game