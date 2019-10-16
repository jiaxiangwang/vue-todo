<template>
  <div class="todo-item">
    <li>
      <slot></slot>
      {{ todo }}
      <button @click="handleClick">x</button>
    </li>
  </div>
</template>

<script>
export default {
  name: "todo-item",
  props: ["todo"],
  methods: {
    handleClick() {
      this.$emit("delete");
    }
  }
};
</script>

<style>
</style>
