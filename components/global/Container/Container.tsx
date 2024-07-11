import classes from "./Container.module.scss"
import { ReactNode } from "react"

interface ContainerProps  {
    children: ReactNode
}

const Container = ({ children }: ContainerProps) => {
    return <div className={classes.Wrap}>{children}</div>
}

export default Container
