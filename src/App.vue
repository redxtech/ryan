<template>
  <div id="app">
    <div id="nav" class="nav has-text-centered">
      <router-link to="/">home</router-link>
      |
      <router-link to="/gallery">gallery</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import '~bulma/bulma';

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  .nav {
    padding: 2rem;

    a {
      padding: 0 0.5rem;
      font-weight: bold;
      text-decoration-line: none;
      color: #2c3e50;

      &:hover {
        text-decoration-line: underline;
      }

      &.router-link-exact-active {
        color: #fd6a02;
      }
    }
  }

  .columns {
    margin: 0;
  }

  .top-padded {
    padding-top: 2rem;
  }
</style>
