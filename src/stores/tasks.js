import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTaskStore = defineStore(

    'tasks', () => {

        const tasks = ref([{
            id:1,
            name: "Clean house",
            desc: "koszos a haz :(",
            completed: false,
            deadline: "2025-01-20"
        },
        {
            id:2,
            name: "Do the dishes",
            desc: "koszos a tal :(",
            completed: false,
            deadline: "2025-02-20"
        }
        ])
        const AddTask = (task) => {
            tasks.value.push(task)
        }
        const MarkAsDone = (task) => {
            const index = tasks.value.indexOf(task);
            if (index > -1) {
                tasks.value.splice(index, 1);
            }
        }
        const EditTask = (id, task) => {
            tasks.value[id-1] = task
            console.log(tasks.value);
            
        }

        return { tasks, AddTask , MarkAsDone,EditTask}
    })
