import { memo, useState } from 'react'
import './style.css'
import { setTheme } from '../themeUtil.js'

const Theme: React.FC = () => {
  const [value, setValue] = useState(false)
  const toggleTheme = () => {
    setValue(!value)
    setTheme(value)
  }
  return (
    <div className="theme" onClick={toggleTheme}>
      主题切换
    </div>
  )
}

export default memo(Theme)
