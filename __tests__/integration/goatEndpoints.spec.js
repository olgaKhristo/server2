const request = require('supertest')
const app = require('../../app')

const request = require('supertest')
const app = require('../../app')
const { resetTestDB } = require('./config')

describe('api server', () => {
  let api;

  beforeEach(async () => {
    await resetTestDB()
  })

  beforeAll(() => {
    api = app.listen(5000, () => {
      // console.log('🌕Test server running in port 5000')
    })
  })

  afterAll((done) => {
    // console.log('Gracefully stopping the test server')
    api.close(done)
  })

test('respode to GET/ with ststus 200', (done) => {
    request(api).get('/').expect(200, done)
})


})