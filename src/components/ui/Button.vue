<template>
  <button
      v-on:click.prevent="onClick()"
      class="p-4 text-white"
      style="background-color: #48cdfb; min-width: 120px;"
  >
    {{title}}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props:{
    title:String,
    onClick:Function
  }
}
</script>