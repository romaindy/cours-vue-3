<script setup>
import FormAddress from '@/components/FormAddress.vue'
</script>
<template>
  <div class="grid grid-cols-2 gap-4">
    <div>
      <label for="name">Nom</label>
      <input id="name" type="text" required />
    </div>
    <div>
      <label for="firstname">Prénom</label>
      <input id="firstname" type="text" required />
    </div>
  </div>
  <div>
    <label for="email">Email</label>
    <input id="email" type="email" required />
  </div>

  <h2>Adresse de facturation</h2>

  <FormAddress />
  <div>
    <label for="phone">Numéro de téléphone</label>
    <input id="phone" type="tel" required />
  </div>
</template>
