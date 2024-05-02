import clsx from 'clsx'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import { useDispatch } from 'react-redux'

import icons from '../ultis/icons'
import path from '../ultis/path'
import { setDataRegister } from '../store/userSlice'
import * as apis from '../apis'

type NameInput = {
    name: string
}

const CreateProfile = () => {
    const { LuUpload } = icons
    const dispatch = useDispatch()
    const { dataRegister } = useSelector((state:RootState) => state.user)

    const { register, handleSubmit, watch, formState: {errors}} = useForm<NameInput>()
    const navigate = useNavigate()

    const onSubmit = async(data:NameInput) => {
        navigate(path.HOME)

        const response = await apis.register({
            email: dataRegister.email,
            password: dataRegister.password,
            name: data.name
        })

        console.log(response)

        setDataRegister({})
    }

    return (
        <div>
            <div className="w-[900px] mx-auto">
                <div className="mt-5">
                    <h1 className="text-main text-3xl font-bold">todoist</h1>
                </div>

                <div className="w-[45%]">
                    <div className="mt-[130px]">
                        <h2 className="text-black font-bold text-3xl">Create your profile</h2>
                    </div>

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className={clsx("p-2 py-3 border-[1px] mt-10 shadow-md")}>
                            <input className='hidden' type="file" id='input-file'></input>
                            <label className='flex items-center gap-3' htmlFor='input-file'><LuUpload size='17px'/> <span className='font-semibold text-lg'>Upload your photo</span></label>
                        </div>

                        <div 
                            className={clsx("p-2 border-[1px] mt-5 shadow-md")}
                        >
                            <p className="text-sm text-main-text">Your name</p>
                            <input
                                {...register('name', {required: true, minLength: 2, maxLength: 20})} 
                                className="outline-none w-full" 
                                placeholder='Eg. Berlin'
                            >
                            </input>
                        </div>
                        {errors.name?.type === 'required' && <p className='text-sm text-red-500 pl-2'>Vui lòng nhập tên</p>}
                        {errors.name?.type === 'minLength' && <p className='text-sm text-red-500 pl-2'>Tên phải có ít nhất 2 kí tự</p>}
                        {errors.name?.type === 'maxLength' && <p className='text-sm text-red-500 pl-2'>Tên phải có tối đa 20 kí tự</p>}

                        <button className={`text-white rounded-md w-full mt-10 py-[11px] transition-all font-bold text-lg ${watch('name') === '' ? 'bg-[#EDA59E]' : 'bg-main'}`}>Continue</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateProfile