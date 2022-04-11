/* eslint-disable */
// prettier-ignore
import type { AspidaClient, BasicHeaders } from 'aspida'
// prettier-ignore
import { dataToURLString } from 'aspida'
// prettier-ignore
import type { Methods as Methods0 } from './dummyData/2'
// prettier-ignore
import type { Methods as Methods1 } from './dummyData/_a1@number/simple'
// prettier-ignore
import type { Methods as Methods2 } from './dummyData/_id@number/content'
// prettier-ignore
import type { Methods as Methods3 } from './dummyData/_id@number/query'
// prettier-ignore
import type { Methods as Methods4 } from './dummyData/_id@number/simple'
// prettier-ignore
import type { Methods as Methods5 } from './file/_id@number/upload'
// prettier-ignore
import type { Methods as Methods6 } from './user/_id@number'
// prettier-ignore
import type { Methods as Methods7 } from './user/_id@number/2'
// prettier-ignore
import type { Methods as Methods8 } from './user/_id@number/xyz'
// prettier-ignore
import type { Methods as Methods9 } from './user/_userId/abc'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/dummyData/2'
  const PATH1 = '/dummyData'
  const PATH2 = '/simple'
  const PATH3 = '/content'
  const PATH4 = '/query'
  const PATH5 = '/file'
  const PATH6 = '/upload'
  const PATH7 = '/user'
  const PATH8 = '/2'
  const PATH9 = '/xyz'
  const PATH10 = '/abc'
  const GET = 'GET'
  const POST = 'POST'
  const PUT = 'PUT'
  const DELETE = 'DELETE'
  const PATCH = 'PATCH'

  return {
    dummyData: {
      $2: {
        put: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods0['put']['status']>(prefix, PATH0, PUT, option).send(),
        $put: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods0['put']['status']>(prefix, PATH0, PUT, option).send().then(r => r.body),
        $path: () => `${prefix}${PATH0}`
      },
      _a1: (val1: number) => {
        const prefix1 = `${PATH1}/${val1}`

        return {
          simple: {
            put: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods1['put']['status']>(prefix, `${prefix1}${PATH2}`, PUT, option).send(),
            $put: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods1['put']['status']>(prefix, `${prefix1}${PATH2}`, PUT, option).send().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH2}`
          }
        }
      },
      _id: (val1: number) => {
        const prefix1 = `${PATH1}/${val1}`

        return {
          content: {
            /**
             * @returns accept
             */
            put: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods2['put']['resBody'], BasicHeaders, Methods2['put']['status']>(prefix, `${prefix1}${PATH3}`, PUT, option).text(),
            /**
             * @returns accept
             */
            $put: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods2['put']['resBody'], BasicHeaders, Methods2['put']['status']>(prefix, `${prefix1}${PATH3}`, PUT, option).text().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH3}`
          },
          query: {
            put: (option?: { query?: Methods3['put']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods3['put']['status']>(prefix, `${prefix1}${PATH4}`, PUT, option).send(),
            $put: (option?: { query?: Methods3['put']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods3['put']['status']>(prefix, `${prefix1}${PATH4}`, PUT, option).send().then(r => r.body),
            $path: (option?: { method: 'put'; query: Methods3['put']['query'] } | undefined) =>
              `${prefix}${prefix1}${PATH4}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          },
          simple: {
            put: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods4['put']['status']>(prefix, `${prefix1}${PATH2}`, PUT, option).send(),
            $put: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods4['put']['status']>(prefix, `${prefix1}${PATH2}`, PUT, option).send().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH2}`
          }
        }
      }
    },
    file: {
      _id: (val1: number) => {
        const prefix1 = `${PATH5}/${val1}`

        return {
          upload: {
            post: (option: { body: Methods5['post']['reqBody'], query?: Methods5['post']['query'] | undefined, config?: T | undefined }) =>
              fetch<void, BasicHeaders, Methods5['post']['status']>(prefix, `${prefix1}${PATH6}`, POST, option).send(),
            $post: (option: { body: Methods5['post']['reqBody'], query?: Methods5['post']['query'] | undefined, config?: T | undefined }) =>
              fetch<void, BasicHeaders, Methods5['post']['status']>(prefix, `${prefix1}${PATH6}`, POST, option).send().then(r => r.body),
            $path: (option?: { method: 'post'; query: Methods5['post']['query'] } | undefined) =>
              `${prefix}${prefix1}${PATH6}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          }
        }
      }
    },
    user: {
      _id: (val1: number) => {
        const prefix1 = `${PATH7}/${val1}`

        return {
          $2: {
            /**
             * @returns accept
             */
            get: (option: { query: Methods7['get']['query'], config?: T | undefined }) =>
              fetch<Methods7['get']['resBody'], BasicHeaders, Methods7['get']['status']>(prefix, `${prefix1}${PATH8}`, GET, option).json(),
            /**
             * @returns accept
             */
            $get: (option: { query: Methods7['get']['query'], config?: T | undefined }) =>
              fetch<Methods7['get']['resBody'], BasicHeaders, Methods7['get']['status']>(prefix, `${prefix1}${PATH8}`, GET, option).json().then(r => r.body),
            /**
             * @returns accept
             */
            post: (option: { query: Methods7['post']['query'], config?: T | undefined }) =>
              fetch<Methods7['post']['resBody'], BasicHeaders, Methods7['post']['status']>(prefix, `${prefix1}${PATH8}`, POST, option).json(),
            /**
             * @returns accept
             */
            $post: (option: { query: Methods7['post']['query'], config?: T | undefined }) =>
              fetch<Methods7['post']['resBody'], BasicHeaders, Methods7['post']['status']>(prefix, `${prefix1}${PATH8}`, POST, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods7['get']['query'] } | { method: 'post'; query: Methods7['post']['query'] } | undefined) =>
              `${prefix}${prefix1}${PATH8}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          },
          xyz: {
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods8['get']['status']>(prefix, `${prefix1}${PATH9}`, GET, option).send(),
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods8['get']['status']>(prefix, `${prefix1}${PATH9}`, GET, option).send().then(r => r.body),
            put: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods8['put']['status']>(prefix, `${prefix1}${PATH9}`, PUT, option).send(),
            $put: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods8['put']['status']>(prefix, `${prefix1}${PATH9}`, PUT, option).send().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH9}`
          },
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods6['get']['status']>(prefix, prefix1, GET, option).send(),
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods6['get']['status']>(prefix, prefix1, GET, option).send().then(r => r.body),
          patch: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods6['patch']['status']>(prefix, prefix1, PATCH, option).send(),
          $patch: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods6['patch']['status']>(prefix, prefix1, PATCH, option).send().then(r => r.body),
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods6['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods6['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      _userId: (val1: number | string) => {
        const prefix1 = `${PATH7}/${val1}`

        return {
          abc: {
            get: (option?: { query?: Methods9['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods9['get']['status']>(prefix, `${prefix1}${PATH10}`, GET, option).send(),
            $get: (option?: { query?: Methods9['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods9['get']['status']>(prefix, `${prefix1}${PATH10}`, GET, option).send().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods9['get']['query'] } | undefined) =>
              `${prefix}${prefix1}${PATH10}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          }
        }
      }
    }
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
