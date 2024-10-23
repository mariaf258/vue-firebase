<script setup lang="ts">
// @ts-expect-error
import { onMounted } from 'vue'
import app from './utils/firebase.js'
import { getFirestore, getDocs, addDoc, collection } from 'firebase/firestore'
const db = getFirestore(app)
onMounted(() => {
  obtenerDatos()
  // crearRegistro()
})

const obtenerDatos = async () => {
  const respuesta = await getDocs(collection(db, 'usuarios'))
  console.log({ respuesta })
  console.log(respuesta.docs.map(registro => registro.data()))
}

const crearRegistro = async () => {
  const response = await addDoc(collection(db, 'usuarios'), {
    nombre: 'Mafer',
    edad: '50',
  })
  console.log({ response })
  // const defaultDatabase = firebase.database(app)
}
</script>

<template>
  <h1>Este es el app</h1>
</template>

<style scoped></style>
