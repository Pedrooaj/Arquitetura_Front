<template>
  <header
    class="bg-blue-600 text-white p-4 shadow-md flex justify-between items-center"
  >
    <h1 class="text-xl font-bold">Lista de Produtos</h1>
    <div class="flex items-center gap-4">
      <input
        v-model="search"
        type="text"
        placeholder="Pesquisar produto..."
        class="px-3 py-1 rounded text-black"
        @keyup.enter="handleSearch"
      />
      <router-link to="/adicionar" class="hover:underline"
        >Adicionar</router-link
      >
      <router-link to="/produtos" class="hover:underline">Produtos</router-link>
      <router-link to="/" class="hover:underline"><Info /></router-link>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { Info } from "lucide-vue-next";
import { useRouter } from "vue-router";

const search = ref("");
const router = useRouter();

function handleSearch() {
  // Redireciona para a página de produtos com query string
  router.push({ path: "/produtos", query: { q: search.value } });
}
</script>
