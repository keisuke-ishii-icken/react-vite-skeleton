import { combineReducers, createStore } from 'redux'

import { dashboardReducer, dashboardState } from '@/store/dashboard'
import { settingReducer, settingState } from '@/store/setting'

const rootReducer = combineReducers({
  dashboard: dashboardReducer,
  setting: settingReducer,
})

const store = createStore(rootReducer)

type rootState = {
  dashboard: dashboardState
  setting: settingState
}
export default store
export type { rootState }
