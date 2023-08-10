import React from "react";

export default function About(props) {
    
    const [myStyle, setMyStyle] = React.useState({
        
        
        color : 'black',
        backgroundColor : 'white'
    })
    const [btnText, setBtnText] = React.useState("Enable Dark Mode")

    const toggleStyle = () => {
        if(myStyle.color === 'white'){
            setMyStyle({
                color : 'black',
                backgroundColor : 'white'
            })
            setBtnText("Enable Dark Mode")
        }
        else{
            setMyStyle({
                color : 'white',
                backgroundColor : 'black',
                border: '1px solid white'
            })
            setBtnText("Enable Light Mode")
        }
    }

    return (
    <div className="container" style={{ backgroundColor: props.mode === 'dark' ? '#212529' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
      <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample" style={{ backgroundColor: props.mode === 'dark' ? '#212529' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{ backgroundColor: props.mode === 'dark' ? '#212529' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}
            >
              Text Statistics
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{ backgroundColor: props.mode === 'dark' ? '#212529' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
            Text Utils is a text analyser which shows you some statistics about your text to help you understand its readability. It shows you Text statistics like Number of Words, Number of Characters, Number of Sentences, Number of Paragraphs, Number of Sentences and Words per Sentence.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={{ backgroundColor: props.mode === 'dark' ? '#212529' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}
            >
              Text Conversion
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body"style={{ backgroundColor: props.mode === 'dark' ? '#212529' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
              Using this tool, you can convert your text from lowercase to uppercase and vice versa, you can also copy the text after modification directly into your clipboard.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={{ backgroundColor: props.mode === 'dark' ? '#212529' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}
            >
              Paraphrasing tool
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{ backgroundColor: props.mode === 'dark' ? '#212529' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
              You can also use our free paraphrasing tool to paraphrase your text. This tool will help you to rewrite your text in a different way. You can also use this tool to remove plagiarism from your text.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container my-3">
        <button onClick={toggleStyle} type="button" className="btn btn-primary">{btnText}</button>
      </div> */}
      
    </div>
  );
}
