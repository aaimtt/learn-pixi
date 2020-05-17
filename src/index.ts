import * as PIXI from 'pixi.js';
import images from 'images/*';

const Application = PIXI.Application,
    Sprite = PIXI.Sprite,
    loader = PIXI.loader,
    resources = PIXI.loader.resources;

const imageCat = images['cat.png'];

const app = new Application({
    width: 256,
    height: 256,
    antialias: true,
    transparent: false,
    resolution: 1,
});

document.body.appendChild(app.view);

loader.add(imageCat).load(setup);

function setup() {
    const cat = new Sprite(resources[imageCat].texture);
    cat.position.set(50, 50);
    cat.width = 100;
    cat.height = 100;
    cat.scale.set(1, 2);
    cat.rotation = 1;
    app.stage.addChild(cat);
}
