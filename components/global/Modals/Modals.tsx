"use client"
import { CSSTransition } from "react-transition-group"
import CallForm from "@/components/widgets/CallForm/CallForm"
import {useModalContext} from '@/hooks/useModalContext'

const Modals = () => {
    const { modal } = useModalContext()
    return (
        <div id={"modals-container"}>
            <CSSTransition
                in={modal === "call"}
                timeout={1200}
                mountOnEnter={true}
                unmountOnExit={true}
            >
                {() => <CallForm />}
            </CSSTransition>
        </div>
    )
}

export default Modals
