import { useContext} from "react"
import {ModalContext, ModalContextProps} from '@/context/ModalProvider'

export function useModalContext() {
    const context = useContext(ModalContext) as ModalContextProps

    if (!context) {
        throw new Error("Оберни комонент в провайдер")
    }

    return context
}
