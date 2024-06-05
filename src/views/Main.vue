<template>
  <div>
    <About />
    <Projects />
    <Contact />
  </div>
</template>

<script lang="ts">
import About from './About.vue';
import Contact from './Contact.vue';
import Projects from './GameProjects.vue';

export default {
  components: {
    About, Contact, Projects
  },
}

</script>

<style scoped>

</style>