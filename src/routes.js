import * as domain from './upstreams.js'

export const routes = {
  'GET /health': () => ({ ok: true, service: 'api-gateway' }),
  ...domain.routes,
}
