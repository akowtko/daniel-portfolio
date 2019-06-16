# Navigation Drawer

## Functionality
This `v-navigation-drawer` stores all the toolbar links but opens from the left side of the screen when the screen is
too small to fit all the links in the normal `v-toolbar`. The top list item has a headshot and links to the main page.

## Example
<img width="341" alt="NavigationDrawer" src="https://user-images.githubusercontent.com/9166875/59568995-3ac3f580-9038-11e9-95d8-77ef0a078ff2.png">

## Usage
| Attribute | Type | Description
| --- | --- | ---
| openDialog | Boolean | Set true or false to open the navigation drawer
| closeDialog | Boolean | Set true or false to close the navigation drawer

## Methods
| Name | Param | Returns | Description
| --- | --- | --- | ---
| navigationClick | `refName` {String} name of the section to navigate to <br/> `tab` {Number} tab number section is located in  | | Emits `navigation-click` event to trigger loading a different section
