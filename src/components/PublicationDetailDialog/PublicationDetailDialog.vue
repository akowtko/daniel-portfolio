<template>
  <v-dialog
    v-model="dialogModel"
    width="800"
  >
    <v-card>
      <v-card-title class="text--primary pb-1">
        <v-layout>
          <v-flex xs11>
            <div class="headline">{{title}}</div>
          </v-flex>
          <v-flex xs1 text-xs-right>
            <open-link-button :link="link"/>
          </v-flex>
        </v-layout>
      </v-card-title>
      <v-card-text class="pt-0">
        <div class="terciary--text caption pb-4">{{authors}}</div>
        <div class="title text--primary pb-2">Abstract</div>
        <div class="body-1 terciary--text pb-2" v-html="abstract"></div>
        <v-chip>{{status}}</v-chip>
        <v-chip>
          Journal: {{journal}} Vol. {{volume}} p. {{article}}
        </v-chip>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import OpenLinkButton from '../OpenLinkButton/OpenLinkButton.vue';

export default {
  name: 'publication-detail-dialog',
  components: {
    OpenLinkButton,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    authors: {
      type: String,
      default: '',
    },
    status: {
      type: String,
      default: '',
    },
    journal: {
      type: String,
      default: '',
    },
    article: {
      type: String,
      default: '',
    },
    volume: {
      type: String,
      default: '',
    },
    abstract: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '',
    },
    dialogModel: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
    };
  },
};
</script>
