/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  get: {
    status: 200
    /** OK */
    resBody: Types.External9
  }

  patch: {
    status: 200
    /** OK */
    resBody: Types.External9

    reqBody: {
      academicHistory: {
        name: string
        faculty: string
        sinceDate: string
        untilDate: string
        /** 「大学院」「大学」「専門学校」「短期大学」「高校」 */
        type: 'graduate_school' | 'university' | 'vocational_school' | 'junior_college' | 'high_school'
      }
    }
  }

  delete: {
    status: 204
  }
}