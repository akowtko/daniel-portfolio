# Publication Detail Dialog

## Functionality
This `<v-dialog>` contains a `<v-card>` that displays the details of a publication. Shows the name, authors, abstract,
publication state, and journal.

## Example
<img width="813" alt="Screen Shot 2019-06-16 at 8 05 21 PM" src="https://user-images.githubusercontent.com/9166875/59575873-18e76480-9072-11e9-895f-41d8dfd87d3e.png">

## Usage
| Attribute | Type | Description
| --- | --- | ---
| title | String | Title of the publication
| authors | String | List of all the authors as a string
| status | String | publication status (Published, Under Review)
| journal | String | Name of the publication's journal
| article | String | Article number of the publication
| volume | String | Journal's volume number
| abstract | String | Publication's abstract
| link | String | url to the publication
| dialogModel | Boolean | True to open the dialog, False to close it
