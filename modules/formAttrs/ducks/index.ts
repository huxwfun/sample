const InitialState = {
  deadline: null,
  password: null,
  oncePerIP: false,
  oncePerDay: false
}

// Actions
const SET_DEADLINE   = 'formAttrs/setDeadline'
const SET_PASSWORD = 'formAttrs/setPassword'
const TOGGLE_ONCE_PER_IP = 'formAttrs/toggleOncePerIP'
const TOGGLE_ONCE_PER_DAY = 'formAttrs/toggleOncePerDay'

// Reducer
export default function reducer (state = InitialState, action) {
  switch (action.type) {
    case SET_DEADLINE:
      return {...state, deadline: action.value}
    case SET_PASSWORD:
      return {...state, password: action.value}
    case TOGGLE_ONCE_PER_IP:
      return {...state, oncePerIP: !state.oncePerIP}
    case TOGGLE_ONCE_PER_DAY:
      return {...state, oncePerDay: !state.oncePerDay}
    default: return state
  }
}

// Action Creators
export const setDeadline = deadline => ({ type: SET_DEADLINE, value: deadline })

export const setPassword = password => ({ type: SET_PASSWORD, value: password })

export const toggleOncePerIP = () => ({ type: TOGGLE_ONCE_PER_IP })

export const toggleOncePerDay = () => ({ type: TOGGLE_ONCE_PER_DAY })
