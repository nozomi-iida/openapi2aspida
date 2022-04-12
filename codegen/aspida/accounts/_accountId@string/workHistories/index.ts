/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  get: {
    status: 200

    /** OK */
    resBody: {
      workHistories: Types.External8[]
    }
  }

  post: {
    status: 201
    /** Created */
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
        jobSummary?: string | undefined
        sinceDate: string
        untilDate?: string | undefined
        name: string
      }
    }
  }
}
