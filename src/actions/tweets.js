import {saveLikeToggle} from '../utils/api'
export const RECEIVE_TWEETS ='RECEIVE_TWEETS'
export const TOGGLE_TWEET ='TOGGLE_TWEET'

export function receiveTweets (tweets) {
    return {
        type: RECEIVE_TWEETS,
        tweets,
    }
}

function toggletweet ({ id, authedUser, hasLiked})
{
    return {
        type: TOGGLE_TWEET,
        id,
        authedUser,
        hasLiked
    }
}
export function handleToggleTweet (info){
    return(dispatch) => {
        dispatch(toggletweet(info))

        return saveLikeToggle(info)
        .catch((e) => {
            console.warn('Error in handleToggleTweet:', e)
            dispatch(toggletweet(info))
            alert('There was an error liking the tweet. Try again.')

        })
    }
}