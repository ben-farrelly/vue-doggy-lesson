<template>
  <div>
    <h2>Let's look at some random dogs</h2>
    <DogGallery
    :dogPic="gallery[dogIndex]"
    :index="dogIndex"
    @previousDog="previousDog"
    @loadANewDog="loadDog"
    @nextDog="nextDog"/>
  </div>
</template>

<script>
// For this app, have "previous comic" and "random comic", bring in a random comic
// each time this is clicked. Manage entirely as component state.
import DogGallery from '@/components/DogGallery.vue'
export default {
  name: 'RandomDogGallery',
  components: {
    DogGallery
  },
  data: () => {
    return {
      gallery: [],
      doggyGallery: [],
      dogIndex: 0
    }
  },
  created () {
    this.getRandomDog()
  },
  watch: {
    gallery (oldState, newState) {
      alert('New dogs are available')
    }
  },
  methods: {
    getRandomDog () {
      fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => {
          return response.json()
        })
        .then(data => {
          this.gallery.push(data.message)
        })
        .catch(error => {
          console.error(error)
        })
    },
    nextDog () {
      this.dogIndex = this.dogIndex + 1
    },
    previousDog () {
      if (this.dogIndex > 0) {
        this.dogIndex = this.dogIndex - 1
      } else {
        alert('what do you mean previous?')
      }
    },
    loadDog () {
      this.getRandomDog()
    }
  }
}
</script>
