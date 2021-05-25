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
    rotations: undefined,
    rotationAngles: [-90, 0, 90],
    // fontFamily: 'times new roman',
    fontSizes: [14, 64],

    spiral: 'archimedean',
    scale: 'linear',
    transitionDuration: 500,
    padding: 1,

    // Non-configurable
    deterministic: true,
    enableOptimizations: true,
    enableTooltip: true,
} as any

export const WordCloud = ({ words }) => {
    return (
        <div
            style={{
                border: '2px #600 solid',
                width: 300,
                height: 300,
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