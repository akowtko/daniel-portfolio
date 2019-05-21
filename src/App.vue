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
      <v-btn flat @click="changeTabs(2)">Portfolio</v-btn>
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
              wrap
              v-infocus="'showElement'"
            >
              <v-flex sm9 px-5 pb-5 :class="{'pt-3': breakpoint == 'xs'}">
                <div class="headline terciary--text font-weight-light">
                  I'm passionate about discovering and developing transformative technologies through a combination of
                  analysis of complex data and numerical simulations. I am particularly interested in materials, the
                  interactions of materials with electromagnetic radiation (THz, optical, X-ray etc.), and quantum
                  computing.
                </div>
              </v-flex>
              <v-flex sm3 py-3 px-2>
                <v-layout column wrap align-center>
                  <education-tile
                    school="Stanford"
                    degree="PhD in Applied Physics, 2018<br />M.S. in Applied Physics, 2017"
                    :logo="require('./assets/stanford-logo.jpg')"
                  />
                  <education-tile
                    school="Colorado State"
                    degree="B.S. in Electrical Engineering, 2012<br />Minors in Physics & Mathematics"
                    :logo="require('./assets/colorado-state-logo.png')"
                  />
                </v-layout>
              </v-flex>
            </v-layout>
            <div
              ref="skills"
              class="display-2 primary--text text-xs-center pt-4 pb-4 hidden"
              v-infocus="'showElement'"
            >
              SKILLS
            </div>
            <v-layout
              justify-center
              text-xs-center
              fill-height
              wrap
              pb-4
              class="hidden"
              v-infocus="'showElement'"
            >
              <skills-tile
                v-for="skill in skills"
                :key="skill.name"
                :name="skill.name"
                :icon="skill.icon"
                :image="skill.image"
                :examples="skill.examples"
              />
            </v-layout>
          </v-tab-item>
          <v-tab-item key="experience">
            <div class="display-2 primary--text text-xs-center pt-4 pb-5">
              EXPERIENCE
            </div>
            <v-layout pa-3 justify-center>
              <experience-timeline/>
            </v-layout>
          </v-tab-item>
          <v-tab-item key="portfolio">
            <div class="display-2 primary--text text-xs-center pt-4 pb-4">
              PORTFOLIO
            </div>
            <publications-table/>
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
import ExperienceTimeline from '@/components/ExperienceTimeline';
import EducationTile from '@/components/EducationTile';
import PublicationsTable from '@/components/PublicationsTable';
import SkillsTile from '@/components/SkillsTile';

import skills from '@/assets/data/skills';

export default {
  name: 'App',
  components: {
    PublicationsTable, ExperienceTimeline, EducationTile, SkillsTile,
  },
  data() {
    return {
      tab: 0,
      skills,
    };
  },
  methods: {
    scrollMeTo(refName, tab) {
      this.changeTabs(tab);
      setTimeout(() => {
        const element = this.$refs[refName];
        let top = element.offsetTop;
        if (refName === 'home') top = 0;

        window.scrollTo({ top, behavior: 'smooth' });
      }, 50);
    },
    changeTabs(section) {
      this.tab = section;
    },
  },
  computed: {
    breakpoint() {
      return this.$vuetify.breakpoint.name;
    },
  },
  directives: {
    infocus: {
      isLiteral: true,
      inserted: (el, binding, vnode) => {
        const f = () => {
          const { breakpoint } = vnode.context.$vuetify;
          if (!breakpoint.xs && !breakpoint.sm) {
            const rect = el.getBoundingClientRect();
            const inView = rect.width > 0
                && rect.height > 0
                && rect.top >= 0
                && (rect.top + 200
                  <= (window.innerHeight || document.documentElement.clientHeight)
                  || rect.bottom + 100
                  <= (window.innerHeight || document.documentElement.clientHeight));

            if (inView) {
              el.classList.add(binding.value);
              el.classList.remove('hidden');
            } else if (!inView && el.classList.contains(binding.value) > -1) {
              el.classList.add('hidden');
              el.classList.remove(binding.value);
            }
          } else {
            el.classList.add(binding.value);
            el.classList.remove('hidden');
          }
        };
        window.addEventListener('scroll', f);
        f();
      },
    },
  },
};
</script>

<style>

</style>
