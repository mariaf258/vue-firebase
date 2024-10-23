<script setup lang="ts">
import { RouterLink, RouterView, onMounted } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

const firebaseConfig = {
  apiKey: 'AIzaSyBN0nPeXxaZo4xHVPM6T0q4O_1cayGQqts',
  authDomain: 'fir-vue-example-5d55f.firebaseapp.com',
  projectId: 'fir-vue-example-5d55f',
  storageBucket: 'fir-vue-example-5d55f.appspot.com',
  messagingSenderId: '147573327856',
  appId: '1:147573327856:web:108142dbe96fbc31527f35',
}

firebase.initializeApp(firebaseConfig)

// const db = firebase.firestore()
// const colection = db.collection('usuarios')

// new vue({
//   el: 'main',
//   data: {
//     nombre: null,
//     edad: null,
//     usuarios: [],
//   },
//   onMounted() {
//     this.usuarios = []
//     colection
//       .get()
//       .then(r =>
//         r.docs.map(item =>
//           this.usuarios.push({ id: item.id, data: item.data() }),
//         ),
//       )
//   },
// })
</script>

<template>
  <h1>CRUD DE FIREBASE</h1>
  <hr />
  <form>
    <input type="text" placeholder="Introduce Nombre" /><br /><br />
    <input type="number" placeholder="Introduce Edad" /><br /><br />
    <button>Añadir usuario</button>
    <hr />
    <ul>
      <li v-for="item in usuarios" v-bind:key="item.id">
        {{ item.data.nombre }}
      </li>
    </ul>
  </form>
</template>

<style scoped>
.container {
  max-width: 500px;
  margin: 40px auto;
}
</style>
