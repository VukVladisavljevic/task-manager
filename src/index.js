const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')


const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const Task = require('./models/task')
const User = require('./models/user')

const main = async () => {
    // const task = await Task.findById('6331ab2f9e5c576fe3af9bc4')
    // await task.populate('owner')
    // console.log(task.owner)

    // const user = await User.findById('6331aa3114420ce29644a083')
    // await user.populate('tasks')
    // console.log(user.tasks);


}

main()