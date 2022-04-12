/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  get: {
    query?: {
      type?: 'project' | 'career' | undefined
    } | undefined

    status: 200

    /** OK */
    resBody: {
      employmentStatuses: Types.External13[]
    }
  }
}
