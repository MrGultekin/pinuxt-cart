<template>
  <div class="card flex items-center gap-8">
    <img :src="product.img" :alt="product.title">

    <div>
      <p class="text-2xl text-secondary">{{ product.title }}</p>
      <p class="text-xl text-gray-50">{{ product.description }}</p>
      <p class="text-lg text-secondary my-3">{{ product.price }} Silver coins</p>
     <!-- <button class="btn" @click="cartStore.addToCart(product)" >  Way 2 call it indirectly in order to use LoadState -->
      <button class="btn" :disabled="isPending" @click="addToBasket()" >
        <span v-show="!isPending">Add to basket</span>
        <span v-show="isPending">Adding....</span>
      </button>
    </div>

  </div>
</template>

<script setup>
// export default {
//   name: "ProductCard" asagidaki gibi tercih edilir yeni yöntem
// } Bu bir prop alacak componets da defineProps ile tanımlayip define ederiz nuxtda,extract ediyoruz
  import {useCartStore} from "~/stores/cartStore";
const cartStore = useCartStore()

const isPending = ref(false);
const addToBasket = async () => {
  isPending.value = true;
  await cartStore.addToCart(product)
  setTimeout(() => {
    isPending.value = false;
  }, 1000)
}
const {product} = defineProps(['product'])

</script>

<style scoped>

</style>