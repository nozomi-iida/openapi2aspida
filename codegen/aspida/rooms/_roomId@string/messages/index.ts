/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  get: {
    status: 200

    /** OK */
    resBody: {
      messages: Types.External6[]
    }
  }

  post: {
    status: 201
    /** Created */
    resBody: Types.External6

    reqBody: {
      message: {
        accountId: string
        content: string
      }
    }
  }
}
