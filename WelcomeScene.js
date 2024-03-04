class WelcomeScene extends Phaser.Scene {
    constructor() {
        super({ key: 'WelcomeScene' });
    }

    preload() {
        this.load.image('background', 'assets/bg.jpg');
    }

    create() {

        // Cria os elementos da tela inicial
        this.add.image(larguraJogo / 2, alturaJogo / 2, 'background');
        this.add.text(larguraJogo / 2, alturaJogo / 2, 'Use as setas do teclado para mover o personagem', { fontSize: '32px', fill: '#FFF' }).setOrigin(0.5);
        this.add.text(larguraJogo / 2, alturaJogo / 2 + 50, 'Pressione ESPAÇO para iniciar', { fontSize: '32px', fill: '#FFF' }).setOrigin(0.5);

        // Evento para iniciar o jogo
        this.input.keyboard.once('keydown-SPACE', () => {
            this.scene.start('GameScene');
        });
    }
}
