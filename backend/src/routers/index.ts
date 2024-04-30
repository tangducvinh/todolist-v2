
import userRouter from './user'

var initRoutes:any = (app:any) => {
    app.use('/api/user', userRouter)
}

export default initRoutes