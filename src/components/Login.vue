<template>
<div>
  <h1>Login</h1>
  <Button>
    <router-link to="/store">Store****</router-link>
  </Button>
</div>
</template>

<script>
import Button from './ui/Button'


export default {
  name: 'Login',
  components:{
    Button
  }
}
</script>