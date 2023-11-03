<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello!</h1>

    <div class="paragraph">
      <div>
        I'm <strong>Shikhar bind</strong>, a final year under graduate student at Indian Institute of Technology Guwahati, currently exploring different domains of Game Development and also interested in web development.<br/>
        <br />I'm not one to limit myself to just one niche – I love the versatility of software development. Whether I'm diving into the intricacies of game programming or crafting sleek web interfaces, my passion lies in bringing ideas to life through lines of code.
        <br />
      </div>

      <div style="margin-top: 30px;">I've worked on  <router-link to="/game-projects">Games</router-link>, and on <router-link to="/other-projects"> some other projects</router-link>.<!--, and took part in <router-link to="/resume">a few things</router-link> as well.--></div>

      <div style="margin-top: 40px;">Let's chat about how I can bring my skills and passion to your team. Drop me a line at <a href="mailto:shikhar.bind2010@gmail.com">shikhar.bind2010@gmail.com</a> or <router-link to="/contact">through here</router-link>.</div>
    </div>

    <div class="photo">
      <img src="img/avatar2.png" alt="Avatar of Shikhar"/> 
    </div>

    <div style="clear:both"></div>

  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
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
    padding: 10px;
    padding-left: 80px;
  }
}

</style>