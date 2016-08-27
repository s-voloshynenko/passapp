import * as types from '../constants/index.jsx';

export function submitSalt (salt) {
  return { type: types.SALT_SUBMIT, salt };
}
