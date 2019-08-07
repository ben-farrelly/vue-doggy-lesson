<template>
  <button @click="colourChange">
    <slot>
      Click me for a random title colour
    </slot>
  </button>
</template>
<script>
export default {
  name: 'CustomEventExampleChild',
  methods: {
    colourChange () {
      this.$emit('colourChange')
    }
  }
}
</script>
