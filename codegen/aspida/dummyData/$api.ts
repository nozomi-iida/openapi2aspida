/* eslint-disable */
// prettier-ignore
import type { AspidaClient, BasicHeaders } from 'aspida'
// prettier-ignore
import { dataToURLString } from 'aspida'
// prettier-ignore
import type { Methods as Methods0 } from './2'
// prettier-ignore
import type { Methods as Methods1 } from './_a1@number/simple'
// prettier-ignore
import type { Methods as Methods2 } from './_id@number/content'
// prettier-ignore
import type { Methods as Methods3 } from './_id@number/query'
// prettier-ignore
import type { Methods as Methods4 } from './_id@number/simple'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/dummyData/2'
  const PATH1 = '/dummyData'
  const PATH2 = '/simple'
  const PATH3 = '/content'
  const PATH4 = '/query'
  const PUT = 'PUT'

  return {
    $2: {
      put: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods0['put']['status']>(prefix, PATH0, PUT, option).send(),
      $put: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods0['put']['status']>(prefix, PATH0, PUT, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH0}`
    },
    _a1: (val0: number) => {
      const prefix0 = `${PATH1}/${val0}`

      return {
        simple: {
          put: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods1['put']['status']>(prefix, `${prefix0}${PATH2}`, PUT, option).send(),
          $put: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods1['put']['status']>(prefix, `${prefix0}${PATH2}`, PUT, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix0}${PATH2}`
        }
      }
    },
    _id: (val0: number) => {
      const prefix0 = `${PATH1}/${val0}`

      return {
        content: {
          /**
           * @returns accept
           */
          put: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods2['put']['resBody'], BasicHeaders, Methods2['put']['status']>(prefix, `${prefix0}${PATH3}`, PUT, option).text(),
          /**
           * @returns accept
           */
          $put: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods2['put']['resBody'], BasicHeaders, Methods2['put']['status']>(prefix, `${prefix0}${PATH3}`, PUT, option).text().then(r => r.body),
          $path: () => `${prefix}${prefix0}${PATH3}`
        },
        query: {
          put: (option?: { query?: Methods3['put']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods3['put']['status']>(prefix, `${prefix0}${PATH4}`, PUT, option).send(),
          $put: (option?: { query?: Methods3['put']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods3['put']['status']>(prefix, `${prefix0}${PATH4}`, PUT, option).send().then(r => r.body),
          $path: (option?: { method: 'put'; query: Methods3['put']['query'] } | undefined) =>
            `${prefix}${prefix0}${PATH4}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        },
        simple: {
          put: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods4['put']['status']>(prefix, `${prefix0}${PATH2}`, PUT, option).send(),
          $put: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods4['put']['status']>(prefix, `${prefix0}${PATH2}`, PUT, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix0}${PATH2}`
        }
      }
    }
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
