import React, { useEffect, useState } from 'react';
import { connectWebSocket, subscribe } from '@DataLib/websocket';

interface PlayerStat {
    id: string;
    name: string;
    stats: { [key: string]: number };
}

const StatsGrid: React.FC = () => {
    const [players, setPlayers] = useState<PlayerStat[]>([]);

    useEffect(() => {
        const url = 'ws://your-websocket-url'; // Replace with your WebSocket URL
        connectWebSocket(url);

        const handleMessage = (message: any) => {
            const { topicId, data } = message;
            const [characterId, statId] = topicId.split('-');

            setPlayers(prevPlayers => {
                return prevPlayers.map(player => {
                    if (player.id === characterId) {
                        return {
                            ...player,
                            stats: {
                                ...player.stats,
                                [statId]: data // Update the specific stat for the character
                            }
                        };
                    }
                    return player;
                });
            });
        };

        subscribe('stats-update', handleMessage); // Replace 'stats-update' with the actual topic

        return () => {
            // Cleanup if necessary
        };
    }, []);

    return (
        <div>
            <h1>Player Stats</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        {players.length > 0 && Object.keys(players[0].stats).map(stat => (
                            <th key={stat}>{stat}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {players.map(player => (
                        <tr key={player.id}>
                            <td>{player.name}</td>
                            {Object.values(player.stats).map((value, index) => (
                                <td key={index}>{value}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StatsGrid;