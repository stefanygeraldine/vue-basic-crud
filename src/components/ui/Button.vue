<template>
  <button
      v-on:click.prevent="onClick(data)"
      class="p-4 text-white font-bold hover:opacity-90"
      style="background-color: #48cdfb; min-width: 120px;"
  >
    {{title}}
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props:{
    title:String,
    onClick:Function,
    data:Object || String
  }
}
</script>