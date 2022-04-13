/* eslint-disable */
// prettier-ignore
import type { AspidaClient, BasicHeaders } from 'aspida'
// prettier-ignore
import type { Methods as Methods0 } from './academicHistories'
// prettier-ignore
import type { Methods as Methods1 } from './applicants'
// prettier-ignore
import type { Methods as Methods2 } from './followings'
// prettier-ignore
import type { Methods as Methods3 } from './hopes'
// prettier-ignore
import type { Methods as Methods4 } from './interestedLists'
// prettier-ignore
import type { Methods as Methods5 } from './markAsRead'
// prettier-ignore
import type { Methods as Methods6 } from './notifications'
// prettier-ignore
import type { Methods as Methods7 } from './profile'
// prettier-ignore
import type { Methods as Methods8 } from './rooms'
// prettier-ignore
import type { Methods as Methods9 } from './workHistories'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:3000/v1' : baseURL).replace(/\/$/, '')
  const PATH0 = '/accounts/AccountId@string/academicHistories'
  const PATH1 = '/accounts/AccountId@string/applicants'
  const PATH2 = '/accounts/AccountId@string/followings'
  const PATH3 = '/accounts/AccountId@string/hopes'
  const PATH4 = '/accounts/AccountId@string/interestedLists'
  const PATH5 = '/accounts/AccountId@string/markAsRead'
  const PATH6 = '/accounts/AccountId@string/notifications'
  const PATH7 = '/accounts/AccountId@string/profile'
  const PATH8 = '/accounts/AccountId@string/rooms'
  const PATH9 = '/accounts/AccountId@string/workHistories'
  const GET = 'GET'
  const POST = 'POST'
  const PATCH = 'PATCH'

  return {
    academicHistories: {
      /**
       * @returns OK
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
      /**
       * @returns OK
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
      /**
       * @returns Created
       */
      post: (option: { body: Methods0['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).json(),
      /**
       * @returns Created
       */
      $post: (option: { body: Methods0['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH0}`
    },
    applicants: {
      /**
       * @returns OK
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, PATH1, GET, option).json(),
      /**
       * @returns OK
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
      /**
       * @returns Created
       */
      post: (option: { body: Methods1['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods1['post']['resBody'], BasicHeaders, Methods1['post']['status']>(prefix, PATH1, POST, option).json(),
      /**
       * @returns Created
       */
      $post: (option: { body: Methods1['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods1['post']['resBody'], BasicHeaders, Methods1['post']['status']>(prefix, PATH1, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH1}`
    },
    followings: {
      /**
       * @returns OK
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, PATH2, GET, option).json(),
      /**
       * @returns OK
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, PATH2, GET, option).json().then(r => r.body),
      /**
       * @returns OK
       */
      post: (option: { body: Methods2['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, PATH2, POST, option).json(),
      /**
       * @returns OK
       */
      $post: (option: { body: Methods2['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, PATH2, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH2}`
    },
    hopes: {
      /**
       * @returns Created
       */
      post: (option: { body: Methods3['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods3['post']['resBody'], BasicHeaders, Methods3['post']['status']>(prefix, PATH3, POST, option).json(),
      /**
       * @returns Created
       */
      $post: (option: { body: Methods3['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods3['post']['resBody'], BasicHeaders, Methods3['post']['status']>(prefix, PATH3, POST, option).json().then(r => r.body),
      /**
       * @returns OK
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, PATH3, GET, option).json(),
      /**
       * @returns OK
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, PATH3, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH3}`
    },
    interestedLists: {
      /**
       * @returns OK
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, PATH4, GET, option).json(),
      /**
       * @returns OK
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, PATH4, GET, option).json().then(r => r.body),
      post: (option: { body: Methods4['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods4['post']['status']>(prefix, PATH4, POST, option).send(),
      $post: (option: { body: Methods4['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods4['post']['status']>(prefix, PATH4, POST, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH4}`
    },
    markAsRead: {
      post: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods5['post']['status']>(prefix, PATH5, POST, option).send(),
      $post: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods5['post']['status']>(prefix, PATH5, POST, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH5}`
    },
    notifications: {
      /**
       * @returns OK
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods6['get']['resBody'], BasicHeaders, Methods6['get']['status']>(prefix, PATH6, GET, option).json(),
      /**
       * @returns OK
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods6['get']['resBody'], BasicHeaders, Methods6['get']['status']>(prefix, PATH6, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH6}`
    },
    profile: {
      /**
       * @returns OK
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods7['get']['resBody'], BasicHeaders, Methods7['get']['status']>(prefix, PATH7, GET, option).json(),
      /**
       * @returns OK
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods7['get']['resBody'], BasicHeaders, Methods7['get']['status']>(prefix, PATH7, GET, option).json().then(r => r.body),
      /**
       * @returns Created
       */
      post: (option: { body: Methods7['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods7['post']['resBody'], BasicHeaders, Methods7['post']['status']>(prefix, PATH7, POST, option).json(),
      /**
       * @returns Created
       */
      $post: (option: { body: Methods7['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods7['post']['resBody'], BasicHeaders, Methods7['post']['status']>(prefix, PATH7, POST, option).json().then(r => r.body),
      /**
       * @returns OK
       */
      patch: (option: { body: Methods7['patch']['reqBody'], config?: T | undefined }) =>
        fetch<Methods7['patch']['resBody'], BasicHeaders, Methods7['patch']['status']>(prefix, PATH7, PATCH, option).json(),
      /**
       * @returns OK
       */
      $patch: (option: { body: Methods7['patch']['reqBody'], config?: T | undefined }) =>
        fetch<Methods7['patch']['resBody'], BasicHeaders, Methods7['patch']['status']>(prefix, PATH7, PATCH, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH7}`
    },
    rooms: {
      /**
       * @returns OK
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods8['get']['resBody'], BasicHeaders, Methods8['get']['status']>(prefix, PATH8, GET, option).json(),
      /**
       * @returns OK
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods8['get']['resBody'], BasicHeaders, Methods8['get']['status']>(prefix, PATH8, GET, option).json().then(r => r.body),
      /**
       * @returns Created
       */
      post: (option: { body: Methods8['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods8['post']['resBody'], BasicHeaders, Methods8['post']['status']>(prefix, PATH8, POST, option).json(),
      /**
       * @returns Created
       */
      $post: (option: { body: Methods8['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods8['post']['resBody'], BasicHeaders, Methods8['post']['status']>(prefix, PATH8, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH8}`
    },
    workHistories: {
      /**
       * @returns OK
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods9['get']['resBody'], BasicHeaders, Methods9['get']['status']>(prefix, PATH9, GET, option).json(),
      /**
       * @returns OK
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods9['get']['resBody'], BasicHeaders, Methods9['get']['status']>(prefix, PATH9, GET, option).json().then(r => r.body),
      /**
       * @returns Created
       */
      post: (option: { body: Methods9['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods9['post']['resBody'], BasicHeaders, Methods9['post']['status']>(prefix, PATH9, POST, option).json(),
      /**
       * @returns Created
       */
      $post: (option: { body: Methods9['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods9['post']['resBody'], BasicHeaders, Methods9['post']['status']>(prefix, PATH9, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH9}`
    }
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
