/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  delete: {
    status: 204
  }

  patch: {
    status: 200
    /** OK */
    resBody: Types.External2

    reqBody: {
      interestedList: {
        name: string
        recruitments: Types.External1[]
      }
    }
  }

  get: {
    status: 200
    /** OK */
    resBody: Types.External2
  }
}
