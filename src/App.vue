<template>
<div id="run">
  
    <Vanta>
    
    <Header></Header>
    
    <MessageText
        v-show="!valueMenuMobile"
      >
        SOLUCIONES EFECTIVAS PARA TU NEGOCIO
      </MessageText>
    </Vanta> 

    <Main
      v-show="!valueMenuMobile"
    />   
     <Footer
      v-show="!valueMenuMobile"
    />
  
 
</div>
</template>

<script>
import Vanta from './components/Vanta/Vanta.vue'
import MessageText from './components/MessageText/MessageText.vue'
import Header from './components/Header/Header.vue';
import Main from './components/Main/Main.vue';
import Footer from './components/Footer/Footer.vue'

export default {
  name: 'App',
  components: {
    Vanta,
    MessageText,
    Header,
    Main,
    Footer
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
  
   :root {
    --white: hsl(0, 0%, 100%);
    --black: hsl(0, 0%, 0%);
    --dark-gray: hsl(0, 0%, 55%);
    --very-dark-gray: hsl(0, 0%, 41%);
  }
    @font-face {
    font-family: Alata;
    src: url(./fonts/alata/Alata-Regular.ttf);
  }

  @font-face {
    font-family: "Josefin Sans";
    src: url(./fonts/josefin-sans/static/JosefinSans-Light.ttf);
  }
   div#run {
    display: flex;
    flex-direction: column;
    align-items: left;
    
  }
</style>
