import cn from "classnames"
import { InputHTMLAttributes } from "react"
import classes from "./Checkbox.module.scss"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    title?: string
}

const Checkbox = ({ title, checked, ...rest }: InputProps) => {
    return (
        <label className={cn(classes.Wrap, { [classes.Checked]: checked })}>
            <input
                checked={checked}
                className={classes.Input}
                type="checkbox"
                {...rest}
            />
            <span className={classes.Icon} />
            {title && <div className={classes.Title}>{title}</div>}
        </label>
    )
}

export default Checkbox
