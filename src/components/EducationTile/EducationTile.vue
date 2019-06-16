<template>
  <v-flex sm6 text-xs-center pb-3>
    <v-btn outline fab large color="secondary">
      <v-avatar size="60">
        <v-img :src="logo" />
      </v-avatar>
    </v-btn>
    <div class="headline primary--text" style="font-weight:500">
      {{school}}
    </div>
    <div class="subheading primary--text" v-html="degree">
    </div>
  </v-flex>
</template>

<script>
export default {
  name: 'education-tile',
  props: {
    school: {
      type: String,
      default: '',
    },
    degree: {
      type: String,
      default: '',
    },
    logo: {
      type: String,
      default: '',
    },
  },
};
</script>
