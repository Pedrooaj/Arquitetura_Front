<template>
  <div class="p-6 max-w-6xl mx-auto">
    <h2 class="text-2xl font-semibold mb-4">Lista de Produtos</h2>

    <p v-if="query" class="mb-4">
      Resultados para: <strong>{{ query }}</strong>
    </p>

    <!-- Tabela -->
    <table class="min-w-full bg-white shadow rounded overflow-hidden">
      <thead class="bg-gray-100 text-left">
        <tr>
          <th class="p-3">Nome</th>
          <th class="p-3">Descrição</th>
          <th class="p-3">Preço</th>
          <th class="p-3">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="produto in produtosFiltrados"
          :key="produto.id"
          class="border-t"
        >
          <td class="p-3">{{ produto.name }}</td>
          <td class="p-3">{{ produto.description }}</td>
          <td class="p-3">R$ {{ produto.price.toFixed(2) }}</td>
          <td class="p-3 space-x-2 flex">
            <button
              @click="abrirModalImagem(produto)"
              class="px-2 py-1 bg-gray-500 text-white rounded hover:bg-gray-600"
              title="Ver imagem"
            >
              <Eye />
            </button>
            <button
              @click="abrirModal(produto)"
              class="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Editar
            </button>
            <button
              @click="remover(produto.id)"
              class="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Remover
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Modal de edição -->
    <div
      v-if="modalAberto"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div class="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h3 class="text-xl font-bold mb-4">Editar Produto</h3>
        <form @submit.prevent="salvarEdicao">
          <div class="mb-4">
            <label class="block font-medium">Nome</label>
            <input
              v-model="produtoSelecionado.name"
              class="w-full border rounded p-2"
              required
            />
          </div>
          <div class="mb-4">
            <label class="block font-medium">Descrição</label>
            <input
              v-model="produtoSelecionado.description"
              class="w-full border rounded p-2"
              required
            />
          </div>
          <div class="mb-4">
            <label class="block font-medium">Preço</label>
            <input
              v-model.number="produtoSelecionado.price"
              type="number"
              step="0.01"
              class="w-full border rounded p-2"
              required
            />
          </div>
          <div class="mb-4">
            <label class="block font-medium">Imagem (opcional)</label>
            <input type="file" accept="image/*" @change="handleImagem" />
            <div v-if="produtoSelecionado.image_url" class="mt-2">
              <img
                :src="imagemUrl(produtoSelecionado.image_url)"
                alt="Imagem atual"
                class="h-24 object-cover border rounded"
              />
            </div>
          </div>
          <div class="flex justify-end gap-2">
            <button
              type="button"
              @click="fecharModal"
              class="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Cancelar
            </button>
            <button
              type="submit"
              class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Modal de Imagem -->
    <div
      v-if="modalImagemAberto"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div class="bg-white p-4 rounded-lg shadow-lg max-w-xl w-full relative">
        <button
          @click="fecharModalImagem"
          class="absolute top-2 right-2 text-gray-600 hover:text-black text-xl font-bold"
        >
          &times;
        </button>
        <h3 class="text-lg font-semibold mb-4">Imagem do Produto</h3>
        <img
          :src="imagemUrl(produtoImagem?.imageUrl)"
          alt="Imagem do Produto"
          class="max-h-[400px] mx-auto object-contain"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { Eye } from "lucide-vue-next";
import { useToast } from "vue-toastification";
import axios from "axios";

const toast = useToast();
const route = useRoute();
const query = route.query.q?.toString().trim().toLowerCase() || "";

const produtos = ref([]);
const modalAberto = ref(false);
const modalImagemAberto = ref(false);
const imagemSelecionada = ref(null);

const produtoSelecionado = ref({
  id: null,
  name: "",
  description: "",
  price: 0,
  image_url: null,
});

const produtoImagem = ref(null);

onMounted(async () => {
  await carregarProdutos();
});

async function carregarProdutos() {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/produtos`
    );
    produtos.value = response.data;


    toast.success("✅ API online! Aproveite a aplicação...", {
      timeout: 3000,
      closeOnClick: true,
      hideProgressBar: false,
       position: "bottom-left"
    });
  } catch (error) {


    toast.info("A API está fora do ar ou iniciando...", {
      timeout: 7000,
      closeOnClick: true,
      hideProgressBar: false,
      position: "bottom-left"
    });
    console.error("Erro ao buscar produtos:", error);
  }
}

const produtosFiltrados = computed(() =>
  query
    ? produtos.value.filter((p) => p.name.toLowerCase().includes(query))
    : produtos.value
);

function abrirModal(produto) {
  produtoSelecionado.value = { ...produto };
  imagemSelecionada.value = null;
  modalAberto.value = true;
}

function fecharModal() {
  modalAberto.value = false;
  imagemSelecionada.value = null;
  produtoSelecionado.value = {
    id: null,
    name: "",
    description: "",
    price: 0,
    image_url: null,
  };
}

function abrirModalImagem(produto) {
  produtoImagem.value = produto;
  modalImagemAberto.value = true;
}

function fecharModalImagem() {
  modalImagemAberto.value = false;
  produtoImagem.value = null;
}

function handleImagem(event) {
  const file = event.target.files[0];
  if (file) imagemSelecionada.value = file;
}

async function salvarEdicao() {
  try {
    const formData = new FormData();
    formData.append("name", produtoSelecionado.value.name);
    formData.append("description", produtoSelecionado.value.description);
    formData.append("price", produtoSelecionado.value.price);
    if (imagemSelecionada.value) {
      formData.append("image", imagemSelecionada.value);
    }

    const { data } = await axios.patch(
      `${import.meta.env.VITE_API_URL}/produtos/${produtoSelecionado.value.id}`,
      formData,
      { headers: { "Content-Type": "multipart/form-data" } }
    );

    const index = produtos.value.findIndex(
      (p) => p.id === produtoSelecionado.value.id
    );
    if (index !== -1) {
      produtos.value[index] = data;
    }

    fecharModal();
  } catch (error) {
    console.error("Erro ao atualizar produto:", error);
  }
}

async function remover(id) {
  if (confirm("Deseja realmente remover?")) {
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/produtos/${id}`);
      produtos.value = produtos.value.filter((p) => p.id !== id);
    } catch (error) {
      console.error("Erro ao remover produto:", error);
    }
  }
}

function imagemUrl(path) {
  if (!path) return "";
  return `${import.meta.env.VITE_API_URL}/uploads/${path}`;
}
</script>
