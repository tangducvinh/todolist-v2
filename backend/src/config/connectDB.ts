// const sql = require('mssql')

// var getData:any = async(sqlText) => {
//     try {
//         const config = {
//             user: 'sa',
//             password: 'vinh051003',
//             server: 'ADMIN\\VINHDEV', 
//             database: 'todolist',
//             synchronize: true,
//             trustServerCertificate: true,
//         }

//         await sql.connect(config, async(err) => {
//             if (err) console.log(err);
//             // create Request object
//             const request = await new sql.Request();

//             await request.query(sqlText, (err, recordset) => {
//                 if (err) console.log(err)
                
//                 console.log(recordset)
//                 return recordset
//             });
//         });
//     } catch(e) {
//         console.log(e)
//         console.log('DB connect is failed')
//     }  
// }

// module.exports = {
//     getData
// }