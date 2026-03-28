import Phaser from 'phaser';

export const gameConfig: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#1a1a1a',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { x: 0, y: 0 }, // Top-Down braucht keine Gravitation
            debug: true // Hilft dir am Anfang, Boxen zu sehen
        }
    },
    scene: [] // Hier kommen später unsere Szenen rein
};