const theme1 = 'skyblue'
const theme2 = 'pink'

// 获取对应的主题色值
export const getThemeMap = (istheme1: boolean) => {
  return {
    'theme-d1': istheme1 ? theme1 : theme2,
    'theme-d2': istheme1 ? theme1 : theme2
  }
}

// 设置主题色值
export const setTheme = (istheme1 = true) => {
  const themeMap: any = getThemeMap(istheme1)
  const body = document.body
  /* 实现方式一 */
  Object.keys(themeMap).forEach((key) => {
    console.log(key)
    body.style.setProperty(`--${key}`, themeMap[key])
  })

  /* 实现方式二 */
  // body.style.setProperty('data-theme', istheme1 ? 'light' : 'dark')
}
