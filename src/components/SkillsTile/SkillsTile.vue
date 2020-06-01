<template>
  <v-col class="pb-4"
      md="3"
      sm="4"
      cols="5"
  >
      <v-btn
        fab
        outlined
        color="secondary"
        background-color="white"
        style="height:80px;width:80px"
        class="mb-2"
      >
        <v-icon v-if="icon" size="40">{{ icon }}</v-icon>
        <v-img v-else height="35" contain :src="image" />
      </v-btn>
      <div class="headline turquoise--text" style="font-weight:500">
        {{ name }}
      </div>
      <div class="body-2 terciary--text">
        <span v-for="example in examples" :key="example">
          {{ example }}<br />
        </span>
      </div>
    </v-col>
</template>

<script>
export default {
  name: 'skills-tile',
  props: {
    name: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
    examples: {
      type: Array,
      default() { return []; },
    },
  },
};
</script>
