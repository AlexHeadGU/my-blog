import avatar from '../../../../assets/images/avatar.png'
import './User.css'

export const User = () => {
  return (
    <div className="user">
      <div className="avatar">
        <img src={avatar} alt="avatar"></img>
      </div>
      <h3>James</h3>
    </div>
  )
}
