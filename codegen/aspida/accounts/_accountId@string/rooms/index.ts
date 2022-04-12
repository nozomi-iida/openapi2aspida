/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  get: {
    status: 200

    /** OK */
    resBody: {
      rooms: Types.External5[]
    }
  }

  post: {
    status: 201
    /** Created */
    resBody: Types.External5

    reqBody: {
      room: {
        companyId: string
      }
    }
  }
}
