<template>
  <div class="m-8">
    <header class="wrapper flex justify-between">
      <NuxtLink to="/">
        <h1 class="text-secondary text-5xl">Adventure Store</h1>
      </NuxtLink>

      <NuxtLink to="/cart">
        <span class="material-icons-outlined text-secondary text-5xl">
          shopping_bag
         </span>
        <span class="badge bg-white font-bold text-lg py-1 px-2 rounded-xl">
          {{ cartStore.numberOfItems }}
        </span>
      </NuxtLink>
    </header>

    <div class="wrapper">
      <slot/>
    </div>

  </div>
</template>

<script setup>
// import {useCartStore} from "~/stores/cartStore";
import {useCartStore} from "@/stores/cartStore";

const cartStore = useCartStore()
cartStore.getCart() // it fetches the cart from the server , updates the cart state and logs it to the console


</script>

<style scoped>
/* .badge {
  position: relative;
  left: -15px;
  background-color: #ff0000;
  color: #fff;
}*/
</style>