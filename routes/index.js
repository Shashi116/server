const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;    

const { task } = require('../models/task');


// Get All task
router.get('/get/task', (req, res) => {
    task.find({}, (err, data) => {
        if(!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    });
});


// Get Single task 

router.get('/get/task/:id', (req, res) => {
    task.findById(req.params.id, (err, data) => {
        if(!err) {
            res.send(data);
        } else {
           console.log(err);
        }
    });
});
    



// Save task
router.post('/task/add', (req, res) => {
    const tsk = new task({
        task: req.body.task,
        taskDate : req.body.taskDate,
        taskTime : req.body.taskTime
    });
    tsk.save((err, data) => {
        if(!err) {
            // res.send(data);
            res.status(200).json({code: 200, message: 'Task Added Successfully', addTask: data})
        } else {
           console.log(err);
        }
    });
});



// Update task

router.put('/task/update/:id', (req, res) => {


    const tsk = {
        task: req.body.task,
        taskDate : req.body.taskDate,
        taskTime : req.body.taskTime
    };
    task.findByIdAndUpdate(req.params.id, { $set: tsk }, { new: true }, (err, data) => {
        if(!err) {
            res.status(200).json({code: 200, message: 'Task Updated Successfully', updateTask: data})
        } else {
            console.log(err);
        }
    });
});





// Delete task
router.delete('/task/:id', (req, res) => {

    task.findByIdAndRemove(req.params.id, (err, data) => {
        if(!err) {
            // res.send(data);
            res.status(200).json({code: 200, message: 'task deleted', deleteTask: data})
        } else {
            console.log(err);
        }
    });
});


module.exports = router;