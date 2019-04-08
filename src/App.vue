<template>
  <v-app>
    <v-toolbar dark app color="primary">
      <v-toolbar-title class="headline clickable" @click="changeTabs(0)">
        Daniel Higley
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="changeTabs(1)" :disabled="tab === 1" flat>About</v-btn>
      <v-btn flat :disabled="tab === 2" @click="changeTabs(2)">Skills</v-btn>
      <v-btn flat :disabled="tab === 3" @click="changeTabs(3)"
        >Experience</v-btn
      >
    </v-toolbar>
    <v-content>
      <v-tabs-items v-model="tab">
        <v-container fluid pa-0>
          <v-tab-item key="home">
            <v-img
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
          </v-tab-item>
          <v-tab-item key="about">
            <div class="display-2 primary--text text-xs-center pt-4">
              ABOUT
            </div>
            <v-layout justify-center align-center fill-height>
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
          </v-tab-item>
          <v-tab-item key="skills">
            <div class="display-2 primary--text text-xs-center pt-4 pb-5">
              SKILLS
            </div>
            <v-layout justify-center text-xs-center fill-height>
              <v-flex xs3>
                <v-btn
                  fab
                  outline
                  color="secondary"
                  background-color="white"
                  style="height:100px;width:100px"
                >
                  <v-icon size="50">fab fa-python</v-icon>
                </v-btn>
                <div class="headline" style="font-weight:500;color:#03BBC1">
                  Python
                </div>
                <div class="body-1" style="color:#306b93">
                  Numpy<br />Scipy<br />Pandas<br />Matplotlib
                </div>
              </v-flex>
              <v-flex xs3>
                <v-btn
                  fab
                  outline
                  color="secondary"
                  style="height:100px;width:100px"
                >
                  <v-img
                    height="50"
                    contain
                    :src="require('./assets/matlab-logo.png')"
                  />
                </v-btn>
                <div class="headline" style="font-weight:500;color:#03BBC1">
                  Matlab
                </div>
              </v-flex>
              <v-flex xs3>
                <v-btn
                  fab
                  outline
                  color="secondary"
                  background-color="white"
                  style="height:100px;width:100px"
                >
                  <v-icon size="50">fas fa-wave-square</v-icon>
                </v-btn>
                <div class="headline" style="font-weight:500;color:#03BBC1">
                  Signal Processing
                </div>
              </v-flex>
              <v-flex xs3>
                <v-btn
                  fab
                  outline
                  color="secondary"
                  background-color="white"
                  style="height:100px;width:100px"
                >
                  <v-icon size="50">fas fa-microscope</v-icon>
                </v-btn>
                <div class="headline" style="font-weight:500;color:#03BBC1">
                  Equipment
                </div>
                <div class="body-1" style="color:#306b93">
                  Ultra-high-vacuum equipment<br />X-ray free electron laser<br />Tabletop
                  optical lasers
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
                    <div class="body-1 primary--text pb-1">
                      {{ position.description }}
                    </div>
                    <div class="body-2 secondary--text">
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
      experience: [
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
    changeTabs(section) {
      this.tab = section;
    },
    formatDate(dateString) {
      return this.moment(dateString, "MM-YYYY").format("MMMM YYYY");
    }
  }
};
</script>
