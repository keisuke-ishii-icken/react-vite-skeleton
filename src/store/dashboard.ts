import { rootState } from '@/store/index'

type dashboardState = {
  value1?: string;
  value2?: string;
}
const initialValue = {
  value1: '',
  value2: '',
}

const dashboardReducer = (
    state: dashboardState = initialValue,
    action: {
        type: string,
        payload: dashboardState
    },
): dashboardState => {
  switch (action.type) {
    case 'dashboard/updateValue':
      return {
        ...action.payload,
      }
    default:
      return state
  }
}

const selectDashboard = (state: rootState) => state.dashboard

export { dashboardReducer, selectDashboard }
export type { dashboardState }
