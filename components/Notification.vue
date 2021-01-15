<template>
  <div class="notification" v-bind:class="{ 'is-success': hasSuccess == true, 'is-danger': hasSuccess == false }">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: 'Notification',
  props: ['message','hasSuccess']
}
</script>