import {
  AUTH_DEFAULT_MSG,
  AUTH_INVALID_EMAIL,
  AUTH_INVALID_EMAIL_MSG,
  AUTH_USER_NOT_FOUND,
  AUTH_USER_NOT_FOUND_MSG,
  AUTH_WRONG_PASSWORD,
  AUTH_WRONG_PASSWORD_MSG
} from '../../constants/auth'

import { FirebaseError } from 'firebase/app'

export const generateErrorMessage = function (error: FirebaseError): string {
  switch (error.code) {
    case AUTH_INVALID_EMAIL:
      return AUTH_INVALID_EMAIL_MSG
    case AUTH_USER_NOT_FOUND:
      return AUTH_USER_NOT_FOUND_MSG
    case AUTH_WRONG_PASSWORD:
      return AUTH_WRONG_PASSWORD_MSG
    default:
      return AUTH_DEFAULT_MSG
  }
}
