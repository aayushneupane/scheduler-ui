import {
  AUTH_DEFAULT_MSG,
  AUTH_EMAIL_IN_USE,
  AUTH_EMAIL_IN_USE_MSG,
  AUTH_INVALID_EMAIL,
  AUTH_INVALID_EMAIL_MSG,
  AUTH_USER_NOT_FOUND,
  AUTH_USER_NOT_FOUND_MSG,
  AUTH_WRONG_PASSWORD,
  AUTH_WRONG_PASSWORD_MSG
} from '../../constants/auth'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

import { FirebaseError } from 'firebase/app'

export const generateErrorMessage = function (error: FirebaseError): string {
  switch (error.code) {
    case AUTH_INVALID_EMAIL:
      return AUTH_INVALID_EMAIL_MSG
    case AUTH_USER_NOT_FOUND:
      return AUTH_USER_NOT_FOUND_MSG
    case AUTH_WRONG_PASSWORD:
      return AUTH_WRONG_PASSWORD_MSG
    case AUTH_EMAIL_IN_USE:
      return AUTH_EMAIL_IN_USE_MSG
    default:
      return AUTH_DEFAULT_MSG
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const getCurrentUser = async () => {
  return await new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener()
        resolve(user)
      },
      reject
    )
  })
}
