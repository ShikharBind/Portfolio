import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("project-6", "IITG OLX", "img/projects/olx/icon.png", `
    <div class="paragraph">
      <strong>IITG OLX</strong> is an e-commerce website similar to OLX where one can sell or buy products using Django framework.
    </div>

          <div class="paragraph">
            Main features :
            <ul>
            <li>User registration, authentication, product listing, and profile management functionalities are implemente</li>
            <li>Designed intuitive layout and user interface using HTML, CSS, and Bootstrap.</li>
            <li>Django’s ORM is used to manage the database.</li>
            </ul>
        </div>

        <div class="paragraph">
          <div class="notice">
            Source code available on <a href="https://github.com/ShikharBind/GameEngine" target="_blank">GitHub</a>.
          </div>
        </div>

        <!--<div class="paragraph center">
          <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Sultans Of Sing Screenshot" />
          <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Sultans Of Sing Screenshot" />
          <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Sultans Of Sing Screenshot" /> 
        </div>-->
    `, "#c10606"),
    new ProjectData("project-7", "Scotch Game Engine", "img/projects/project-6-icon.png", `
            <div class="paragraph">
              <strong>Scotch</strong> is a 2D game engine using C++ on which one can make a 2D interactive software.
            </div>

            <div class="paragraph">
              Main features :
              <ul>
              <li>A graphics renderer is implemented using OpenGL from scratch.</li>
              <li>An event system is created which takes in input form mouse and keboard.</li>
              <li>A versatile entity-component system is used to manage game objects and behaviors efficiently.</li>
              <li>UI and docking is imelemeted using ImGui library. </li>
              </ul>
            </div>

            <div class="paragraph">
              <div class="notice">
                Source code available on <a href="https://github.com/ShikharBind/GameEngine" target="_blank">GitHub</a>.
              </div>
            </div>

            <!--<div class="paragraph center">
                <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Drew Blood Screenshot" />
                <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Drew Blood Screenshot" />
            </div>-->`, "#1ca1e2"),
    new ProjectData("project-8", "Visual Accessibility Toolkit", "img/projects/VAToolkit/icon.png", `
        <div class="paragraph">
          <strong>Visual Acessibility Toolkit</strong> is a unity tool aimed at enhancing the experience of individals with colour vision deficiencies.<br />
        </div>

        <div class="paragraph">
          Main features :
          <ul>
          <li>
            A colour blindness simulator allows developers to simulate different types of
            colour blindness within the Unity Editor. This enables them to gain insights into how
            individuals with colour vision deficiencies perceive colours, helping them make
            informed design decisions to ensure accessibility
          </li>
          <li>
            It provides colour blindness correction shaders that compensate for colour vision deficiencies in real-time. 
            By applying appropriate colour transformations, the shaders enhance the visibility and
            distinguishability of visual elements for individuals with colour blindness.
          </li>
          </ul>
        </div>

            <div class="paragraph">
              <div class="notice">
                Source code available on <a href="https://github.com/vaibhav-suri/Visual-Accesibility-Toolkit-XROS" target="_blank">GitHub</a>.
              </div>
            </div>

            <div class="paragraph center">
            <img class="phone-screenshot" src="img/projects/VAToolkit/cb_ss4.png" alt="VA toolkit Screenshot" />
            <img class="phone-screenshot" src="img/projects/VAToolkit/cb_ss2.png" alt="VA toolkit Screenshot" />
            <img class="phone-screenshot" src="img/projects/VAToolkit/image22.png" alt="VA toolkit Screenshot" />
            <img class="phone-screenshot" src="img/projects/VAToolkit/cb_ss3.png" alt="VA toolkit Screenshot" />
            </div>`),
    // new ProjectData("project-9", "Ray Tracer", "img/projects/RayTracer/icon.png", `
    //  <div class="paragraph">
    //  Updating soon...<br />
    //             <strong>Nikolable</strong> is a thing of beauty that I am so proud of. I could write about it for hours.
    //             <br/>Image by <a target="_blank" href="https://www.pexels.com/fr-fr/@goumbik">Lukas</a>.
    //         </div>

    //         <div class="paragraph">
    //     Main features :
    //     <ul>
    //     <li>Some stuff</li>
    //     <li>Some great stuff</li>
    //     <li>More awesome stuff</li>
    //     <li>And then some</li>
    //     </ul>
    // </div>

    //         <div class="paragraph">
    //           <div class="notice">
    //             Source code available on <a href="https://github.com/yourself" target="_blank">GitHub</a>.
    //           </div>
    //         </div>`),
];