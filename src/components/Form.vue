<template>
  <div class="flex items-center justify-center card card-form bg-cover">
    <h2 class="card-description" style="color: #ffffff">
      Crear Nuevo Producto
    </h2>
    <form class="text-center" action="#" method="POST">

      <div class="my-4">

        <input
            id="nombre"
            type="text"
            placeholder="Nombre"
            class="form-control search-input border"
            v-model="nombre"
            v-on:keypress="onChangeDataFrom"
        >


        <input
            id="precio"
            type="text"
            placeholder="Precio"
            class="form-control search-input border"
            v-model="precio"
            v-on:keypress="onChangeDataFrom"
        >

        <input
            id="imageUrl"
            type="text"
            placeholder="Imagen URL"
            class="form-control search-input border"
            v-model="imageUrl"
        >


        <textarea
            class="h-24"
            v-model="descripcion"
            placeholder="Descripcion"
            v-on:keypress="onChangeDataFrom"
        />
      </div>
      <div>
        <p>{{message}}</p>
      </div>


      <Button title="Crear" :onClick="addProduct"></Button>

    </form>

  </div>
</template>

<script>


import Button from './ui/Button'
import { v4 as uuidv4 } from 'uuid';


export default {
  name: 'Form',
  props:{
    agregar:Function
  },
  components:{Button},
  data:()=>(
      {
        nombre:'',
        descripcion: '',
        imageUrl:'',
        precio:'',
        message:''
      }
  ),
  methods:{
    addProduct:function (){
      if(this.nombre === '' || this.descripcion === '' || this.precio === ''){
        this.message = 'Campos requeridos'
        return false
      }
      this.message = ''
      this.agregar(uuidv4(),this.nombre,this.descripcion, this.imageUrl, this.precio)
    },
    onChangeDataFrom:function () {
      this.message = ''
    }
  },




}
</script>