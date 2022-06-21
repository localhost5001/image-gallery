
export function splitChunks<T>(arr: T[], size: number): T[][] {
    if (size < 2) {
        throw new Error('Size can not be less than 2')
    }

    const chunks: T[][] = []
    const len = arr.length / size

    if (len < 1) {
        chunks.push([...arr])
        return chunks
    }

    let i = 0

    while(i < arr.length) {
        chunks.push(arr.slice(i, i += len))
    }

    return chunks
}
