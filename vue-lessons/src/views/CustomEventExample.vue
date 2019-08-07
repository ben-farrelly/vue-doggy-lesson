<template>
  <div>
    <h1 :style="'color:' + titleColour">This title will change colour when you click the button below</h1>
    <CustomEventExampleChild
      @colourChange="pickRandomColour"
    />
  </div>
</template>
<script>
import CustomEventExampleChild from '@/components/CustomEventExampleChild.vue'
export default {
  name: 'CustomEventExample',
  components: {
    CustomEventExampleChild
  },
  data: () => {
    return {
      titleColour: '#000000'
    }
  },
  methods: {
    pickRandomColour () {
      this.titleColour = '#' + Math.floor(Math.random() * 16777215).toString(16)
    }
  }
}
</script>
