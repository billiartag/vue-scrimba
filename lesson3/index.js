var app = new Vue({
   el: "#app",
   data:{
      todos:[
         {text:"tulisan 1"},
         {text:"tulisan 2"},
         {text:"tulisan 3"}
      ]
   }
})

app.todos.push({text:"tulisan baru"})