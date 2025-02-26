const mongoose = require('mongoose')

mongoose.connect( 'mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true
})

const mongoose = require('mongoose')

const Task = mongoose.model('Task', {
    description: {
        type: String
    },
    completed: {
        type: Boolean
    }
    })


const job = new Task({
    description: "Do the work",
    completed: true
})
// video 11-6
const user = new User({
    name: 'Mike',
    email: 'myemail@mead.io',
    password: 'phone098!'
})

job.save().then(() => {
    console.log(job)
})

user.save().then(() => {
    console.log(user)
})