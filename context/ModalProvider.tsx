"use client"
import {createContext, FC, PropsWithChildren, ReactNode, useCallback, useState} from 'react'
import { addPadding, removePadding } from "@/utils/calculatePadding"

export interface ModalContextProps {
    modal: string | null
    openModal: (name: string) => void
    closeModal: () => void
}

export const ModalContext = createContext<ModalContextProps | null>(null)

export const ModalProvider: FC<PropsWithChildren> = ({ children }) => {
    const [modal, setModal] = useState<string | null>(null)

    const openModal = useCallback(
        (name: string) => {
            addPadding()
            setModal(name)
        },
        [modal]
    )

    const closeModal = useCallback(() => {
        removePadding()
        setModal(null)
    }, [])

    const value: ModalContextProps = {
        modal,
        openModal,
        closeModal
    }

    return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
}
