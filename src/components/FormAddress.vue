<script setup>
import { ref } from 'vue'

const address = ref({
  address: '',
  post_code: '',
  city: '',
})
</script>
<template>
  <div>
    <label for="address">Adresse</label>
    <input id="address" type="text" required v-model="address.address" />
  </div>
  <div>
    <label for="post_code">Code Postal</label>
    <input id="post_code" type="text" required v-model="address.post_code" />
  </div>
  <div>
    <label for="city">Ville</label>
    <input id="city" type="text" required v-model="address.city" />
  </div>
</template>
