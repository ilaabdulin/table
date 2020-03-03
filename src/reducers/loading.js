import {FETCH_MIN_LIST, FETCH_MIN_LIST_START, FETCH_MAX_LIST_START, FETCH_MAX_LIST} from '../actionTypes'

const loading = {
  loadMin: false,
  loadMax: false
};

export default (state = loading, {type}) => {
  switch (type) {
    case FETCH_MIN_LIST_START:
        return {
          ...state,
          loadMin: true
        }
    case FETCH_MAX_LIST_START:
        return {
          ...state,
          loadMax: true
        }
    case FETCH_MIN_LIST:
        return {
          ...state,
          loadMin: false
        }
    case FETCH_MAX_LIST:
        return {
          ...state,
          loadMax: false
        }
  }
  return state;
}
