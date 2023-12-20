# Plugins API

Plugins API for easier DevTools integrations.

## Installation

::: code-group

```sh [npm]
$ npm add -D @vue/devtools-next-api
```

```sh [pnpm]
$ pnpm add -D @vue/devtools-next-api
```

```sh [yarn]
$ yarn add -D @vue/devtools-next-api
```

```sh [bun]
$ bun add -D @vue/devtools-next-api
```

:::

## `addCustomTab`

```ts
import { devtools } from '@vue/devtools-next-api'

addCustomTab({
  // unique identifier
  name: 'vue-use',
  // title to display in the tab
  title: 'VueUse',
  // any icon from Iconify, or a URL to an image
  icon: 'i-logos-vueuse',
  // iframe view
  view: {
    type: 'iframe',
    src: 'https://vueuse.org/',
  },
  category: 'advanced',
})
```