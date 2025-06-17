<script setup>
import { ref } from 'vue'
import FormBilling from '@/components/FormBilling.vue'
import FormShipping from '@/components/FormShipping.vue'

const shipToDifferentAddress = ref(false)
const onSubmit = () => {}
</script>
<template>
  <form @submit.prevent="onSubmit()" class="max-w-3xl mx-auto my-8">
    <h1>Votre commande</h1>
    <FormBilling />
    <div>
      <input type="checkbox" id="ship-to-different-address" v-model="shipToDifferentAddress" />
      <label for="ship-to-different-address"> Expédier à une adresse différente </label>
    </div>
    <FormShipping v-if="shipToDifferentAddress" />
    <input type="submit" value="Passer ma commande" />
  </form>
</template>
