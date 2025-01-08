<template>
  <h1>Todo</h1>
  <div class="content d-flex flex-wrap">
    
<br>

    <div class="card shadow m-1" style="width: 18rem;"  v-for="todo in taskStore.tasks" :key="index">
  <div class="card-body">
    <h5 class="card-title">{{todo.name}}</h5>
    <h6 class="card-subtitle mb-2 text-muted">{{todo.desc}}</h6>
    <p class="card-text">{{todo.deadline}}</p>
    <button type="button" v-on:click="taskStore.MarkAsDone(todo)" class="btn btn-success">Done</button>
    <RouterLink :to="'EditTask/' + todo.id" type="button" class="btn btn-primary m-1">Edit</RouterLink>
  </div>
</div>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from "vue";
import { useTaskStore } from '@/stores/tasks';
const taskStore = useTaskStore();
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
