/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /** 「大項目」「中項目」「小項目」まとめて全部取得する */
  get: {
    status: 200

    /** OK */
    resBody: {
      occupationMainCategories: Types.External11[]
    }
  }
}
