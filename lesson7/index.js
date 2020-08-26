Vue.component("todo-item",{
   props:['todo'], //namanya sesuai dg v-bind:todo dengan 'todo'
   template:"<li>{{todo.text}}</li>"
})

var app = new Vue({
   el: "#app",
   data:{
      groceryList:[
         {id:0,text:"veggie1"},
         {id:1,text:"keju2"},
         {id:2,text:"eat3"},
         {id:1112,text:"mbohh"},
      ]
   }
})
