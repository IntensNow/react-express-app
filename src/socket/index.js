import io from 'socket.io-client';

const socket = io('/api/chat');

export default socket;