import {isProd} from '@/utils/utils'

export const API_URL = isProd ? `` : `http://localhost:9000/api/v1/`
