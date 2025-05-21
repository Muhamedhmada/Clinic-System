import {create} from 'zustand'

const darkModeSlice = create((set)=>{
  // const [darkMode] = useState(localStorage.getItem("theme"))

  const darkMode = localStorage.getItem("theme")
  document.body.className = darkMode;


  return{
      theme:darkMode?darkMode:"light",
      changeMode:()=>{
        set((state)=>{
         const newTheme = state.theme ==="light"?"dark":"light";
         localStorage.setItem("theme",newTheme)
         document.body.className = newTheme;
         return{theme:newTheme}
      })
      }
  }
})
export default darkModeSlice