import { useEffect, useRef } from 'react';
import Phaser from 'phaser';
import { gameConfig } from './gameConfig';

export const PhaserGame = () => {
    const gameRef = useRef<Phaser.Game | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current && !gameRef.current) {
            // Wir erstellen die Game-Instanz im Container
            gameRef.current = new Phaser.Game({
                ...gameConfig,
                parent: containerRef.current
            });
        }

        return () => {
            if (gameRef.current) {
                gameRef.current.destroy(true);
                gameRef.current = null;
            }
        };
    }, []);

    return <div ref={containerRef} id="game-container" />;
};