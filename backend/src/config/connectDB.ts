import sql from 'mssql'

const config = {
    user: 'sa',
    password: 'vinh051003',
    server: 'ADMIN\\VINHDEV', 
    database: 'todolist',
    synchronize: true,
    trustServerCertificate: true,
}

const getConnection:any = async() => {
    try {
        const pool = await sql.connect(config)

        return pool
    } catch(e) {
        console.log(e)
        console.log('DB connect is failed')
    }  
}

export {
    getConnection
}

