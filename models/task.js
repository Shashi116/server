let mongoose = require('mongoose');




const task = mongoose.model('task', {
    task: {
        // type: String,
    }, 
    taskDate: {
        type:String,
        // required:true
    },
    taskTime: {
        type: String,
        //required:true
    },
    
});



module.exports = {task}