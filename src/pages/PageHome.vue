<template>
  <div id="app">
    <nav class="orange darken-2">
      <div class="nav-wrapper"></div>
    </nav>
    <img alt="Vue logo" src="../assets/logo.png" />
    <TarefaList msg="Welcome to Your Vue.js App" :tasks="listaDeTarefas" />
  </div>
</template>

<script>
import TarefaList from "../components/TarefaList.vue";
import TasksApi from "../TasksApi.js";

export default {
  name: "PageHome",
  components: {
    TarefaList,
  },
  data: () => {
    return {
      listaDeTarefas: ["A", "B", "C"],
    };
  },
  created() {
    TasksApi.getTasks((data) => {
      this.listaDeTarefas = data;
    });
    this.listaDeTarefas = this.response.data;
    console.log("carreguei a pagina");
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
