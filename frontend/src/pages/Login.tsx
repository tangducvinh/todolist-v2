import { Link } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import clsx from 'clsx'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useDispatch }  from 'react-redux'
import { setDataRegister } from '../store/userSlice'

import path from '../ultis/path'

type Props = {
    type: string,
    title: string,
    textBtn: string
}

type Form = {
    email: string,
    password: string,
}

const Login:React.FC<Props> = (props) => {
    const { type, title, textBtn } = props

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit, watch, formState: {errors} } = useForm<Form>()

    const [ forcus, setForcus ] = useState<number>(0)
    const firstInputElement = useRef<HTMLInputElement>(null)
    const secondInputElement = useRef<HTMLInputElement>(null)

    useEffect(() => {
        const handleSetForcus = (e:any) => {
            if (firstInputElement.current?.contains(e.target)) {
                setForcus(1)
            } else if (secondInputElement.current?.contains(e.target)) {
                setForcus(2)
            } else {
                setForcus(0)
            }
        }

        window.addEventListener('click', (e) => handleSetForcus(e))

        return window.removeEventListener('click', handleSetForcus)
    }, [])

    const onSubmit = (data:Form) => {
        if (type === 'register') {
            navigate(path.CREATE_PROFILE)
            dispatch(setDataRegister(data))
        }
    }

    return (
        <div>
            <div className="w-[900px] mx-auto">
                <div className="mt-5">
                    <h1 className="text-main text-3xl font-bold">todoist</h1>
                </div>

                <div className="w-[45%]">
                    <div className="mt-[130px]">
                        <h2 className="text-black font-bold text-3xl">{title}</h2>
                    </div>

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div
                            className={clsx("p-2 border-[1px] mt-5 shadow-md", {'border-gray-400 rounded-md': forcus === 1})}
                            ref={firstInputElement}
                        >
                            <p className="text-sm text-main-text">Email</p>
                            <input {...register('email', {required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/})} className="outline-none w-full" placeholder='Enter your email...'></input>
                        </div>
                        {errors.email?.type === 'required' && <p className='text-sm text-red-500 pl-2'>Vui lòng nhập email</p>}
                        {errors.email?.type === 'pattern' && <p className='text-sm text-red-500 pl-2'>Vui lòng nhập đúng định dạng email</p>}

                        <div 
                            className={clsx("p-2 border-[1px] mt-5 shadow-md", {'border-gray-400 rounded-md': forcus === 2})}
                            ref={secondInputElement}
                        >
                            <p className="text-sm text-main-text">Password</p>
                            <input {...register('password', {required: true, minLength: 6, maxLength: 20})} className="outline-none w-full" type="password" placeholder='Enter your password...'></input>
                        </div>
                        {errors.password?.type === 'minLength' && <p className='text-sm text-red-500 pl-2'>Mật khẩu phải có độ dài tối thiểu 6 kí tự</p>}
                        {errors.password?.type === 'required' && <p className='text-sm text-red-500 pl-2'>Vui lòng nhập mật khẩu</p>}
                        {errors.password?.type === 'maxLength' && <p className='text-sm text-red-500 pl-2'>Mật khẩu phải có độ dài tối đa 20 kí tự</p>}


                        <button className="bg-main text-white rounded-md transition-all w-full mt-5 py-[11px] font-bold text-lg hover:bg-main-dark">{textBtn}</button>
                    </form>

                    {type === 'login' &&
                        <Link to={'/'} className='text-sm block mt-5 underline text-main-text' >Forgot your password</Link>
                    }

                    <p className='text-sm mt-5'>By continuing with Google, Apple, or Email, you agree to Todoist's Terms of Service and Privacy Policy.</p>

                    <p className='text-sm text-main-text mt-8 text-center'>Don't have an account? <Link to={type === 'login' ? path.REGISTER : path.LOGIN} className='underline'>Sign up</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Login