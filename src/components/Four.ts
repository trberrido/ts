// dispatch notes, tu be cleaned
/*
import React from "react";

const Card = ({data}) => {
  return(
    <div id="slide" className="card text-center">
      <h1 data-testid="title">{data.title}</h1>
      <p data-testid="text">{data.text}</p>
    </div>
  );
}
function Slides({ slides }) {
  
  const reducer = (state, action) => {
    switch (action.type) {
      case 'next':
        return {index: state.index + 1};
        break;
      case 'prev':
        return {index: state.index - 1};
        break;
      default: // restart
        return {index:0};
    }
  }

  const [state, dispatch] = React.useReducer(
    reducer, {index: 0});

  return (
    <div>
      <div id="navigation" className="text-center">
        <button
        disabled={state.index === 0}
        onClick={()=>dispatch({type: 'restart'})}
        data-testid="button-restart" className="small outlined">
          Restart
        </button>
        <button
        disabled={state.index === 0}
        onClick={()=>dispatch({type: 'prev'})}
        data-testid="button-prev" className="small">
          Prev
        </button>
        <button
        disabled={state.index === slides.length - 1}
        onClick={()=>dispatch({type: 'next'})}
        data-testid="button-next" className="small">
          Next
        </button>
      </div>
      <Card data={slides[state.index]} />
    </div>
  );
}

export default Slides;

*/
