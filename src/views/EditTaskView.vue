<template>
    <div class="content">
        <h1>Edit Task</h1>

        <form>
      <div class="row">
        <div class="col m-2">
          <input v-model="TodoName" type="text" class="form-control" placeholder="Task name">
        </div>
        <div class="col m-2">
          <input v-model="TodoDesc" type="text" class="form-control" placeholder="Descrtiption">
        </div>
      </div>
      <div class="col m-2">
        <input v-model="TodoDeadline" type="text" class="form-control" placeholder="Deadline">
      </div>
      <div>

        <div type="button m-2" v-on:click="verifyTask" class="btn btn-info">Save</div>
      </div>
    </form>
    </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from "vue";
import { useRoute } from 'vue-router'
import { useTaskStore } from '@/stores/tasks';
import router from '@/router';
const route = useRoute();
const taskStore = useTaskStore();

const taskEdited = taskStore.tasks.find((x) =>x.id == route.params.id)
const TodoName = ref(taskEdited.name);
const TodoDesc = ref(taskEdited.desc);
const TodoDeadline = ref(taskEdited.deadline);


const verifyTask = () => {
  if (!TodoName.value) {
    alert("Rosz név")
    return
  }
  if (!TodoDesc.value) {
    alert("Rosz leírás")
    return
  }
  if (/[1-9][0-9][0-9]{2}-([0][1-9]|[1][0-2])-([1-2][0-9]|[0][1-9]|[3][0-1])/.test(TodoDeadline.value)) {
   
var newId = taskEdited.id
    var newtask = {
      id: newId,
      name: TodoName.value,
      desc: TodoDesc.value,
      completed: false,
      deadline: TodoDeadline.value,
      
    }
    taskStore.EditTask(route.params.id, newtask)
    
    router.push("/tasks")

  }
  else {
    alert("Rosz ido")
  }
}
</script>


<style>
@media (min-width: 1024px) {
    .about {
        min-height: 100vh;
        display: flex;
        align-items: center;
    }
}
</style>