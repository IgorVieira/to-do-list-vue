<template>
 
        <div>
            <h1>{{ title }}</h1>
            <ul >
                <li v-for="task in tasks">
                    <span>{{ task.name }} - {{ task.done }} | </span>
                    <i @click="removeTask(task)" class="fa fa-trash"></i>
                     <router-link :to="{ name: 'info', params: { id : task.id }}">
                        <button class="btn red" name="profile">
                            <i class="fa fa-book"></i>
                            Profile
                        </button>
            </router-link>  
                </li>
            </ul>
            <form @submit.prevent="submitTask()">
                <input type="text" v-model="task.name">
                <input type="checkbox" v-model="task.done">
                <button class="btn" name="add">Add + </button>
            </form>

        </div>

</template>
<script>



export default {

    data(){
        return{
            title:'Hey!',
            tasks:[
                {
                    name:'Read about Elixir',
                    done:true
                },
                {
                    name:'Write more about VueJS',
                    done:true
                },
                {
                    name:'Make a coffee',
                    done:true
                }

            ],
            task: {
                name:'',
                done:false
            }

        }
    },
    methods:{

        submitTask(){
           this.tasks.push(this.task)
           this.task = {
                name:'',
                done:false
            }
        },

        removeTask(taskItem){
           const taskRemove = this.tasks.indexOf(taskItem)
           this.tasks.splice(taskRemove,1 )
        }




    },
    created(){

    this.service = new TaskService(this.$resource)
    

    this.service
      .listTasks(this.pokemons.length, 9)
      .then(pokemons => {
        console.log(pokemons)
         this.pokemons = pokemons
      }, err => this.msg = err.message)

    

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