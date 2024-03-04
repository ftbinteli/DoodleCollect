class GameScene extends Phaser.Scene {
    constructor() {
        super('GameScene');
    }

    preload() {
        this.load.image('background', 'assets/bg.jpg');
        this.load.image('player', 'assets/Doodler.png');
        this.load.image('bolo', 'assets/Cake.png');
        this.load.spritesheet('inimigo', 'assets/SimpleEnemies Bat_Idle Spritesheet.png', { frameWidth: 32, frameHeight: 32 });
    }

    create() {
        this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, 'background');
        this.alien = this.physics.add.sprite(this.cameras.main.width / 2, this.cameras.main.height / 2, 'player');
        this.alien.setCollideWorldBounds(true);
        this.alien.setScale(0.15);

        this.anims.create({
            key: 'voarInimigo',
            frames: this.anims.generateFrameNumbers('inimigo', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        this.inimigoTopo = this.physics.add.sprite(0, 230, 'inimigo').setVelocityX(800);
        this.inimigoBaixo = this.physics.add.sprite(0, this.cameras.main.height - 230, 'inimigo').setVelocityX(800);
        this.inimigoTopo.anims.play('voarInimigo', true);
        this.inimigoBaixo.anims.play('voarInimigo', true);

        this.inimigoTopo.setScale(2);
        this.inimigoBaixo.setScale(2);

        this.inimigoBaixo.setFlipX(true);

        this.inimigoTopo.setCollideWorldBounds(true).setBounce(1);
        this.inimigoBaixo.setCollideWorldBounds(true).setBounce(1);

        this.placar = this.add.text(this.cameras.main.width / 3, this.cameras.main.height - 80, 'SCORE: 0', { fontSize: '65px', fill: '#0FFFFF' });

        this.cursors = this.input.keyboard.createCursorKeys();

        this.input.keyboard.on('keydown-SPACE', () => {
            this.scene.start('WelcomeScene');
        });
    }

     update() {
        if (cursors.left.isDown) {
            alien.setVelocityX(-400);
            alien.setFlipX(true); // Inverte o sprite do jogador quando apertar a tecla para esquerda
        } else if (cursors.right.isDown) {
            alien.setVelocityX(400);
            alien.setFlipX(false); // Retorna o sprite do jogador ao normal quando apertar a tecla da direita
        } else {
            alien.setVelocityX(0);
        }

        if (cursors.up.isDown) {
            alien.setVelocityY(-400);
        } else if (cursors.down.isDown) {
            alien.setVelocityY(400);
        } else {
            alien.setVelocityY(0);
        }

        // Verifica se o inimigo do topo atingiu os limites do mundo e inverte o sprite
        if (inimigoTopo.body.velocity.x > 0 && inimigoTopo.x >= larguraJogo - inimigoTopo.width / 2) {
            inimigoTopo.setVelocityX(-800);
            inimigoTopo.setFlipX(true);
        } else if (inimigoTopo.body.velocity.x < 0 && inimigoTopo.x <= inimigoTopo.width / 2) {
            inimigoTopo.setVelocityX(800);
            inimigoTopo.setFlipX(false);
        }

        // Faz o mesmo com o inimigo de baixo
        if (inimigoBaixo.body.velocity.x > 0 && inimigoBaixo.x >= larguraJogo - inimigoBaixo.width / 2) {
            inimigoBaixo.setVelocityX(-800);
            inimigoBaixo.setFlipX(true);
        } else if (inimigoBaixo.body.velocity.x < 0 && inimigoBaixo.x <= inimigoBaixo.width / 2) {
            inimigoBaixo.setVelocityX(800);
            inimigoBaixo.setFlipX(false);
        }
        }

        // Função para alternar a posição do bolo
        function posicionarBolo() {
            // Alterna a posição do bolo
            if (estadoBolo === 'topo') {
                bolo = this.physics.add.sprite(larguraJogo / 2, 50, 'bolo');
                estadoBolo = 'baixo';
            } else {
                bolo = this.physics.add.sprite(larguraJogo / 2, alturaJogo - 50, 'bolo');
                estadoBolo = 'topo';
            }
            
        }

        function coletarBolo(alien, bolo) {

            bolo.disableBody(true, true); // Desabilita o bolo temporariamente
            pontuacao += 100; // Aumenta a pontuação
            placar.setText('SCORE: ' + pontuacao); // Atualiza o placar

            // Gera uma nova posição para o bolo
            var novaPosicaoX = Phaser.Math.Between(50, larguraJogo - 50);
            var novaPosicaoY = estadoBolo == 'topo' ? 50 : alturaJogo - 50;
            estadoBolo = estadoBolo == 'topo' ? 'baixo' : 'topo'; // Alterna a posição do bolo entre topo e baixo

            // Recria o bolo na nova posição
            bolo.enableBody(true, novaPosicaoX, novaPosicaoY, true, true);

        }

        function fimDeJogo(alien, inimigo) {
            this.physics.pause(); // Pausa a física do jogo para que os elementos parem de se mover
            alien.setTint(0xff0000); // Muda a cor do jogador para vermelho
            this.add.text(larguraJogo / 2, alturaJogo / 2, 'Game Over', { fontSize: '40px', fill: '#0xFFFFF' }).setOrigin(0.5);
            this.add.text(larguraJogo / 2, alturaJogo / 2 + 50, 'Pressione ESPAÇO para recomeçar', { fontSize: '40px', fill: '#0xFFFFF' }).setOrigin(0.5);
            gameOver = true; // Define o estado de Game Over
        }
