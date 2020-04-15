import React from 'react';
import Rating from "./Rating";


class App extends React.Component{
  state = {
    minRating: 0,
    maxRating: 3,//n
    currentRating: 2,//f
    rateInterval: 1
  }

  render() {
    let {currentRating, maxRating} = this.state
    return (
      <div className="App">
          <Rating
            currentRating={currentRating}
            maxRating={maxRating}
          />
        </div>
    )
  }
}

export default App;
