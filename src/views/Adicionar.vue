<template>
  <div class="p-6 max-w-2xl mx-auto">
    <h2 class="text-2xl font-semibold mb-4">Adicionar Produto</h2>

    <form @submit.prevent="adicionarProduto" class="space-y-4">
      <!-- Nome -->
      <div>
        <label for="nome" class="block text-sm font-medium">Nome</label>
        <input
          id="nome"
          v-model="nome"
          type="text"
          class="mt-1 p-2 w-full border rounded"
          required
        />
      </div>

      <!-- Preço -->
      <div>
        <label for="preco" class="block text-sm font-medium">Preço</label>
        <input
          id="preco"
          v-model.number="preco"
          type="number"
          step="0.01"
          class="mt-1 p-2 w-full border rounded"
          required
        />
      </div>

      <!-- Descrição -->
      <div>
        <label for="descricao" class="block text-sm font-medium">Descrição</label>
        <textarea
          id="descricao"
          v-model="descricao"
          class="mt-1 p-2 w-full border rounded"
          rows="4"
          required
        ></textarea>
      </div>

      <!-- Imagem -->
      <div>
        <label for="imagem" class="block text-sm font-medium">Imagem</label>
        <input
          id="imagem"
          type="file"
          accept="image/*"
          @change="handleImagem"
          class="mt-1"
        />
      </div>

      <button
        type="submit"
        class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Salvar
      </button>
    </form>

    <p v-if="mensagem" class="mt-4 text-green-600">{{ mensagem }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const nome = ref('')
const preco = ref(0)
const descricao = ref('')
const imagem = ref(null)
const mensagem = ref('')
const router = useRouter()

function handleImagem(event) {
  const file = event.target.files[0]
  if (file) {
    imagem.value = file
  }
}

async function adicionarProduto() {
  try {
    const formData = new FormData()
    formData.append('name', nome.value)
    formData.append('price', preco.value)
    formData.append('description', descricao.value)
    if (imagem.value) {
      formData.append('image', imagem.value)
    }

    await axios.post(`${import.meta.env.VITE_API_URL}/produtos`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })

    mensagem.value = 'Produto adicionado com sucesso!'
    setTimeout(() => router.push('/produtos'), 1000)
  } catch (error) {
    console.error('Erro ao adicionar produto:', error)
    mensagem.value = 'Erro ao salvar o produto.'
  }
}
</script>
