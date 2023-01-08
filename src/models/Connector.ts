
export interface Connector {
  username: string
  status: StatusOfConnector
}

export enum StatusOfConnector {
  UNLINK = 'Unlink',
  LINK = 'Link',
  PAUSED = 'Paused',
  DELETED = 'Deleted'
}

export enum TypeOfConnector {
  INSTAGRAM = 'Instagram',
  TWITTER = 'Twitter'
}

export const ConnectionDotColor: Record<StatusOfConnector, string> = {
  Link: 'bg-green-500',
  Unlink: 'bg-red-500',
  Paused: 'bg-yellow-500',
  Deleted: 'bg-gray-500'
}

export const ConnectionStatusColor: Record<StatusOfConnector, string> = {
  Link: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
  Unlink: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
  Paused: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
  Deleted: 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300'
}
