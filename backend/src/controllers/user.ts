import { getConnection } from '../config/connectDB'

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

        console.log({
            email,
            password,
            name
        })




    } catch(e) {
        return res.json(e)
    }
}

export {
    getAccounts,
    register
}