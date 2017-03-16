import React, { PropTypes } from 'react'
import Tweet from './Tweet'

class TweetList extends React.Component {
  componentDidMount() {
    this.props.fetchTweets('kaizerwing')
  }

  PropTypes = {
    tweets: PropTypes.arrayOf(PropTypes.object),
  }

  render() {
    return (
      <div className="tweet-list">
        { this.props.tweets.map(tweet =>
          <Tweet key={tweet.id} {...tweet} />)
        }
      </div>
    )
  }
}

export default TweetList
