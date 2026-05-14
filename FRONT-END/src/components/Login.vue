<template>

<div id="loginPage">

  <div class="login-box">

    <h1>Cristóvãoooo</h1>

    <input v-model="email" placeholder="Email">
    <input v-model="senha" type="password" placeholder="Senha">

    <button @click="entrar">
      Entrar
    </button>

    <button @click="mostrar = !mostrar">
      Criar Conta
    </button>

    <div v-if="mostrar">

      <input v-model="cadastro.nome" placeholder="Nome">
      <input v-model="cadastro.endereco" placeholder="Endereço">
      <input v-model="cadastro.telefone" placeholder="Telefone">
      <input v-model="cadastro.email" placeholder="Email">
      <input v-model="cadastro.senha" placeholder="Senha">

      <button @click="salvarCadastro">
        Salvar Cadastro
      </button>

    </div>

  </div>

</div>

</template>

<script>
export default {

  data() {
    return {

      email: '',
      senha: '',
      mostrar: false,

      cadastro: {
        nome: '',
        endereco: '',
        telefone: '',
        email: '',
        senha: ''
      }

    }
  },

  methods: {

    entrar() {

      this.$emit('login', {
        email: this.email,
        senha: this.senha
      })

    },

    salvarCadastro() {

      this.$emit('cadastro', this.cadastro)

      alert('Conta criada')

      this.mostrar = false

    }

  }

}
</script>