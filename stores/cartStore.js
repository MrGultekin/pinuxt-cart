
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
        numberOfItems() {
            return this.cart.reduce((total, currentItem) => {
                return total + currentItem.quantity
            }, 0)
        }
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
       // increase Quantity in cart
        async increaseQuantity(product) {
            let updatedProduct;
            this.cart = this.cart.map(p => {
                if (p.id === product.id) {
                    p.quantity++
                    updatedProduct = p
                }
                return p
            })
            // make put request
            await $fetch('http://localhost:4000/cart/' + product.id, {
                method: 'put',
                   body: JSON.stringify(updatedProduct)
            })
        },
        // decrease Quantity in cart
        async decreaseQuantity(product) {
            let updatedProduct;
            this.cart = this.cart.map(p => {
                if (p.id === product.id && p.quantity > 1) {
                    p.quantity--
                    updatedProduct = p
                }
                return p
            })
            // make put request
            if (updatedProduct) {
                await $fetch('http://localhost:4000/cart/' + product.id, {
                    method: 'put',
                    body: JSON.stringify(updatedProduct)
                })
            }

        },
        // add to cart
        async addToCart(product) {
            // check if product is already in cart
            const exists = this.cart.find(p => {
                return p.id === product.id
            })
            if (exists) {
                // increase quantity
                await this.increaseQuantity(product)
            } else {
                // add product to cart
                this.cart.push({
                    ...product,
                    quantity: 1
                })
                // make post request
                await $fetch('http://localhost:4000/cart', {
                    method: 'post',
                    body: JSON.stringify({
                        ...product,
                        quantity: 1
                    })
                })
            }
        }
    }
})