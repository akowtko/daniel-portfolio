<template>
  <v-row class="pa-4" justify="center">
    <v-col :class="tablePadding">
      <v-card style="min-width:590px">
        <v-card-title>
          <v-row >
            <v-col cols="4" md="3">
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
            </v-col>
            <v-col offset-md="6" md="3" cols="5" offset="3">
              <v-text-field
                v-model="search"
                append-icon="search"
                label="Search"
                single-line
                hide-details
              ></v-text-field>
            </v-col>
          </v-row>
        </v-card-title>
        <v-data-table
          must-sort
          no-data-text="No publications found with these filters."
          :headers="filteredHeaders"
          :items="filteredPublications"
          :options="options"
          :footer-props="footerProps"
        >
          <template
            slot="item"
            slot-scope="props"
          >
            <tr @click="populatePublicationDialog(props.item)" class="clickable">
            <td style="min-width:250px">{{ props.item.title }}</td>
            <td class="text-right">{{ props.item.authorPosition }}</td>
            <td class="text-left" style="width:118px">{{ props.item.status }}</td>
            <td class="text-left" style="width:200px;padding-right:4px;">
              {{ props.item.journal }}</td>
            <td class="text-right" v-if="!smallScreen">{{ props.item.volume }}</td>
            <td class="text-right" v-if="!smallScreen">{{ props.item.year }}</td>
            <td class="text-right"><open-link-button :link="props.item.link"/></td>
            </tr>
          </template>
        </v-data-table>
      </v-card>
    </v-col>
    <publication-detail-dialog
      :title="publication.title"
      :authors="publication.authors"
      :status="publication.status"
      :journal="publication.journal"
      :article="publication.article"
      :volume="publication.volume"
      :abstract="publication.abstract"
      :link="publication.link"
      :dialog-model="publicationDialog"
    />
  </v-row>
</template>

<script>
import publications from '@/assets/data/publications';
import OpenLinkButton from '../OpenLinkButton/OpenLinkButton.vue';
import PublicationDetailDialog from '../PublicationDetailDialog/PublicationDetailDialog.vue';

export default {
  name: 'publications-table',
  components: {
    OpenLinkButton,
    PublicationDetailDialog,
  },
  data: () => ({
    publications,
    search: '',
    statusFilter: [],
    publicationDialog: false,
    statusOptions: ['Published', 'Under Review', 'Submitted'],
    publication: {},
    options: { sortBy: ['title'], sortDesc: [true], itemsPerPage: 10 },
    footerProps: {
      itemsPerPageOptions: [10, { text: 'All', value: -1 }],
    },
    headers: [
      {
        text: 'Title',
        align: 'start',
        sortable: true,
        value: 'title',
        class: ['subtitle-1', 'font-weight-medium'],
        mobileVisible: true,
      },
      {
        text: 'Author #',
        align: 'end',
        sortable: true,
        value: 'authorPosition',
        class: ['subtitle-1', 'font-weight-medium', 'no-wrap'],
        mobileVisible: true,
      },
      {
        text: 'Status',
        align: 'start',
        sortable: false,
        value: 'status',
        class: ['subtitle-1', 'font-weight-medium'],
        mobileVisible: true,
      },
      {
        text: 'Journal',
        align: 'start',
        sortable: true,
        value: 'journal',
        class: ['subtitle-1', 'font-weight-medium'],
        mobileVisible: true,
      },
      {
        text: 'Volume',
        align: 'end',
        sortable: false,
        value: 'volume',
        class: ['subtitle-1', 'font-weight-medium'],
        mobileVisible: false,
      },
      {
        text: 'Year',
        align: 'end',
        sortable: true,
        value: 'year',
        class: ['subtitle-1', 'font-weight-medium', 'no-wrap'],
        mobileVisible: false,
      },
      {
        text: 'Link',
        align: 'end',
        sortable: false,
        value: 'link',
        class: ['subtitle-1', 'font-weight-medium'],
        mobileVisible: true,
      },
    ],
  }),
  computed: {
    allPages() {
      return this.$vuetify.dataIterator.rowsPerPageAll;
    },
    filteredPublications() {
      let filteredPublications = this.publications;

      if (this.statusFilter.length > 0) {
        filteredPublications = this._.filter(filteredPublications,
          (publication) => this._.includes(this.statusFilter, publication.status));
      }

      if (this.search) {
        filteredPublications = this._.filter(filteredPublications,
          (publication) => this._.includes(publication.title.toLowerCase(),
            this.search.toLowerCase()));
      }
      return filteredPublications;
    },
    smallScreen() {
      const { breakpoint } = this.$vuetify;
      return breakpoint.xs || breakpoint.sm;
    },
    tablePadding() {
      if (this.smallScreen) return '';
      return 'px-12';
    },
    filteredHeaders() {
      if (this.smallScreen) {
        return this._.filter(this.headers, (header) => header.mobileVisible);
      }
      return this.headers;
    },
  },
  methods: {
    populatePublicationDialog(publication) {
      this.publication = publication;
      this.publicationDialog = true;
    },
  },
};
</script>

<style>
  .no-wrap {
    white-space: nowrap;
  }
</style>
