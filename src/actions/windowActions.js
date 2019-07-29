import { SET_HAS_ERROR } from './types'

export const setHasError = hasError => dispatch => {
    dispatch ({
        type: SET_HAS_ERROR,
        payload: hasError
    })
}