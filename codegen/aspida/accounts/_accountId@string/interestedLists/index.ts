/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  get: {
    status: 200

    /** OK */
    resBody: {
      interestedLists: Types.External2[]
    }
  }

  post: {
    status: 201

    reqBody: {
      interestedList: {
        name: string
        recruitmentIds?: string[] | undefined
      }
    }
  }
}
