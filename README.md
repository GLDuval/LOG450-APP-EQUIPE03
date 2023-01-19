## Getting Started

Install yarn

```bash
npm install -g yarn
```

Install dependencies

```bash
yarn
```

Run the app

```bash
yarn start
```

## Code formatting

This project uses [prettier](https://prettier.io/) and ESLint to format code. Install the prettier and ESLint extensions for your editor.

To automatically format the code every time you save, add the following to your `settings.json` in the `.vscode` folder:

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```
