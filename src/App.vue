<template>
  
   <TablaUsuariosComponents></TablaUsuariosComponents>
</template>

<script>
  import TablaUsuariosComponents from '@/components/TablaUsuariosComponents.vue';
export default {
  name: 'App',
  components: {
    TablaUsuariosComponents,
    
  }
}
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
body{
  background-color: #f9f7f0;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
} 
</style>

