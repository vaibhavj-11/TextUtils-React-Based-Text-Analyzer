import React from 'react';

export default function Table(props) {
  const { text } = props; // Access the text prop directly
//   console.log(props.mode);
  // Helper function to calculate the number of words in the text
  const getWordCount = (text) => {
    if (!text || text.trim() === '') {
      return 0;
    }
    return text.trim().split(/\s+/).length;
  };

  // Helper function to calculate the number of sentences in the text
  const getSentenceCount = (text) => {
    if (!text || text.trim() === '') {
      return 0;
    }
    return text.trim().split(/[.!?]+/).filter(sentence => sentence.trim() !== '').length;
  };

  // Helper function to calculate the average number of words per sentence
  const getAverageWordsPerSentence = (text) => {
    const words = getWordCount(text);
    const sentences = getSentenceCount(text);
    return sentences > 0 ? words / sentences : 0;
  };

  const getParagraphCount = (text) => {
    if (!text || text.trim() === '') {
      return 0;
    }
    return text.trim().split('\n\n').filter(paragraph => paragraph.trim() !== '').length;
  };

  return (
    <div>
      <table className={`table table-${props.mode}`} >
        <thead>
          <tr>
            <th scope="col">Text Statistics</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Number of Words</th>
            <td>{getWordCount(text)}</td>
          </tr>
          <tr>
            <th scope="row">Number of Letters</th>
            <td>{text.length}</td> 
          </tr>
          <tr>
            <th scope="row">Number of Paragraphs</th>
            <td>{getParagraphCount(text)}</td>
          </tr>
          <tr>
            <th scope="row">Number of Sentences</th>
            <td>{getSentenceCount(text)}</td>
          </tr>
          <tr>
            <th scope="row">Words per sentence</th>
            <td>{getAverageWordsPerSentence(text).toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
