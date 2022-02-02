<template>
<div id="run">
  <Vanta></Vanta>
</div>
</template>

<script>
import Vanta from './components/Vanta/Vanta.vue'

export default {
  name: 'App',
  components: {
    Vanta
  }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    height: 100%;

    box-sizing: border-box;

    font-family: Arial, Helvetica, sans-serif;
  }
   div#run {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
