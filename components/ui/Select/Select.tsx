'use client'
import {useOnClickOutside} from '@/hooks/useOnClickOutside'
import cn from 'classnames'
import React, {useRef, useState} from 'react'
import classes from './Select.module.scss'
import {SelectOption} from '@/types/global'

interface SelectProps {
    value: SelectOption
    options: SelectOption[]
    onChange: (value: SelectOption) => void
    className?: string
}

const Select = ({value, options, onChange, className}: SelectProps) => {
    const wrapRef = useRef() as React.MutableRefObject<HTMLDivElement>
    const [open, setOpen] = useState(false)

    const toggleSelect = () => {
        setOpen(!open)
    }

    const onChangeHandler = (value: SelectOption) => {
        onChange(value)
        toggleSelect()
    }

    const closeSelect = () => {
        setOpen(false)
    }

    useOnClickOutside(wrapRef, () => closeSelect())

    return (
        <div
            ref={wrapRef}
            className={cn(classes.Wrap, className, {[classes.Open]: open})}
        >
            <div className={classes.Inner}>
                <div
                    onClick={toggleSelect}
                    className={classes.CurrentValue}
                >
                    <span>{value.label}</span>
                </div>
                <div className={classes.Options}>
                    {options.map((el, i) =>
                        el.value !== '' ? (
                            <div
                                key={i}
                                onClick={() => onChangeHandler(el)}
                                className={cn(classes.Option, {
                                    [classes.Active]: el.value === value.value
                                })}
                            >
                                <span>{el.label}</span>
                            </div>
                        ) : null
                    )}
                </div>
            </div>
        </div>
    )
}

export default Select
