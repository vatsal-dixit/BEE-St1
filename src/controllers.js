const { Task } = require("./models");

const showTasks = async(request,response) => {
    var tasks = await Task.find();
    return response.json(tasks);
}

const removeTask = async(request,response) => {
    var id = request.query.id;
    if(id){
        await Task.findByIdAndDelete(id);
        return response.json({status : "Task deleted"});
    }
    else{
        return response.json({status : "Task not found"});
    }
}

const createTask = async(request,response) => {
    await Task.create(request.body);
    return response.json({status : "Task created"});
}

const updateTask = async (request,response) => {
    var data = request.body;
    var id = request.query.id;
    if(id){
        await Task.findByIdAndUpdate(id,data);
        return response.json({status : "Task updated"});
    }
    else{
        return response.json({status:"Task not found"});
    }
}

const isComplete = async(request,response)=>{
    var data = request.body;
    var id = request.query.id;
    if(id){
        await Task.findByIdAndUpdate(id,data);
        return response.json({status : "Task updated"});
    }
    else{
        return response.json({status:"Task not found"});
    }
}

module.exports = {
    createTask,
    removeTask,
    showTasks,
    updateTask,
    isComplete
}