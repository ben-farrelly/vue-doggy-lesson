<template>
  <div>
    <p>Do something with this</p>
    <img :src="dogPic">
    <div class="button-row">
      <button @click="previousDog">Previous dog</button>
      <button @click="loadDog">Load a new dog</button>
      <button @click="nextDog">Next dog</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DogGallery',
  data: () => {
    return {
      currentDog: '',
      dogIndex: 0
    }
  },
  props: {
    dogPic: {
      type: String,
      default: ''
    }

  },
  methods: {
    previousDog () {
      if (this.index > 0) {
        this.$emit('previousDog')
      } else {
        alert('Come on, you are on the first dog')
      }
    },
    nextDog () {
      this.$emit('nextDog')
    },
    loadDog () {
      this.$emit('loadANewDog')
    }
  }
}
</script>
