<template>
  <li class="card" style="width: 30%">
    <div class="card-header">
      <div class="card-title">{{item.titulo}}</div>
      <button v-on:click.prevent="eliminar(item.clave)" class="card-close">
        <i class="fa fa-close"></i>
      </button>
    </div>
    <div class="card-body">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-MF42cjyNBSFVEQw5ISrC_seFYiQ0M_3wcA&usqp=CAU">
     <h2 class="card-description">
       {{item.clave}} - : {{item.descripcion}}
     </h2>
    </div>
    <div class="card-footer">
      <button class="card-view">View</button>
    </div>
  </li>
</template>

<script>

export default {
  name: 'ListItem',
  props: {
    item: Object,
    eliminar:Function,
  }
}
</script>