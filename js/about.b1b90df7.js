(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"1ba2":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v("Resume")]),a("div",{staticClass:"paragraph"},[e._v(" I'm "),a("strong",[e._v("Shikhar bind")]),e._v(", a final year under graduate student at Indian Institute of Technology Guwahati, currently exploring different domains of Game Development and also interested in web development."),a("br"),a("br"),e._v("I'm not one to limit myself to just one niche – I love the versatility of software development. Whether I'm diving into the intricacies of game programming or crafting sleek web interfaces, my passion lies in bringing ideas to life through lines of code. "),a("br"),a("br"),e._v("I thrive on solving complex problems and turning them into elegant solutions. From shader programming for captivating visuals to architecting robust software systems, I'm on a constant quest to push the boundaries of what's possible in the digital realm. "),a("br"),a("br"),e._v("I love teamwork, but I can also go in solo depending on the mission requirements. "),a("br"),a("br"),e._v("Join me on this journey as we explore the endless possibilities of technology together. If you're looking for a developer who's as enthusiastic about code as they are about problem-solving, you've come to the right place. Let's create something amazing, one line of code at a time. Feel free to "),a("router-link",{attrs:{to:"/contact"}},[e._v("contact me")]),e._v(". "),a("br"),e._m(0)],1),a("div",{staticStyle:{clear:"both"}}),a("div",{staticClass:"full-content"},[a("h2",[e._v("Work experience")]),a("h3",[e._v("XR Developer - Parralax Labs")]),a("h4",[e._v("Apr. 2023 - Jul. 2023")]),e._m(1),a("div",{staticClass:"tech-stack"},[e._v("Unity, SteamVR, Shader Graph, HLSL")]),a("h2",[e._v("Skills")]),a("div",{staticClass:"skill-set"},[a("h3",[e._v("Technical")]),a("SkillRate",{attrs:{name:"C++",rate:5}}),a("SkillRate",{attrs:{name:"C#",rate:5}}),a("SkillRate",{attrs:{name:"Unity",rate:5}}),a("SkillRate",{attrs:{name:"React",rate:5}}),a("SkillRate",{attrs:{name:"Node",rate:5}}),a("SkillRate",{attrs:{name:"HLSL",rate:5}}),a("SkillRate",{attrs:{name:"Django",rate:5}})],1),a("div",{staticStyle:{clear:"both"}}),a("h2",[e._v("Education")]),a("h3",[e._v("Indian Institute of Technology Guwahati, India")]),a("h4",[e._v("Bachelor of Technology (2020-2024)")]),a("div",[e._v("Currently pursuing B.tech in Electrical and Electronic Engineering.")])])])},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{"margin-top":"20px","margin-bottom":"20px"}},[a("a",{staticClass:"download-link",attrs:{href:"pdf/Resume_ShikharBind.pdf",target:"_blank"}},[a("i",{staticClass:"fa fa-download fa-lg fa-fw"}),e._v(" Download as PDF")]),a("div",{staticStyle:{clear:"both"}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._v(" Angioplasty Simulator, Developed an immersive Angioplasty VR Simulator using Unity, enabling medical professionals to practice angioplasty procedures in a realistic virtual environment. Implemented player movement and user interface in virtual reality using SteamVR. Created a spline system using Bezier Curves for simulation of human arteries and various shaders in Shader Graph. "),a("br"),e._v("Visual Accessibility Toolkit, Developed a Visual Accessibility Toolkit to simulate colorblindness for developers and make a color correction filter for colorblind players using HLSL and Unity. Created a custom editor and window for the toolkit. ")])}],s=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"skill-name"},[e._v(e._s(e.name))]),a("div",{staticClass:"skill-rate"},[e._l(5,(function(t){return[t<=e.rate?a("div",{key:e.name+"-"+t,staticClass:"circle circle-full"}):e._e(),t>e.rate?a("div",{key:e.name+"-"+t,staticClass:"circle circle-empty"}):e._e()]}))],2),a("div",{staticClass:"clear"})])},o=[],l=s["a"].extend({name:"SkillRate",props:{name:String,rate:Number}}),c=l,h=(a("bd5f"),a("2877")),p=Object(h["a"])(c,r,o,!1,null,"c97307b4",null),d=p.exports,m=s["a"].extend({name:"Resume",components:{SkillRate:d}}),u=m,g=(a("6b14"),Object(h["a"])(u,n,i,!1,null,"4a5b25da",null));t["default"]=g.exports},"1e66":function(e,t,a){"use strict";var n=a("dec8"),i=a.n(n);i.a},"27bb":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"projects-list"},[e._l(e.projects,(function(t){return[a("div",{key:t.id,staticClass:"project-item",class:{wide:t.isWide,high:t.isHigh},on:{click:function(a){return e.showDetails(t)}}},[a("div",{staticClass:"project-item-image",style:{"background-image":"url("+t.iconUrl+")"}}),a("div",{staticClass:"title-bar",style:{"background-color":t.accentColor+"DD"}},[a("div",{staticClass:"title-text"},[e._v(" "+e._s(t.name)+" ")])])])]}))],2),a("ProjectDetailsOverlay",{attrs:{visible:e.showPopup,title:e.popupTitle,htmlContent:e.popupContent,color:e.popupColor},on:{close:function(t){e.showPopup=!1}}})],1)},i=[],s=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("transition",{attrs:{name:"fade"}},[e.visible?a("div",[a("div",{staticClass:"overlay"}),a("div",{staticClass:"dialog",style:{"background-color":e.color}},[a("h1",{staticClass:"dialog-title"},[e._v(e._s(e.title))]),a("div",{staticClass:"dialog-close",on:{click:function(t){return e.$emit("close")}}},[a("i",{staticClass:"fa fa-times fa-lg fa-fw"})]),a("div",{staticClass:"dialog-content"},[a("div",{domProps:{innerHTML:e._s(e.htmlContent)}}),a("div",{staticClass:"dialog-bottom"},[a("a",{staticClass:"dialog-close-button",on:{click:function(t){return e.$emit("close")}}},[e._v("Close")])])])])]):e._e()])},o=[],l=s["a"].extend({name:"ProjectDetailsOverlay",props:{visible:Boolean,color:String,title:String,htmlContent:String},methods:{getImage:function(e){console.log("fetching image "+e)}}}),c=l,h=(a("1e66"),a("2877")),p=Object(h["a"])(c,r,o,!1,null,"e66acff8",null),d=p.exports,m=s["a"].extend({name:"ProjectsList",components:{ProjectDetailsOverlay:d},props:{projects:Array},data:function(){return{showPopup:!1,popupTitle:"",popupColor:"",popupContent:""}},methods:{showDetails:function(e){this.popupTitle=e.name,this.popupColor=e.accentColor,this.popupContent=e.htmlDescription,this.showPopup=!0,window.scrollTo(0,0)}}}),u=m,g=(a("5935"),Object(h["a"])(u,n,i,!1,null,"190958aa",null));t["a"]=g.exports},"416f":function(e,t,a){},4566:function(e,t,a){},"4d97":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v("Games")]),a("div",{staticStyle:{"margin-bottom":"30px"}},[e._v(" Here are some Unity projects I've made or heavily contributed to. ")]),a("ProjectsList",{attrs:{projects:e.projects}})],1)},i=[],s=a("2b0e"),r=a("27bb"),o=a("983d"),l=[new o["a"]("project-1","Campus Rush","img/projects/CampusRush/icon.png",'\n    <div class="paragraph">\n     <strong>Campus Rush</strong> is a <em>3D virtual recreation</em> of IIT Guwahati campus for the freshers to explore in the lieu of college having an online semester due to COVID 19. \n     The game was made by a team of 10 people (6 artists and 4 programmers) and was fully online and multiplayer.\n    </div>\n    <div class="paragraph center">\n        <iframe class="youtube" src="https://www.youtube.com/embed/jstBrhzECEk" frameborder="0" allowfullscreen></iframe>\n    </div>\n    \x3c!--div class="paragraph center">\n        <a href="https://play.google.com/store/apps/details?id=some.playstore.thing" target="_blank"><img src="img/projects/play-store-logo.png" alt="Play Store badge" /></a>\n    </div--\x3e\n\n    \x3c!--div class="paragraph">\n        Main features :\n        <ul>\n        <li>Some stuff</li>\n        <li>Some great stuff</li>\n        <li>More awesome stuff</li>\n        <li>And then some</li>\n        </ul>\n    </div--\x3e\n\n    <div class="paragraph">\n        Role : Programmer <br />\n        <br />\n        Contribution :\n        <ul>\n            <li>\n            Programmed game mechanics, scoring system, player movement, animation, and UI in <b>Unity Game Engine</b> and <b>C#</b>.\n            </li>\n            <li>\n            Created authentication system and realtime leaderboard using <b>MySQL</b> database and <b>PHP</b> APIs, enhancing user experience\n            </li>\n            <li>\n            Implemented real-time gameplay synchronization between players over network connections using <b>Unity Netcode for GameObjects</b>.\n            </li>\n            <li>Used <b>Cinemachine</b> for handling camera movement.</li>\n        </ul>\n    </div>\n\n    <div class="paragraph">\n        <div class="notice">\n        Windows build available on <a href="https://gdciitg.itch.io/campus-rush" target="_blank">itch.io</a>.\n        Source code is available on <a href="https://github.com/ShikharBind/CampusRush" target="_blank">GitHub</a>.\n        </div>\n    </div>\n\n    <div class="paragraph center">\n        <img class="phone-screenshot" src="img/projects/CampusRush/EYEM15.png" alt="Campus Rush Screenshot" />\n        <img class="phone-screenshot" src="img/projects/CampusRush/Du66Fo.png" alt="Campus Rush Screenshot" />\n        <img class="phone-screenshot" src="img/projects/CampusRush/8Pzx1J.png" alt="Campus Rush Screenshot" />\n        <img class="phone-screenshot" src="img/projects/CampusRush/DfhI6c.png" alt="Campus Rush Screenshot" />\n    </div>\n    ',"#23bd69",!0,!0),new o["a"]("project-2","Chiranjeevi","img/projects/Chiranjeevi/chiranjeevi-poster.png",'\n    <div class="paragraph">\n        <strong>Chiranjeevi</strong> is a <em>3D roguelike role</em> playing game about a character from Indian Mythology and his battles with Asuras. You play as Parshuram and your weapon is the Parshu. The current demo takes place when Parshuram is being trained by god Shiva. \n        Enter the mayagoha(magical cave), fight monsters, gain punya and you might impress some gods and gain their blessings. \n        Fight the infamous asura that lies within the mayagoha but beware reaching him will be difficult. If you die, you have to start over again.\n    </div>\n    \x3c!--div class="paragraph center">\n        <iframe class="youtube" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>\n    </div--\x3e\n\n    \x3c!--div class="paragraph">\n        Main features :\n        <ul>\n        <li>Integrated and </li>\n        <li>Some great stuff</li>\n        <li>Created shaders for various visual effects</li>\n        <li>And then some</li>\n        </ul>\n    </div--\x3e\n\n    <div class="paragraph">\n        Role : Lead Programmer <br />\n        Contribution :\n        <ul>\n            <li>\n                Supervised a 5-member programming team for the project, shaping project architecture and ensuring efficient collaboration.\n            </li>\n            <li>\n                Ideated and programmed game mechanics, game states and control flow, player movement, and user interface using C#.\n            </li>\n            <li>\n                Created various shaders to enhance the visual appeal of the game using Unity Shader Graph.\n            </li>\n            <li>Used Cinemachine for handling camera movement.</li>\n        </ul>\n    </div>\n\n    <div class="paragraph">\n    <div class="notice">\n        Windows build available on <a href="https://shikharbind.itch.io/chiranjeevi" target="_blank">itch.io</a>.\n    </div>\n    </div>\n\n    <div class="paragraph center">\n    <img class="phone-screenshot" src="img/projects/Chiranjeevi/NSw2dP.png" alt="Chiranjeevi Screenshot" />\n    <img class="phone-screenshot" src="img/projects/Chiranjeevi/n2y443.png" alt="Chiranjeevi Screenshot" />\n    <img class="phone-screenshot" src="img/projects/Chiranjeevi/ktLJFX.png" alt="Chiranjeevi Screenshot" />\n    </div>\n    ',"#5a78af",!0),new o["a"]("project-3","Angioplasty VR Simulator","img/projects/Angioplasty/angioplasty-icon.jpeg",'\n    <div class="paragraph">\n    <strong>Angioplasty VR Simulator</strong> is an application designed for users who wish to learn,\n    understand, and familiarise themselves with the angioplasty procedure through\n    immersive virtual reality. Whether the user is a medical student or an aspiring\n    surgeon, they can access this application at any time to receive training on\n    performing angioplasty procedures. The project is currently compatible with\n    PC-based virtual reality systems such as Oculus Quest and HTC Vive, allowing users\n    to connect their head-mounted display (HMD) to a computer either wired or\n    wirelessly. The Angioplasty VR Simulator aims to provide a lifelike and engaging\n    experience to users.\n    </div>\n    <div class="paragraph center">\n        <iframe class="youtube" src="https://www.youtube.com/embed/cmEBL9LkPF4" frameborder="0" allowfullscreen></iframe>\n    </div>\n\n    <div class="paragraph">\n        Contribution :\n        <ul>\n        <li>Integrated and utilized <b>SteamVR</b> to enable player movement in a VR environment</li>\n        <li>Made a solution for navigable arteries with animation using bazier curve splines.</li>\n        <li>Created shaders for various visual effects.</li>\n        <li>Implemented the designed user interface for VR.</li>\n        </ul>\n    </div>\n\n    <div class="paragraph">\n        <div class="notice">\n        Windows build available on <a href="https://akshaysharmadev.itch.io/angioplasty-vr-simulator" target="_blank">itch.io</a>.\n        Source code is available on <a href="https://github.com/AkshaySharmaDEV/Angioplasty-VR-Simulator" target="_blank">GitHub</a>.\n        </div>\n    </div>\n\n    <div class="paragraph center">\n    <img class="phone-screenshot" src="img/projects/Angioplasty/ozu+wN.png" alt="Angioplasty Screenshot" />\n    <img class="phone-screenshot" src="img/projects/Angioplasty/_x0tJG.png" alt="Angioplasty Screenshot" />\n    <img class="phone-screenshot" src="img/projects/Angioplasty/Ohms4B.png" alt="Angioplasty Screenshot" />\n    <img class="phone-screenshot" src="img/projects/Angioplasty/4h9WkX.png" alt="Angioplasty Screenshot" />\n    </div>\n    ',"#383838",!0),new o["a"]("project-4","Devour!!","img/projects/Devour/icon.png",'\n    <div class="paragraph">\n    <strong>Devour</strong> is a 2D tower defense type game where a farmer has to save his farm from enemies who are trying to destroy it. \n    This game was made for the Respawn game jam on the theme “what you eat is what you make” within 10 days by a team of 3 members (2 artists and 1 programmer).\n    </div>\n    \n    <div class="paragraph center">\n        <iframe class="youtube" src="https://www.youtube.com/embed/Tg2XnWzfJw0" frameborder="0" allowfullscreen></iframe>\n    </div>\n\n    \x3c!--div class="paragraph">\n        Main features :\n        <ul>\n        <li>Some stuff</li>\n        <li>Some great stuff</li>\n        <li>More awesome stuff</li>\n        <li>And then some</li>\n        </ul>\n    </div--\x3e\n\n    <div class="paragraph">\n        Role : Programmer <br />\n        <br />\n        Contribution :\n        <ul>\n            <li>Worked in game design of the game.</li>\n            <li>programmed the game mechanics, ui and other events.</li>\n            <li>Worked with 2D animations in Unity.</li>\n            <li>Designed UI using a collection of UI sprites.</li>\n        </ul>\n    </div>\n\n    <div class="paragraph">\n        <div class="notice">\n        Windows build available on <a href="https://shikharbind.itch.io/devour" target="_blank">itch.io</a>. \n        Source code is available on <a href="https://github.com/ShikharBind/Devour" target="_blank">GitHub</a>.\n        </div>\n    </div>\n\n    <div class="paragraph center">\n    <img class="phone-screenshot" src="img/projects/Devour/7WxGGk.png" alt="Devour Screenshot" />\n    <img class="phone-screenshot" src="img/projects/Devour/Ai9qJs.png" alt="Devour Screenshot" />\n    <img class="phone-screenshot" src="img/projects/Devour/oymYmx.png" alt="Devour Screenshot" />\n    <img class="phone-screenshot" src="img/projects/Devour/gf8VTM.png" alt="Devour Screenshot" />\n    </div>\n    ',"#e80fb7",!1,!0),new o["a"]("project-5","Chess 2D","img/projects/project-5-icon.png",'\n    <div class="paragraph">\n        <strong>Chess 2D</strong> is a cross-platform multiplayer 2D chess game using Unity game engine and C# in collaboration with a friend.\n        It is played by two opponents on a checkered board with specially designed pieces of contrasting colours, commonly white and black. \n        The objective of the game is to capture the opponent\'s king.\n    </div>\n    \n    <div class="paragraph">\n        Contribution :\n        <ul>\n        <li>Designed and optimized chess algorithms for efficient move generation, evaluation, and decision-making.</li>\n        <li>Implemented real-time gameplay synchronization between players over network connections using TCP sockets.</li>\n        <li>Created a player matchmaking system to facilitate seamless game setup and enhance player interactions.</li>\n        </ul>\n    </div>\n\n    <div class="paragraph">\n        <div class="notice">\n        Windows build available on <a href="https://theblacklights29.itch.io/chess-2d" target="_blank">itch.io</a>.\n        Source code available on <a href="https://github.com/pshrey-29/Chess-2d" target="_blank">GitHub</a>.\n        </div>\n    </div>\n\n    <div class="paragraph center">\n    <img class="phone-screenshot" src="img/projects/Chess/i6Q1Xl.png" alt="Chess Screenshot" />\n    </div>',"#e48246"),new o["a"]("project-06","Ludo","img/projects/Ludo/ludo-icon.jpg",'\n    <div class="paragraph">\n        <strong>Ludo</strong> is a strategy board game for two to four players, in which the players race their four tokens from start to finish according to the rolls of a single die.\n    </div>\n    \n    <div class="paragraph">\n        Main features :\n        <ul>\n        <li>Programmed game mechanics, and piece movements in C#.</li>\n        <li>Implemented real-time gameplay synchronization between players over network connections using <b>Photon PUN</b>.</li>\n        <li>Created a system for creating or joining rooms.</li>\n        <li>Implemented user interface according to given design.</li>\n        </ul>\n    </div>\n\n    \x3c!--div class="paragraph">\n        <div class="notice">\n        Windows build available on <a href="https://theblacklights29.itch.io/chess-2d" target="_blank">itch.io</a>.\n        Source code available on <a href="https://github.com/pshrey-29/Chess-2d" target="_blank">GitHub</a>.\n        </div>\n    </div--\x3e\n\n    <div class="paragraph center">\n    <img class="phone-screenshot" src="img/projects/Ludo/ss1.png" alt="Ludo Screenshot" />\n    <img class="phone-screenshot" src="img/projects/Ludo/ss2.png" alt="Ludo Screenshot" />\n    </div>',"#e48246")],c=s["a"].extend({name:"GameProjects",components:{ProjectsList:r["a"]},data:function(){return{projects:l}}}),h=c,p=a("2877"),d=Object(p["a"])(h,n,i,!1,null,null,null);t["default"]=d.exports},5935:function(e,t,a){"use strict";var n=a("416f"),i=a.n(n);i.a},6046:function(e,t,a){},"67f3":function(e,t,a){"use strict";var n=a("ee3f"),i=a.n(n);i.a},"6b14":function(e,t,a){"use strict";var n=a("7dfa"),i=a.n(n);i.a},"7c58":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v("Other Projects")]),a("div",{staticStyle:{"margin-bottom":"30px"}},[e._v(" And here are some websites and tools I've made. ")]),a("ProjectsList",{attrs:{projects:e.projects}})],1)},i=[],s=a("2b0e"),r=a("27bb"),o=a("983d"),l=[new o["a"]("project-6","IITG OLX","img/projects/olx/icon.png",'\n    <div class="paragraph">\n    Updating soon...<br />\n      <strong>Sultans Of Sing</strong> is a thing of beauty that I am so proud of. It\'s available on Windows Store because why not.\n    </div>\n          <div class="paragraph center">\n              <a href="https://www.microsoft.com/en-us/p/some-app" target="_blank"><img src="img/projects/ms-store-logo.png" alt="MS Store button" /></a>\n          </div>\n\n          <div class="paragraph">\n            Main features :\n            <ul>\n            <li>Some stuff</li>\n            <li>Some great stuff</li>\n            <li>More awesome stuff</li>\n            <li>And then some</li>\n            </ul>\n        </div>\n\n        <div class="paragraph center">\n          <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Sultans Of Sing Screenshot" />\n          <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Sultans Of Sing Screenshot" />\n          <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Sultans Of Sing Screenshot" /> \n        </div>\n    ',"#c10606",!1,!0),new o["a"]("project-7","Scotch Game Engine","img/projects/project-6-icon.png",'\n    <div class="paragraph">\n    Updating soon...<br />\n                <strong>Drew Blood</strong> is a thing of beauty that I am so proud of. I could write about it for hours.\n            </div>\n\n            <div class="paragraph">\n              Main features :\n              <ul>\n              <li>Some stuff</li>\n              <li>Some great stuff</li>\n              <li>More awesome stuff</li>\n              <li>And then some</li>\n              </ul>\n          </div>\n\n            <div class="paragraph">\n              <div class="notice">\n                You can download and try the app for free or purchase it directly from <a href="http://www.somewbsite.com/" target="_blank">Some website</a>\n              </div>\n            </div>\n\n            <div class="paragraph center">\n                <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Drew Blood Screenshot" />\n                <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Drew Blood Screenshot" />\n                <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Drew Blood Screenshot" /> \n            </div>',"#1ca1e2"),new o["a"]("project-8","Visual Accessibility Toolkit","img/projects/project-8-icon.png",'\n    <div class="paragraph">\n    Updating soon...<br />\n                <strong>The Art of Walking</strong> is a thing of beauty that I am so proud of. I could write about it for hours.\n            </div>\n\n            <div class="paragraph center">\n              <a href="https://play.google.com/store/apps/details?id=someapp" target="_blank"><img src="img/projects/play-store-logo.png" alt="Play Store badge" /></a>\n          </div>\n\n          <div class="paragraph">\n          Main features :\n          <ul>\n          <li>Some stuff</li>\n          <li>Some great stuff</li>\n          <li>More awesome stuff</li>\n          <li>And then some</li>\n          </ul>\n      </div>\n\n            <div class="paragraph">\n              <div class="notice">\n                Source code available on <a href="https://github.com/yourself" target="_blank">GitHub</a>.\n              </div>\n            </div>\n\n            <div class="paragraph center">\n                <img class="phone-screenshot" src="https://fakeimg.pl/300x534/" alt="The Art of Walking Screenshot" />\n                <img class="phone-screenshot" src="https://fakeimg.pl/300x534/" alt="The Art of Walking Screenshot" />\n            </div>'),new o["a"]("project-9","Ray Tracer","img/projects/RayTracer/icon.png",'\n     <div class="paragraph">\n     Updating soon...<br />\n                <strong>Nikolable</strong> is a thing of beauty that I am so proud of. I could write about it for hours.\n                <br/>Image by <a target="_blank" href="https://www.pexels.com/fr-fr/@goumbik">Lukas</a>.\n            </div>\n\n            <div class="paragraph">\n        Main features :\n        <ul>\n        <li>Some stuff</li>\n        <li>Some great stuff</li>\n        <li>More awesome stuff</li>\n        <li>And then some</li>\n        </ul>\n    </div>\n\n            <div class="paragraph">\n              <div class="notice">\n                Source code available on <a href="https://github.com/yourself" target="_blank">GitHub</a>.\n              </div>\n            </div>')],c=s["a"].extend({name:"OtherProjects",components:{ProjectsList:r["a"]},data:function(){return{projects:l}}}),h=c,p=a("2877"),d=Object(p["a"])(h,n,i,!1,null,null,null);t["default"]=d.exports},"7dfa":function(e,t,a){},"8cdb":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"http-404"},[e._v("404 🙈")])},i=[],s=(a("67f3"),a("2877")),r={},o=Object(s["a"])(r,n,i,!1,null,"c64612d2",null);t["default"]=o.exports},"97b2":function(e,t,a){"use strict";var n=a("6046"),i=a.n(n);i.a},"983d":function(e,t,a){"use strict";var n=function(){function e(e,t,a,n,i,s,r){void 0===i&&(i="#000000"),void 0===s&&(s=!1),void 0===r&&(r=!1),this.id=e,this.name=t,this.htmlDescription=n,this.iconUrl=a,this.isHigh=s,this.isWide=r,this.accentColor=i}return e}();t["a"]=n},a1f6:function(e,t,a){"use strict";var n=a("4566"),i=a.n(n);i.a},b8fa:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v("Let's get in touch")]),a("div",{staticStyle:{"margin-bottom":"40px"}},[e._v("I'm looking for a job !"),a("br"),e._v("Feel free to contact me about any opportunity, or just to chat about games, cats or anything else.")]),a("ul",[a("li",[a("i",{staticClass:"fa fa-phone fa-lg fa-fw"}),e._v(" +91-9648852059 ")]),a("li",[a("i",{staticClass:"fa fa-envelope-o fa-lg fa-fw"}),a("a",{attrs:{href:"mailto:shikhar.bind2010@gmail.com",target:"_blank"}},[e._v("shikhar.bind2010@gmail.com")])]),a("li",[a("i",{staticClass:"fa fa-linkedin fa-lg fa-fw",staticStyle:{"vertical-align":"-5%"}}),a("a",{attrs:{href:"https://www.linkedin.com/in/shikhar-bind-73256b214/",target:"_blank"}},[e._v("linkedin.com/ShikharBind")])]),a("li",[a("i",{staticClass:"fa fa-github fa-lg fa-fw"}),a("a",{attrs:{href:"https://github.com/ShikharBind",target:"_blank"}},[e._v("github.com/ShikharBind")])]),a("li",[a("i",{staticClass:"fa fa-gamepad fa-lg fa-fw"}),a("a",{attrs:{href:"https://shikharbind.itch.io/",target:"_blank"}},[e._v("shikharbind.itch.io")])]),a("li",[a("img",{staticStyle:{width:"40px","vertical-align":"middle","padding-right":"23px",opacity:"0.8"},attrs:{src:"img/icons8-discord-50.png",alt:"discord logo"}}),a("a",{attrs:{href:"https://discordapp.com/users/570931041662009354",target:"_blank"}},[e._v("discord/deathlight20")])])])])}],s=(a("a1f6"),a("2877")),r={},o=Object(s["a"])(r,n,i,!1,null,"0af5d55d",null);t["default"]=o.exports},bd5f:function(e,t,a){"use strict";var n=a("eebd"),i=a.n(n);i.a},dec8:function(e,t,a){},ee3f:function(e,t,a){},eebd:function(e,t,a){},f820:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{"margin-bottom":"80px"}},[a("h1",[e._v("Hello!")]),a("div",{staticClass:"paragraph"},[e._m(0),a("div",{staticStyle:{"margin-top":"30px"}},[e._v("I've worked on "),a("router-link",{attrs:{to:"/game-projects"}},[e._v("Games")]),e._v(", and on "),a("router-link",{attrs:{to:"/other-projects"}},[e._v(" some other projects")]),e._v(".")],1),a("div",{staticStyle:{"margin-top":"40px"}},[e._v("Let's chat about how I can bring my skills and passion to your team. Drop me a line at "),a("a",{attrs:{href:"mailto:shikhar.bind2010@gmail.com"}},[e._v("shikhar.bind2010@gmail.com")]),e._v(" or "),a("router-link",{attrs:{to:"/contact"}},[e._v("through here")]),e._v(".")],1)]),e._m(1),a("div",{staticStyle:{clear:"both"}})])},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._v(" I'm "),a("strong",[e._v("Shikhar bind")]),e._v(", a final year under graduate student at Indian Institute of Technology Guwahati, currently exploring different domains of Game Development and also interested in web development."),a("br"),a("br"),e._v("I'm not one to limit myself to just one niche – I love the versatility of software development. Whether I'm diving into the intricacies of game programming or crafting sleek web interfaces, my passion lies in bringing ideas to life through lines of code. "),a("br")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"photo"},[a("img",{attrs:{src:"img/avatar2.png",alt:"Avatar of Shikhar"}})])}],s=(a("97b2"),a("2877")),r={},o=Object(s["a"])(r,n,i,!1,null,"58b6ad9f",null);t["default"]=o.exports}}]);
//# sourceMappingURL=about.b1b90df7.js.map