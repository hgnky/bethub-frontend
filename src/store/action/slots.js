import axios from 'axios'
import { GET_ALL_GAMES, GET_SLOT_GAMES } from '../types'

export const getSlotGames = () => dispatch => {
    axios.get(process.env.REACT_APP_API_URL + "/slots")
        .then(res => {
            dispatch({
                type: GET_SLOT_GAMES,
                payload: res.data.push_games
            })
            dispatch({
                type: GET_ALL_GAMES,
                payload: res.data.all_games
            })
        })
        .catch(err => console.log(err.response.data))
}