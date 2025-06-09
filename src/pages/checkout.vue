<script setup>
import { ref } from 'vue'

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
    <h2>Adresse de facturation</h2>
    <div>
      <label for="address">Adresse</label>
      <input id="address" type="text" required v-model="checkout.billing.address" />
    </div>
    <div>
      <label for="post_code">Code Postal</label>
      <input id="post_code" type="text" required v-model="checkout.billing.post_code" />
    </div>
    <div>
      <label for="city">Ville</label>
      <input id="city" type="text" required v-model="checkout.billing.city" />
    </div>
    <div>
      <label for="phone">Numéro de téléphone</label>
      <input id="phone" type="tel" required v-model="checkout.phone" />
    </div>
    <div>
      <input
        type="checkbox"
        id="ship-to-different-address"
        v-model="checkout.shipToDifferentAddress"
      />
      <label for="ship-to-different-address"> Expédier à une adresse différente </label>
    </div>
    <div v-if="checkout.shipToDifferentAddress">
      <h2>Adresse de livraison</h2>
      <div>
        <label for="shipping-address">Adresse</label>
        <input id="shipping-address" type="text" required v-model="checkout.shipping.address" />
      </div>
      <div>
        <label for="shipping-post-code">Code Postal</label>
        <input id="shipping-post-code" type="text" required v-model="checkout.shipping.post_code" />
      </div>
      <div>
        <label for="shipping-city">Ville</label>
        <input id="shipping-city" type="text" required v-model="checkout.shipping.city" />
      </div>
    </div>
    <input type="submit" value="Passer ma commande" />
  </form>
</template>
