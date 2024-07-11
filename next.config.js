/** @type {import("next").NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    trailingSlash: true,
    images: {
        unoptimized: true
    },
    async redirects() {
        return [
            {
                source: "/bitrix/",
                destination: "https://#SITE_URL#/bitrix/",
                statusCode: 301
            }
        ]
    },
    async headers() {
        const headers = []

        if (process.env.NEXT_PUBLIC_VERCEL_ENV === "preview" || process.env.NEXT_PUBLIC_VERCEL_ENV === "production") {
            headers.push({
                headers: [
                    {
                        key: "X-Robots-Tag",
                        value: "noindex"
                    }
                ],
                source: "/:path*"
            })
        }

        return headers
    }
}

module.exports = nextConfig
