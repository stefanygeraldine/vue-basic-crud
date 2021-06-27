<template>
  <div class="flex items-center justify-center card card-form">
    <h2 class="card-description" style="color: #ffffff">
      Crear Nuevo Producto
    </h2>
      <form class="text-center" action="#" method="POST">

        <div class="">
          <div>
            <input id="nombre" v-model="nombre" type="text" autocomplete="email"  class="form-control search-input border" placeholder="Nombre">
          </div>
          <div>
            <input id="descripcion" v-model="descripcion" type="text" autocomplete="current-password" required class="form-control search-input border"  placeholder="Descripción">
          </div>
          <div>
            <input id="precio" v-model="precio" type="text" autocomplete="current-password" required class="form-control search-input border" placeholder="Precio">
          </div>
          <div>
            <input id="imageUrl" v-model="imageUrl" type="text" autocomplete="current-password" required class="form-control search-input border" placeholder="Imagen URL">
          </div>
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
        precio:''
      }
  ),
  methods:{
    addProduct:function (){
      this.agregar(uuidv4(),this.nombre,this.descripcion, this.imageUrl, this.precio)
    }
  }



}
</script>