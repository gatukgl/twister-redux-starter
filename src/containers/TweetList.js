import { connect } from 'react-redux'
import { matchPath } from 'react-router-dom'
import { fetchTweets } from '../actions/tweet'
import TweetList from '../components/TweetList'

const mapStateToProps = (state) => {
  const match = matchPath(
    state.router.location.pathname,
    { path: '/:ownerUsername' }
  )
  return {
    tweets: state.tweets,
    ownerUsername: match ? match.params.ownerUsername : null,
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchTweets: username => dispatch(fetchTweets(username)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TweetList)
