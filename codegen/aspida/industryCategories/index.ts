/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /** 業種まとめて全部取得する */
  get: {
    status: 200

    /** OK */
    resBody: {
      industryCategories: Types.External12[]
    }
  }
}