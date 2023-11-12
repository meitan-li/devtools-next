import { VIEW_MODE_STORAGE_KEY, isBrowser, isInChromePanel, target } from '@vue-devtools-next/shared'

import { initDevTools as _initDevTools } from './main'

export function initDevTools(shell) {
  if (!isBrowser)
    return
  if (isInChromePanel) {
    target.chrome.storage.local.get(VIEW_MODE_STORAGE_KEY).then((storage) => {
      const showViewModeSwitchPage = () => {
        _initDevTools(shell, {
          viewMode: 'overlay',
        })
      }
      if (storage[VIEW_MODE_STORAGE_KEY] === 'panel')
        _initDevTools(shell)

      else
        showViewModeSwitchPage()
    })
  }
  else {
    _initDevTools(shell)
  }
}
