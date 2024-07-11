"use client"
import React from "react"
import classes from "./Layout.module.scss"
import { GlobalData } from "@/types/global"
import Header from "@/components/global/Header/Header"
import Footer from "@/components/global/Footer/Footer"
import Modals from "@/components/global/Modals/Modals"

interface LayoutProps  {
    children: React.ReactNode
    global: GlobalData
}

export default function Layout({ children }: LayoutProps) {

    return (
        <>
            <div
                id={"site-container"}
                className={classes.Wrap}
            >
                <Header />

                <main className={classes.Main}>{children}</main>

                <Footer />
            </div>

            <Modals />
        </>
    )
}
