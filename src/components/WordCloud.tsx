import React from 'react';
import ReactWordcloud from 'react-wordcloud';


const getSearchURL = (searchTerm) => `https://www.thepathoftruth.com/?s=%22${searchTerm.trim().replace(' ', "+")}%22`
const callbacks = {
    onWordClick: (e) => {
        console.log(e)

        let searchTerm = e.text;
        let url = getSearchURL(searchTerm)
        console.log(`url`, url)
        window.location.assign(url)
    },
    // onWordMouseOver: console.log,
    getWordColor: _ => "#600",
    // getWordTooltip: word => `${word.text} (${word.value}) [${word.value > 50 ? "good" : "bad"}]`,
}
const options = {
    rotations: 10,
    rotationAngles: [-90, 0, 90],
} as any

export const WordCloud = ({ words }) => {
    return (
        <div
            style={{
                border: '2px #600 solid',
                width: 200,
                height: 200,
            }}
        >
            <ReactWordcloud
                callbacks={callbacks}
                options={options}
                words={words}
            />
        </div>
    );
}

export default WordCloud