/* eslint-disable */
import type { ReadStream } from 'fs'
import type * as Types from '../../../../@types'

export type Methods = {
  post: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken
    status: 200

    /** OK */
    resBody: {
      id: string
    }

    reqFormat: FormData

    reqBody: {
      /** audio to upload. */
      file: File | ReadStream
    }
  }
}
