/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  get: {
    status: 200

    /** OK */
    resBody: {
      applicants: Types.External7[]
    }
  }

  post: {
    status: 201
    /** Created */
    resBody: Types.External7

    reqBody: {
      applicant: {
        recruitmentId: string
      }
    }
  }
}
