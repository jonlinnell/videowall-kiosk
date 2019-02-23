# videowall-kiosk
Display software for the portrait kiosk screen in reception.

## Usage
Content for the inward-facing screen is accessed through the `/inward` route. Content for the outward-facing screen is accessed through the `/outward` route.

## Run
To run a local build:

```console
yarn run
```

## Build
To create an optimised build in `dist/` :

```console
yarn build
```

## Lint
This project includes a husky/git pre-commit hook to run `prettier --write` and `eslint --fix` on staged files.

To manually lint:

```console
yarn lint
```
