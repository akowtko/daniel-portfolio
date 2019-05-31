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
            <td class="text-xs-right" v-if="!smallScreen">{{ props.item.volume }}</td>
            <td class="text-xs-right" v-if="!smallScreen">{{ props.item.year }}</td>
            <td class="text-xs-right"><open-link-button :link="props.item.link"/></td>
            </tr>
          </template>
        </v-data-table>
      </v-card>
    </v-flex>
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
  </v-layout>
</template>

<script>
import publications from '@/assets/data/publications';
import OpenLinkButton from './OpenLinkButton.vue';
import PublicationDetailDialog from './PublicationDetailDialog.vue';

export default {
  name: 'publications-table',
  components: {
    OpenLinkButton,
    PublicationDetailDialog,
  },
  data() {
    return {
      publications,
      search: '',
      statusFilter: [],
      publicationDialog: false,
      statusOptions: ['Published', 'Under Review', 'Submitted'],
      publication: {},
      headers: [
        {
          text: 'Title',
          align: 'left',
          sortable: true,
          value: 'title',
          class: 'subheading',
          mobileVisible: true,
        },
        {
          text: 'Author #',
          align: 'left',
          sortable: true,
          value: 'authorPosition',
          class: 'subheading',
          mobileVisible: true,
        },
        {
          text: 'Status',
          align: 'left',
          sortable: false,
          value: 'status',
          class: 'subheading',
          mobileVisible: true,
        },
        {
          text: 'Journal',
          align: 'left',
          sortable: true,
          value: 'journal',
          class: 'subheading',
          mobileVisible: true,
        },
        {
          text: 'Volume',
          align: 'right',
          sortable: false,
          value: 'volume',
          class: 'subheading',
          mobileVisible: false,
        },
        {
          text: 'Year',
          align: 'right',
          sortable: true,
          value: 'year',
          class: 'subheading',
          mobileVisible: false,
        },
        {
          text: 'Link',
          align: 'right',
          sortable: false,
          value: 'link',
          class: 'subheading',
          mobileVisible: true,
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
          publication => this._.includes(publication.title.toLowerCase(),
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
      return 'px-5';
    },
    filteredHeaders() {
      if (this.smallScreen) {
        return this._.filter(this.headers, header => header.mobileVisible);
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

<style scoped>
</style>
