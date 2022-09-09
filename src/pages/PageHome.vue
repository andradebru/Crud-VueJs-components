<template>
  <div id="app">
    <nav class="orange darken-2">
      <div class="nav-wrapper"></div>
    </nav>
    <div style="padding: 20px">
      <button @click="mostrarCadastro">ADICIONAR NOVA</button>
    </div>

    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- lista -->
    <div v-show="exibir.lista">
      <TarefaList msg="Welcome to Your Vue.js App" :tasks="listaDeTarefas" />
    </div>

    <div>
      <!-- FORM -->
      <tarefa-form></tarefa-form>
      <!-- <tarefa-form :titulo="form.titulo"></tarefa-form> -->
    </div>
  </div>
</template>

<script>
import TarefaList from '../components/TarefaList.vue'
import TarefaForm from '../components/TarefaForm.vue'
import TasksApi from '../TasksApi.js'

export default {
  name: 'PageHome',
  components: {
    TarefaList,
    TarefaForm,
  },
  data: () => {
    return {
      listaDeTarefas: [],
      exibir: {
        lista: true,
        form: false,
      },
    }
  },
  methods: {
    listarTarefas() {
      TasksApi.getTasks((data) => {
        this.listaDeTarefas = data
      })
    },
    mostrarCadastro() {
      this.exibir.form = true
      this.exibir.lista = false
    },
    recebiSalvar(novaTarefa) {
      console.log('recebi evento', novaTarefa)
      TasksApi.createTask(novaTarefa, () => {
        console.log('salvei')
        this.listarTarefas()
        this.exibir.form = false
        this.exibir.lista = true
      })
      // const novaTarefa = {
      //   title: this.form.title,
      //   date: new Date().toLocaleDateString('pt'),
      // }
      // TasksApi.createTask(novaTarefa, () => {
      // this.listarTarefas()
      // this.exibir.form = false
      // this.exibir.lista = true
      // })
    },
  },
  created() {
    this.listarTarefas()
  },
}
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
