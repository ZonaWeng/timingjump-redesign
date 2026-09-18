import { computed, reactive } from "vue"

const storageKey = "timingjump:cart"

function loadItems() {
  try { return JSON.parse(window.localStorage.getItem(storageKey) || "[]") } catch { return [] }
}

export const cart = reactive({ items: loadItems() })
export const cartCount = computed(() => cart.items.reduce((sum, item) => sum + item.quantity, 0))
export const cartTotal = computed(() => cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0))

function save() { window.localStorage.setItem(storageKey, JSON.stringify(cart.items)) }
function priceNumber(price) { return Number(String(price).replace(/[^\d]/g, "")) || 0 }

export function addToCart(product, quantity = 1) {
  const existing = cart.items.find((item) => item.id === product.id)
  if (existing) existing.quantity += quantity
  else cart.items.push({ id: product.id, name: product.name, code: product.code, image: product.image, price: priceNumber(product.price), quantity })
  save()
}

export function updateCartQuantity(id, quantity) {
  const item = cart.items.find((entry) => entry.id === id)
  if (!item) return
  if (quantity < 1) cart.items.splice(cart.items.indexOf(item), 1)
  else item.quantity = quantity
  save()
}

export function removeFromCart(id) {
  const index = cart.items.findIndex((item) => item.id === id)
  if (index !== -1) cart.items.splice(index, 1)
  save()
}
