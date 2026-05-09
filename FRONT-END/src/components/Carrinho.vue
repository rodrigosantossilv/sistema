<template>

<div>

  <button
    class="back-btn"
    @click="$emit('voltar')"
  >
    Voltar
  </button>

  <div
    class="cart-item"
    v-for="(item,index) in carrinho"
    :key="index"
  >

    <div>
      <b>{{ item.nome }}</b>
      <br>
      {{ item.qtd }} x R$ {{ item.preco }}
    </div>

    <button
      class="action red"
      @click="$emit('remover', index)"
    >
      Remover
    </button>

  </div>

  <button
    class="buy"
    @click="$emit('finalizar')"
  >
    Finalizar Compra
  </button>

</div>

</template>

<script>
export default {

  props: [
    'carrinho'
  ]

}
</script>