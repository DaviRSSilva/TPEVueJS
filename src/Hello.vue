<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Vue.js (Se pronuncia igual a view mesmo). Está em 18º na popularidade no GitHub (Checado em 24/11). Comunidade crescente, incluindo a brasileira.</br>     
     <p>Seus pontos principais são componentização da sua página, gerenciamento de rotas e reatividade e principalmente a liberdade de utilizado em conjunto com outros componentes, diferente do Angular por exemplo.</p>
    </h2> 
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Vue.js - "The Progressive Javascript Framework".'
    }
  },
}
</script>

<style>
#app {  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
