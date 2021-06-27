<template>
  <div class="container mx-auto">
    <div class="flex">
      <div class="spacing">
        <Form :agregar="agregar"></Form>
      </div>
      <div class="spacing" style="width: 100%" >
        <List :lista="lista" :eliminar="eliminar"></List>
      </div>
    </div>


  </div>
</template>

<script>

import Form from './Form'
import List from './List'
import firebase from '../../firebase'

export default {
  name: 'Container',

  components: {
    Form,
    List
  },
  data:()=>(
      {
        lista:[]
      }
  ),
  methods: {
    listarElementos: function(){
      const datos = firebase.database().ref("pasatiempos");
      datos.on("value", (snapshot)=> {
        this.lista = []
        snapshot.forEach((childSnapshot)=>{
          const childData = childSnapshot.val();
          this.lista.push(childData);
        });
      });
    },

    agregar:function(clave, titulo, descripcion){
      const item = {clave, titulo, descripcion}
      //this.lista.push(item)
      firebase.database().ref("pasatiempos/"+clave).set(item);
    },

    eliminar: function(clave) {

      const index = this.lista.map(function(obj){
        return obj.clave;
      }).indexOf(clave);

      this.lista.splice(index,1);
      firebase.database().ref("pasatiempos/"+clave).remove();
    }
  },
  created: function() {
    this.listarElementos();
  }

}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
