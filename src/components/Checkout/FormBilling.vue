<script setup lang="ts">
import FormAddress from '@/components/FormAddress.vue'
const address = defineModel('address')
const phone = defineModel('phone')
</script>
<template>
  <h2>Adresse de facturation</h2>
  <FormAddress v-model="address" />
  <div>
    <label for="phone">Numéro de téléphone</label>
    <input id="phone" type="tel" required v-model="phone" />
  </div>
</template>
