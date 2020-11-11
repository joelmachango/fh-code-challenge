### _Landing page_

![Landing Page](src/assets/images/screenshot.png)

# fh Grants Management Application

Like many other international non-governmental organizations (INGO), Food for the Hungry (FH) receives grants from various sources to aid it in it's core mission of ending hunger worldwide. These grants are normally utilized in various projects as indicated here https://www.fh.org/grant-projects/

This system is used for managing grant related data from **Inception** through to **Termination**.

## Database Entity Relationship Diagram(ERD)

![ERD](src/assets/images/fh-erd.png)

## Usage

- Authentication

- Greate a Grant

- View a Grant's Details

- Update a Grant

- Delete a Grant

## Installation

_Download the project to your local computer through_

- Download a zip folder of this repository

### Alternatively

_Run the following command_

```
$ git clone git@github.com:joelmachango/fh-code-challenge.git
```

## API

### Documentation

[Here is the API Documentation](https://documenter.getpostman.com/view/3796031/TVeiDAiR)

### Prerequisites

- [PHP >=7.0.0](https://www.php.net/downloads.php)
- [Laravel 5.5.\*](https://laravel.com/docs/5.5)

### Endpoints

| METHOD | ENDPOINT                   | DESCRIPTION                    |
| ------ | -------------------------- | ------------------------------ |
| POST   | /api/grant                 | Create a new grant             |
| PUT    | /api/grant/<int:grant_id>  | Update single grant properties |
| DELETE | /api/grant/<int:grant_id>  | Delete a grant entry           |
| GET    | /api/grants                | Get all grants entries         |
| GET    | /api/grants/<int:grant_id> | Get a specific grant entriy    |
| POST   | /api/user                  | Handle user registration       |
| POST   | /api/authenticate          | Login registered user          |

## Technologies & Languages

**Angular 8.2.14**

**Laravel 5.5.**

**MySQL**

**Angular Material**

**Version control (Git)** [https://git-scm.com/](https://git-scm.com/)

**HTML5**

**SCSS**

**JavaScript**

**TypeScript**

**PHP**

## Authors

[Joel Machango](https://joelmachango.com/)

## License

MIT

## Acknowledgement

[fh.org](https://www.fh.org/) - Code Challenge
