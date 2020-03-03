import {FETCH_MIN_LIST} from '../actionTypes'

const rowsMin = []

export default (state = rowsMin, {type, payload}) => {
  switch (type) {
    case FETCH_MIN_LIST:
      return [...payload]
  }

  return state
}

// ...new Set([...state,...payload])