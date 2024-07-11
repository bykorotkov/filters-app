import { Inter } from "next/font/google"
import "../css/normalize.css"
import "../css/global.scss"
import { ModalProvider } from "@/context/ModalProvider"
import React from 'react'

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <ModalProvider>
                <body className={inter.className}>{children}</body>
            </ModalProvider>
        </html>
    )
}
