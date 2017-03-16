import { FETCH_TWEETS_SUCCESS } from './types'

const fetchTweetsSuccess = tweets => ({
  type: FETCH_TWEETS_SUCCESS,
  payload: {
    tweets,
  },
})

const fetchTweets = username => dispatch => {
  const uri = `http://150.107.29.233:3030/api/Tweets?filter={"where":{"username":"${username}"}}`
  fetch(uri)
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText)
      }
      return response.json()
    })
    .then(tweets => dispatch(fetchTweetsSuccess(tweets)))
    .catch(e => conaole.log('error while fetching tweets', e))
}

export {
  fetchTweets,
}
