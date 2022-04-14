/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  get: {
    status: 200

    /** OK */
    resBody: {
      followings: Types.External3[]
    }
  }

  post: {
    status: 200
    /** OK */
    resBody: Types.External3

    reqBody: {
      following: {
        companyId: string
      }
    }
  }
}
