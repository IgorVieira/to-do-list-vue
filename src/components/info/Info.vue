<template>
    <div >
        <h1>{{ title }}</h1>

           <div class="row">
        
           <p>{{task.activity}}</p>
           <p>{{task.done}}</p>

        </div>
       


        <h1>Comentários:</h1>
        <ul v-for="comment in comments">
            <li>
                <span class="person">{{comment.activity}}</span> - <span class="comment">{{comment.done}}</span> 
            <i @click="removeComment(comment)" class="fa fa-trash"></i>
            </li>
        </ul>
        <form @submit.prevent="sendComment()">
            <input v-model="newComments.activity" placeholder="Activity..." id="activity" type="activity" required class="validate">
            <input v-model="newComments.done" placeholder="Name" id="name" type="checkbox" required class="validate">
            <button class="btn red">
                <i class="fa fa-send"></i>
                Post
            </button>
        </form>

    </div> 
       
</template>
<script>

import Comment from '../../domain/comment/Comment'
import Task from  '../../domain/task/Task'
import TaskService from '../../domain/task/TaskService'
import commentsRef  from '../../domain/firebase/FirebaseService'


export default {

    data() {

        return {
            task: new Task(),
            newComments: new Comment(),
            id: this.$route.params.id,
            msg:'',
            title:'Profile:'
        }
     },

      firebase() {
        return { 
            comments: commentsRef.ref('comments/' + this.$route.params.id),
            
        }
    },

    created() {
        this.service = new TaskService(this.$resource);

        if(this.id) {
            this.service
                .getTaskById(this.id)
                .then(res =>  {
                    console.log(res)
                    return this.task = res
                }, err => {
                    this.msg = err.message
                })
        }
    },
     

    methods:{
        sendComment(){
            const justComment = commentsRef.ref(`comments/${this.$route.params.id}`)
            justComment.push(this.newComments)
            this.newComments = new Comment();
        },
        removeComment(comment){
           const justComment = commentsRef.ref(`comments/${this.$route.params.id}`)
           justComment.child(comment['.key']).remove()
        }
    }

    
}
</script>
<style>


.comment{
    padding: 0.5em 0.5rem 0.5em;
    background-color:#ccc; 
}

.person{
    padding: 0.5em 0.5rem 0.5em;
    background-color:red; 
}

textarea{
  min-height:15em;
  width:100%;
  max-width:100%;
  padding: 6px 12px;
  border-radius: 4px;
  border: 1px solid #000;
  margin: .5em 0 0.8em 0;
  color: #000;
}

.input-field label {
    color: #000;
}
.input-field input[type=text]:focus + label {
    color: #000;
}
.input-field input[type=text]:focus {
    border-bottom: 1px solid #000;
    box-shadow: 0 1px 0 0 #000;
}
.input-field input[type=text].valid {
    border-bottom: 1px solid #000;
    box-shadow: 0 1px 0 0 #000;
}
.input-field input[type=text].invalid {
    border-bottom: 1px solid #000;
    box-shadow: 0 1px 0 0 #000;
}
.input-field .prefix.active {
    color: #000;
}

.input-field label {
    color: #000;
}
.input-field input[type=email]:focus + label {
    color: #000;
}
.input-field input[type=email]:focus {
    border-bottom: 1px solid #000;
    box-shadow: 0 1px 0 0 #000;
}
.input-field input[type=email].valid {
    border-bottom: 1px solid #000;
    box-shadow: 0 1px 0 0 #000;
}
.input-field input[type=email].invalid {
    border-bottom: 1px solid #000;
    box-shadow: 0 1px 0 0 #000;
}
.input-field .prefix.active {
    color: #000;
}
   
</style>
