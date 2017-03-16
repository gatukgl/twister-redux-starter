import { connect } from 'react-redux'
import { fetchTweets } from '../actions/tweet'
import TweetList from '../components/TweetList'

const mapStateToProps = (state) => ({
  tweets: state.tweets,
})

const mapDispatchToProps = (dispatch) => ({
  fetchTweets: username => dispatch(fetchTweets(username)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TweetList)
