<template>
    <div >
        <h1>{{title}}</h1>

         <div class="row">
        
         
             <div class="col s12 m6">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                    <span class="card-title">Comments:</span>
                    <hr>
                    <div class="class-container">
                        <ul v-for="comment in comments">
                            <li>
                               <span class="person">{{comment.name}}</span> - <span class="comment">{{comment.comment}}</span> 
                            <i @click="removeComment(comment)" class="fa fa-trash"></i>
                            </li>
                        </ul>
                    </div>
                    
                </div>
                </div>




                
              
                <form @submit.prevent="sendComment()">
                    <div class="input-field col s12 m12">
                        <input v-model="newComments.email" placeholder="Email" id="email" type="email" required class="validate">
                        <label for="email">Email:</label>
                    </div>
                    <div class="input-field col s12 m12">
                        <input v-model="newComments.name" placeholder="Name" id="name" type="text" required class="validate">
                        <label for="name">Name:</label>
                    </div>
                    <textarea name=""  v-model="newComments.comment" id="" cols="30" rows="10"></textarea>
                    <button class="btn red">
                       <i class="fa fa-send"></i>
                        Post
                    </button>
                </form>
            
            </div>
            
        </div>
           

        </div>

    </div> 
       
</template>
<script>

import Comment from '../../domain/comment/Comment'
import Task from  '../../domain/task/Task'
import PokemonService from '../../domain/task/TaskService'
import  commentsRef  from '../../domain/firebase/FirebaseService'


export default {


 
    data() {
        return {
            pokemon:new Pokemon(),
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
        this.service = new PokemonService(this.$resource);

        if(this.id) {
            this.service
                .getPokemonById(this.id)
                .then(pokemon =>  {
                    console.log(pokemon)
                    return this.pokemon = pokemon
                }, err => {
                    this.msg = err.message
                })
        }
    },
    components:{
    'board-profile':BoardProfile,
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
