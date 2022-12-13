// import {defineStore} from 'pinia'
//
// // @ts-ignore
// export const useCartStore = defineStore('cart', {
//     state: () => ({
//         cart: [],
//     }),
//     getters: {
//         cartTotal() {
//             return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0)
//         }
//     },
//     actions: {
//         async getCart() {
//             const data = await $fetch('http://localhost:4000/cart')
//             this.cart = data
//             console.log(this.cart)
//         },
//         async deleteFromCart(product) {
//             this.cart = this.cart.filter(p => p.id !== product.id) // returns what
//             // is true and removes what is false from the array (in this case, the product that is being deleted)
//
//             // make delete request to server
//             await $fetch('http://localhost:4000/cart/' + product.id, {
//                 method: 'delete',
//                 // body: JSON.stringify(product)
//             })
//         },
//     },
// })

import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
    state: () => ({
        cart: [],
    }),
    getters: {
        cartTotal() {
            return this.cart.reduce((total, item) => {
                return total + (item.price * item.quantity)
            }, 0)
        },
    },
    actions: {
        async getCart() {
            const data = await $fetch('http://localhost:4000/cart')
            this.cart = data
            console.log(this.cart)
        },
        async deleteFromCart(product) {
            this.cart = this.cart.filter(p => {
                return p.id !== product.id // returns what
                // is true and removes what is false from the array (in this case, the product that is being deleted)

            })

            // make delete request
            await $fetch('http://localhost:4000/cart/' + product.id, {
                method: 'delete'
            })
        },
    }
})