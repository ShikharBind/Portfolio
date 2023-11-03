<template>
  <div>
    <h1>Resume</h1>

    <div class="paragraph">
      I'm <strong>Shikhar bind</strong>, a final year under graduate student at Indian Institute of Technology Guwahati, currently exploring different domains of Game Development and also interested in web development.<br/>
      <br />I'm not one to limit myself to just one niche – I love the versatility of software development. Whether I'm diving into the intricacies of game programming or crafting sleek web interfaces, my passion lies in bringing ideas to life through lines of code.
      <br />
      <br />I thrive on solving complex problems and turning them into elegant solutions. From shader programming for captivating visuals to architecting robust software systems, I'm on a constant quest to push the boundaries of what's possible in the digital realm.
      <br />
      <br />I love teamwork, but I can also go in solo depending on the mission requirements.
      <br />
      <br />Join me on this journey as we explore the endless possibilities of technology together. If you're looking for a developer who's as enthusiastic about code as they are about problem-solving, you've come to the right place. Let's create something amazing, one line of code at a time. Feel free to 
      <router-link to="/contact">contact me</router-link>.
      <br />
      
      <div style="margin-top:20px; margin-bottom:20px;">
        <a class="download-link" href="pdf/Resume_ShikharBind.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Download as PDF</a>
        <div style="clear:both"></div>
      </div>
    </div>

    <div style="clear:both"></div>

    <div class="full-content">
      <h2>Work experience</h2>

      <h3>XR Developer - Parralax Labs - XROS Fellowship</h3>
      <h4>Apr. 2023 - Jul. 2023</h4>

      <div>
      I have worked on two projects during this fellowship:<br />
      - One is Angioplasty Simulator, an immersive Angioplasty VR Simulator using Unity, enabling medical professionals to practice
      angioplasty procedures in a realistic virtual environment. Implemented player movement and user interface. 
      Created a spline system using Bezier Curves for simulation of human arteries and various shaders in Shader Graph.
      <br />
      - Other is Visual Accessibility Toolkit, a Visual Accessibility Toolkit to simulate colorblindness for developers and make a color
      correction filter for colorblind players using HLSL and Unity.
      </div>

      <div class="tech-stack">Unity, SteamVR, Shader Graph, HLSL, Git</div>

      <h3>Secretary - GameDev and Esports Club, IIT Guwahati</h3>
      <h4>May 2022 - Mar. 2023</h4>

      <div>
      - Reinstated and heading GameDev module of the club to promote game development culture in IIT Guwahati. <br />
      - Organized a game development beginners' course and workshops with around 500 participants. <br /> 
      - Led several game development projects.
      </div>

      <div class="tech-stack">Unity, C#, Git, Plastic SCM, Notion, Trello</div>

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
        <h3>Programming Languages</h3>
        <div class="skill">C++</div>
        <div class="skill">C#</div>
        <div class="skill">Python</div>
        <div class="skill">Javascript</div>
      </div>

      <div class="skill-set">
        <h3>GameDev & Networking</h3>
        <div class="skill">Unity Game Engine</div>
        <div class="skill">HLSL</div>
        <div class="skill">Shader Graph</div>
        <div class="skill">Photon PUN</div>
        <div class="skill">Unity Netcode</div>
        <div class="skill">Socket Programming</div>
      </div>

      <!--<div class="skill-set">
        <h3>Networking</h3>
        <div class="skill">Photon PUN</div>
        <div class="skill">Unity Netcode</div>
        <div class="skill">Socket Programming</div>
      </div>-->

      <div class="skill-set">
        <h3>WebDev & Databases</h3>
        <div class="skill">HTML</div>
        <div class="skill">CSS</div>
        <div class="skill">React.js</div>
        <div class="skill">Node.js</div>
        <div class="skill">Django</div>
        <div class="skill">MySQL</div>
        <div class="skill">MongoDB</div>
      </div>

      <!--<div class="skill-set">
        <h3>Databases</h3>
        <div class="skill">MySQL</div>
        <div class="skill">MongoDB</div>
      </div>-->

      <div class="skill-set">
        <h3>Miscellaneous</h3>
        <div class="skill">Git</div>
        <div class="skill">Plastic SCM</div>
        <div class="skill">AWS</div>
      </div>
      
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

<!--<script lang="ts">
import Vue from "vue";
import SkillRate from "@/components/SkillRate.vue";

export default Vue.extend({
  name: "Resume",
  components: {
    SkillRate,
  },
});
</script>-->

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

.skill-set {
  float: left;
  padding-right: 30px;
  max-width: 230px!important;
}

.skill {
  float: left;
  border: 1px solid hsla(0,0%,86.3%,.44);
  padding: 2px 10px;
  margin: 5px;
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