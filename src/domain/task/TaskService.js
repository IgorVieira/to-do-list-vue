
export default class TaskService{

    baseUrl = 'api/tasks{/id}'

    constructor(resource){
        this._resource = resource
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