<template >
  <h2>
      {{ greetings }}
  </h2>
</template>
<script>
export default {
  setup() {
    const greetings = "Hola Mundo! (Probando mi Primer Componente)";
    return {greetings}
  }
}
</script>
<style lang="">
  
</style>