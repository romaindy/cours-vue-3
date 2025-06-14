<script setup lang="ts">
import FormAddress from '@/components/FormAddress.vue'

const shipping = defineModel()
</script>
<template>
  <h2>Adresse de livraison</h2>
  <FormAddress v-model="shipping.address" />
</template>
