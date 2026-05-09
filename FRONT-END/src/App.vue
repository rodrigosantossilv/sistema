<template>
  <Login
    v-if="!logado"
    @login="fazerLogin"
    @cadastro="cadastrar"
  />

  <div v-else>

    <div class="topbar">
      <h2>Cristóvão Sistema</h2>
      <div>Olá, {{ usuarioAtual }}</div>
    </div>

    <div class="layout">

      <Sidebar
        :carrinhoQtd="carrinhoQtd"
        @abrirCarrinho="pagina = 'carrinho'"
        @abrirHistorico="pagina = 'historico'"
      />

      <div class="content">

        <Produtos
          v-if="pagina === 'produtos' && !admin"
          :produtos="produtos"
          @comprar="comprar"
        />

        <Carrinho
          v-if="pagina === 'carrinho'"
          :carrinho="carrinho"
          @voltar="pagina = 'produtos'"
          @remover="removerCarrinho"
          @finalizar="finalizarCompra"
        />

        <Historico
          v-if="pagina === 'historico'"
          :historico="historicoUsuario"
          @voltar="pagina = 'produtos'"
        />

        <Admin
          v-if="admin"
          :pedidos="pedidos"
          @excluir="excluirPedido"
        />

      </div>
    </div>

  </div>
</template>

<script>
import Login from './components/Login.vue'
import Sidebar from './components/Sidebar.vue'
import Produtos from './components/Produtos.vue'
import Carrinho from './components/Carrinho.vue'
import Historico from './components/Historico.vue'
import Admin from './components/Admin.vue'

export default {

  components: {
    Login,
    Sidebar,
    Produtos,
    Carrinho,
    Historico,
    Admin
  },

  data() {
    return {

      logado: false,
      admin: false,
      usuarioAtual: '',

      pagina: 'produtos',

      usuarios: [],
      pedidos: [],
      historicoCompras: [],

      carrinho: [],

      produtos: [
        { nome: "Cimento CPII", preco: 42, categoria: "cimento" },
        { nome: "Tijolo 8 Furos", preco: 2, categoria: "cimento" },
        { nome: "Martelo", preco: 45, categoria: "ferragem" },
        { nome: "Serrote", preco: 60, categoria: "ferragem" },
        { nome: "Cano PVC", preco: 58, categoria: "hidraulica" },
        { nome: "Tinta Branco", preco: 129, categoria: "pintura" }
      ]

    }
  },

  computed: {

    carrinhoQtd() {
      return this.carrinho.reduce((a, b) => a + b.qtd, 0)
    },

    historicoUsuario() {
      return this.historicoCompras.filter(
        h => h.cliente === this.usuarioAtual
      )
    }

  },

  methods: {

    cadastrar(usuario) {
      this.usuarios.push(usuario)
    },

    fazerLogin(dados) {

      if (dados.email === 'ADM' && dados.senha === '1234') {
        this.admin = true
        this.usuarioAtual = 'Administrador'
        this.logado = true
        return
      }

      const user = this.usuarios.find(
        u => u.email === dados.email &&
        u.senha === dados.senha
      )

      if (user) {
        this.usuarioAtual = user.nome
        this.logado = true
      } else {
        alert('Login inválido')
      }

    },

    comprar(produto) {

      const ex = this.carrinho.find(
        x => x.nome === produto.nome
      )

      if (ex) {
        ex.qtd++
      } else {
        this.carrinho.push({
          ...produto,
          qtd: 1
        })
      }

    },

    removerCarrinho(index) {
      this.carrinho.splice(index, 1)
    },

    finalizarCompra() {

      const total = this.carrinho.reduce(
        (a, b) => a + (b.preco * b.qtd),
        0
      )

      const pedido = {
        id: Math.floor(Math.random() * 99999),
        cliente: this.usuarioAtual,
        total,
        itens: [...this.carrinho]
      }

      this.pedidos.push(pedido)

      this.historicoCompras.push({
        cliente: this.usuarioAtual,
        pedido
      })

      this.carrinho = []

      alert('Compra finalizada!')

    },

    excluirPedido(index) {
      this.pedidos.splice(index, 1)
    }

  }

}
</script>