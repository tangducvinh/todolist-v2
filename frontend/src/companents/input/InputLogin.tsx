import clsx from 'clsx'
import { FC } from 'react'

type Props = {
    title: string,
    type: string,
    value: string,
    setValue: string,
}


const InputLogin:FC<Props> = (props) => {
    const { title, type } = props

    return (
        <div
            className={clsx("p-2 border-[1px] mt-5 shadow-md", {'border-gray-400 rounded-md': false})}
            // ref={firstInputElement}
        >
            <p className="text-sm text-main-text">Email</p>
            <input className="outline-none w-full" placeholder='Enter your email...'></input>
        </div>

    )
}

export default InputLogin