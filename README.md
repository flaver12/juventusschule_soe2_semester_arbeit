# Semeterarbeit Juventusschule SOE2

## Techstack
### Backend
* Kotlin + SpringBoot
* Postgres

### Frontend
* React + Typescript
* Moment
* Material UI

## Architektur
### Backend
MVC approach, Symfony like aufgebaut Controller -> Service -> Repository

* Config -> Konfigurationsklassen für Spring & OpenAPI
* Controller -> Alle Controller die in der App gebraucht werden
* Service -> Alle Services, ein Service ist die Schnitstelle zwischen Controller und Repository
* Repository -> Alle JPA Reposiories
* Entity -> Alle Entities, eine Entity wiederspiegelt die Datenstruktur der Tabelle
* Model -> Model ist eine generelle data class die von einem Service/Controller usw. benutz wird
* Exception -> Für eigene Exceptions

### Frontend
Die App benutz Smartcomponents, die eigentlich Page ist nur als Wrapper für diese da.
So kann der Component überall eingefügt werden und läuft out of the box.

* Components -> Einzele in sich geschlossene Einheiten
* Enum -> Alle enums die in der App gebraucht werden
* Models -> Generelle ansammlung von HttpModels und FilterModels
* Services -> Die einzelnen Services die mit der API kommunzieren
* Util -> Hilfsfunktionen

## Component overview frontend
<pre>
└── src
    ├── components
        ├── CarForm
        ├── Carlist
        ├── Filterform
        ├── Navbar
    ├── AdminPanel
    ├── App
    └── Success
</pre>