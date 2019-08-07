/* eslint-disable no-console */
/* eslint-disable prefer-destructuring */
import {
  takeEvery, select, call, put,
} from 'redux-saga/effects'; // Allows us to listen to any actions

// 1. Swap currency
// 2. Change base currency
// 3. Make remote request on initial App load

import {
  SWAP_CURRENCY,
  CHANGE_BASE_CURRENCY,
  GET_INITIAL_CONVERSION,
  CONVERSION_RESULT,
  CONVERSION_ERROR,
} from '../actions/currencies';

const getLatestRate = currency => fetch(`https://fixer.handlebarlabs.com/latest?base=${currency}`);

function* fetchLatestConversionRates(action) {
  // getLatestRate('USD')
  //   .then(res => res.json())
  //   .then(res => console.log(res))
  //   .catch(err => console.log('ERROR:', err));
  try {
    let currency = action.currency;
    if (currency === undefined) {
      currency = yield select(state => state.currencies.baseCurrency);
    }

    const response = yield call(getLatestRate, currency); // call returns an object from request
    const result = yield response.json(); // yield waits for conversion to actually happen

    if (result.error) {
      // If there was an error
      yield put({ type: CONVERSION_ERROR, error: result.error });
    } else {
      // If successful
      yield put({ type: CONVERSION_RESULT, result });
    }
  } catch (err) {
    yield put({ type: CONVERSION_ERROR, error: err.message });
  }
}

// Generator function (function*)
export default function* rootSaga() {
  yield takeEvery(GET_INITIAL_CONVERSION, fetchLatestConversionRates);
  yield takeEvery(SWAP_CURRENCY, fetchLatestConversionRates);
  yield takeEvery(CHANGE_BASE_CURRENCY, fetchLatestConversionRates);
}
