<template>
    <div>
      <input class="addtodo" v-model="newTodo" :placeholder="$t('todo.placeholder')" />
      <Button @click="addTodo">{{$t('todo.add')}}</Button>
      <ul>
        <li v-for="todo in todos" :key="todo.id">
          <Checkbox v-model:checked="todo.completed">{{ todo.text }}</Checkbox>
          <Button @click="deleteTodo(todo.id)" type="text">{{ $t('todo.delete') }}</Button>
        </li>
      </ul>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Input, Checkbox, Button } from 'ant-design-vue';
  
  interface Todo {
    id: number;
    text: string;
    completed: boolean;
  }
  
  export default defineComponent({
    components: {
      Input,
      Checkbox,
      Button,
    },
    setup() {
      const newTodo = ref('');
      const todos = ref<Todo[]>([
        { id: 1, text: 'Nadin soft task', completed: false },
        { id: 2, text: 'i18n', completed: true },
      ]);

      const addTodo = () => {
        console.log(newTodo.value);
        if (newTodo.value.trim() !== '') {
          todos.value.push({
            id: todos.value.length + 1,
            text: newTodo.value.trim(),
            completed: false,
          });
          newTodo.value = '';
        }
      };
  
      const deleteTodo = (id: number) => {
        todos.value = todos.value.filter((todo) => todo.id !== id);
      };
  
      return {
        newTodo,
        todos,
        addTodo,
        deleteTodo,
      };
    },
  });
  </script>
  
  <style scoped>
  ul {
    list-style-type: none;
  }
  .addtodo{
    padding: 4px 4px;
    margin: 8px;
  }
  </style>