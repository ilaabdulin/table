import {
  FETCH_MIN_LIST,
  FETCH_MAX_LIST,
  FETCH_MIN_LIST_START,
  FETCH_MAX_LIST_START,
  FETCH_LIST_FAIL
} from '../actionTypes'
import {
  fetchMinList as fetchMinListApi,
  fetchMaxList as fetchMaxListApi
} from '../api'

// использую общую функцию фетча и кладу данные в аргументы

const fetchList = (getApi, action, actionStart) => async dispatch => {
  dispatch({type: actionStart})
  try {
    const list = await getApi()
    dispatch({
      type: action,
      payload: list
    })
  } catch (err) {
    dispatch({
      type: FETCH_LIST_FAIL,
      payload: err,
      error: true
    })
  }
}

// фетч малой таблицы

export const fetchMinList = () => {
  return fetchList(fetchMinListApi, FETCH_MIN_LIST, FETCH_MIN_LIST_START)
}

// фетч большой таблицы

export const fetchMaxList = () => {
  return fetchList(fetchMaxListApi, FETCH_MAX_LIST, FETCH_MAX_LIST_START)
}


