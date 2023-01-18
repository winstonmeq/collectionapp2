import { useEffect } from 'react';

export default function MyComponent() {
  useEffect(() => {
    const ws = new WebSocket('ws://192.168.0.8:3000/api/webshocket/webs');
    ws.onmessage = (event) => {
      console.log(event.data);
    };
    return () => {
      ws.close();
    };
  }, []);

  return <div>Connecting to websocket...</div>;
}