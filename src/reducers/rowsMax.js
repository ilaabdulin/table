import {FETCH_MAX_LIST} from '../actionTypes'

const rowsMax = []

export default (state = rowsMax, {type, payload}) => {
  switch (type) {
    case FETCH_MAX_LIST:
      return [...payload]
  }

  return state
}