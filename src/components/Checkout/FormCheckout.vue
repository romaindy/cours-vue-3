<script setup>
import { ref } from 'vue'
import FormBilling from '@/components/Checkout/FormBilling.vue'
import FormShipping from '@/components/Checkout/FormShipping.vue'

const checkout = ref({
  shipToDifferentAddress: false,
})
const onSubmit = () => {}
</script>
<template>
  <form @submit="onSubmit()" class="max-w-3xl mx-auto my-8">
    <h1>Votre commande</h1>
    <FormBilling />
    <div>
      <input
        type="checkbox"
        id="ship-to-different-address"
        v-model="checkout.shipToDifferentAddress"
      />
      <label for="ship-to-different-address"> Expédier à une adresse différente </label>
    </div>
    <FormShipping v-if="checkout.shipToDifferentAddress" />
    <input type="submit" value="Passer ma commande" />
  </form>
</template>
