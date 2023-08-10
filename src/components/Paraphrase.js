// components/Paraphrase.js

import React from 'react';

const Paraphrase = ({ loading, paraphrasedText, similarity, handleClick, mode }) => {
  return (
    <div className="container2" style={{ backgroundColor: mode === 'dark' ? '#212529' : 'white', color: mode === 'dark' ? 'white' : 'black' }}>
      <br></br>
      <h1>Paraphrasing Tool</h1>
      <h6>Enter the text to paraphrase in the text box above and click on the paraphrase button below </h6>
      <div className="button_box">
        <button onClick={handleClick}>Paraphrase</button>
        {similarity > 0 ? (
          <p>
            similarity: <span>{similarity}</span>
          </p>
        ) : null}
      </div>
      <h4>Paraphrased Output</h4>
      <div className="text_box">
        <textarea
          className="paraphrased-output"
          readOnly
          value={paraphrasedText}
          style={{ backgroundColor: mode === 'dark' ? '#212529' : 'white', color: mode === 'dark' ? 'white' : 'black' }}
        ></textarea>
        {loading && <textarea className="loading" disabled></textarea>}
      </div>
    </div>
  );
};

export default Paraphrase;
