export const upstreams = {
  orders: 'http://orders-service:3000',
  catalog: 'http://catalog-service:8000',
  search: 'http://search-service:8000',
  bff: 'http://mobile-bff:4000',
}

export const routes = {
  'GET /upstreams': () => upstreams,
}
