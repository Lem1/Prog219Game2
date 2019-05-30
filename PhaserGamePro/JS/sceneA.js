class sceneA extends Phaser.Scene {
    constructor() {
        super({ key: 'sceneA' });
    }

    create() {
        var graphics;
        var rect;
        this.add.text(60, 140, 'Are you smarter than 5th grader?', { font: '32px Courier', color: '000000' });
        this.add.graphics({lineStyle:{with:5, color: FFE5CC}, fillStyle:{color:FFE5CC}});
        this.rect=new phaser.Geom.Rectangle(60,160,100,100);
        this.graphics.fillStyle(rect);
    }
}

