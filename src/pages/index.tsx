import { NotificationContainer } from 'react-notifications'
import 'react-notifications/lib/notifications.css'

import Pokedex from 'components/Pokedex'

export default function Home() {
  return (
    <>
      <Pokedex />
      <NotificationContainer />
    </>
  )
}
