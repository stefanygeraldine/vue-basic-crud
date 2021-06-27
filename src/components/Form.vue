<template>
  <div class="flex items-center justify-center card card-form">
    <h2 class="card-description">
      Crear Nuevo Producto
    </h2>
      <form class="" action="#" method="POST">

        <div class="">
          <div>
            <label for="clave" class="sr-only">Clave</label>
            <input id="clave" v-model="clave" name="email" type="text" autocomplete="email"  class="form-control search-input border" placeholder="Clave">
          </div>
          <div>
            <label for="titulo" class="sr-only">Password</label>
            <input id="titulo" v-model="titulo" type="text" autocomplete="current-password" required class="form-control search-input border"  placeholder="Titulo">
          </div>
          <div>
            <label for="descripcion" class="sr-only">Password</label>
            <input id="descripcion" v-model="descripcion" type="text" autocomplete="current-password" required class="form-control search-input border" placeholder="Descripcion">
          </div>
        </div>



        <div style="padding: 10px">
          <button v-on:click.prevent="agregar(clave,titulo,descripcion)" type="submit" class="card-view">
            Crear
          </button>
        </div>
      </form>

  </div>
</template>

<script>


export default {
  name: 'Form',
  props:{
    agregar:Function
  },
  data:()=>(
      {
        clave:'123',
        titulo:'test',
        descripcion: 'test test'
      }
  ),



}
</script>