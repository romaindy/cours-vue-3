<script setup lang="ts">
import FormAddress from '@/components/FormAddress.vue'
</script>
<template>
  <h2>Adresse de facturation</h2>
  <FormAddress />
  <div>
    <label for="phone">Numéro de téléphone</label>
    <input id="phone" type="tel" required />
  </div>
</template>
