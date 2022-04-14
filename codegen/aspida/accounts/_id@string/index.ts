/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  get: {
    status: 200
    /** OK */
    resBody: Types.External0
  }

  patch: {
    status: 200
    /** OK */
    resBody: Types.External0

    reqBody: {
      account: {
        email: string
      }
    }
  }

  delete: {
    status: 204
  }
}
