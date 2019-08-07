<template>
  <div class="about">
    <h1>Prop example</h1>
    <h3>This is an example of how parent data updates will update a property in a child component</h3>
    <PropExampleChild
      :prop-string="dataString"
      :prop-number="dataNumber"
    />
  </div>
</template>
<script>
import PropExampleChild from '@/components/PropExampleChild.vue'
export default {
  name: 'PropExample',
  components: {
    PropExampleChild
  },
  data: () => {
    return {
      dataString: 'A default string',
      dataNumber: 400
    }
  }
}
</script>
