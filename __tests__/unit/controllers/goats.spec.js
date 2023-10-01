const goatsController = require('../../../controllers/goats')
const Goat = require('../../../models/Goat')

const mockSend = jest.fn()
const mockJson = jest.fn()
const mockEnd = jest.fn()
// we are mocking .send(), .json() and .end()
const mockStatus = jest.fn(code => ({ send: mockSend, json: mockJson, end: mockEnd }))
const mockRes = { status: mockStatus }

describe('goats controller', () => {
    beforeEach(() => jest.clearAllMocks())

    afterAll(() => jest.resetAllMocks())

    describe('index', () => {
      it('should return goats with a status code 200', async () => {
        const testGoats = ['g1', 'g2']
        jest.spyOn(Goat, 'getAll')
        .mockResolvedValue(testGoats)

        await goatsController.index(null, mockRes)
        expect(Goat.getAll).toHaveBeenCalledTimes(1)
        expect(mockStatus).toHaveBeenCalledWith(200)
        expect(mockSend).toHaveBeenCalledWith({ data: testGoats })

      })

     it('sends an error upon fail', () => {
        jest.spyOn(Goat, 'getAll')
          .mockRejectedValue(new Error('something happened to your db'))
          await goatsController.index(null, mockRes)
            expect(Goat.getAll).toHaveBeenCalledTimes(1)
            expect(mockStatus).toHaveBeenCalledWith(500)
            expect(mockSend).toHaveBeenCalledWith({ error: 'something happened to your db'})

     })

    })
  })