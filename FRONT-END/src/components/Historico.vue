<template>

<div>

  <button
    class="back-btn"
    @click="$emit('voltar')"
  >
    Voltar
  </button>

  <div
    class="invoice"
    v-for="h in historico"
    :key="h.pedido.id"
  >

    <b>Pedido Nº {{ h.pedido.id }}</b>

    <br><br>

    Total:
    R$ {{ h.pedido.total }}

  </div>

</div>

</template>

<script>
export default {

  props: [
    'historico'
  ]

}
</script>