<template>
  <div id='app' class="app">        
    <ul>
      <li><a href="/">Sobre</a></li>
      <li><a href="/rotas">Rotas</a></li>
      <li><a href="/foo">Reatividade</a></li>    
      <li style="float:right"><a class="active" href="#about">Essa parte é fixa. Apenas o conteúdo abaixo será alterado.</a></li>
    </ul>        
    <router-view></router-view>
  </div>
</template>

<script>
export default{
  name: 'App'
}

</script>

<style>
body {
  background: url(./assets/jin.gif);
  font-family: 'Raleway', sans-serif;   
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

}
.app {
  background-color: rgba(255, 255, 255, 0.7);
  margin: 10%;
  padding: 16px;
}
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #35495e;
}

li {
    float: left;
}

li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

li a:hover {
    background-color: #41b883;
}
</style>