## Technologies used

- preact
- django-rest-framework


### Features

- The application is designed as a SPA on a reactive framework
- Structure:
    - Home page (aka **Polls**): a list of active surveys with a description.
    - **Completed polls** page: a page with a search field where you can get a list of all completed polls by a unique id that is assigned to the user when passing the survey. It is also possible to search by other attributes (email and phone number), which are suggested to be entered after passing.
    - The admin page (**Log In**) is located at the default address */admin*. The admin panel, among other things, allows the administrator to:
        - View / edit / delete / add polls. In particular: name, start date, end date, description and whether the survey is active. After creation, the "start date" field of the survey cannot be changed
        - View/edit/delete/add questions to the survey, filter questions by survey
- The API structure is available at http://127.0.0.1:8000/open_api
- Swagger documentation - here http://127.0.0.1:8000/swagger/
- The application was written from scratch in one day as a test assignment for an interview


## Usage:

Before you start, you need to be sure that you have python installed locally and node.js. If everything is fine, let's get started

1. Select the destination folder and run the following command in the terminal: `git clone git@github.com:Sanshain/polls_app.git .`
2. After cloning go inside via `cd polling_project` and install all python dependencies: `pip install -r requirements.txt`
3. Run dev server via `python manage.py runserver`

## Development

For frontend delelopment also you need following steps:

4. Next step: go to static dir: `cd polling_app/static` and start `npm i`. This command will install all node.js dependencies.
5. Start `rollup -c -w`

## API:

API Schema is availible on the [address](http://127.0.0.1/open_api)

Other languages availible:

- [Russian](./docs/ru.MD)
