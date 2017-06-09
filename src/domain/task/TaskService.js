
export default class TaskService{

    baseUrl = '/tasks{/id}'

    constructor(resource){
        this._resource = resource
    }

    saveTask(task){
        
        if(task._id){
            return this._resource.update({ id: task._id }, task)
        }else{
             return this._resource.save(task)
        }

    }
    listTasks() {
          return this._resource()
            .query()
            .then(res => res.json())
            
    }

    getTaskById(id) {
        return this._resource()
            .get({ id })
            .then(res => res.json())
          
    }


}