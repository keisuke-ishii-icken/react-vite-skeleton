import { useState } from 'react'
import { useSelector } from 'react-redux'

import store from '@/store'
import { selectSetting } from '@/store/setting'
import '@/view/App.css'

function Setting() {
  const setting = useSelector(selectSetting)
  const [item, setItem] = useState(setting)
  const items =Object.entries(setting).map(([k, v], i) => {
    // TODO key variation
    const val = item[k as 'settingA' | 'settingB']
    const payload = { ...item }
    return <div key={i}>{k}:
      <input type="text"
        value={val}
        onChange={(e) => {
          payload[k as 'settingA' | 'settingB'] = e.target.value
          setItem(payload)
          store.dispatch({ type: 'setting/updateSetting', payload: payload })
        }} />
      <span>{setting[k as 'settingA' | 'settingB']}</span>
    </div>
  })

  return (
    <div >
            dashboard
      <div>{items}</div>

    </div>
  )
}

export default Setting
