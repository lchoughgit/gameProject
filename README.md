# Games

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.9.
- Implements: Tailwind CSS for layout and stylings, and Material for components

## Assumptions
- Node.js (and Git) are installed (app was built using Node v14.16.1)

## NPM
- run `npm install` in order to load node_modules and other dependencies

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Known Omissions:
- I didn't create interfaces for every type of data result, but created 2 in order to demonstrate implementation and usage.

## If I had more time:
- use stronger variable types vs instances where I used 'any'
- would have thought through layout more thoroughly
- coded a better looking game details page
- I would have re-thought how I implemented modules - could structure be better?
- add confirm dialog box when user clicks delete
- enhance search typeahead so it returns all keyword matches vs. exact string match
- on the search results page: employ Observable pipe and rxjs operators vs. simply using 'of' operator on the search filter by platform. My main goal however was to demonstrate usage of async on search results filtered by platform
