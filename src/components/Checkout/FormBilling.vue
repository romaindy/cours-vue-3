<script setup lang="ts">
import FormAddress from '@/components/FormAddress.vue'
const billing = defineModel()
</script>
<template>
  <h2>Adresse de facturation</h2>
  <FormAddress v-model="billing.address" />
  <div>
    <label for="phone">Numéro de téléphone</label>
    <input id="phone" type="tel" required v-model="billing.phone" />
  </div>
</template>
