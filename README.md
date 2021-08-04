<h1 align="center">
  Bloom Works Starter
</h1>

A Gatsby starter created by Bloom Works

- Unit Testing: [Jest](https://jestjs.io/) with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)

- Structural Testing: [Jest Snapshot Testing](https://www.gatsbyjs.com/docs/how-to/testing/unit-testing/#writing-tests)

- End-to-End Testing: [Cypress](https://www.cypress.io/) with [Cypress Testing Library](https://testing-library.com/docs/cypress-testing-library/intro)

## Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the starter.

    ```shell
    npm install -g gatsby-cli
    gatsby new gatsby-starter-bloom https://github.com/Bloom-Works/gatsby-starter-bloom
    ```

    or

    ```shell
    npx --force gatsby new gatsby-starter-bloom https://github.com/Bloom-Works/gatsby-starter-bloom
    ```

2.  **Install dependencies.**

    Navigate into your new site's directory and install dependencies.

    ```shell
    cd gatsby-starter-bloom/
    npm ci
    ```

3.  **Run unit and structural tests.**

    After installing dependencies using `npm ci`, you can run the unit and structural tests in your site's directory.

    ```shell
    npm run test
    ```

    or you can run them in "watch" mode:

    ```shell
    npm run test:watch
    ```

4.  **Start developing.**

    You can run the project with:

    ```shell
    npm start
    ```

    You can start unit tests in watch mode in another terminal:

    ```shell
    npm run test:watch
    ```

5.  **Open the source code and start editing!**

    Your site is now running at [http://localhost:8000/](http://localhost:8000/)!

    Open the `gatsby-starter-bloom` directory in your code editor of choice and edit `src/pages/index.tsx`.
    Save your changes and the browser will update in real time.
    The unit tests will re-run automatically and Cypress will reload the app so that you can re-trigger the Cypress tests.

6.  **Git Hooks.**

    This project is using git hooks which are configured with [Husky](https://github.com/typicode/husky).

    To enable Git hooks, install Husky manually:

    ```shell
    npx husky install
    ```

    **"pre-commit" git hook**

    This hook is configured to format your code with [Prettier](https://prettier.io/) and [lint-staged](https://github.com/okonet/lint-staged).
    When new files are staged and committed they will be formatted same way as `npm run format` command.

    **"commit-msg" git hook**

    Your commit messages must be compatible with [Conventional Commits](https://www.conventionalcommits.org/) specification.
    [commitlint](https://github.com/conventional-changelog/commitlint) is configured to make sure this specification is enforced.
    You can use `npm run commit` command to commit your changes which is using [prompt](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/prompt-cli) to create the commit messages.

## Storybook

This project uses Storybook to build and test component states in isolation. The configuration for Storybook is in `/.storybook/main.js` and `/.storybook/preview.js`. You can read more about storybook configuration with a Gatsby site in the [Gatsby docs for storybook](https://www.gatsbyjs.com/docs/how-to/testing/visual-testing-with-storybook/). If you want more information about Storybook or writing components and stories for Storybook, you can find [Storybook docs on their website](https://storybook.js.org/docs/react/get-started/introduction).

To launch the storybook app for this project, run `npm run storybook`. This command will trigger `gatsby clean` & `gatsby build`, set the node environment to `test`, and start the storybook application at `http://localhost:6006`. To start the storybook application without cleaning and rebuilding gatsby, run `npm run start-storybook`.

When writing new stories for components, name the file `<Component>.stories.tsx` in the `src/components/**/*` directories, and place it in the same directory as the component. You can also place stories in `src/stories/`, but you must name the file with the suffix `.stories.tsx` in order for it to be included in Storybook. If you need to add more directories to the Storybook configuration, do so in `/.storybook/main.js` in the stories array.

## Docker

This starter includes a minimal Docker setup. Be sure to download the necessary [Docker software](https://www.docker.com/products/docker-desktop) in order to manage and run Docker images.

Follow the steps below to run the Docker image.

1. **Build the Docker image:**
   &nbsp;

   ```shell
   npm run docker-build
   ```

2. **After image has been built, you can simply run:**
   &nbsp;
   ```shell
   npm run docker-start
   ```

Open a browser and navigate to `http://localhost:3000/`.

## Cypress

Cypress is built into this project. You will need to terminals to run Cypress tests. Run `npm start` first and run the command below in another terminal to open a cypress browser. Once opened, you can click on a designated file or all files to run end-to-end tests:

- Terminal 1

```
npm start
```

- Terminal 2

```shell
npm run cy:open
```

You may add more tests inside the `cypress/integration` directory. Configurations can be created inside the [plugins](https://docs.cypress.io/guides/references/configuration#Plugins) directory. This is mainly used to hook into the NodeJS process during bootstrap.

Custom [commands](https://docs.cypress.io/api/cypress-api/custom-commands#Syntax) can be created for use cases that require a specific flow to be fired. An example of a command could be a login flow that needs to be initiated before a Cypress test is run.

Another example can inlude reading files:

```ts
Cypress.Commands.add('getDownload', filePath => {
  cy.readFile(`downloads/${filePath}`);
});
```

Since Typescript is used in conjunction with Cypress, chainable commands will need to be defined in a declarations file. This is typically located in the `cypress/support` directory as `index.d.ts`. It looks like:

```ts
declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to read file path
     * @example cy.getDownload('filePath')
     */
    getDownload(filePath: string): Chainable<Element>;
  }
}
```

## Netlify integration

This starter uses a `config.yml` that should be located in the `src/static/admin/` directory. It should look like this:

```yml
backend:
  name: github
  repo: Bloom-Works/gatsby-starter-bloom
  branch: production

media_folder: static/img
public_folder: /img

collections:
  - name: 'pages'
    label: 'Pages'
    files:
      - label: 'Main Page'
        name: 'index'
        file: 'src/pages/index.content.yml'
        fields:
          - label: Home
            name: home
            widget: object
            fields:
              - { label: Title, name: title, widget: string }
```

## Config

Add a configuration into the `gatsby-config.js` file for airtable sheets:

```js
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: `AIRTABLE_KEY`, // may instead specify via env, see below
        concurrency: 5, // default, see using markdown and attachments for more information
        tables: [
          {
            baseId: `BASE_ID`,
            tableName: `Sheet1`,
            separateNodeType: false, // boolean, default is false, see the documentation on naming conflicts for more information
            separateMapType: false, // boolean, default is false, see the documentation on using markdown and attachments for more information
          },
        ],
      },
    },
```

## Files

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── .cache
    ├── .github
    ├── .storybook
    ├── __mocks__
    ├── cypress
    ├── node_modules
    ├── public
    ├── src
    ├── static
    ├── stories
    ├── .gitignore
    ├── .nvmrc
    ├── .prettierignore
    ├── .prettierrc
    ├── cypress.json
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── jest.config.js
    ├── loadershim.js
    ├── jest-preprocess.js
    ├── LICENSE
    ├── package.json
    ├── package-lock.json
    ├── postcss.config.js
    ├── setup-test-env.js
    ├── tsconfig.json
    ├── README.md

1. **`.cache`**: This directory is autogenerated. This directory is internal to Gatsby used for caching.

2. **`.github`**: This directory is used by [GitHub](https://github.com/). Currently, it has [Dependabot](.github/dependabot.yml) and [GitHub Actions](.github/workflows/ci.yml) files.

3. **`.storybook`**: This directory is used by [Storybook](https://storybook.js.org/) to store the configuration and setup as described [here](https://storybook.js.org/docs/configurations/overview/).

4. **`__mocks__`**: This directory is used by [Jest](https://jestjs.io/) to store various mocks as described [here](https://jestjs.io/docs/en/manual-mocks).

5. **`coverage`**: This directory is autogenerated. This directory is generated by [Jest](https://jestjs.io/) when running the tests and has test coverage reports.

6. **`cypress`**: This directory is used by [Cypress](https://www.cypress.io/) to store Cypress tests, fixtures, plugins and test artifacts (Cypress screenshots and videos) as described [here](https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests.html). The Cypress tests are located in `/cypress/e2e` directory.

7. **`node_modules`**: This directory is autogenerated when you run `npm run ci`. This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

8. **`public`**: This directory is autogenerated when you run `npm run build`. This directory contains all of your application code and assets which can be deployed to production.

9. **`src`**: This directory will contain the source code of your application.

10. **`static`**: This directory will contain various assets which will be added to `public/` directory automatically when build the project. More information can be found [here](https://www.gatsbyjs.org/docs/static-folder/).

11. **`stories`**: This directory will contain various [stories](https://storybook.js.org/docs/basics/writing-stories/) for your application used by [Storybook](https://storybook.js.org/) as well as used for `Automated Visual Testing`.

12. **`storybook-static`**: This directory is autogenerated when you run `npm run build-storybook`. This directory will contain [Storybook](https://storybook.js.org/) application shipped with various [stories](https://storybook.js.org/docs/basics/writing-stories/). The directory can be shared or deployed within the team.

13. **`.gitignore`**: This file tells [Git](https://git-scm.com/) which files it should not track / not maintain a version history for.

14. **`.nvmrc`**: This file is used by [nvm](https://github.com/nvm-sh/nvm) to use the correct Node.js version for this application.

15. **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

16. **`cypress.json`**: This is a configuration file for [Cypress](https://www.cypress.io/). More information can be found [here](https://docs.cypress.io/guides/references/configuration.html).

17. **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

18. **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you'd like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

19. **`jest.config.js`**: This is a configuration file for [Jest](https://jestjs.io/) and it is used when you run `npm run test` for `Unit Testing` and `Structural Testing`. More information can be found [here](https://www.gatsbyjs.org/docs/unit-testing/) and [here](https://jestjs.io/docs/en/configuration).

20. **`loadershim.js`**: This is a setup file for [Jest](https://jestjs.io/) and it is used to configure or set up the testing environment. More information can be found [here](https://www.gatsbyjs.com/docs/how-to/testing/unit-testing/).

21. **`jest-preprocess.js`**: This is a setup file for [Jest](https://jestjs.io/) that defines transformers. More information can be found [here](https://www.gatsbyjs.com/docs/how-to/testing/unit-testing/).

22. **`LICENSE`**: Gatsby is licensed under the MIT license.

23. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project's name, author, etc). This manifest is how npm knows which packages to install for your project.

24. **`package-lock.json`** (See `package.json` above, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won't change this file directly).**

25. **`README.md`**: A text file containing useful reference information about your project.
