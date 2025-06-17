<script setup>
import { ref } from 'vue'
import FormBilling from '@/components/FormBilling.vue'
import FormShipping from '@/components/FormShipping.vue'
const checkout = ref({
  name: '',
  firstname: '',
  email: '',
  phone: '',
  billing: {
    address: '',
    post_code: '',
    city: '',
  },
  shipping: {
    address: '',
    post_code: '',
    city: '',
  },
  shipToDifferentAddress: false,
})
const onSubmit = () => {}
</script>
<template>
  <form @submit.prevent="onSubmit()" class="max-w-3xl mx-auto my-8">
    <h1>Votre commande</h1>
    <FormBilling />
    <div>
      <input type="checkbox" id="ship-to-different-address" v-model="checkout.shipToDifferentAddress" />
      <label for="ship-to-different-address"> Expédier à une adresse différente </label>
    </div>
    <FormShipping v-if="checkout.shipToDifferentAddress" />
    <input type="submit" value="Passer ma commande" />
  </form>
</template>
