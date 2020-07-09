const Comment = require('../models').comments
const User = require('../models').users
const Task = require('../models').task
exports.addComment = (req,res) => {
    const comment = req.body.comment
    const userId = req.body.user
    const taskId = req.body.task
    if(comment && userId && taskId){
        User.findOne({where : {email : userId}}).then(user=>{
            if(user){
                Task.findOne({where : {id : taskId}}).then(task=>{
                    if(task){
                        const commentToAdd = {
                            targetTaskId : task.id,
                            emitterId : user.id,
                            content : comment
                        }
                        Comment.create(commentToAdd,{w:1},{returning : true}).then(comm=>{
                            if(comm){
                                Comment.findOne({where : { id : comm.id}, include: ['emitter','targetTask']}).then(cmt=>{
                                    return res.send({comment : cmt})
                                })
                            } 
                            else return res.status(403).send({message : 'failed'})
                        })
                    } else return res.status(404).send({message : 'task not found'})
                })
            } else return res.status(404).send({message : 'user not found'})
        })
    }else return res.status(405).send({message : 'invalid form'})
}

exports.getCommentsOfTask = (req,res)=>{
    const taskId = req.body.task
    if(taskId){
        Comment.findAll({where : { targetTaskId : taskId}, include: ['emitter','targetTask'], order:[['createdAt', 'ASC']]}).then(tasks=>{
            return res.send(tasks)
        })
    }
    else return res.status(404).send({message : 'error'})
}


exports.deleteComment = (req,res)=>{
    const commentId = req.body.comment
    if(commentId){
        Comment.destroy({where : {id : commentId}}).then((r)=>{
            return res.send({message : 'done'})
        })
    }
    else return res.status(404).send({message : 'error'})
}
exports.editComment = (req,res)=>{

}
