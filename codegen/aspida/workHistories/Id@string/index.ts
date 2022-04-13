/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  get: {
    status: 200
    /** OK */
    resBody: Types.External8
  }

  patch: {
    status: 200
    /** OK */
    resBody: Types.External8

    reqBody: {
      workHistory: {
        /** 「在職中」「離職中」 */
        isEmployed: boolean
        occupationId: string
        industryId: string
        position: string
        annualIncome: number
        managementExperience: number
        jobSummary: string
        sinceDate: string
        untilDate: string
        name: string
      }
    }
  }

  delete: {
    status: 204
  }
}
