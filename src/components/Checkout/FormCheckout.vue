<script setup>
import { ref } from 'vue'
import FormBilling from '@/components/Checkout/FormBilling.vue'
import FormShipping from '@/components/Checkout/FormShipping.vue'

const checkout = ref({
  name: '',
  firstname: '',
  email: '',
  billing: {
    phone: '',
    address: {
      address: '',
      post_code: '',
      city: '',
    },
  },
  shipping: {
    address: {
      address: '',
      post_code: '',
      city: '',
    },
  },
  shipToDifferentAddress: false,
})
const onSubmit = () => {
  console.log(checkout.value)
}
</script>
<template>
  <form @submit="onSubmit()" class="max-w-3xl mx-auto my-8">
    <h1>Votre commande</h1>
    <div class="grid grid-cols-2 gap-4">
      <div>
        <label for="name">Nom</label>
        <input id="name" type="text" required v-model="checkout.name" />
      </div>
      <div>
        <label for="firstname">Prénom</label>
        <input id="firstname" type="text" required v-model="checkout.firstname" />
      </div>
    </div>
    <div>
      <label for="email">Email</label>
      <input id="email" type="email" required v-model="checkout.email" />
    </div>
    <FormBilling v-model="checkout.billing" />
    <div>
      <input
        type="checkbox"
        id="ship-to-different-address"
        v-model="checkout.shipToDifferentAddress"
      />
      <label for="ship-to-different-address"> Expédier à une adresse différente </label>
    </div>
    <FormShipping v-if="checkout.shipToDifferentAddress" v-model="checkout.shipping" />
    <input type="submit" value="Passer ma commande" />
  </form>
</template>
