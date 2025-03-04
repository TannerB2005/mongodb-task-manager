require('../src/db/mongoose')
const User = require('../src/db/models/user')

User.findByIdAndUpdate('67bcd4c28f8c0f4629864a1b', {age:1}).then((user) => {
    console.log(user)
    return User.countDocuments({ age:0 })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
}) //11-13 continue