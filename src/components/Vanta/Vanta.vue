<template>
  <div id="Vanta" ref="vanta">
        <v-vanta effect="globe" :options=options></v-vanta>
   
  </div>
  <slot>
    </slot>
</template>
 
<script>
  import VVanta from 'vue-vanta';
  export default {
    name: "Vanta",
    components: { VVanta },
    data () {
      return {
        options: {
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        scale: 1.0,        
        scaleMobile: 1.0,
        color: "#ffffff",
        backgroundColor: "#1b83c3",
        }
      }
    }
  }
</script>

<style scoped>

div#Vanta{
    width: 100%;
    min-height:100vh;
    

    position:absolute;
    z-index:-1;
    justify-content: center;
    align-items: center;
    text-align: center;
    

  
}

</style>