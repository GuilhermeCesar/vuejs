<template>
  <div>
    <h1 class="centralizado">{{ titulo }}</h1>
    <input type="search" class="filtro"  @input="filtro = $event.target.value" placeholder="Filter por parte do titulo">

    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto of fotosComFiltro">
        <meu-painel :titulo="foto.titulo">
          <imagem-responsiva :titulo="foto.titulo" :url="foto.url"></imagem-responsiva>
        </meu-painel>
      </li>
    </ul>
  </div>
</template>

<script>
  import Painel from '../shared/painel/Painel.vue';
  import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue';

  export default {
    components:{
      'meu-painel':Painel,
      'imagem-responsiva':ImagemResponsiva
    },
    data(){
      return {
        titulo: 'Calopsita',
        fotos: [],
        filtro:''
      }
    },
    created() {
      this.$http.get("http://localhost:3000/v1/fotos")
        .then(res => res.json())
        .then(fotos => this.fotos = fotos, erro => console.error(erro))
    },
    computed:{
      fotosComFiltro(){
        if(this.filtro){
          let exp = new RegExp(this.filtro.trim(),"i");
          return this.fotos.filter(foto => exp.test(foto.titulo));
          return this.fotos
          return [];
        }else {
          return this.fotos;
        }
      }
    }
  }
</script>

<style>


  .centralizado{
    text-align: center;
  }

  .lista-fotos{
    list-style: none;
  }

  .lista-fotos .lista-fotos-item{
    display: inline-block;
  }

  .filtro{
    display: block;
    width: 100%;
  }


</style>
