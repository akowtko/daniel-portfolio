<template>
  <v-app :style="{background: 'blue'}">
    <navigation-drawer
      :open-dialog="drawer.open"
      :close-dialog="drawer.close"
      v-on:navigation-click="navigationClick"
    ></navigation-drawer>
    <v-app-bar app dark color="primary">
      <v-app-bar-nav-icon
        v-if="breakpoint == 'sm' || breakpoint == 'xs'"
        @click="drawer.open = !drawer.open"
      >
      </v-app-bar-nav-icon>
      <v-toolbar-title
        class="headline clickable font-weight-medium"
        @click="scrollMeTo('home', 0)"
      >
        {{name}}
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <span v-if="breakpoint !== 'sm' && breakpoint !== 'xs'">
      <v-btn @click="scrollMeTo('about', 0)" text>About</v-btn>
      <v-btn text @click="scrollMeTo('skills', 0)">Skills</v-btn>
      <v-btn text @click="scrollMeTo('experience', 1)">Experience</v-btn>
      <v-btn text @click="scrollMeTo('publications', 2)">Publications</v-btn>
      </span>
    </v-app-bar>
    <v-content>
      <v-tabs-items v-model="tab">
        <v-container class="pa-0" fluid >
          <v-tab-item key="home">
            <v-img
              ref="home"
              :src="backgroundImage"
              height="600px"
            >
              <v-row class="fill-height text-center"  no-gutters align="center" justify="center">
                <v-col class="mt-n12">
                <v-avatar size="185" class="pb-6">
                  <v-img :src="headshot" />
                </v-avatar>
                <div class="display-3 primary--text">
                  {{greetingText}}
                </div>
                <div class="display-2 primary--text">
                  {{greetingSubtext}}
                </div>
                </v-col>
              </v-row>
            </v-img>
            <div
              ref="about"
              class="display-2 primary--text text-center pt-12 hidden"
              v-infocus="'showElement'"
            >
              ABOUT
            </div>
            <v-row
              no-gutters
              justify="center"
              align="center"
              class="hidden fill-height"
              v-infocus="'showElement'"
            >
              <v-col class="px-12 pb-12" sm="9" :class="{'pt-3': breakpoint == 'xs'}">
                <div class="headline terciary--text font-weight-light">
                  {{about}}
                </div>
              </v-col>
              <v-col class="py-4 px-2" sm="3" >
                <v-row
                  align="center"
                  justify="center"
                   no-gutters
                   v-for="school in education"
                  :key="school.school"
                >
                  <education-tile
                    :school="school.school"
                    :degree="school.degree"
                    :logo="school.logo"
                  ></education-tile>
                </v-row>
              </v-col>
            </v-row>
            <div
              ref="skills"
              class="display-2 primary--text text-center py-6 hidden"
              v-infocus="'showElement'"
            >
              SKILLS
            </div>
            <v-row
              justify="center"
              class="hidden text-center fill-height pb-6"
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
            </v-row>
          </v-tab-item>
          <v-tab-item key="experience">
            <div
              class="display-2 primary--text text-center pt-4 pb-5"
              ref="experience"
            >
              EXPERIENCE
            </div>
            <v-row class="pa-3" justify="center">
              <experience-timeline/>
            </v-row>
          </v-tab-item>
          <v-tab-item key="publications">
            <div
              class="display-2 primary--text text-center pt-6 pb-4"
              ref="publications"
            >
              PUBLICATIONS
            </div>
            <publications-table/>
          </v-tab-item>
        </v-container>
      </v-tabs-items>
      <v-footer color="primary" dark app height="45" class="px-4">
        <v-row class="fill-height" align="baseline" no-gutters>
          <v-col cols="4">
            <span class="white--text body-2">&copy;2019 — Nicole Kowtko</span>
          </v-col>
          <v-col class="text-right" cols="8" >
            <v-btn
              text
              small
              class="mr-3"
              :href="resumeLink"
              target="_blank"
              >
              Resume
            </v-btn>
            <v-btn
              v-if="linkedIn.length > 0"
              text
              fab
              small
              :href="linkedIn"
              target="_blank"
            >
              <v-icon color="white" size="18px">
                fab fa-linkedin
              </v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-footer>
    </v-content>
  </v-app>
</template>

<script>
import ExperienceTimeline from '@/components/ExperienceTimeline/ExperienceTimeline';
import EducationTile from '@/components/EducationTile/EducationTile';
import PublicationsTable from '@/components/PublicationsTable/PublicationsTable.vue';
import SkillsTile from '@/components/SkillsTile/SkillsTile.vue';
import NavigationDrawer from '@/components/NavigationDrawer/NavigationDrawer.vue';

import skills from '@/assets/data/skills';

const {
  greetingText, greetingSubtext, about, education, name,
} = require('./assets/data/about');
const {
  resumeLink, linkedIn, backgroundImage, headshot,
} = require('./assets/data/links');

export default {
  name: 'App',
  components: {
    PublicationsTable, ExperienceTimeline, EducationTile, SkillsTile, NavigationDrawer,
  },
  data() {
    return {
      tab: 0,
      skills,
      greetingText,
      greetingSubtext,
      about,
      education,
      resumeLink,
      linkedIn,
      backgroundImage,
      headshot,
      name,
      drawer: {
        open: false,
        close: false,
      },
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
    navigationClick(refName, tab) {
      this.drawer.close = !this.drawer.close;
      this.scrollMeTo(refName, tab);
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
.v-navigation-drawer div[role="listitem"] {
  width: 100%;
}
</style>
