<template>
  <v-tooltip
    top
  >
    <span>Go to Publication</span>
    <v-btn
      slot="activator"
      class="ma-0"
      icon
      text
      color="grey"
      @click.stop="openLink(link)"
    >
      <v-icon size="20">
        open_in_new
      </v-icon>
    </v-btn>
  </v-tooltip>
</template>

<script>
export default {
  name: 'open-link-button',
  props: {
    link: {
      type: String,
      default: '',
    },
  },
  methods: {
    openLink(url) {
      window.open(url);
    },
  },
};
</script>
