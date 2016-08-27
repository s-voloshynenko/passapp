import { SALT_SUBMIT } from '../constants/index.jsx';

export default function salt (state = {
  salt: '',
  view: 'home'
}, action) {
  switch (action.type) {
    case SALT_SUBMIT:
      return { salt: action.salt, view: 'keys' };
    default:
      return state;
  }
}
