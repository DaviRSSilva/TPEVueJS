<template>
  <div>   
    <h1> 
    Neste componente explicarei sobre a reatividade do Vue.js    
    </h1>
    <p>
    <form>
      <label for="login">Login</label>
      <input type="text" name="login"  v-model='usuario.login'></br>
      <label for="senha">Senha</label>
      <input type="password" name="senha" v-model='usuario.senha'>
      <button type="submit" :disabled='!isValid'>Entrar</button>
    </form>
    <div v-if='isValid'> Login Válido! </div>
    <div v-else>Login inválido!</div>
    </p>
  </div>
</template>

<script>
export default{
  data () {
    return {
      usuario: {
        login: '',
        senha: ''
      }
    }
  },
  computed: {
    isValid () {
      const usuario = this.usuario
      return usuario.login !== '' && usuario.senha !== ''
    }
  },
  beforeMount: function () {
    console.log("aqui foi")
    document.body.style.backgroundImage = require('./assets/jin.gif');
  }  
}
</script>

<style>
body {
  font-family: 'Raleway', sans-serif;   
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

}

</style>