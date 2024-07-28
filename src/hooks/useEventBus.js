import { useCallback, useEffect } from 'react';

let subscribers = [];
export const emit = (event) => {
  if (!event || ['boolean', 'number', 'bigint'].includes(typeof event)) {
    console.log(
      'event name must be a non empty or object with {type: "EVENT_NAME", payload: {}}'
    );
    return;
  }

  const args = [];
  let { type } = event;
  if (typeof event === 'string') {
    type = event;
    args.push({ type });
  } else {
    args.push(event);
  }

  subscribers.forEach(([subscribedEvent, callback]) => {
    if (
      (typeof subscribedEvent === 'string' && subscribedEvent !== type) ||
      (Array.isArray(subscribedEvent) && !subscribedEvent.includes(type)) ||
      (subscribedEvent instanceof RegExp && !subscribedEvent.test(type)) ||
      (typeof subscribedEvent === 'funcion' && !subscribedEvent(...args))
    ) {
      return;
    } else {
      callback(...args);
    }
  });
};

const useEventBus = (eventType, callback, deps = []) => {
  const listen = useCallback((event, cb) => {
    subscribers = [...subscribers, [event, cb]];
    return () => {
      subscribers = subscribers.filter((event) => event[1] !== cb);
    };
  }, []);
  useEffect(() => listen(eventType, callback), deps);
  return emit;
};

export default useEventBus;
