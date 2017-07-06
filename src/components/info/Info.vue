<template>
    <div>
        <h3 class="page-header">{{ title }}</h3>
        <div class="col-md-4">
           <form class="form-horizontal well" @submit.prevent="updateTask()" >
                <div class="form-group">
                    <label for="" >Nome da Atividade:</label>
                    <input type="text" class="form-control" v-model="task.activity">
                </div>
                <div class="form-group">
                    <label for="" >Status da atividade:</label>
                    <input type="checkbox" v-model="task.done">
                </div>
                <input type="submit" value="Salvar" class="btn btn-success">
           </form>
           
        </div>
       


        <div class="col-md-4">
           <div class="panel panel-info">
             <div class="panel-heading">
                <h3 class="panel-title">Comentários</h3>
            </div>
            <ul v-for="comment in comments" >
                <li class="context">
                    <span class="person">{{comment.comment}}</span> - <span class="comment">{{comment.owner}}</span> 
                    <i @click="removeComment(comment)" class="glyphicon glyphicon-trash" aria-hidden="true"></i>
                </li>
            </ul>
           </div>

            <form @submit.prevent="sendComment()" form class="form-horizontal">
                <input v-model="newComments.comment" placeholder="Comentário..." id="activity" type="text" required  class="form-control">
                <input v-model="newComments.owner" placeholder="Name..." id="name" type="text" required  class="form-control">
                <hr>
                <button class="btn red">
                    <i class="fa fa-send"></i>
                    Post
                </button>
            </form>
        </div>
        
        </div>
    </div> 
       
</template>
<script>

import Comment from '../../domain/comment/Comment';
import Task from '../../domain/task/Task';
import TaskService from '../../domain/task/TaskService';
import commentsRef from '../../domain/firebase/FirebaseService';


export default {

  data() {
    return {
      task: new Task(),
      newComments: new Comment(),
      id: this.$route.params.id,
      msg: '',
      title: 'Info:',
    };
  },

  firebase() {
    return {
      comments: commentsRef.ref(`comments/${this.$route.params.id}`),

    };
  },

  created() {
    this.service = new TaskService(this.$resource);

    if (this.id) {
      this.service
                .getTaskById(this.id)
                .then((res) => {
                  console.log(res);
                  return this.task = res;
                }, (err) => {
                  this.msg = err.message;
                });
    }
  },


  methods: {
    updateTask() {
      this.service
             .updateTask(this.task)
             .then(res => console.log(res));
    },
    sendComment() {
      const justComment = commentsRef.ref(`comments/${this.$route.params.id}`);
      justComment.push(this.newComments);
      this.newComments = new Comment();
    },
    removeComment(comment) {
      const justComment = commentsRef.ref(`comments/${this.$route.params.id}`);
      justComment.child(comment['.key']).remove();
    },
  },


};
</script>
<style>

.context{
    margin-top:10px;
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

   
</style>
