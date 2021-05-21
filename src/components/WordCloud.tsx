import React from 'react';
import ReactWordcloud from 'react-wordcloud';

const callbacks = {
    getWordColor: word => word.value > 50 ? "blue" : "red",
    onWordClick: console.log,
    onWordMouseOver: console.log,
    getWordTooltip: word => `${word.text} (${word.value}) [${word.value > 50 ? "good" : "bad"}]`,
}
const options = {
    rotations: 2,
    rotationAngles: [-90, 0],
} as any


export const WordCloud = ({ words }) => {
    return (
        <div
            style={{
                border: '1px #600 solid',
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