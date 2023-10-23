import type { InspectorState } from '@vue-devtools-next/schema'
import { parse } from 'vue-devtools-kit/shared'
import { BridgeEvents } from './types'
import type { BridgeRpcEventPayload } from './core'
import { Bridge, bridgeRpcCore, bridgeRpcEvents } from './core'

export function registerBridgeRpc() {

}

export class BridgeRpc {
  static on = {
    inspectorTreeUpdated<T = { inspectorId: string; data: { id: string;label: string }[] } >(cb: (payload: T) => void) {
      Bridge.value.on(BridgeEvents.SEND_INSPECTOR_TREE, (payload) => {
        cb(parse(payload))
      })
    },
    inspectorStateUpdated<T = { inspectorId: string; state: Record<string, InspectorState[]> }>(cb: (payload: T) => void) {
      Bridge.value.on(BridgeEvents.SEND_INSPECTOR_STATE, (payload) => {
        cb(parse(payload))
      })
    },
    devtoolsStateUpdated(cb) {
      Bridge.value.on(BridgeEvents.DEVTOOLS_STATE_UPDATED, (payload) => {
        cb(parse(payload))
      })
    },
  }

  static async getInspectorTree<R extends { data: unknown[] } = { data: { id: string;label: string }[] }>(payload: BridgeRpcEventPayload['inspector-tree']) {
    return bridgeRpcCore.emit<R>(bridgeRpcEvents.inspectorTree, payload)
  }

  static async getInspectorState<R extends { data: unknown } = { data: { state: Record<string, InspectorState[]> } }>(payload: BridgeRpcEventPayload['inspector-state']) {
    return bridgeRpcCore.emit<R>(bridgeRpcEvents.inspectorState, payload)
  }

  static async getDevToolsState() {
    return bridgeRpcCore.emit<{ data: { connected: boolean;vueVersion: string } }>(bridgeRpcEvents.state)
  }
}