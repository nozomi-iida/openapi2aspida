/* eslint-disable */
// prettier-ignore
import type { AspidaClient, BasicHeaders } from 'aspida'
// prettier-ignore
import type { Methods as Methods0 } from '.'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:3000/v1' : baseURL).replace(/\/$/, '')
  const PATH0 = '/hopes/Id@string'
  const GET = 'GET'
  const PATCH = 'PATCH'

  return {
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
    $path: () => `${prefix}${PATH0}`
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
