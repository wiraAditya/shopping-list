<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import {initializeApp} from 'firebase/app'
import {getDatabase, ref, set, onValue } from 'firebase/database';
import { listenAndGetAllData, postShoppingName, getDataById} from './utils';
const firebaseConfig = {
  apiKey: "AIzaSyBFkRwTBmqlGcG1p-DfE4kn67FzWby10WE",
  authDomain: "shopping-list-bead1.firebaseapp.com",
  databaseURL: "https://shopping-list-bead1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "shopping-list-bead1",
  storageBucket: "shopping-list-bead1.appspot.com",
  messagingSenderId: "1469630389",
  appId: "1:1469630389:web:6e447654c9018279937bfc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// See: https://firebase.google.com/docs/web/learn-more#config-object

const database = getDatabase();
const reference = ref(database, 'toko1')
listenAndGetAllData();
</script>

<template>

  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView /> -->
  
  <button class="bg-slate-400 p-4 text-white" @click="postShoppingName({name: 'test', list: []})">Click me</button>
  <button class="bg-slate-400 p-4 text-white" @click="getDataById(1704626895592)">get me</button>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
