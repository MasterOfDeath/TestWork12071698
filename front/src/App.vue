<template>
  <b-container id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
    </div>
    <router-view/>
    <b-toast id="success-toast" :title="toast.title" v-model="toast.visible" :variant="toast.variant" append-toast>
      {{ toast.content }}
    </b-toast>
  </b-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'App',
  computed: mapState('ui', {
    toast: state => state.toast
  })
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px 0;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
