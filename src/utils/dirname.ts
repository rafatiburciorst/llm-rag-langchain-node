import { fileURLToPath } from 'node:url'
import { dirname } from 'node:path'

const __diname = dirname(fileURLToPath(import.meta.url))

export {
    __diname
}