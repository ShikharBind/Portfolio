<template>
  <div>
    <h1>Resume</h1>

    <div class="paragraph">
      I'm <strong>Shikhar bind</strong>, a final year under graduate student at Indian Institute of Technology Guwahati, currently exploring different domains of Game Development and also interested in web development.<br/>
      <br />I'm not one to limit myself to just one niche – I love the versatility of software development. Whether I'm diving into the intricacies of game programming or crafting sleek web interfaces, my passion lies in bringing ideas to life through lines of code.
      <br />
      <br />I thrive on solving complex problems and turning them into elegant solutions. From shader programming for captivating visuals to architecting robust software systems, I'm on a constant quest to push the boundaries of what's possible in the digital realm.
      <br />I love teamwork, but I can also go in solo depending on the mission requirements.
      <br />
      <br />Join me on this journey as we explore the endless possibilities of technology together. If you're looking for a developer who's as enthusiastic about code as they are about problem-solving, you've come to the right place. Let's create something amazing, one line of code at a time. Feel free to 
      <router-link to="/contact">contact me</router-link>.
      <br />
      
      <div style="margin-top:20px; margin-bottom:20px;">
        <a class="download-link" href="d/Resume.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Download as PDF</a>
        <div style="clear:both"></div>
      </div>
    </div>

    <div style="clear:both"></div>

    <div class="full-content">
      <h2>Work experience</h2>

      <h3>XR Developer - Parralax Labs</h3>
      <h4>Apr. 2023 - Jul. 2023</h4>

      <div>
      Angioplasty Simulator, Developed an immersive Angioplasty VR Simulator using Unity, enabling medical professionals to practice
      angioplasty procedures in a realistic virtual environment. Implemented player movement and user interface in virtual reality using
      SteamVR. Created a spline system using Bezier Curves for simulation of human arteries and various shaders in Shader Graph.
      <br />Visual Accessibility Toolkit, Developed a Visual Accessibility Toolkit to simulate colorblindness for developers and make a color
      correction filter for colorblind players using HLSL and Unity. Created a custom editor and window for the toolkit.
      </div>

      <div class="tech-stack">Unity, SteamVR, Shader Graph, HLSL</div>

      <!--<h3>Operation Classified - Delta Force</h3>
      <h4>2015-2017</h4>

      <div>It's classified so I can't speak about it.</div>

      <div class="tech-stack">Even more Firearms, knives, grenades, Hummer vehicle, parachute,...</div>

      <h3>Operation Classified - Delta Force</h3>
      <h4>2012-2015</h4>

      <div>It's classified so I can't speak about it.</div>

      <div class="tech-stack">Firearms, knives, grenades, Hummer vehicle, parachute,...</div>-->

      <h2>Skills</h2>

      <div class="skill-set">
        <h3>Technical</h3>
        <SkillRate name="C++" :rate="5" />
        <SkillRate name="C#" :rate="5" />
        <SkillRate name="Unity" :rate="5" />
        <SkillRate name="React" :rate="5" />
        <SkillRate name="Node" :rate="5" />
        <SkillRate name="HLSL" :rate="5" />
        <SkillRate name="Django" :rate="5" />
      </div>

      <!--<div class="skill-set">
        <h3>Non-lethal</h3>
        <SkillRate name="Sneaking" :rate="1" />
        <SkillRate name="Negotiation" :rate="1" />
        <SkillRate name="Seduction" :rate="1" />
        <SkillRate name="Sense of humor" :rate="2" />
      </div>-->
      <div style="clear:both" />

      <h2>Education</h2>

      <h3>Indian Institute of Technology Guwahati, India</h3>
      <h4>Bachelor of Technology (2020-2024)</h4>
      <div>Currently pursuing B.tech in Electrical and Electronic Engineering.</div>

      <!--<h2>Languages</h2>

      <h3>American</h3>
      <div>Basic knowledge but I know lots of one-liners</div>

      <h3>That's it</h3>
      <div>Who needs another language when you speak American?</div>


      <h2>Besides...</h2>
      <div>
        <h3>I ❤️ Violence</h3>
        <div>I find it really soothing to just shoot at bad guys</div>

        <h3>I 🧡 Sports</h3>
        <div>I used to be thin but then I ingested 10 kilos of steroids and proteins a day while doing 1000 push-ups.</div>

        <h3>I 💛 Politics</h3>
        <div>I hope I can have a career here someday but I might have temper issues.</div>

        <h3>I 💚 Flowers</h3>
        <div>Especially the big ones, with the trunk and leaves.</div>

      </div>-->
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SkillRate from "@/components/SkillRate.vue";

export default Vue.extend({
  name: "Resume",
  components: {
    SkillRate,
  },
});
</script>

<style scoped>
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}
h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}
h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}

.paragraph {
  max-width: 1000px;
}

.download-link {
  float:left;
  margin-right: 50px;
}

.full-content div {
  max-width: 1000px;
}

.skill-set h3 {
  padding-bottom: 10px;
}

.photo img {
  height: 300px;
  width: 300px;
}

.tech-stack {
  font-style: italic;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 30px;
    padding-left: 80px;
  }

  .skill-set {
    float: left;
    padding-right: 60px; 
  }
}
</style>