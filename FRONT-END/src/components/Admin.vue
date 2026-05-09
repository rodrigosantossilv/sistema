<template>

<div class="box">

  <h3>Pedidos</h3>

  <table>

    <thead>
      <tr>
        <th>ID</th>
        <th>Cliente</th>
        <th>Total</th>
        <th>Ações</th>
      </tr>
    </thead>

    <tbody>

      <tr
        v-for="(pedido,index) in pedidos"
        :key="pedido.id"
      >

        <td>{{ pedido.id }}</td>
        <td>{{ pedido.cliente }}</td>
        <td>R$ {{ pedido.total }}</td>

        <td>

          <button
            class="action red"
            @click="$emit('excluir', index)"
          >
            Excluir
          </button>

        </td>

      </tr>

    </tbody>

  </table>

</div>

</template>

<script>
export default {

  props: [
    'pedidos'
  ]

}
</script>