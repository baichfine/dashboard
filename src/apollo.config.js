module.exports = {
  client: {
    service: {
      name: 'dashboard',
      // URL to the GraphQL API
      url: 'https://test.fescom.space/api',
    },
    // Files processed by the extension
    includes: ['src/**/*.vue', 'src/**/*.js'],
  },
}
