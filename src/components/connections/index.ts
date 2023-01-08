import { ConnectionDotColor, ConnectionStatusColor, Connector, StatusOfConnector, TypeOfConnector } from '../../models/Connector'

import InstagramConnection from './InstagramConnection.vue'
import TwitterConnection from './TwitterConnection.vue'

const Connectors: Record<TypeOfConnector, Connector> = {
  Instagram: {
    username: 'aayush_n__',
    status: StatusOfConnector.LINK
  },
  Twitter: {
    username: 'aayushbro',
    status: StatusOfConnector.UNLINK
  }
}

export const getConnectionDotColor = (status: StatusOfConnector): string => {
  return ConnectionDotColor[status]
}

export const getConnectionStatusColor = (status: StatusOfConnector): string => {
  return ConnectionStatusColor[status]
}

export {
  InstagramConnection,
  TwitterConnection,
  Connectors
}
