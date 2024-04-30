import { Link } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import clsx from 'clsx'

const Login = () => {
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

    return (
        <div>
            <div className="w-[900px] mx-auto">
                <div className="mt-5">
                    <h1 className="text-main text-3xl font-bold">todoist</h1>
                </div>

                <div className="w-[45%]">
                    <div className="mt-[130px]">
                        <h2 className="text-black font-bold text-3xl">Login</h2>
                    </div>

                    <form>
                        <div
                            className={clsx("p-2 border-[1px] mt-5 shadow-md", {'border-gray-400 rounded-md': forcus === 1})}
                            ref={firstInputElement}
                        >
                            <p className="text-sm text-main-text">Email</p>
                            <input className="outline-none w-full" placeholder='Enter your email...'></input>
                        </div>

                        <div 
                            className={clsx("p-2 border-[1px] mt-5 shadow-md", {'border-gray-400 rounded-md': forcus === 2})}
                            ref={secondInputElement}
                        >
                            <p className="text-sm text-main-text">Password</p>
                            <input className="outline-none w-full" type="password" placeholder='Enter your password...'></input>
                        </div>

                        <button className="bg-main text-white rounded-md w-full mt-5 py-[11px] font-bold text-lg">Log in</button>
                    </form>

                    <Link to={'/'} className='text-sm block mt-5 underline text-main-text' >Forgot your password</Link>

                    <p className='text-sm mt-5'>By continuing with Google, Apple, or Email, you agree to Todoist's Terms of Service and Privacy Policy.</p>

                    <p className='text-sm text-main-text mt-8 text-center'>Don't have an account? <Link to={'/'} className='underline'>Sign up</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Login