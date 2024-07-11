import classes from "./Button.module.scss"
import cn from "classnames"
import { FC, PropsWithChildren } from "react"

interface ButtonProps {
    className?: string
    onClick?: () => void
    href?: string
    target?: "_blank"
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({ className, children, onClick, href, target }) => {
    return (
        <>
            {href ? (
                <a
                    target={target}
                    className={cn(className, classes.Wrap)}
                    href={href}
                >
                    {children}
                </a>
            ) : (
                <button
                    onClick={onClick}
                    className={cn(className, classes.Wrap)}
                >
                    {children}
                </button>
            )}
        </>
    )
}

export default Button
