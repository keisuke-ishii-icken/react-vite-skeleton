import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import '@/view/App.css'
import { selectDashboard } from '@/store/dashboard'
import store from '@/store'

function Dashboard() {
  const dashboard = useSelector(selectDashboard)
  const [item, setItem] = useState(dashboard)
  const items =Object.entries(dashboard).map(([k, v], i) => {
    // TODO key variation
    const val = item[k as 'value1' | 'value2']
    const payload = { ...item }
    return <div key={i}>{k}:
      <input type="text"
        value={val}
        onChange={(e) => {
          payload[k as 'value1' | 'value2'] = e.target.value
          setItem(payload)
          store.dispatch({ type: 'dashboard/updateValue', payload: payload })
        }} />
      <span>{dashboard[k as 'value1' | 'value2']}</span>
    </div>
  })

  return (
    <div >
      dashboard
      <div>{items}</div>

    </div>
  )
}

export default Dashboard
