import { LOGIN } from '@/store/actionTypes'
import { login } from '@/api/auth'

export default {
  [LOGIN] ({commit}, {username, password}) {
    login(username, password)
    .then(saveToken)
  },

  [REFRESH_JWT_TOKEN] () {
    // TODO
  }
}
