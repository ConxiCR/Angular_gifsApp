# GifsApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.12.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Pautas proyecto GifsAPP

### sidebar

1- Crear shared.module.ts
2- Crear Component - sidebar.component.ts
3- Exportar el sidebar (module) - en shared.module.ts
4- Importar el shared.module dentro del app.module.ts
5- <app-sidebar></app-sidebar> en el app.component.html
    - ng g m shared
    - ng g c shared/sidebar --skip-tests -is

### GIFS

1- Crear modulo e importar en app.module.ts
    - ng g m gifs
2- Crear componentes. 

### nuevo componente dentro de gifs
1- Crear nuevo componente dentro de gifs
    - ng g c gifs/gifsPage --skip-tests -is
    La clase container en lugar de tenerla en gifs-page.component la colocamos en app.component.html(de esta manera reducimos código html)
2- Creamos dos nuevos componentes, 1 para trabajar la busqueda y otro para enseñar los resultados
3- obtener información de la caja de texto y borrar el valor del contenido con @ViewChild
@ViewChild('txtBuscar') txtBuscar!:ElementRef; //en el elemento txtBuscar le aplicamos !(node null assertion operator ) https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#non-null-assertion-operator





 
# Angular_gifsApp
# Angular_gifsApp
