import './index.css'
import SideBarMain from './Components/SidebarMain';
import HomePage from './Components/HomePage';
function App() {

  return (
    <>
    <div className='flex w-full'>
      <SideBarMain />
      <HomePage/>
    </div>
    </>
  )
}

export default App
