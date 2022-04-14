/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  get: {
    status: 200
    /** OK */
    resBody: Types.External14
  }

  patch: {
    status: 200
    /** OK */
    resBody: Types.External14

    reqBody: {
      hope: {
        /** 何ヶ月以内に転職したいか */
        timeToChangeJob: number
        annualIncome: number
        type: 'career' | 'project'
        /** StateのID */
        workplaceId: string
        employmentStatusIds: string[]
        occupationIds: string[]
      }
    }
  }
}
