import { ReactComponent as ArrowLeftIcon} from '../../../../assets/images/left-arrow.svg';
import './LogOut.css'

export const LogOut = ({setIsLoggedIn}) => {

  const logOut = () => {
    setIsLoggedIn(false)
  }

  return (
    <section className='sidebarBottom'>
      <button onClick={logOut}>
        <ArrowLeftIcon  height={25} width={25}/>
        <span>Выход</span>
      </button>
    </section>

  )
}