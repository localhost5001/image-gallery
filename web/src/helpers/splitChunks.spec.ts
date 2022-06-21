import { splitChunks } from './splitChunks'

describe('splitChunks', () => {
    it ('should split array into chunks', () => {
        const arr = [1,2,3,4,5,6]
        
        const chunks = splitChunks(arr, 3)

        expect(chunks.length).toBe(3)
    })
    it ('should throw error if size less than 2', () => {
        const arr = [1,2,3,4]
        
        expect(() => {
            splitChunks(arr, 1)
        }).toThrow()
    })
    it ('should return single chunk if can not divide into multiple chunks', () => {
        const arr = [1]
        
        const res = splitChunks(arr, 2)

        expect(res.length).toBe(1)
    })
})
