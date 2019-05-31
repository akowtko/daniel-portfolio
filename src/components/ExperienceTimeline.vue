<template>
  <v-timeline dense>
    <v-timeline-item
      v-for="(position, i) in experience"
      :key="i"
      color="secondary"
      small
    >
      <v-layout pb-3>
        <v-flex xs4>
          <div
          class="title font-weight-regular secondary--text pt-2"
          v-html="dateString(position.start, position.end)"
        ></div>
        </v-flex>
        <v-flex xs8>
          <div style="max-width:700px">
            <div class="headline font-weight-bold secondary--text">
              {{ position.name }}
            </div>
            <div
              class="subheading secondary--text font-weight-light mb-3"
            >
              {{ position.location }}
            </div>
            <div
              class="body-1 primary--text pb-1"
              v-html="position.description"
            ></div>
          </div>
        </v-flex>
      </v-layout>
    </v-timeline-item>
  </v-timeline>

</template>

<script>
import experience from '@/assets/data/experience';

export default {
  name: 'experience-timeline',
  data() {
    return {
      experience,
    };
  },
  methods: {
    formatDate(dateString) {
      if (this.moment(dateString, 'MM-YYYY').isValid()) {
        return this.moment(dateString, 'MM-YYYY').format('MMMM YYYY');
      } return dateString;
    },
    dateString(start, end) {
      if (end) {
        return `${this.formatDate(start)} - <br> ${this.formatDate(end)}`;
      }
      return this.formatDate(start);
    },
  },
};
</script>

<style>
  .v-timeline-item__dot {
    align-self: normal;
  }
</style>
