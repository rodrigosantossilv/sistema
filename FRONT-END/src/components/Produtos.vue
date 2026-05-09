<template>

<div class="grid">

  <div
    class="card"
    v-for="produto in produtos"
    :key="produto.nome"
  >

    <h3>{{ produto.nome }}</h3>

    <p>{{ produto.categoria }}</p>

    <div class="price">
      R$ {{ produto.preco }}
    </div>

    <button
      class="buy"
      @click="$emit('comprar', produto)"
    >
      Comprar
    </button>

  </div>

</div>

</template>

<script>
export default {

  props: [
    'produtos'
  ]

}
</script>