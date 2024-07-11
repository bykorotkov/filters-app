"use client"
import classes from "./Modal.module.scss"
import { ReactNode, useEffect } from "react"
import { Portal } from "@/components/global/Portal/Portal"
import {useModalContext} from '@/hooks/useModalContext'

interface ModalProps  {
    children: ReactNode
}

const Modal = ({ children }: ModalProps) => {
    const { closeModal } = useModalContext()

    useEffect(() => {
        function handleKeyUp(event: any) {
            if (event.key === "Escape") {
                closeModal()
            }
        }

        window.addEventListener("keyup", handleKeyUp)

        return () => window.removeEventListener("keyup", handleKeyUp)
    }, [open])

    return (
        <Portal element={document.getElementById("modals-container")!}>
            <div className={classes.Wrap}>
                <div className={classes.Inner}>{children}</div>
            </div>
        </Portal>
    )
}

export default Modal
