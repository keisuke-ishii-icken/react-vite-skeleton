import { rootState } from '@/store/index'

type settingState = {
  settingA: string;
  settingB: string;
}
const initialValue = {
  settingA: '',
  settingB: '',
}

const settingReducer = (
    state: settingState = initialValue,
    action: {
        type: string,
        payload: settingState
    },
): settingState => {
  switch (action.type) {
    case 'setting/updateSetting':
      return {
        ...action.payload,
      }
    default:
      return state
  }
}

const selectSetting = (state: rootState) => state.setting

export { settingReducer, selectSetting }
export type { settingState }
