import WordCloud from './components/WordCloud'
import { useState, useEffect } from 'react';
import { isDev } from './environment';

const countWords = require('count-words')
const elementName = "entry-content"
const blackListedWords = [
  'that', 'the',
  'to', 'a',
  'and', 'or',
  'an', 'but',
  'of', 'in', 'is', 'it', 'i', 'for', 'you', 'us', 'we', 'not', 'your', 'our',
  'are', 'so',
  'were', 'be', 'by', 'they',
  'been', 'what',
  "don't", "didn't", "hasn't", "wouldn't", "couldn't"
]

const initialState = {
  words: [
    {
      text: 'faith',
      value: 64,
    },
    {
      text: 'cults',
      value: 45,
    },
    {
      text: 'Jesus Christ',
      value: 67,
    },
    {
      text: 'Grace',
      value: 52,
    },
  ]
}

function App() {

  const [state, setState] = useState(initialState)

  useEffect(() => {

    let elements = document.getElementsByClassName(elementName)

    let text = '';
    for (var i = 0; i < elements.length; i++) {
      text += elements[i].textContent + " ";
    }

    text = text.trim();

    isDev() && console.log(`text :>> `, text)

    let totalWordCounts = countWords(text || "", true);

    let wordWeights = Object.entries(totalWordCounts)
      .map(counts => Object.create({
        text: counts[0],
        value: counts[1]
      }))
      .filter(word =>
        blackListedWords.indexOf(word.text) < 0
        && word.value > 1
        && !/d+/.test(word.value)
      ) as any[]

    isDev() && console.log(`totalWordCounts`, totalWordCounts)
    isDev() && console.log(`wordWeights`, wordWeights)

    setState({
      ...state,
      words: wordWeights
    })
  }, [])

  return (
    <div className="App">
      {isDev() && <Lorem />}
      {state?.words?.length ? <WordCloud {...state} /> : null}
    </div>
  );
}

export default App;


const Lorem = () => {
  return (
    <div className="entry-content">
      <p><strong>English – <a href="https://www.thepathoftruth.com/french/the-path-of-truth_french.htm">French</a> – <a href="https://www.thepathoftruth.com/spanish/the-path-of-truth_spanish.htm">Spanish</a></strong></p>
      <h3><span>Coming here, you have come upon The Stone.</span></h3>
      <p>The <strong>Lord Jesus Christ</strong> is Who and What everything in existence is all about. Having overcome death for our sakes, He lives, is true, and anyone will find Him perfectly faithful to help overcome everything, even death. Many of you will not believe or want to hear what we say. I certainly didn’t. At one time or another, not one does. But by His grace, I eventually discovered that He is our Life and the Source of all.</p>
      <p>It is not about religion but about reality. Jesus Christ did not come to give us “church” or religion or even Christianity, as most have known it. He came to give us life. We represent no religious organization or system of belief or doctrine. We have His life and testify to you what we know to be true.</p>
      <p>This is Jesus Christ’s claim:</p>
      <p>“I am the Way, the Truth, and the Life; no one comes to the Father but by Me” (John 14:6).</p>
      <p>Here is what He promised to those who believe Him:</p>
      <p>“And you shall know the truth, and the truth shall make you free…. Therefore if the Son shall make you free, you shall be free indeed” (John 8:32-36).</p>
      <p>We have found Him because He has chosen to reveal Himself to and in us. We know Him, are one with Him, and we speak to you by Him.</p>
      <p>There is no other way to peace and fulfillment, though men claim many other ways, whether in His Name or otherwise. When you have exhausted yourself in searching for fulfillment and finding none, and realize you still lack, it may be your time for God to reveal Himself to you. Jesus Christ (Yehoshuah HaMashiach/Yeshua/Yahweh), the Creator, and He only, can fill your void.</p>
      <p>We are here on His behalf for your sake.</p>
      <p>Victor Hafichuk</p>
    </div>
  )
}