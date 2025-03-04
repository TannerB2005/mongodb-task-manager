const express = require('express')
require('./src/db/mongoose.js')
const taskRouter = require('./src/db/routers/task.js')
const userRouter = require('./src/db/routers/user.js')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port);
}); // continue on folder 12
