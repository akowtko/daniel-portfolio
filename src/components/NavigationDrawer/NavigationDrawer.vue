<template>
  <v-navigation-drawer
    dark
    fixed
    disable-resize-watcher
    app
    temporary
    v-model="dialogModel"
  >
    <v-list>
      <v-list-tile @click="navigationClick('home', 0)">
        <v-list-tile-avatar>
          <v-img :src="headshot" />
        </v-list-tile-avatar>
        <v-list-tile-title>
          {{ name }}
        </v-list-tile-title>
      </v-list-tile>
      <v-divider light/>
      <v-list-tile @click="navigationClick('about', 0)">
        <v-list-tile-avatar>
          <v-icon>contacts</v-icon>
        </v-list-tile-avatar>
        <v-list-tile-title>About</v-list-tile-title>
      </v-list-tile>
      <v-list-tile @click="navigationClick('skills', 0)">
        <v-list-tile-avatar>
          <v-icon>extension</v-icon>
        </v-list-tile-avatar>
        <v-list-tile-title>Skills</v-list-tile-title>
      </v-list-tile>
      <v-list-tile @click="navigationClick('experience', 1)">
        <v-list-tile-avatar>
          <v-icon>work_outline</v-icon>
        </v-list-tile-avatar>
        <v-list-tile-title>Experience</v-list-tile-title>
      </v-list-tile>
      <v-list-tile @click="navigationClick('publications', 2)">
        <v-list-tile-avatar>
          <v-icon>description</v-icon>
        </v-list-tile-avatar>
        <v-list-tile-title>Publications</v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>

</template>

<script>
const { name } = require('../../assets/data/about');
const { headshot } = require('../../assets/data/links');

export default {
  name: 'navigation-drawer',
  props: {
    openDialog: {
      type: Boolean,
      default: null,
    },
    closeDialog: {
      type: Boolean,
      default: null,
    },
  },
  data() {
    return {
      name,
      headshot,
      dialogModel: false,
    };
  },
  mounted() {
    this.dialogModel = null;
  },
  watch: {
    openDialog() {
      this.dialogModel = true;
    },
    closeDialog() {
      this.dialogModel = false;
    },
  },
  methods: {
    navigationClick(refName, tab) {
      this.$emit('navigation-click', refName, tab);
    },
  },
};
</script>
