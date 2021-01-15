<template>
  <section class="section">
    <div class="container">
      <h1 class="title">Keep Notes</h1>
      <h4>You can create your note</h4>
      <h1 class="title">By</h1>
      <div class="row">
        <div class="col-sm-4">
        </div>  
        <div class="col-sm-2">
          <nuxt-link class="navbar-item links" to="/login">Log In</nuxt-link>
        </div>
        <div class="col-sm-2">
           <nuxt-link class="navbar-item links" to="/register">Register</nuxt-link>
        </div>
        <div class="col-sm-4">
        </div> 
      </div>
    </div>
    
  </section>
</template>

<script>


export default {
  components: {
    
  },
  middleware: 'guest',
}
</script>

<style scoped>
.container {
  min-height: 100vh;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  color: #35495E;
font-size: 30px;
font-weight: bold;
}
</style>

