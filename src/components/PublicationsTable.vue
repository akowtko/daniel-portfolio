<template>
  <v-layout pa-3 justify-center>
    <v-flex :class="tablePadding">
      <v-card style="min-width:590px">
        <v-card-title>
          <v-layout wrap>
            <v-flex xs4 md3>
              <v-select
                multiple
                color="terciary"
                prepend-icon="sort"
                v-model="statusFilter"
                :items="statusOptions"
                deletable-chips
                chips
                label="Status"
              ></v-select>
            </v-flex>
            <v-flex offset-md6 md3 xs5 offset-xs3>
              <v-text-field
                v-model="search"
                append-icon="search"
                label="Search"
                single-line
                hide-details
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-card-title>
        <v-data-table
          must-sort
          no-data-text="No publications found with these filters."
          :headers="filteredHeaders"
          :items="filteredPublications"
        >
          <template slot="items" slot-scope="props">
            <tr @click="populatePublicationDialog(props.item)" class="clickable">
            <td style="min-width:250px">{{ props.item.title }}</td>
            <td class="text-xs-right">{{ props.item.authorPosition }}</td>
            <td class="text-xs-left">{{ props.item.status }}</td>
            <td class="text-xs-left" style="min-width:200px">{{ props.item.journal }}</td>
            <td class="text-xs-right" v-if="!smallScreen">{{ props.item.edition }}</td>
            <td class="text-xs-right" v-if="!smallScreen">{{ props.item.year }}</td>
            </tr>
          </template>
        </v-data-table>
      </v-card>
    </v-flex>
    <v-dialog
      v-model="publicationDialog"
      width="800"
      >
      <v-card>
        <v-card-title class="text--primary pb-1">
          <v-layout>
            <v-flex xs11>
              <div class="headline">{{publication.title}}</div>
            </v-flex>
            <v-flex xs1 text-xs-right>
              <v-tooltip
                  top
                >
                <span>Go to Publication</span>
                <v-btn
                  slot="activator"
                  class="ma-0"
                  icon
                  flat
                  color="grey"
                  @click.stop="openLink(publication.link)"
                >
                  <v-icon size="20">
                    open_in_new
                  </v-icon>
                </v-btn>
              </v-tooltip>
            </v-flex>
          </v-layout>
        </v-card-title>
        <v-card-text class="pt-0">
          <div class="terciary--text caption pb-5">{{publication.authors}}</div>
          <div class="title text--primary pb-2">Abstract</div>
          <div class="body-1 terciary--text pb-2">{{publication.abstract}}</div>
          <v-chip>{{publication.status}}</v-chip><v-chip>Journal: {{publication.journal}} ({{publication.edition}})</v-chip>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import publications from '@/assets/data/publications';

export default {
  name: 'publications-table',
  data() {
    return {
      publications,
      search: '',
      statusFilter: [],
      publicationDialog: false,
      statusOptions: ['Published', 'In Preparation', 'Under Review'],
      publication: {},
      authors: '',
      journal: '',
      edition: '',
      title: '',
      abstract: '',
      link: '',
      status: '',
      year: '',
      headers: [
        {
          text: 'Title',
          align: 'left',
          sortable: true,
          value: 'title',
          class: 'subheading',
        },
        {
          text: 'Author',
          align: 'left',
          sortable: false,
          value: 'authorPosition',
          class: 'subheading',
        },
        {
          text: 'Status',
          align: 'left',
          sortable: false,
          value: 'status',
          class: 'subheading',
        },
        {
          text: 'Journal',
          align: 'left',
          sortable: true,
          value: 'journal',
          class: 'subheading',
        },
        {
          text: 'Edition',
          align: 'right',
          sortable: false,
          value: 'edition',
          class: 'subheading',
        },
        {
          text: 'Year',
          align: 'right',
          sortable: true,
          value: 'year',
          class: 'subheading',
        },
      ],
    };
  },
  computed: {
    filteredPublications() {
      let filteredPublications = this.publications;

      if (this.statusFilter.length > 0) {
        filteredPublications = this._.filter(filteredPublications,
          publication => this._.includes(this.statusFilter, publication.status));
      }

      if (this.search) {
        filteredPublications = this._.filter(filteredPublications,
          publication => this._.includes(publication.title, this.search));
      }
      return filteredPublications;
    },
    smallScreen() {
      const { breakpoint } = this.$vuetify;
      return breakpoint.xs || breakpoint.sm;
    },
    tablePadding() {
      if (this.smallScreen) return '';
      return 'px-5';
    },
    filteredHeaders() {
      if (this.smallScreen) {
        return this.headers.slice(0, 4);
      }
      return this.headers;
    },
  },
  methods: {
    populatePublicationDialog(publication) {
      console.log(publication);
      this.publication = publication;
      this.publicationDialog = true;
    },
    openLink(url) {
      window.open(url);
    },
  },
};
</script>

<style scoped>
</style>
