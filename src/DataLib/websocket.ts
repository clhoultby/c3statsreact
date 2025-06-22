let socket: WebSocket | null = null;
const subscribers: { [topic: string]: Function[] } = {};

export const sendMessageToServer = (topicId: string, newValue: string) => {
    if (socket) {
        socket.send(JSON.stringify({ topic: topicId, data: newValue }));
    } else {
        console.error('WebSocket is not connected.');
    }
};

export const connectWebSocket = (url: string) => {
    socket = new WebSocket(url);

    socket.onopen = () => {
        console.log('WebSocket connection established');
    };

    socket.onmessage = (event) => {
        const message = JSON.parse(event.data);
        handleMessage(message);
    };

    socket.onclose = () => {
        console.log('WebSocket connection closed');
    };

    socket.onerror = (error) => {
        console.error('WebSocket error:', error);
    };
};

export const subscribe = (topic: string, callback: Function) => {
    if (!subscribers[topic]) {
        subscribers[topic] = [];
    }
    subscribers[topic].push(callback);
};

export const publish = (topic: string, data: any) => {
    if (socket) {
        socket.send(JSON.stringify({ topic, data }));
    }
};

const handleMessage = (message: any) => {
    const { topic, data } = message;
    if (subscribers[topic]) {
        subscribers[topic].forEach(callback => callback(data));
    }
};