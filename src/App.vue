<template>
  <v-app>
    <v-toolbar dark app color="primary">
      <v-toolbar-title
        class="headline clickable"
        @click="scrollMeTo('home', 0)"
      >
        Daniel Higley
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="scrollMeTo('about', 0)" flat>About</v-btn>
      <v-btn flat @click="scrollMeTo('skills', 0)">Skills</v-btn>
      <v-btn flat @click="changeTabs(1)">Experience</v-btn>
    </v-toolbar>
    <v-content>
      <v-tabs-items v-model="tab">
        <v-container fluid pa-0>
          <v-tab-item key="home">
            <v-img
              ref="home"
              :src="require('./assets/polygon-background.jpg')"
              height="600px"
            >
              <v-layout column justify-center align-center fill-height>
                <v-avatar size="185" class="pb-4">
                  <v-img :src="require('./assets/daniel-square.jpg')" />
                </v-avatar>
                <div class="display-3 primary--text">
                  Hello, I'm Daniel Higley.
                </div>
                <div class="display-2 primary--text">
                  I'm an Experimental Physicist.
                </div>
              </v-layout>
            </v-img>
            <div
              ref="about"
              class="display-2 primary--text text-xs-center pt-4 hidden"
              v-infocus="'showElement'"
            >
              ABOUT
            </div>
            <v-layout
              justify-center
              align-center
              fill-height
              class="hidden"
              v-infocus="'showElement'"
            >
              <v-flex xs5 pa-4>
                <v-layout column align-center>
                  <v-flex xs6 text-xs-center pb-5>
                    <v-btn outline fab large color="secondary">
                      <v-avatar size="60">
                        <v-img :src="require('./assets/stanford-logo.jpg')" />
                      </v-avatar>
                    </v-btn>
                    <div class="headline primary--text" style="font-weight:500">
                      Stanford
                    </div>
                    <div class="subheading primary--text">
                      PhD in Applied Physics, 2018<br />M.S. in Applied Physics,
                      2017
                    </div>
                  </v-flex>
                  <v-flex xs6 text-xs-center>
                    <v-btn outline fab large color="secondary">
                      <v-avatar size="60">
                        <v-img
                          :src="require('./assets/colorado-state-logo.png')"
                        />
                      </v-avatar>
                    </v-btn>
                    <div class="headline primary--text" style="font-weight:500">
                      Colorado State
                    </div>
                    <div class="subheading primary--text">
                      B.S. in Electrical Engineering, 2012<br />Minors in
                      Physics & Mathematics
                    </div>
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex xs7 pa-4>
                <div class="title terciary--text">
                  I got my PhD from Stanford and right now I'm an applied
                  physics post grad doing research at SLAC with high energy
                  lasers. My passion is ____ and I'm interested in (this type of
                  research/field).
                </div>
              </v-flex>
            </v-layout>
            <div
              ref="skills"
              class="display-2 primary--text text-xs-center pt-4 pb-5 hidden"
              v-infocus="'showElement'"
            >
              SKILLS
            </div>
            <v-layout
              justify-center
              text-xs-center
              fill-height
              wrap
              class="hidden"
              v-infocus="'showElement'"
            >
              <v-flex
                md3
                sm4
                xs5
                pb-3
                v-for="skill in skills"
                :key="skill.name"
              >
                <v-btn
                  fab
                  outline
                  color="secondary"
                  background-color="white"
                  style="height:100px;width:100px"
                >
                  <v-icon v-if="skill.icon" size="50">{{ skill.icon }}</v-icon>
                  <v-img v-else height="50" contain :src="skill.image" />
                </v-btn>
                <div class="headline" style="font-weight:500;color:#03BBC1">
                  {{ skill.name }}
                </div>
                <div class="body-1" style="color:#306b93">
                  <span v-for="example in skill.examples" :key="example">
                    {{ example }}<br />
                  </span>
                </div>
              </v-flex>
            </v-layout>
          </v-tab-item>
          <v-tab-item key="experience">
            <div class="display-2 primary--text text-xs-center pt-4 pb-5">
              EXPERIENCE
            </div>
            <v-layout pa-3 justify-center>
              <v-timeline>
                <v-timeline-item
                  v-for="(position, i) in experience"
                  :key="i"
                  color="secondary"
                  small
                >
                  <template v-slot:opposite>
                    <span
                      :class="`headline font-weight-bold secondary--text`"
                      v-text="formatDate(position.start)"
                    ></span>
                  </template>
                  <div class="py-3" style="max-width:700px">
                    <div class="headline secondary--text">
                      {{ position.name }}
                    </div>
                    <div
                      class="subheading secondary--text font-weight-light mb-3"
                    >
                      {{ position.location }}
                    </div>
                    <div
                      class="body-1 primary--text pb-1"
                      v-html="position.description"
                    ></div>
                    <div class="body-2 secondary--text" v-if="position.end">
                      Thru {{ formatDate(position.end) }}
                    </div>
                  </div>
                </v-timeline-item>
              </v-timeline>
            </v-layout>
          </v-tab-item>
        </v-container>
      </v-tabs-items>
      <v-footer color="primary" dark app height="45" class="px-3">
        <v-layout align-center fill-height>
          <v-flex xs4>
            <span class="white--text">&copy;2019 — Nicole Kowtko</span>
          </v-flex>
          <v-flex xs8 text-xs-right>
            <v-btn
              flat
              fab
              small
              href="https://www.linkedin.com/in/dhigley/"
              target="_blank"
            >
              <v-icon color="white">
                fab fa-linkedin
              </v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
      </v-footer>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      tab: 0,
      skills: [
        {
          name: "Python",
          examples: ["Numpy", "Scipy", "Pandas", "Matplotlib"],
          icon: "fab fa-python",
          image: ""
        },
        {
          name: "Scientific Writing",
          examples: ["Experimental proposals", "Collaborative Writing"],
          icon: "fas fa-file-alt",
          image: ""
        },
        {
          name: "Signal Processing",
          examples: ["Analysis of Optical Data"],
          icon: "fas fa-wave-square",
          image: ""
        },
        {
          name: "Scientific Equipment",
          examples: [
            "Ultra-high-vacuum Equipment",
            "X-ray Free Electron Laser",
            "Tabletop Optical Lasers",
            "Synchrotron Radiation"
          ],
          icon: "fas fa-microscope",
          image: ""
        },
        {
          name: "Public Speaking",
          examples: [],
          icon: "fas fa-chalkboard-teacher",
          image: ""
        },
        {
          name: "Latex",
          examples: [],
          icon: "",
          image: require("./assets/latex-logo.png")
        },
        {
          name: "Matlab",
          examples: [],
          icon: "",
          image: require("./assets/matlab-logo.png")
        }
      ],
      experience: [
        {
          start: "Current",
          end: "",
          name: "Research Associate",
          location: "SLAC National Accelerator Laboratory",
          description: "bork bork bork bork bork"
        },
        {
          start: "09-2012",
          end: "03-2018",
          name: "Graduate Research Assistant",
          location: "Stanford University",
          description:
            "– Determined the speed and magnitude of high intensity X-ray-induced electronic and magnetic changes in a solid.<br><br>" +
            "– Observed signs of stimulated resonant inelastic X-ray scattering in a solid.<br><br>" +
            "– Improved the sensitivity of femtosecond X-ray magnetic circular dichroism absorption spec- troscopy such that studies which previously took weeks of data collection can now be completed in less than 20 minutes.<br><br>" +
            "– Performed X-ray-based studies of ultrafast dynamics in magnetic materials of current techno- logical interest."
        },
        {
          start: "03-2011",
          end: "09-2012",
          name: "Undergraduate Research Assistant",
          location: "Randy Bartels Research Group, Colorado State University",
          description:
            "– Improved and extended the optical imaging technique of Spatial Frequency Modulation for Imaging (SPIFI).<br><br>– Experimentally, numerically, and theoretically analyzed effects of diffraction, defocus, and other\n" +
            "aberrations on SPIFI."
        },
        {
          start: "08-2010",
          end: "05-2011",
          name:
            "Lab-on-a-Chip Diagnostic Biosensor Senior Design Project Member",
          location: "Kevin Lear Research Group, Colorado State University",
          description:
            "Worked with interdisciplinary (chemical and biological engineering, as well as electrical and computer engineering) undergraduate team and graduate students on improving and testing Local Evanescent Array Coupled Waveguide (LEAC) biosensor chips."
        },
        {
          start: "06-2010",
          end: "08-2010",
          name: "Summer Undergraduate Research Fellow",
          location:
            "Jet Propulsion Laboratory, California Institute of Technology",
          description:
            "Conducted stability testing across temperature and time of high-frequency " +
            "microwave radiometer internal calibration components."
        },
        {
          start: "10-2009",
          end: "02-2011",
          name: "Undergraduate Research Assistant",
          location: "Steven Reisng Research Group, Colorado State University",
          description:
            "Assisted with design and layout of a small, low-mass, low-power microwave radiometer " +
            "as a prototype for a next-generation satellite instrument to measure changes in atmospheric " +
            "water vapor in order to correct an altimeter."
        },
        {
          start: "09-2009",
          end: "01-2010",
          name: "Tutor",
          location:
            "Women and Minorities in Engineering Program, Colorado State University",
          description:
            "Tutored engineering students in freshman and sophomore level electrical engineering, math, " +
            "and physics classes."
        }
      ]
    };
  },
  methods: {
    scrollMeTo(refName, tab) {
      this.changeTabs(tab);
      setTimeout(() => {
        var element = this.$refs[refName];
        var top = element.offsetTop;
        if (refName === "home") top = 0;

        window.scrollTo({ top, behavior: "smooth" });
      }, 50);
    },
    changeTabs(section) {
      this.tab = section;
    },
    formatDate(dateString) {
      try {
        return this.moment(dateString, "MM-YYYY").format("MMMM YYYY");
      } catch (err) {
        return dateString;
      }
    }
  },
  directives: {
    infocus: {
      isLiteral: true,
      inserted: (el, binding) => {
        let f = () => {
          let rect = el.getBoundingClientRect();
          let inView =
            rect.width > 0 &&
            rect.height > 0 &&
            rect.top >= 0 &&
            (rect.top + 200 <=
              (window.innerHeight || document.documentElement.clientHeight) ||
              rect.bottom + 100 <=
                (window.innerHeight || document.documentElement.clientHeight));

          if (inView) {
            el.classList.add(binding.value);
            el.classList.remove("hidden");
          } else if (!inView && el.classList.contains(binding.value) > -1) {
            el.classList.add("hidden");
            el.classList.remove(binding.value);
          }
        };
        window.addEventListener("scroll", f);
        f();
      }
    }
  }
};
</script>

<style>
.showElement {
  opacity: 1;
  transform: translate(0, 0);
  -webkit-transition: all 1.2s ease-out;
  -moz-transition: all 1.2s ease-out;
  transition: all 1.2s ease-out;
}
.hidden {
  opacity: 0;
  -webkit-transition: all 0.8s ease-out;
  -moz-transition: all 0.8s ease-out;
  transition: all 0.8s ease-out;
}
</style>
