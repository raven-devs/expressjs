export enum Signal {
  INTERRUPT = 'SIGINT', // initiated by a user action (control + c)
  TERMINATE = 'SIGTERM', // initiated programmatically
  USER1 = 'SIGUSR1', // application specific
  USER2 = 'SIGUSR2', // application specific (nodemon)
}
