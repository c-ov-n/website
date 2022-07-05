<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/anq">ANQ is Not Qabalah</RouterLink>
        <div class="subnav">
        <RouterLink to="/anq/trees">The Trees</RouterLink>
        </div>
      </nav>
    </div>
  </header>

  <div class="content">
    <RouterView />
  </div>
</template>

<style>
@import "@/assets/base.css";

#app {
  padding: 2rem;
  font-weight: normal;
  width: 100%;
}

@media (min-width: 1280px) {
  #app {
    margin: 0 auto;
    width: 1280px;
  }
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

div.content {
  flex: 1;
  margin-top: 1em;
}

a {
  text-decoration: none;
  color: #57c;
  transition: 0.4s;
  width: 100%;
}

nav {
  width: 100%;
  font-size: 1rem;
  text-align: left;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
  border-left: 4px solid rgba(120, 120, 180, 0.8);
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 2px solid rgba(120, 120, 180, 0.8);
}

nav a:hover {
  background-color: #dde;
}

nav .subnav > a {
  padding-left: 1.8em;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: start center;
  }

  #app {
    display: flex;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: start;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    flex-grow: 0;
    margin-left: -1rem;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }

  div.content {
    flex-grow: 1;
  }

}
</style>
