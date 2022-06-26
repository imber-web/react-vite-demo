import { Fragment, useEffect, useState } from 'react'

// 1.缺失依赖
// 2.数组或对象作为依赖,由于浅层对比的关系，比较的结果总是false，
// 无论是数组还是对象作为依赖，都会一次又一次的触发回调；导致出现无限循环
// 解决方案：
//  -- 1 数组作为对象可以通过「useRef」解决，更改引用本身不会触发组件重新渲染
//  -- 2 对象作为对象可以通过「useMemo」解决，只有在依赖关系发生变化时才会重新计算记忆化的值
//  -- 3 函数作为依赖项也是会导致无限循环的，这里不再贴代码；我们可以通过「useCallback」来解决；「useCallback」返回一个memoized版本的回调，只有在依赖关系改变时才会改变。
export default function infinite() {
  const [value, setValue] = useState('')
  const [count, setCount] = useState(0)
  useEffect(() => {
    setCount(count + 1)
  }, [value])
  return (
    <Fragment>
      <input
        type="text"
        value={value}
        onChange={({ target }) => {
          setValue(target.value)
        }}
      />
      <div>count is {count}</div>
    </Fragment>
  )
}
