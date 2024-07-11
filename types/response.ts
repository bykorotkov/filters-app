import {GlobalData, SeoData} from '@/types/global'

export interface BaseResponse<T> {
    global: GlobalData
    seo: SeoData
    content: T
}