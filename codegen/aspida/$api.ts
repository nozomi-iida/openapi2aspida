/* eslint-disable */
// prettier-ignore
import type { AspidaClient, BasicHeaders } from 'aspida'
// prettier-ignore
import { dataToURLString } from 'aspida'
// prettier-ignore
import type { Methods as Methods0 } from './academicHistories/Id@string'
// prettier-ignore
import type { Methods as Methods1 } from './accounts/AccountId@string/academicHistories'
// prettier-ignore
import type { Methods as Methods2 } from './accounts/AccountId@string/applicants'
// prettier-ignore
import type { Methods as Methods3 } from './accounts/AccountId@string/followings'
// prettier-ignore
import type { Methods as Methods4 } from './accounts/AccountId@string/hopes'
// prettier-ignore
import type { Methods as Methods5 } from './accounts/AccountId@string/interestedLists'
// prettier-ignore
import type { Methods as Methods6 } from './accounts/AccountId@string/markAsRead'
// prettier-ignore
import type { Methods as Methods7 } from './accounts/AccountId@string/notifications'
// prettier-ignore
import type { Methods as Methods8 } from './accounts/AccountId@string/profile'
// prettier-ignore
import type { Methods as Methods9 } from './accounts/AccountId@string/rooms'
// prettier-ignore
import type { Methods as Methods10 } from './accounts/AccountId@string/workHistories'
// prettier-ignore
import type { Methods as Methods11 } from './accounts/Id@string'
// prettier-ignore
import type { Methods as Methods12 } from './companies'
// prettier-ignore
import type { Methods as Methods13 } from './companies/CompanyId@string/recruitments'
// prettier-ignore
import type { Methods as Methods14 } from './companies/Id@string'
// prettier-ignore
import type { Methods as Methods15 } from './companies/recommended'
// prettier-ignore
import type { Methods as Methods16 } from './employmentStatuses'
// prettier-ignore
import type { Methods as Methods17 } from './followings/Id@string'
// prettier-ignore
import type { Methods as Methods18 } from './hopes/Id@string'
// prettier-ignore
import type { Methods as Methods19 } from './industryCategories'
// prettier-ignore
import type { Methods as Methods20 } from './interestedLists/Id@string'
// prettier-ignore
import type { Methods as Methods21 } from './interestedLists/InterestedListId@string/recruitments'
// prettier-ignore
import type { Methods as Methods22 } from './interestedLists/InterestedListId@string/recruitments/Id@string'
// prettier-ignore
import type { Methods as Methods23 } from './messages/Id@string'
// prettier-ignore
import type { Methods as Methods24 } from './occupationMainCategories'
// prettier-ignore
import type { Methods as Methods25 } from './prefectures'
// prettier-ignore
import type { Methods as Methods26 } from './recruitments'
// prettier-ignore
import type { Methods as Methods27 } from './recruitments/Id@string'
// prettier-ignore
import type { Methods as Methods28 } from './recruitments/recommended'
// prettier-ignore
import type { Methods as Methods29 } from './rooms/Id@string'
// prettier-ignore
import type { Methods as Methods30 } from './rooms/RoomId@string/messages'
// prettier-ignore
import type { Methods as Methods31 } from './workHistories/Id@string'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:3000/v1' : baseURL).replace(/\/$/, '')
  const PATH0 = '/academicHistories/Id@string'
  const PATH1 = '/accounts/AccountId@string/academicHistories'
  const PATH2 = '/accounts/AccountId@string/applicants'
  const PATH3 = '/accounts/AccountId@string/followings'
  const PATH4 = '/accounts/AccountId@string/hopes'
  const PATH5 = '/accounts/AccountId@string/interestedLists'
  const PATH6 = '/accounts/AccountId@string/markAsRead'
  const PATH7 = '/accounts/AccountId@string/notifications'
  const PATH8 = '/accounts/AccountId@string/profile'
  const PATH9 = '/accounts/AccountId@string/rooms'
  const PATH10 = '/accounts/AccountId@string/workHistories'
  const PATH11 = '/accounts/Id@string'
  const PATH12 = '/companies'
  const PATH13 = '/companies/CompanyId@string/recruitments'
  const PATH14 = '/companies/Id@string'
  const PATH15 = '/companies/recommended'
  const PATH16 = '/employmentStatuses'
  const PATH17 = '/followings/Id@string'
  const PATH18 = '/hopes/Id@string'
  const PATH19 = '/industryCategories'
  const PATH20 = '/interestedLists/Id@string'
  const PATH21 = '/interestedLists/InterestedListId@string/recruitments'
  const PATH22 = '/interestedLists/InterestedListId@string/recruitments/Id@string'
  const PATH23 = '/messages/Id@string'
  const PATH24 = '/occupationMainCategories'
  const PATH25 = '/prefectures'
  const PATH26 = '/recruitments'
  const PATH27 = '/recruitments/Id@string'
  const PATH28 = '/recruitments/recommended'
  const PATH29 = '/rooms/Id@string'
  const PATH30 = '/rooms/RoomId@string/messages'
  const PATH31 = '/workHistories/Id@string'
  const GET = 'GET'
  const POST = 'POST'
  const DELETE = 'DELETE'
  const PATCH = 'PATCH'

  return {
    academicHistories: {
      Id_string: {
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
         * @returns OK
         */
        patch: (option: { body: Methods0['patch']['reqBody'], config?: T | undefined }) =>
          fetch<Methods0['patch']['resBody'], BasicHeaders, Methods0['patch']['status']>(prefix, PATH0, PATCH, option).json(),
        /**
         * @returns OK
         */
        $patch: (option: { body: Methods0['patch']['reqBody'], config?: T | undefined }) =>
          fetch<Methods0['patch']['resBody'], BasicHeaders, Methods0['patch']['status']>(prefix, PATH0, PATCH, option).json().then(r => r.body),
        delete: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods0['delete']['status']>(prefix, PATH0, DELETE, option).send(),
        $delete: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods0['delete']['status']>(prefix, PATH0, DELETE, option).send().then(r => r.body),
        $path: () => `${prefix}${PATH0}`
      }
    },
    accounts: {
      AccountId_string: {
        academicHistories: {
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
        applicants: {
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
           * @returns Created
           */
          post: (option: { body: Methods2['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, PATH2, POST, option).json(),
          /**
           * @returns Created
           */
          $post: (option: { body: Methods2['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, PATH2, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH2}`
        },
        followings: {
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
          /**
           * @returns OK
           */
          post: (option: { body: Methods3['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods3['post']['resBody'], BasicHeaders, Methods3['post']['status']>(prefix, PATH3, POST, option).json(),
          /**
           * @returns OK
           */
          $post: (option: { body: Methods3['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods3['post']['resBody'], BasicHeaders, Methods3['post']['status']>(prefix, PATH3, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH3}`
        },
        hopes: {
          /**
           * @returns Created
           */
          post: (option: { body: Methods4['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods4['post']['resBody'], BasicHeaders, Methods4['post']['status']>(prefix, PATH4, POST, option).json(),
          /**
           * @returns Created
           */
          $post: (option: { body: Methods4['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods4['post']['resBody'], BasicHeaders, Methods4['post']['status']>(prefix, PATH4, POST, option).json().then(r => r.body),
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
          $path: () => `${prefix}${PATH4}`
        },
        interestedLists: {
          /**
           * @returns OK
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, PATH5, GET, option).json(),
          /**
           * @returns OK
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, PATH5, GET, option).json().then(r => r.body),
          post: (option: { body: Methods5['post']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods5['post']['status']>(prefix, PATH5, POST, option).send(),
          $post: (option: { body: Methods5['post']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods5['post']['status']>(prefix, PATH5, POST, option).send().then(r => r.body),
          $path: () => `${prefix}${PATH5}`
        },
        markAsRead: {
          post: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods6['post']['status']>(prefix, PATH6, POST, option).send(),
          $post: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods6['post']['status']>(prefix, PATH6, POST, option).send().then(r => r.body),
          $path: () => `${prefix}${PATH6}`
        },
        notifications: {
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
          $path: () => `${prefix}${PATH7}`
        },
        profile: {
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
          /**
           * @returns OK
           */
          patch: (option: { body: Methods8['patch']['reqBody'], config?: T | undefined }) =>
            fetch<Methods8['patch']['resBody'], BasicHeaders, Methods8['patch']['status']>(prefix, PATH8, PATCH, option).json(),
          /**
           * @returns OK
           */
          $patch: (option: { body: Methods8['patch']['reqBody'], config?: T | undefined }) =>
            fetch<Methods8['patch']['resBody'], BasicHeaders, Methods8['patch']['status']>(prefix, PATH8, PATCH, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH8}`
        },
        rooms: {
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
        },
        workHistories: {
          /**
           * @returns OK
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods10['get']['resBody'], BasicHeaders, Methods10['get']['status']>(prefix, PATH10, GET, option).json(),
          /**
           * @returns OK
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods10['get']['resBody'], BasicHeaders, Methods10['get']['status']>(prefix, PATH10, GET, option).json().then(r => r.body),
          /**
           * @returns Created
           */
          post: (option: { body: Methods10['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods10['post']['resBody'], BasicHeaders, Methods10['post']['status']>(prefix, PATH10, POST, option).json(),
          /**
           * @returns Created
           */
          $post: (option: { body: Methods10['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods10['post']['resBody'], BasicHeaders, Methods10['post']['status']>(prefix, PATH10, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH10}`
        }
      },
      Id_string: {
        /**
         * @returns OK
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods11['get']['resBody'], BasicHeaders, Methods11['get']['status']>(prefix, PATH11, GET, option).json(),
        /**
         * @returns OK
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods11['get']['resBody'], BasicHeaders, Methods11['get']['status']>(prefix, PATH11, GET, option).json().then(r => r.body),
        /**
         * @returns OK
         */
        patch: (option: { body: Methods11['patch']['reqBody'], config?: T | undefined }) =>
          fetch<Methods11['patch']['resBody'], BasicHeaders, Methods11['patch']['status']>(prefix, PATH11, PATCH, option).json(),
        /**
         * @returns OK
         */
        $patch: (option: { body: Methods11['patch']['reqBody'], config?: T | undefined }) =>
          fetch<Methods11['patch']['resBody'], BasicHeaders, Methods11['patch']['status']>(prefix, PATH11, PATCH, option).json().then(r => r.body),
        delete: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods11['delete']['status']>(prefix, PATH11, DELETE, option).send(),
        $delete: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods11['delete']['status']>(prefix, PATH11, DELETE, option).send().then(r => r.body),
        $path: () => `${prefix}${PATH11}`
      }
    },
    companies: {
      CompanyId_string: {
        recruitments: {
          /**
           * @returns OK
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods13['get']['resBody'], BasicHeaders, Methods13['get']['status']>(prefix, PATH13, GET, option).json(),
          /**
           * @returns OK
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods13['get']['resBody'], BasicHeaders, Methods13['get']['status']>(prefix, PATH13, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH13}`
        }
      },
      Id_string: {
        /**
         * @returns OK
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods14['get']['resBody'], BasicHeaders, Methods14['get']['status']>(prefix, PATH14, GET, option).json(),
        /**
         * @returns OK
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods14['get']['resBody'], BasicHeaders, Methods14['get']['status']>(prefix, PATH14, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH14}`
      },
      recommended: {
        /**
         * 希望の職種・雇用形態からおすすめの企業をいくつか取得する
         * @returns OK
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods15['get']['resBody'], BasicHeaders, Methods15['get']['status']>(prefix, PATH15, GET, option).json(),
        /**
         * 希望の職種・雇用形態からおすすめの企業をいくつか取得する
         * @returns OK
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods15['get']['resBody'], BasicHeaders, Methods15['get']['status']>(prefix, PATH15, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH15}`
      },
      /**
       * @returns OK
       */
      get: (option?: { query?: Methods12['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods12['get']['resBody'], BasicHeaders, Methods12['get']['status']>(prefix, PATH12, GET, option).json(),
      /**
       * @returns OK
       */
      $get: (option?: { query?: Methods12['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods12['get']['resBody'], BasicHeaders, Methods12['get']['status']>(prefix, PATH12, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods12['get']['query'] } | undefined) =>
        `${prefix}${PATH12}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    employmentStatuses: {
      /**
       * @returns OK
       */
      get: (option?: { query?: Methods16['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods16['get']['resBody'], BasicHeaders, Methods16['get']['status']>(prefix, PATH16, GET, option).json(),
      /**
       * @returns OK
       */
      $get: (option?: { query?: Methods16['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods16['get']['resBody'], BasicHeaders, Methods16['get']['status']>(prefix, PATH16, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods16['get']['query'] } | undefined) =>
        `${prefix}${PATH16}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    followings: {
      Id_string: {
        delete: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods17['delete']['status']>(prefix, PATH17, DELETE, option).send(),
        $delete: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods17['delete']['status']>(prefix, PATH17, DELETE, option).send().then(r => r.body),
        $path: () => `${prefix}${PATH17}`
      }
    },
    hopes: {
      Id_string: {
        /**
         * @returns OK
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods18['get']['resBody'], BasicHeaders, Methods18['get']['status']>(prefix, PATH18, GET, option).json(),
        /**
         * @returns OK
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods18['get']['resBody'], BasicHeaders, Methods18['get']['status']>(prefix, PATH18, GET, option).json().then(r => r.body),
        /**
         * @returns OK
         */
        patch: (option: { body: Methods18['patch']['reqBody'], config?: T | undefined }) =>
          fetch<Methods18['patch']['resBody'], BasicHeaders, Methods18['patch']['status']>(prefix, PATH18, PATCH, option).json(),
        /**
         * @returns OK
         */
        $patch: (option: { body: Methods18['patch']['reqBody'], config?: T | undefined }) =>
          fetch<Methods18['patch']['resBody'], BasicHeaders, Methods18['patch']['status']>(prefix, PATH18, PATCH, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH18}`
      }
    },
    industryCategories: {
      /**
       * 業種まとめて全部取得する
       * @returns OK
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods19['get']['resBody'], BasicHeaders, Methods19['get']['status']>(prefix, PATH19, GET, option).json(),
      /**
       * 業種まとめて全部取得する
       * @returns OK
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods19['get']['resBody'], BasicHeaders, Methods19['get']['status']>(prefix, PATH19, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH19}`
    },
    interestedLists: {
      Id_string: {
        delete: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods20['delete']['status']>(prefix, PATH20, DELETE, option).send(),
        $delete: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods20['delete']['status']>(prefix, PATH20, DELETE, option).send().then(r => r.body),
        /**
         * @returns OK
         */
        patch: (option: { body: Methods20['patch']['reqBody'], config?: T | undefined }) =>
          fetch<Methods20['patch']['resBody'], BasicHeaders, Methods20['patch']['status']>(prefix, PATH20, PATCH, option).json(),
        /**
         * @returns OK
         */
        $patch: (option: { body: Methods20['patch']['reqBody'], config?: T | undefined }) =>
          fetch<Methods20['patch']['resBody'], BasicHeaders, Methods20['patch']['status']>(prefix, PATH20, PATCH, option).json().then(r => r.body),
        /**
         * @returns OK
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods20['get']['resBody'], BasicHeaders, Methods20['get']['status']>(prefix, PATH20, GET, option).json(),
        /**
         * @returns OK
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods20['get']['resBody'], BasicHeaders, Methods20['get']['status']>(prefix, PATH20, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH20}`
      },
      InterestedListId_string: {
        recruitments: {
          Id_string: {
            delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods22['delete']['status']>(prefix, PATH22, DELETE, option).send(),
            $delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods22['delete']['status']>(prefix, PATH22, DELETE, option).send().then(r => r.body),
            $path: () => `${prefix}${PATH22}`
          },
          /**
           * @returns Created
           */
          post: (option: { body: Methods21['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods21['post']['resBody'], BasicHeaders, Methods21['post']['status']>(prefix, PATH21, POST, option).json(),
          /**
           * @returns Created
           */
          $post: (option: { body: Methods21['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods21['post']['resBody'], BasicHeaders, Methods21['post']['status']>(prefix, PATH21, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH21}`
        }
      }
    },
    messages: {
      Id_string: {
        /**
         * @returns OK
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods23['get']['resBody'], BasicHeaders, Methods23['get']['status']>(prefix, PATH23, GET, option).json(),
        /**
         * @returns OK
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods23['get']['resBody'], BasicHeaders, Methods23['get']['status']>(prefix, PATH23, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH23}`
      }
    },
    occupationMainCategories: {
      /**
       * 「大項目」「中項目」「小項目」まとめて全部取得する
       * @returns OK
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods24['get']['resBody'], BasicHeaders, Methods24['get']['status']>(prefix, PATH24, GET, option).json(),
      /**
       * 「大項目」「中項目」「小項目」まとめて全部取得する
       * @returns OK
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods24['get']['resBody'], BasicHeaders, Methods24['get']['status']>(prefix, PATH24, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH24}`
    },
    prefectures: {
      /**
       * @returns OK
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods25['get']['resBody'], BasicHeaders, Methods25['get']['status']>(prefix, PATH25, GET, option).json(),
      /**
       * @returns OK
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods25['get']['resBody'], BasicHeaders, Methods25['get']['status']>(prefix, PATH25, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH25}`
    },
    recruitments: {
      Id_string: {
        /**
         * @returns OK
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods27['get']['resBody'], BasicHeaders, Methods27['get']['status']>(prefix, PATH27, GET, option).json(),
        /**
         * @returns OK
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods27['get']['resBody'], BasicHeaders, Methods27['get']['status']>(prefix, PATH27, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH27}`
      },
      recommended: {
        /**
         * 希望の職種・募集形態からおすすめの募集をいくつか取得する
         * @returns OK
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods28['get']['resBody'], BasicHeaders, Methods28['get']['status']>(prefix, PATH28, GET, option).json(),
        /**
         * 希望の職種・募集形態からおすすめの募集をいくつか取得する
         * @returns OK
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods28['get']['resBody'], BasicHeaders, Methods28['get']['status']>(prefix, PATH28, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH28}`
      },
      /**
       * @returns OK
       */
      get: (option?: { query?: Methods26['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods26['get']['resBody'], BasicHeaders, Methods26['get']['status']>(prefix, PATH26, GET, option).json(),
      /**
       * @returns OK
       */
      $get: (option?: { query?: Methods26['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods26['get']['resBody'], BasicHeaders, Methods26['get']['status']>(prefix, PATH26, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods26['get']['query'] } | undefined) =>
        `${prefix}${PATH26}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    rooms: {
      Id_string: {
        /**
         * @returns OK
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods29['get']['resBody'], BasicHeaders, Methods29['get']['status']>(prefix, PATH29, GET, option).json(),
        /**
         * @returns OK
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods29['get']['resBody'], BasicHeaders, Methods29['get']['status']>(prefix, PATH29, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH29}`
      },
      RoomId_string: {
        messages: {
          /**
           * @returns OK
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods30['get']['resBody'], BasicHeaders, Methods30['get']['status']>(prefix, PATH30, GET, option).json(),
          /**
           * @returns OK
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods30['get']['resBody'], BasicHeaders, Methods30['get']['status']>(prefix, PATH30, GET, option).json().then(r => r.body),
          /**
           * @returns Created
           */
          post: (option: { body: Methods30['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods30['post']['resBody'], BasicHeaders, Methods30['post']['status']>(prefix, PATH30, POST, option).json(),
          /**
           * @returns Created
           */
          $post: (option: { body: Methods30['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods30['post']['resBody'], BasicHeaders, Methods30['post']['status']>(prefix, PATH30, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH30}`
        }
      }
    },
    workHistories: {
      Id_string: {
        /**
         * @returns OK
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods31['get']['resBody'], BasicHeaders, Methods31['get']['status']>(prefix, PATH31, GET, option).json(),
        /**
         * @returns OK
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods31['get']['resBody'], BasicHeaders, Methods31['get']['status']>(prefix, PATH31, GET, option).json().then(r => r.body),
        /**
         * @returns OK
         */
        patch: (option: { body: Methods31['patch']['reqBody'], config?: T | undefined }) =>
          fetch<Methods31['patch']['resBody'], BasicHeaders, Methods31['patch']['status']>(prefix, PATH31, PATCH, option).json(),
        /**
         * @returns OK
         */
        $patch: (option: { body: Methods31['patch']['reqBody'], config?: T | undefined }) =>
          fetch<Methods31['patch']['resBody'], BasicHeaders, Methods31['patch']['status']>(prefix, PATH31, PATCH, option).json().then(r => r.body),
        delete: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods31['delete']['status']>(prefix, PATH31, DELETE, option).send(),
        $delete: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods31['delete']['status']>(prefix, PATH31, DELETE, option).send().then(r => r.body),
        $path: () => `${prefix}${PATH31}`
      }
    }
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api