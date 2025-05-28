<template>
  <div class="p-8 max-w-5xl mx-auto">
    <h1 class="text-4xl font-bold mb-6 text-center text-green-700">
      Bem-vindo ao Sistema de Produtos
    </h1>

    <!-- Arquitetura MVC -->
    <section class="mb-10">
      <h2 class="text-2xl font-semibold text-gray-800 mb-2">
        🧠 Arquitetura MVC (Model-View-Controller)
      </h2>
      <p class="text-gray-700 leading-relaxed">
        O sistema foi desenvolvido com base na arquitetura <strong>MVC</strong>,
        que separa a aplicação em três camadas principais. Isso facilita a
        manutenção, a escalabilidade e a clareza do código. Veja como cada
        camada atua:
      </p>
      <ul class="list-disc pl-6 text-gray-700 mt-4 space-y-2">
        <li>
          <strong>Model (Modelo):</strong> Representa a estrutura dos dados e as
          regras de negócio. No nosso projeto, o modelo está presente no
          <strong>Supabase</strong>, que armazena as informações dos produtos
          (nome, preço, descrição, imagem etc).
        </li>
        <li>
          <strong>View (Visão):</strong> É a interface com o usuário. No
          frontend usamos o <strong>Vue 3</strong> com Composition API para
          construir as telas e exibir os dados dos produtos para o usuário
          final.
        </li>
        <li>
          <strong>Controller (Controlador):</strong> Recebe as requisições do
          frontend, processa com base nas regras do Model, e devolve a resposta
          adequada. No backend com Express, os controladores estão na pasta
          <code>controllers/</code>.
        </li>
      </ul>
      <p class="text-gray-700 mt-4">
        <strong>Exemplo:</strong> Ao cadastrar um novo produto:
      </p>
      <ul class="list-disc pl-6 mt-2 text-gray-700 space-y-1">
        <li>
          O usuário preenche o formulário na <strong>View</strong> (frontend
          Vue).
        </li>
        <li>
          Essa informação é enviada para o <strong>Controller</strong> (backend
          Express).
        </li>
        <li>
          O Controller valida e envia para o <strong>Model</strong> (Supabase).
        </li>
        <li>
          Após salvar, o Controller responde e a View exibe uma mensagem de
          sucesso.
        </li>
      </ul>
    </section>

    <!-- Backend -->
    <section class="mb-10">
      <h2 class="text-2xl font-semibold text-gray-800 mb-2">
        ⚙️ Backend com Express, TypeScript e Supabase
      </h2>
      <p class="text-gray-700 leading-relaxed">
        O backend foi desenvolvido com <strong>Node.js</strong>, utilizando
        <strong>Express</strong> e <strong>TypeScript</strong> para manter o
        código organizado, tipado e mais seguro. O banco de dados utilizado é o
        <strong>Supabase</strong>, baseado em PostgreSQL.
      </p>
      <p class="text-gray-700 leading-relaxed mt-2">
        As configurações essenciais como conexão com banco, upload de arquivos
        com <code>multer</code> e variáveis de ambiente (<code>dotenv</code>)
        estão na pasta <code>config/</code>, centralizando as responsabilidades
        de configuração do sistema.
      </p>

      <div class="bg-gray-100 rounded p-4 mt-4 text-sm text-gray-800 font-mono">
        Estrutura do backend:
        <ul class="list-disc pl-6 mt-2">
          <li><code>controllers/</code> - Controladores das rotas</li>
          <li>
            <code>service/</code> - Lógica de negócio (ex: manipulação de
            produtos)
          </li>
          <li><code>routes/</code> - Arquivos que definem os endpoints</li>
          <li><code>config/</code> - Supabase, Multer, dotenv</li>
          <li><code>uploads/</code> - Armazenamento local das imagens</li>
        </ul>
      </div>
    </section>

    <!-- Frontend -->
    <section class="mb-10">
      <h2 class="text-2xl font-semibold text-gray-800 mb-2">
        🖼️ Frontend com Vue 3 + Composition API
      </h2>
      <p class="text-gray-700 leading-relaxed">
        O frontend foi criado com <strong>Vue 3</strong>, utilizando a
        <strong>Composition API</strong> e a sintaxe moderna com
        <code>&lt;script setup&gt;</code>. As chamadas ao backend são feitas com
        <strong>Axios</strong>, garantindo comunicação rápida e eficiente.
      </p>

      <div class="bg-gray-100 rounded p-4 mt-4 text-sm text-gray-800 font-mono">
        Tecnologias utilizadas:
        <ul class="list-disc pl-6 mt-2">
          <li>
            <code>Vue Router</code> - Gerenciamento das páginas (rotas SPA)
          </li>
          <li>
            <code>Tailwind CSS</code> - Estilização moderna, responsiva e
            produtiva
          </li>
          <li><code>Axios</code> - Realização das requisições HTTP</li>
          <li>
            <code>Vite</code> - Ferramenta de desenvolvimento e build rápida e
            leve
          </li>
        </ul>
      </div>
    </section>

    <!-- Primeiros Passos -->
    <section class="mb-10">
      <h2 class="text-2xl font-semibold text-gray-800 mb-2">
        🚀 Primeiros passos
      </h2>
      <p class="text-gray-700 leading-relaxed">
        <strong>Backend:</strong> Criado com <code>npm init -y</code>.
        Instalação de <code>express</code>, <code>typescript</code>,
        <code>dotenv</code> e <code>multer</code>. Estruturado em pastas bem
        definidas como <code>controllers</code>, <code>routes</code>,
        <code>service</code> e <code>config</code>.
      </p>
      <p class="text-gray-700 leading-relaxed mt-2">
        <strong>Frontend:</strong> Inicializado com
        <code>npm create vite@latest</code> selecionando o template Vue. Adição
        de <code>axios</code>, <code>vue-router</code> e
        <code>tailwindcss</code> para uma aplicação moderna e modular.
      </p>
    </section>

    <!-- Hospedagem -->
    <section class="mb-10">
      <h2 class="text-2xl font-semibold text-gray-800 mb-2">🌍 Hospedagem</h2>
      <ul class="list-disc pl-6 text-gray-700 space-y-2">
        <li>
          <strong>Frontend:</strong> Publicado na
          <a
            href="https://vercel.com"
            class="text-blue-600 underline"
            target="_blank"
            >Vercel</a
          >, com deploy automático via GitHub.
        </li>
        <li>
          <strong>Backend:</strong> Hospedado em uma instância da
          <a
            href="https://www.oracle.com/br/cloud/"
            class="text-blue-600 underline"
            target="_blank"
            >Oracle Cloud</a
          >, utilizando <strong>Nginx</strong> como servidor reverso e
          <strong>Certbot</strong> com <strong>Let's Encrypt</strong> para
          fornecer HTTPS gratuito e seguro.
        </li>
      </ul>
    </section>

    <!-- Separação entre front e back -->
    <section class="mb-10">
      <h2 class="text-2xl font-semibold text-gray-800 mb-2">
        🔗 Por que separar Frontend e Backend?
      </h2>
      <p class="text-gray-700 leading-relaxed">
        Separar o frontend e o backend em máquinas/servidores diferentes (como
        Vercel para o Vue e Render para o Node.js) traz vantagens técnicas e
        arquiteturais:
      </p>
      <ul class="list-disc pl-6 mt-2 text-gray-700 space-y-1">
        <li>
          <strong>Desempenho:</strong> O frontend pode ser entregue por uma CDN,
          acelerando o carregamento globalmente.
        </li>
        <li>
          <strong>Manutenção:</strong> Cada parte pode ser atualizada, testada
          ou reiniciada separadamente sem afetar a outra.
        </li>
        <li>
          <strong>Escalabilidade:</strong> É possível escalar o backend
          separadamente do frontend conforme a demanda da API.
        </li>
        <li>
          <strong>Segurança:</strong> O backend pode ser protegido em um
          ambiente isolado, com rotas seguras e controle de acesso.
        </li>
        <li>
          <strong>Reaproveitamento:</strong> O mesmo backend pode ser usado por
          outros clientes, como apps mobile ou painéis administrativos.
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup>
// Nenhum script necessário para essa tela estática
</script>
