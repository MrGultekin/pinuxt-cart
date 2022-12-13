<template>
  <div>
    <h2 class="text-white text-2xl text-center my-8">Your Basket</h2>

    <div v-if="cartStore.cart.length" class="card text-xl">
      <!-- product list -->
      <div v-for="product in cartStore.cart" :key="product.id" class="flex gap-8 items-center">
        <img :src="product.img" :alt="product.title">
        <p class="text-white">{{ product.title }}</p>
        <p class="text-white">{{ product.price * product.quantity }} Silver coins.</p>

        <!-- delete -->
        <button @click="cartStore.deleteFromCart(product)" class="ml-auto" >
          <span class="material-icons-outlined text-white">delete</span>
        </button>

      </div>
      <!-- cart total -->
      <div class="text-right pt-4 mt-4 border-t-2">
        <span class="text-white">Total amount to pay: </span>
        <span class="text-secondary">{{ cartStore.cartTotal }} coins.</span>
      </div>
    </div>

    <div v-else>
      <p class="text-white">Your basket is empty</p>
    </div>

  </div>
</template>

<script setup>
import {useCartStore} from "@/stores/cartStore";

const cartStore = useCartStore()
cartStore.getCart()

</script>

<style scoped>

</style>