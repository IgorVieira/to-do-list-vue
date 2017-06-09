<template>
 
        <div>
            <h1>{{ title }}</h1>
            <ul >
                <li v-for="task in tasks">
                    <span>{{ task.activity }} - {{ task.done }} | </span>
                    <i @click="removeTask(task)" class="fa fa-trash"></i>
                     <router-link :to="{ activity: 'info', params: { id : task._id }}">
                        <button class="btn red" name="profile">
                            <i class="fa fa-book"></i>
                            Profile
                        </button>
            </router-link>  
                </li>
            </ul>
            <form @submit.prevent="submitTask()">
                <input type="text" v-model="task.activity">
                <input type="checkbox" v-model="task.done">
                <button class="btn" name="add">Add + </button>
            </form>

        </div>

</template>
<script>
import _ from 'lodash';
import TaskService from '../../domain/task/TaskService'

export default {

    data(){
        return{
            title:'Hey!',
            tasks:[],
            task: {
                name:'',
                done:false
            }

        }
    },
    methods:{

        submitTask(){
           this.service = new TaskService(this.$resource)
           this.service
                .saveTask(this.task) 
                .then(res => console.log(res))
        },
        removeTask(taskItem){
           const taskRemove = this.tasks.indexOf(taskItem)
           this.tasks.splice(taskRemove,1 )
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
  
  .btn{
    color:#ccc;
    background:#1554DB;
    border-radius:6px;
    width: 4rem;
    height: 2em;
    padding:1.3em, 1.3rem, 1.3em;
    cursor:pointer;
  }

</style>