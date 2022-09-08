import axios from "axios";

export default {
  getTasks: (callback) => {
    axios.get("http://localhost:3000/tasks/").then((response) => {
      callback(response.data);
      //   this.listaDeTarefas = response.data;
    });
  },
};
