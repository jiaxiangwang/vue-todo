<template>
  <div class="todo">
    <input id="input" v-model="todoName" type="text">
    <button id="btn" @click="handleAddBtnClick">提交</button>
    <ul id="list">
      <todo-item
        v-for="(name,index) in todoList"
        :todo="name"
        :key="index"
        @delete="handleDeleteBtnClick(index)"
      >
        <span>{{index}}--</span>
      </todo-item>
    </ul>
  </div>
</template>

<script>
import TodoItem from "../components/TodoItem";

export default {
  components: {
    TodoItem
  },
  data() {
    return {
      todoList: [],
      todoName: ""
    };
  },
  methods: {
    handleAddBtnClick() {
      if (!this.todoName) {
        return;
      }
      this.todoList.push(this.todoName);
      this.todoName = "";
    },
    handleDeleteBtnClick(index) {
      this.todoList.splice(index, 1);
    }
  }
};
</script>

<style>
</style>
