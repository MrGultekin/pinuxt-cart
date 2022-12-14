<template>
<div class="flex">
  <button class="btn">-</button>
  <p class=" bg-gray-200 text-lg rounded-sm py-1 px-4 mx-1">{{product.quantity}}</p>
  <button class="btn" @click="cartStore.increaseQuantity(product)">+</button>
</div>
</template>

<script setup>
import {useCartStore} from "@/stores/cartStore";

const cartStore = useCartStore()
defineProps(['product'])
</script>

<style scoped>

</style>