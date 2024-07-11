"use client"
import classes from "./Main.module.scss"
import { MainContent } from "@/types/pages/main"
import {useModalContext} from '@/hooks/useModalContext'

interface MainProps  {
    data: MainContent
}

const Main = ({}: MainProps) => {
    const { openModal } = useModalContext()

    return (
        <div className={classes.Wrap}>
            main
            <button onClick={() => openModal("call")}>Open</button>
        </div>
    )
}

export default Main
