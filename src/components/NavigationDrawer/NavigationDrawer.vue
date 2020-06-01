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
      <v-list-item @click="navigationClick('home', 0)">
        <v-list-item-avatar>
          <v-img :src="headshot" />
        </v-list-item-avatar>
        <v-list-item-title>
          {{ name }}
        </v-list-item-title>
      </v-list-item>
      <v-divider light/>
      <v-list-item @click="navigationClick('about', 0)">
        <v-list-item-avatar>
          <v-icon>contacts</v-icon>
        </v-list-item-avatar>
        <v-list-item-title>About</v-list-item-title>
      </v-list-item>
      <v-list-item @click="navigationClick('skills', 0)">
        <v-list-item-avatar>
          <v-icon>extension</v-icon>
        </v-list-item-avatar>
        <v-list-item-title>Skills</v-list-item-title>
      </v-list-item>
      <v-list-item @click="navigationClick('experience', 1)">
        <v-list-item-avatar>
          <v-icon>work_outline</v-icon>
        </v-list-item-avatar>
        <v-list-item-title>Experience</v-list-item-title>
      </v-list-item>
      <v-list-item @click="navigationClick('publications', 2)">
        <v-list-item-avatar>
          <v-icon>description</v-icon>
        </v-list-item-avatar>
        <v-list-item-title>Publications</v-list-item-title>
      </v-list-item>
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
