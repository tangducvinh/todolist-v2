import { getConnection } from '../config/connectDB'
import sql from 'mssql'
import bcrypt from 'bcrypt'

const getAccounts:any = async(req, res) => {
    try {
        const pool = await getConnection()
        const response = await pool.request().query('select * from Users')
        
        return res.status(200).json({
            success: response ? true : false,
            data: response ? response : 'no data'
        })

    } catch(e) {
        return res.status(500).json(e)
    }
}

const register = async(req, res) => {
    try {
        const { email, password, name } = req.body

        const pool = await getConnection()
        const user = await pool.request().input('email', email).query('select * from Users where email = @email')

        console.log(user)

        if (user.recordset.length !== 0) {
            return res.status(409).json('user existed')
        } else {
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(password, salt)
            console.log({
                email,
                password,
                name,
                hashedPassword
            })

            const response = await pool
                .request()
                .input('email', email)
                .input('password', hashedPassword)
                .input('name', name)
                .query('insert into Users(email, password, name) values(@email, @password, @name)')
            
            console.log(response)
        }
    } catch(e) {
        return res.status(500).json(e)
    }
}

export {
    getAccounts,
    register
}