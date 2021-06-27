<template>
  <button
      v-on:click.prevent="onClick(data)"
      class="p-4 text-white card-close"
      :style="'background-color:' + bg "
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'ButtonSquare',
  props:{
    bg:String,
    onClick:Function,
    data:Object || String
  }
}
</script>