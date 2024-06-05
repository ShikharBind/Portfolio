<template>
  <div>
    <h1 id="games" class = "project-category">Games</h1>

    <div style="margin-bottom: 30px;">
      Here are some Unity projects I've made or heavily contributed to.
    </div>

    <ProjectsList v-bind:projects="gameProjects" />

  <!--  <div style="margin-top: 20px;">
      There is more to see on <a target="_blank" href="https://someexternalwebsite.com">some external website</a>
    </div>-->
  

  <!-- Other Projects Here -->
  
    <h1 id="other" class = "project-category">Other Projects</h1>

    <div style="margin-bottom: 30px;">
      And here are some websites and tools I've made.
    </div>
    <ProjectsList v-bind:projects="otherProjects" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import gameProjectsData from "@/data/GameProjectsData.ts";
import otherProjectsData from "@/data/OtherProjectsData.ts";

export default Vue.extend({
  name: "GameProjects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      gameProjects: gameProjectsData,
      otherProjects: otherProjectsData,
    };
  },
});
</script>

<style scoped>

h1 {
  margin: 80px 0px 30px;
}

</style>
