<template>
  <div>
  	Updated Message is: <strong>{{ message }}</strong>
  </div>
</template>

<script>
  export default {
  	name: 'child',
    computed: {
    message () {
      return this.$store.state.message
    }
  }
  }
</script>