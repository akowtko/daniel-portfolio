<template>
  <v-flex
      md3
      sm4
      xs5
      pb-3
    >
      <v-btn
        fab
        outline
        color="secondary"
        background-color="white"
        style="height:80px;width:80px"
      >
        <v-icon v-if="icon" size="40">{{ icon }}</v-icon>
        <v-img v-else height="40" contain :src="image" />
      </v-btn>
      <div class="headline turquoise--text" style="font-weight:500">
        {{ name }}
      </div>
      <div class="body-1 terciary--text">
        <span v-for="example in examples" :key="example">
          {{ example }}<br />
        </span>
      </div>
    </v-flex>
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
