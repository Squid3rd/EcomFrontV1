<template lang="">
    <header class="bg-gray-900 text-white py-4">
    <div class="container mx-auto px-4">
      <!-- header title -->
      <h1 class="text-2xl font-semibold">My eCommerce Site (Gacha)</h1>
      <!-- Navigation links -->
      <nav>
        <ul class="flex space-x-4 mt-5">
          <li className="hover:bg-slate-500 p-2"><RouterLink to="/">Home</RouterLink></li>
          <li className="hover:bg-slate-500 p-2"><RouterLink to="/products">Products</RouterLink></li>
        </ul>
      </nav>
    </div>
    
  </header>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>