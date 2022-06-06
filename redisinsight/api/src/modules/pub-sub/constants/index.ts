export enum PubSubClientEvents {
  Subscribe = 'subscribe',
  Unsubscribe = 'unsubscribe',
}

export enum SubscriptionType {
  Subscribe = 's',
  PSubscribe = 'p',
  SSubscribe = 'ss',
}

export enum RedisClientStatus {
  Connecting = 'connectiong',
  Connected = 'connected',
  Error = 'error',
  End = 'end',
}

export enum RedisClientEvents {
  Connected = 'connected',
  ConnectionError = 'connection_error',
  Message = 'message',
}
