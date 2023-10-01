//npm i -D jest in terminal
const Goat = require('../../../models/Goat');
const db = require('../../../database/connect');

// __tests__/unit
describe('getAll', () => {

    beforeEach(() => jest.clearAllMocks())

    afterAll(() => jest.resetAllMocks())
    
    it('resolves with goats on successful', async () => {
      jest.spyOn(db, 'query')
        .mockResolvedValueOnce({
          rows: [{ name: 'g1', age: 1 }, { name: 'g2', age: 2 }, { name: 'g3', age: 3 }]
        })

      const goats = await Goat.getAll()
      expect(goats).toHaveLength(3)
      expect(goats[0]).toHaveProperty('id')
    })

    it('should throw an Error on db query error', async () => {
      // jest.spyOn(db, 'query').mockRejectedValue(new Error('oh no'))

      jest.spyOn(db, 'query')
        .mockResolvedValueOnce({ rows: [] })

      try {
        await Goat.getAll()
      } catch (err) {
        expect(err).toBeDefined()
        expect(err.message).toBe("No goats available.")
      }
    })
  })
