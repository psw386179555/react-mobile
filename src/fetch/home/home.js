import { get } from '../get.js'

export function getFixedData() {
    const result = get('/api/fixed')
    return result
}
