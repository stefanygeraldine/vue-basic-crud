<template>
  <li class="w-full p-4 md:w-1/2 lg:w-1/3">
    <Card style="padding: 0">
    <div class="card-header">
      <div class="card-title">{{item.nombre}}</div>
      <ButtonSquare :data="item" :onClick="setItemSelected" bg="#f47477">
        <i class="fa fa-close"></i>
      </ButtonSquare>
    </div>
    <div class="card-body">
      <img :src="item.imageUrl " style="max-width: 173px; height: 205px;">
     <h2 class="card-description">
       {{item.precio}}
     </h2>
    </div>
    <div class="card-footer">
      <Button title="View" :onClick="setItemSelected" :data="item"></Button>
    </div>
    </Card>
  </li>
</template>

<script>

import Card from './ui/Card'
import ButtonSquare from './ui/ButtonSquare'
import Button from './ui/Button'


export default {
  name: 'ListItem',
  props: {
    item: Object,
    eliminar:Function,
    setItem:Function,
  },
  components: {
    Card,
    ButtonSquare,
    Button
  },
  methods:{
    deleteProduct:function (data){
      this.eliminar(data.clave)
    },
    setItemSelected:function (item) {
      this.setItem(item)
    }
  }
}
</script>