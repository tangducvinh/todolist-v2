const express = require('express')
const app = express()
const port = 7777
// var { getData } = require('./config/connectDB')
const sql = require('mssql')

app.get('/account', async(req, res) => {
    try {
        const config = {
            user: 'sa',
            password: 'vinh051003',
            server: 'ADMIN\\VINHDEV', 
            database: 'todolist',
            synchronize: true,
            trustServerCertificate: true,
        }

        await sql.connect(config, async(err) => {
            if (err) console.log(err);
            // create Request object
            const request = await new sql.Request();

            await request.query('select * from Users', (err, recordset) => {
                if (err) console.log(err)
                
                return res.json(recordset)
            });
        });
    } catch(e) {
        console.log(e)
        console.log('DB connect is failed')
    }  
})

app.listen(port, () => {
    return console.log(`Experss is listening at port: ${port}`)
})