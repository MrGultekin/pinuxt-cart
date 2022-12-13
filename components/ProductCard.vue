<template>
  <div class="card flex items-center gap-8">
    <img :src="product.img" :alt="product.title">
    <div>
      <p class="text-2xl text-secondary">{{ product.title }}</p>
      <p class="text-xl text-gray-50">{{ product.description }}</p>
      <p class="text-lg text-secondary my-3">{{ product.price }} Silver coins</p>
      <button class="btn">
        <span>Add to basket</span>
      </button>
    </div>
  </div>
</template>

<script setup>
// export default {
//   name: "ProductCard" asagidaki gibi tercih edilir yeni yöntem
// } Bu bir prop alacak componets da defineProps ile tanımlayip define ederiz nuxtda,extract ediyoruz
const {product} = defineProps(['product'])

</script>

<style scoped>

</style>