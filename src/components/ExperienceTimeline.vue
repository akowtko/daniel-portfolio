<template>
  <v-timeline>
    <v-timeline-item
      v-for="(position, i) in experience"
      :key="i"
      color="secondary"
      small
    >
      <template v-slot:opposite>
        <span
          :class="`headline font-weight-bold secondary--text`"
          v-text="dateString(position.start, position.end)"
        ></span>
      </template>
      <div class="py-3" style="max-width:700px">
        <div class="headline secondary--text">
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
        return `${this.formatDate(start)} - ${this.formatDate(end)}`;
      }
      return this.formatDate(start);
    },
  },
};
</script>
