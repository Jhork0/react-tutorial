import { useState } from "react"

interface twitterFollowCardI {
  children: React.ReactNode
  userName: string
  isFollow: boolean
  formatUseName: (hola: string) => string
}


export function TwitterFollowCard ({ userName , children , isFollow: initialIsFollow, formatUseName } : twitterFollowCardI ){
  
  const [isFollowing, setIsFollowing] = useState(initialIsFollow)

  const linkImagen = `https://unavatar.io/${userName}`
  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing ? "tw-followCard-button is-following" : "tw-followCard-button"

  const handleClick = () =>{
    setIsFollowing(!isFollowing)
  }

return (
<article className="tw-followCard">
    <header className="tw-followCard-header">
        <img alt={`Avatar de ${userName}`} className="tw-followCard-avatar"  src={linkImagen}></img>
        <div className="tw-followCard-info">
            <strong>@{children}</strong>
            <br></br>
            <span className="tw-followCard-infoUserName">{formatUseName(userName)}</span>
        </div>
    </header>
   <aside>
     <button className={buttonClassName} onClick={handleClick}>
                <span className="tw-followCard-text">{text}</span>
                <span className="tw-followCard-stopFollow">Dejar de seguir</span>
    </button>
   </aside>
</article>
)}
