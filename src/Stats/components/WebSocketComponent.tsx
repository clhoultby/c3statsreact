import React, { useEffect, useState } from 'react';
import { connectWebSocket, subscribe } from '@DataLib/websocket';

const WebSocketComponent: React.FC = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const url = 'ws://your-websocket-url'; // Replace with your WebSocket URL
        connectWebSocket(url);

        const handleMessage = (message: any) => {
            setData(message);
        };

        subscribe('your-topic', handleMessage); // Replace 'your-topic' with the actual topic

        return () => {
            // Cleanup if necessary
        };
    }, []);

    return (
        <div>
            <h1>WebSocket Data</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export default WebSocketComponent;