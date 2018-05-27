/**
 * Mocking client-server processing
 */
import user from './fakeUser'

const TIMEOUT = 100

export const api = {
  login() {
    return new Promise(resolve => {
      setTimeout(() => resolve(user), TIMEOUT)
    })
  },
  logout() {
    return new Promise(resolve => {
      setTimeout(() => resolve(user), TIMEOUT)
    })
  }
}