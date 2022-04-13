/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  post: {
    status: 201
    /** Created */
    resBody: Types.External2

    reqBody: {
      interestedList: {
        recruitmentId: string
      }
    }
  }
}
