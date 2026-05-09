<template>

<div class="sidebar">

  <button class="side-btn">
    👤
  </button>

  <button
    class="side-btn"
    @click="$emit('abrirCarrinho')"
  >
    🛒
    <span class="badge">
      {{ carrinhoQtd }}
    </span>
  </button>

  <button
    class="side-btn"
    @click="$emit('abrirHistorico')"
  >
    🕒
  </button>

</div>

</template>

<script>
export default {

  props: [
    'carrinhoQtd'
  ]

}
</script>