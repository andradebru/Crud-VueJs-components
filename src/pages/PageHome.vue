<template>
  <div id="app">
    <img alt="Vue logo" src="../assets/logo.png" />
    <TarefaList msg="Welcome to Your Vue.js App" :tasks="ListaDeTarefa" />
  </div>
</template>

<script>
import axios from "axios";
import TarefaList from "../components/TarefaList.vue";

export default {
  name: "PageHome",
  components: {
    TarefaList,
  },
  data: () => {
    return {
      ListaDeTarefa: ["A", "B", "C"],
    };
  },
  created() {
    console.log("carreguei a pagina");
    axios.get("http://localhost:3000/tasks/").then((response) => {
      console.log(response.data);
      this.listaDeTarefas = response.data;
    });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
