<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello!</h1>

    <div class="paragraph">
      <div>
        I'm <strong>Shikhar bind</strong>, a recent graduate from <em>IIT Guwahati</em>, currently exploring different domains of <strong>Game Development</strong>. I am proficient in <em><strong>Unity</strong>, <strong>network programming</strong> and <strong>shader programming</strong></em>.<br/>
        <br /> I have worked on a variety of <router-link to="/game-projects">Games</router-link> including <em>2D platformer, 3D roguelike, multiplayer, VR simulator, board</em> games as well as shaders.<br />
        <br /> I have experience managing teams and projects as Secretary of IITG's Gamedev Club. My skills span C++, C#, Unity, HLSL, Django, and MySQL, with networking expertise in Photon PUN and Unity Netcode.
        <br />
      </div>

      <!--<div style="margin-top: 30px;">I've worked on  <router-link to="/game-projects">Games</router-link>, and on <router-link to="/game-projects"> some other projects</router-link>., and took part in <router-link to="/resume">a few things</router-link> as well.</div>-->

      <div style="margin-top: 40px;">Let's chat about how I can bring my skills and passion to your team. Drop me a line at <a href="mailto:shikhar.bind2010@gmail.com">shikhar.bind2010@gmail.com</a> or <router-link to="/contact">through here</router-link>.</div>
      
      <div style="margin-top:20px; margin-bottom:20px;">
        <a class="download-link" href="pdf/Resume_ShikharBind.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> <b>Download Resume</b></a>
        <div style="clear:both"></div>
      </div>

    </div>

    <div class="photo">
      <img src="img/programmer.png" alt="Avatar"/> 
    </div>

    <div style="clear:both"></div>

    <div class="full-content">

      <h2>Skills</h2>

      <div class="skill-set">
        <h3>Programming Languages</h3>
        <div class="skill">C++</div>
        <div class="skill">C#</div>
        <div class="skill">Python</div>
        <div class="skill">Javascript</div>
      </div>

      <div class="skill-set">
        <h3>Game Development</h3>
        <div class="skill">Unity Game Engine</div>
        <div class="skill">HLSL</div>
        <div class="skill">Shader Graph</div>
      </div>

      <div class="skill-set">
        <h3>Networking<br> Stack</h3>
        <div class="skill">Unity Netcode</div>
        <div class="skill">Photon PUN</div>
        <div class="skill">Socket Programming</div>
      </div>

      <div class="skill-set">
        <h3>Programming Patterns</h3>
        <div class="skill">ECS</div>
        <div class="skill">Singleton</div>
        <div class="skill">FSM</div>
        <div class="skill">Observer</div>
        <div class="skill">Mediator</div>
        <div class="skill">MVC</div>
      </div>

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

      <h2>Work experience</h2>
      
      <h3>XR Developer - Parralax Labs - XROS Fellowship</h3>
      <h4>Apr. 2023 - Jul. 2023</h4>

      <div>
        I have worked on two projects during this fellowship:<br />
        <ul class="experience-description-list">
          <li> One is Angioplasty Simulator, an immersive Angioplasty VR Simulator using Unity, enabling medical professionals to practice
          angioplasty procedures in a realistic virtual environment. </li>
          
          <li> Other is Visual Accessibility Toolkit, a Visual Accessibility Toolkit to simulate colorblindness for developers and make a color
          correction filter for colorblind players using HLSL and Unity. </li>
        </ul>
      </div>

      <div class="tech-stack"><b>Tech stack: <i>Unity, SteamVR, Shader Graph, HLSL, Git</i></b></div>

      <h3>Secretary - GameDev and Esports Club, IIT Guwahati</h3>
      <h4>May 2022 - Mar. 2023</h4>

      <div>
        <ul class="experience-description-list">
          <li> Reinstated and heading GameDev club to promote game development culture in IIT Guwahati. </li>
          <li> Organized a game development beginners' course and workshops with around 500 participants. </li>
          <li> Led several game development projects. </li>
        </ul>
      </div>

      <div class="tech-stack"><b>Tech stack: <i>Unity, C#, Git, Plastic SCM, Notion, Trello</i></b></div>

      <!--<h3>Operation Classified - Delta Force</h3>
      <h4>2015-2017</h4>

      <div>It's classified so I can't speak about it.</div>

      <div class="tech-stack">Even more Firearms, knives, grenades, Hummer vehicle, parachute,...</div>

      <h3>Operation Classified - Delta Force</h3>
      <h4>2012-2015</h4>

      <div>It's classified so I can't speak about it.</div>

      <div class="tech-stack">Firearms, knives, grenades, Hummer vehicle, parachute,...</div>-->

      <h2>Education</h2>

      <h3>Indian Institute of Technology Guwahati, India</h3>
      <h4>Bachelor of Technology (2020-2024)</h4>
      <div>Electrical and Electronic Engineering</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "About",
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
  max-width: 700px;
  margin-bottom: 20px;
}

.photo {
  margin-top: 50px;
  text-align: center;
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

.experience-description-list {
  margin: 0px
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
  }

  .skill-set {
    float: left;
    padding-right: 60px; 
  }
}

</style>