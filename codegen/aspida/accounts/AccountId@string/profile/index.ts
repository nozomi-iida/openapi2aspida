/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  get: {
    status: 200
    /** OK */
    resBody: Types.External10
  }

  post: {
    status: 201
    /** Created */
    resBody: Types.External10

    reqBody: {
      profile: {
        firstName: string
        lastName: string
        firstNameKana: string
        lastNameKana: string
        gender: 'MALE' | 'FEMALE' | 'OTHER'
        phone: string
        postalCode?: string | undefined
        address?: string | undefined
        dateOfBirth: string
        biography?: string | undefined
      }
    }
  }

  patch: {
    status: 200
    /** OK */
    resBody: Types.External10

    reqBody: {
      profile: {
        firstName: string
        lastName: string
        firstNameKana: string
        lastNameKana: string
        gender: 'MALE' | 'FEMALE' | 'OTHER'
        phone: string
        postalCode: string
        address: string
        dateOfBirth: string
        biography: string
      }
    }
  }
}
