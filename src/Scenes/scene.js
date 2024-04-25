class oneDim extends Phaser.Scene{
    constructor(){
        super("oneDimScene");
        this.my = {sprite: {},
            projectiles: []};

        this.startX = 400;
        this.permanentY = 450;
    }

    preload(){
        this.load.setPath("./assets/");
        //player
        this.load.image("Player","player_24.png");
        //projectile
        this.load.image("Ball","environment_12.png");
    }

    create(){
        //console.log("bluh");
        let my = this.my;

        my.sprite.player = this.add.sprite(this.startX,this.permanentY,"Player");
        my.sprite.projectile = this.add.sprite(-50,this.permanentY,"Ball");//spawns offscreen
        //my.sprite.projectiles = [];

        this.Akey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.Dkey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.Spacekey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update(){
        let my = this.my;

        if(this.Akey.isDown){
            my.sprite.player.x -= 15;
        }
        if(this.Dkey.isDown){
            my.sprite.player.x += 15;
        }
        if(Phaser.Input.Keyboard.JustDown(this.Spacekey)){ //(this.Spacekey.isDown){
            //console.log("bluh");
            //my.sprite.projectiles.push(this.add.sprite(my.sprite.player.x,this.permanentY,"Ball"));
            let object = this.add.sprite(my.sprite.player.x,this.permanentY,"Ball");
            my.projectiles.push(object);
        }
        for(let i = 0; i <my.projectiles.length; i++){
            my.projectiles[i].y -= 10;
            if(my.projectiles[i].y < -20){
                my.projectiles.splice(i,1);
                i -= 1;
                //console.log(my.projectiles.length);
            }
        }
    }
}