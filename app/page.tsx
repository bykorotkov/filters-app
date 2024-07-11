import { mockData } from "@/components/pages/Main/mockData"
import { MainContent } from "@/types/pages/main"
import Main from "@/components/pages/Main/Main"
import Layout from "@/components/global/Layout/Layout"
import {BaseResponse} from '@/types/response'

export default async function Home() {
    const response: BaseResponse<MainContent> = await getData()
    return (
        <Layout global={response.global}>
            <Main data={response.content} />
        </Layout>
    )
}

async function getData() {
    return mockData
}

export async function generateMetadata() {
    const result = {
        title: "",
        description: ""
    }

    const data = mockData

    if (data?.seo?.title) {
        result.title = data.seo.title
    }

    if (data?.seo?.description) {
        result.description = data.seo.description
    }

    return result
}
