
import { TwitterFollowCard } from "./twiterFollowCard"


const users = [
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: true
  },
  {
    userName: 'pheralb',
    name: 'Pablo H.',
    isFollowing: false
  },
  {
    userName: 'PacoHdezs',
    name: 'Paco Hdez',
    isFollowing: true
  },
  {
    userName: 'TMChein',
    name: 'Tomas',
    isFollowing: false
  },
  {
    userName: 'undefined',
    name: 'Indefinido Null',
    isFollowing: true
  },
  {
    userName: 'elon',
    name: 'Elon Musk',
    isFollowing: false
  },
  {
    userName: 'darius',
    name: 'Juan Bernardo Silva',
    isFollowing: false
  }

]


export function App (){
        const format = (userName: string): string => `@${userName}`
        
        
return (

    <section className="App">
        {
        users.map(user=>{
            const { userName ,  name  , isFollowing} = user
            return (
                <TwitterFollowCard
                userName={userName}
                key={userName}
                isFollow={isFollowing}
                formatUseName={format}
                >
                    {name}
                </TwitterFollowCard>
            )

        })
    }

    </section>

)}


