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
})

const bcrypt = require('bcryptjs')

const myFunction = async () => {
    const password = 'Red12345!'
    const hashedPassword = await bcrypt.hash(password, 8)

    console.log(password)
    console.log(hashedPassword)

    const isMatch = await bcrypt.compare('Red12345!', hashedPassword)
    console.log(isMatch)
}

myFunction()
//12-3
// andrew -> poijdsfjmorewoijwer -> andrew
// mypass -> mpoijsaerjweroiwem