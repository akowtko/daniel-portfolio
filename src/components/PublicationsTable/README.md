# Publications Table

## Functionality
This `<v-data-table>` inside a `<v-card>` displays publications with built in search and status filters, and column sorting.

## Example
<img width="100" alt="Screen Shot 2019-06-17 at 9 06 30 AM" src="https://user-images.githubusercontent.com/9166875/59619387-41f20e80-90df-11e9-82d9-abf0001575e8.png">

## Computed Properties
| Attribute | Type | Description
| --- | --- | ---
| filteredPublications | Array | array of publication objects filtered by any status filters or search text
| smallScreen | Boolean | True if the screen width is at the xs or sm breakpoints
| tablePadding | String | x-axis padding for the table if the screen is small
| filteredHeaders | Array | array of header objects, fewer headers if the screen is small

## Methods
| Name | Param | Returns | Description
| --- | --- | --- | ---
| populatePublicationDialog | `publication` {Object} Object with publication information | | populates publication details dialog and opens it
