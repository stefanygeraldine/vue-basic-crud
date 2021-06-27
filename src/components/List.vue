<template>
  <div class="col-12">
    <div class="flex p-4">
      <input type="text" class="form-control search-input" v-model="txtBuscar" placeholder="Buscar">
      <ButtonSquare :data="{}" :onClick="()=>{}" bg="#48cdfb">
        <i class="fa fa-search"></i>
      </ButtonSquare>
    </div>
    <ul class="flex" style="flex-wrap: wrap">
      <LisItem  v-for="(item, key) in listaFiltrada" v-bind:key="key" :item="item" :eliminar="eliminar"></LisItem>
    </ul>
  </div>
</template>
<script>
import LisItem from './ListItem'
import ButtonSquare from './ui/ButtonSquare'

export default {
  name: 'List',
  props:{
    lista:Array,
    eliminar:Function,

  },
  components: {
    LisItem,
    ButtonSquare
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
        arreglo = this.lista?.filter(({ nombre, descripcion, precio }) => (
            nombre.toLowerCase() + ' ' + descripcion.toLowerCase() +' ' + precio.toLowerCase()
              ).indexOf(consulta.toLowerCase()) > -1

        );
      }
      console.log(arreglo)
      return arreglo;
    }

  }

}
</script>