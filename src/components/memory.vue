<template>
  <div class="box">
    <h2 class="title is-3 is-lowercase has-text-weight-light" v-text="name"></h2>
    <div v-if="hasStory" class="content">
      <p v-for="(paragraph, i) in storyParagraphs" :key="i" v-text="paragraph"></p>
    </div>
    <div v-if="hasImages">
      <template v-for="(image, i) in images">
        <figure v-if="i === 0" :key="image.id" class="image">
          <img :alt="`Image ${i + 1}`" :src="image.link" v-img="options">
        </figure>
        <img v-else :key="image.id" :src="image.link" :alt="`Image ${i + 1}`" v-img="options" class="is-hidden"/>
      </template>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Memory',
    props: {
      name: { required: false, default: 'anonymous' },
      story: { required: false, default: 'no story' },
      images: { required: false, default: [] }
    },
    data () {
      return {
        options: {
          group: ''
        }
      }
    },
    created () {
      this.options.group = this.images.map(image => image.id).join('+')
    },
    computed: {
      hasStory () { return this.story !== 'no story' },
      hasImages () { return this.images.length !== 0 },
      storyParagraphs () { return this.story.split('\n') }
    }
  }
</script>

<style lang="scss">
  .fullscreen-v-img {
    background-color: rgba(255, 255, 255, 0.9) !important;
  }
</style>
