import React from 'react';
import './index.css';

function StarFilled({className}) {
  return <span className={className}>&#9733;</span>

}
function StarEmpty({className}) {
  return <span className={className}>&#9734;</span>
}
class Rating extends React.Component {
  state = {
    minRating: 1,
    maxRating: 3,
    currentRating: 2,
    rateInterval: 1
  }

  maxStars() {
    let { maxRating, rateInterval } = this.state
    return maxRating / rateInterval
  }

  fullStars() {
    let { currentRating, rateInterval } = this.state
    return currentRating / rateInterval
  }
  emptyStars() {
    return this.maxStars() - this.fullStars()
  }
  onclick = (e) => {
    let {currentRating} = this.state
    let item = e.target
    let index = [...Array.from(item.parentElement.children)].indexOf(item) + 1
    let updatedRate = () => {
      if (index === currentRating) {
        return index - 1
      } else {
        return index
      }
    }
    this.setRating(updatedRate())
  }
  setRating = (currentRating) => {
    this.setState({currentRating})
  }

  render() {
    let fullStars = this.fullStars()
    let emptyStars = this.emptyStars()

    let renderFullStars = () => {
      return fullStars !== 0
        ? Array(fullStars)
          .fill(null)
          .map((item, i) => {
            return <StarFilled className="star" key={`fs${i}`} />
          })
        : ''
    }
    let renderEmptyStars = () => {
      return emptyStars !== 0
        ? Array(emptyStars)
          .fill(null)
          .map((item, i) => {
            return <StarEmpty className="star" key={`es${i}`} />
          })
        : ''
    }
    return(
      <div className="container" onClick={this.onclick}>
        {renderFullStars()}
        {renderEmptyStars()}
      </div>
    );
  }
}

export default Rating;
