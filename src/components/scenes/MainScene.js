import * as Dat from 'dat.gui';
import { Fog, Scene, Color, Group, PlaneGeometry, MeshLambertMaterial, MeshPhongMaterial, Mesh } from 'three';
import { TV, Land } from 'objects';
import { BasicLights } from 'lights';
// import Images from 'images';

class MainScene extends Scene {
    constructor(images) {
        // Call parent Scene() constructor
        super();

        // Init state
        this.state = {
            // gui: new Dat.GUI(), // Create GUI for scene
            rotationSpeed: 0,
            updateList: [],
        };


        // Set background to a nice color
        // this.background = new Color('pink');
        // this.background = new Color(0xe1adad);
        this.background = new Color(0xffffff);
        this.background = new Color('aliceblue');

        this.fog = new Fog(new Color('aliceblue'), 10, 50);


        const mesh = new Mesh(new PlaneGeometry(2000, 2000), new MeshPhongMaterial({ color: new Color('pink'), depthWrite: false }));
        mesh.rotation.x = -Math.PI / 2;
        mesh.position.y = -2;
        mesh.receiveShadow = true;
        this.add(mesh);

        // let imageList = this.getImages();

        // Add meshes to scene
        // const land = new Land();

        // const groundGeo = new PlaneGeometry(10000, 10000);
        // const groundMat = new MeshLambertMaterial({ color: 0xffffff });
        // groundMat.color.setHSL(1, 1, 1);

        // const ground = new Mesh(groundGeo, groundMat);
        // ground.position.y = -2;
        // ground.rotation.x = -Math.PI / 2;
        // ground.receiveShadow = true;
        // this.add(ground);

        let tv_list = new Group();

        // tl ltr
        // tv_list.add(new TV(this, img, -1.5, 1.0, 0));
        // tv_list.add(new TV(this, img, 0, 1.0, 0));
        // tv_list.add(new TV(this, img, 1.5, 1.0, 0));

        // tv_list.add(new TV(this, img, -1.5, -0.5, 0));
        // tv_list.add(new TV(this, img, 0, -0.5, 0));
        // tv_list.add(new TV(this, img, 1.5, -0.5, 0));

        // tv_list.add(new TV(this, img, -1.5, -2.0, 0));
        // tv_list.add(new TV(this, img, 0, -2.0, 0));
        // tv_list.add(new TV(this, img, 1.5, -2.0, 0));

        const top = 0.5;
        const bot = -1.5;
        const left = -1;
        const right = 1;
        // tv_list.add(new TV(this, images[0], left, top, 0));

        // tv_list.add(new TV(this, images[1], right, top, 0));

        // tv_list.add(new TV(this, images[2], left, bot, 0));
        // tv_list.add(new TV(this, images[3], right, bot, 0));
        tv_list.add(new TV(this, images, 0, -1.7, 0));

        const lights = new BasicLights();
        this.add(tv_list, lights);

        // Populate GUI
        // this.state.gui.add(this.state, 'rotationSpeed', -5, 5);
    }


    addToUpdateList(object) {
        this.state.updateList.push(object);
    }

    update(timeStamp) {
        const { rotationSpeed, updateList } = this.state;
        this.rotation.y = (rotationSpeed * timeStamp) / 10000;

        // Call update for each object in the updateList
        for (const obj of updateList) {
            obj.update(timeStamp);
        }
    }
}

export default MainScene;