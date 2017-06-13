<template>
 
        <div class="container">
            <h3 class="page-header">{{ title }}</h3>
            <div class="row">
                <ul >
                    <li v-for="task in tasks">


                        <div class="panel panel-success col-md-4">
                            <div class="panel-heading">
                                <h3 class="panel-title">{{ task.activity }}</h3>
                            </div>
                            <div class="panel-body">
                                Status: <div v-if="task.done == true">
                                            <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>
                                        </div>
                                        <div v-else-if="task.done == false">
                                            <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
                                        </div>
                                <hr>
                                    <router-link :to="{ name: 'info', params: { id : task._id }}">
                                       <button class="btn">
                                        <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                                        Editar
                                       </button>
                                            
                                    </router-link> 
                                    <a @click="removeTask(task)">
                                        <button class="btn">
                                        <span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
                                        Remover
                                       </button>
                                    </a>
                            </div>
                        </div>
                        
                    </li>
                </ul>
            </div>
            <hr>
            <div class="row">
              <div class="col-md-5 col-md-offset-2 well">
                  <form @submit.prevent="submitTask()">
                    <div class="form-group">
                        <label for="">Atividade:</label>
                        <input class="form-control" type="text" v-model="task.activity">
                    </div>
                    <div class="form-group">
                        <label for="">Status:</label>
                        <input  type="checkbox" v-model="task.done">
                    </div>
                   
                    <button class="btn" name="add">Add + </button>
                </form>
              </div>
            </div>
        </div>

</template>
<script>
import _ from 'lodash';
import TaskService from '../../domain/task/TaskService'

export default {

    data(){
        return{
            title:'To do Vue!',
            tasks:[],
            task: {
                name:'',
                done:false
            }

        }
    },
    methods:{

        submitTask(){
           this.service
                .saveTask(this.task) 
                .then(res => {
                    this.tasks.push(res.body)
                    this.task = {
                            name:'',
                            done:false
                        }
                })
        },
        removeTask(taskItem){
            this.service
                .deleteTask(taskItem._id)
                .then(() =>{
                    const taskRemove = this.tasks.indexOf(taskItem)
                    this.tasks.splice(taskRemove,1 ),
                    err => console.log(`${err}`)
                })

          
        }




    },
    created(){

    this.service = new TaskService(this.$resource)
    
    this.service
        .listTasks() 
        .then(tasks => {
         const item = _.map(tasks, item => item);
         this.tasks = item;
      }, err => this.msg = err.message);

    

  },

}

</script>
<style>
  
  .panel.panel-success.col-md-4{
    margin:20px;
  }


  li {
      list-style-type: none;
  }

  ul li{
      margin-left:1em;
  }
</style>