<template>
  <div class="propExampleChild">
    <p>Hi 👋</p>
    <p>This is in the child component</p>
    <p>The value for propString is: {{ propString }}</p>
    <p>The value for propNumber is: {{ propNumber }}</p>
  </div>
</template>
<script>
export default {
  name: 'PropExampleChild',
  props: {
    propString: {
      type: String,
      default: ''
    },
    propNumber: {
      type: Number,
      default: 0
    }
  }
}
</script>
