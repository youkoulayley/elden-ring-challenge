# Elden Ring Challenge Randomizer

![Build Status](https://youkoulayley.semaphoreci.com/badges/elden-ring-challenge/branches/main.svg?key=943bdf94-e4e4-42d9-b4c1-d5ccc45667eb)
![Vercel](https://vercelbadge.vercel.app/api/youkoulayley/elden-ring-challenge)

Elden Ring is a wonderful game, and as I wanted to play more and with some challenge
I started to write a little app. Since I'm pretty happy with it, I'm sharing it
with the rest of the world.

Feel Free to contribute, even if it's just a new constraint to add, it's still useful.

## Prerequisites

For this project, you need:

* nodejs
* yarn
* eslint

## Development

If you want to run the project:

```
yarn start
```

If you want to run the tests and the linter:

```
yarn test
yarn lint
```

If you want to build the project:

```
yarn build
```

## TODO

- [x] Generate seed for each challenge
- [x] Store last challenge in localStorage
- [x] Allow multiple challenges save
- [x] Manage styling
- [x] Manage states (doesn't need more than `useState` for now)
- [ ] Version rules and therefore challenges (that way adding rules doesn't break existing saved challenges)
- [ ] Rework rules behavior
- [ ] Adding more constraints
- [ ] Share challenge with picture
- [ ] Propose weapons and not weapons type (maybe with specific ash of war if regular weapon)
- [ ] Add tests

If you like this project and think it deserves a little something, you can buy me a coffee here:
[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/bmayellebuR)
