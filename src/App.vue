<template>
  <v-app>
    <navigation-drawer
      :open-dialog="drawer.open"
      :close-dialog="drawer.close"
      v-on:navigation-click="navigationClick"
    ></navigation-drawer>
    <v-toolbar dark app color="primary">
      <v-toolbar-side-icon
        v-if="breakpoint == 'sm' || breakpoint == 'xs'"
        @click="drawer.open = !drawer.open"
      >
      </v-toolbar-side-icon>
      <v-toolbar-title
        class="headline clickable"
        @click="scrollMeTo('home', 0)"
      >
        {{name}}
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <span v-if="breakpoint !== 'sm' && breakpoint !== 'xs'">
      <v-btn @click="scrollMeTo('about', 0)" flat>About</v-btn>
      <v-btn flat @click="scrollMeTo('skills', 0)">Skills</v-btn>
      <v-btn flat @click="scrollMeTo('experience', 1)">Experience</v-btn>
      <v-btn flat @click="scrollMeTo('publications', 2)">Publications</v-btn>
      </span>
    </v-toolbar>
    <v-content>
      <v-tabs-items v-model="tab">
        <v-container fluid pa-0>
          <v-tab-item key="home">
            <v-img
              ref="home"
              :src="backgroundImage"
              height="600px"
            >
              <v-layout column justify-center align-center fill-height>
                <v-avatar size="185" class="pb-4">
                  <v-img :src="headshot" />
                </v-avatar>
                <div class="display-3 primary--text">
                  {{greetingText}}
                </div>
                <div class="display-2 primary--text">
                  {{greetingSubtext}}
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
                  {{about}}
                </div>
              </v-flex>
              <v-flex sm3 py-3 px-2>
                <v-layout column wrap align-center>
                  <education-tile
                    v-for="school in education"
                    :key="school.school"
                    :school="school.school"
                    :degree="school.degree"
                    :logo="school.logo"
                  ></education-tile>
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
            <div
              class="display-2 primary--text text-xs-center pt-4 pb-5"
              ref="experience"
            >
              EXPERIENCE
            </div>
            <v-layout pa-3 justify-center>
              <experience-timeline/>
            </v-layout>
          </v-tab-item>
          <v-tab-item key="publications">
            <div
              class="display-2 primary--text text-xs-center pt-4 pb-4"
              ref="publications"
            >
              PUBLICATIONS
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
              small
              :href="resumeLink"
              target="_blank"
              >
              Resume
            </v-btn>
            <v-btn
              v-if="linkedIn.length > 0"
              flat
              fab
              small
              :href="linkedIn"
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
import ExperienceTimeline from '@/components/ExperienceTimeline/ExperienceTimeline.vue';
import EducationTile from '@/components/EducationTile/EducationTile.vue';
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
