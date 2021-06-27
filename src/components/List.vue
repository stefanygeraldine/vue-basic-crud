<template>
  <div class="col-12">
    <div class="flex search">
      <input type="text" class="form-control search-input" v-model="txtBuscar" placeholder="Buscar">
        <span class="search-icon" id="basic-addon1"><i class="fa fa-search"></i></span>
    </div>
    <ul class="flex" style="flex-wrap: wrap">
      <LisItem  v-for="(item, key) in listaFiltrada" v-bind:key="key" :item="item" :eliminar="eliminar"></LisItem>
    </ul>
  </div>
</template>
<script>




import LisItem from './ListItem'


export default {
  name: 'List',
  props:{
    lista:Array,
    eliminar:Function,

  },
  components: {
    LisItem
  },
  data: function () {
    return {
      txtBuscar:'',
    }

  },

  computed:{
    listaFiltrada: function () {
      let arreglo = this.lista
      const consulta = this.txtBuscar;

      if(consulta!==""){
        arreglo = this.lista?.filter(({ titulo, descripcion }) => (
            titulo.toLowerCase() + ' ' + descripcion.toLowerCase()
              ).indexOf(consulta.toLowerCase()) > -1

        );
      }
      console.log(arreglo)
      return arreglo;
    }

  }

}
</script>