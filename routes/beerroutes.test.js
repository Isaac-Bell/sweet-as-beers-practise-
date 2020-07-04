const request = require('supertest')

const server = require('../server/server')

jest.mock('../db.js', () => {
  return {
    getBeers: function () {
      return Promise.resolve([
        {
          id: 1,
          name: 'Beer 1',
          brewery: 'Brewery 1',
          country: 'New Zealand',
          style: 'Super',
          abv: '0.5%'
        },
        {
          id: 2,
          name: 'Beer 2',
          brewery: 'Brewery 2',
          country: 'New Zealand',
          style: 'Super',
          abv: '1.5%'
        }

      ])
    }
  }
})

test('GET /list returns the original database list', () => {
  return request(server)
    .get('/admin')
    .expect(200)
    .then(res => {
      expect(res.body.list).toContain('Beer 1')
    })
})

test('DELETE /id deletes a beer from list', () => {
  return request(server)
    .delete('/1')
    .expect(200)
    .then(res => {
      expect(res.body.id).toBe(1)
    })
})
