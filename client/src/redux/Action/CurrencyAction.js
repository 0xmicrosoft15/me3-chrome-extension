import types from './types'

const resetStateAction = () => ({
    type: types.RESET_STATE_CURRENCY
})

const setCurrentSelectedCurrency = (currency) => ({
    type: types.CURRENT_CURRENCY,
    currentCurrency: currency
})

export const resetState = (dispatch) => {
    dispatch(resetStateAction())
}

export const setCurrentCurrency = (dispatch, currency) => {
    dispatch(setCurrentSelectedCurrency(currency))
}