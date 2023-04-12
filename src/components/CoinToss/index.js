// Write your code here
import {Component} from 'react'

import './index.css'

const HeadsImageUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

const TailsImgUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    tossResultImg: HeadsImageUrl,
    headCoins: 0,
    tailCoins: 0,
  }

  onCoinToss = () => {
    const {headCoins, tailCoins} = this.state
    const toss = Math.floor(Math.random() * 2)
    let tossImg = ''
    let totalHeadCount = headCoins
    let totalTailCount = tailCoins

    if (toss === 0) {
      tossImg = HeadsImageUrl
      totalHeadCount += 1
    } else {
      tossImg = TailsImgUrl
      totalTailCount += 1
    }
    this.setState({
      tossResultImg: tossImg,
      headCoins: totalHeadCount,
      tailCoins: totalTailCount,
    })
  }

  render() {
    const {tossResultImg, headCoins, tailCoins} = this.state
    const totalCount = headCoins + tailCoins

    return (
      <div className="app-container">
        <div className="toss-coin-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img src={tossResultImg} alt="toss result" className="result-image" />
          <button type="button" onClick={this.onCoinToss} className="btn">
            Toss Coin
          </button>
          <div className="counts-container">
            <p className="counts">Total: {totalCount}</p>
            <p className="counts">Heads: {headCoins}</p>
            <p className="counts">Tails: {tailCoins}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
