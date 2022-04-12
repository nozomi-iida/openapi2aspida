/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  get: {
    query?: {
      /** 検索キーワード */
      keyword?: string | undefined
    } | undefined

    status: 200

    /** OK */
    resBody: {
      companies: Types.External3
    }
  }
}
