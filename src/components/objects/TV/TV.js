import { CubeRefractionMapping, Group } from 'three';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { TWEEN } from 'three/examples/jsm/libs/tween.module.min.js';
import MODEL from './tv.obj';
import MAIN_NORMAL from './tv_textures/main_normal.png';
import MAIN_BASE from './tv_textures/main_base.png';
import MAIN_ROUGHNESS from './tv_textures/main_roughness.png';
import MAIN_AO from './tv_textures/main_ao.png';
import MAIN_METALLIC from './tv_textures/main_metallic.png';

import SCREEN_NORMAL from './tv_textures/screen_normal.png';
import SCREEN_BASE from './tv_textures/screen_base.png';
import SCREEN_ROUGHNESS from './tv_textures/screen_roughness.png';
import SCREEN_AO from './tv_textures/screen_ao.png';
import SCREEN_METALLIC from './tv_textures/screen_metallic.png';

import TEST_IMG from './img/1.jpg';

import POSX from "./textures/Skybox/posx.jpg";
import NEGX from "./textures/Skybox/negx.jpg";
import POSY from "./textures/Skybox/posy.jpg";
import NEGY from "./textures/Skybox/negy.jpg";
import POSZ from "./textures/Skybox/posz.jpg";
import NEGZ from "./textures/Skybox/negz.jpg";

class TV extends Group {
    constructor(parent, img, x, y, z) {
        // Call parent Group() constructor
        super();

        // Init state
        this.state = {
            // gui: parent.state.gui,
            bob: true,
            spin: this.spin.bind(this),
            twirl: 0,
        };

        this.randomness = Math.random() - 0.5;

        let textureLoader = new THREE.TextureLoader();
        // Load object
        const objLoader = new OBJLoader();
        var mesh0, mesh1, mesh2;
        const main_base = textureLoader.load(MAIN_BASE);
        const main_normal = textureLoader.load(MAIN_NORMAL);
        const main_roughness = textureLoader.load(MAIN_ROUGHNESS);
        const main_ao = textureLoader.load(MAIN_AO);
        const main_metallic = textureLoader.load(MAIN_METALLIC);

        const screen_base = textureLoader.load(SCREEN_BASE);
        const screen_normal = textureLoader.load(SCREEN_NORMAL);
        const screen_roughness = textureLoader.load(SCREEN_ROUGHNESS);
        const screen_ao = textureLoader.load(SCREEN_AO);
        const screen_metallic = textureLoader.load(SCREEN_METALLIC);

        console.log(img)
        const test_img = textureLoader.load(img);

        const base = [main_base, screen_base];


        objLoader.load(MODEL, obj => {
            var child0 = obj.children[0];
            var child1 = obj.children[1];
            var child2 = obj.children[2];

            var envMap = new THREE.CubeTextureLoader()
                .load([
                    POSX, NEGX,
                    POSY, NEGY,
                    POSZ, NEGZ
                ]);


            var material = new THREE.MeshPhongMaterial({
                color: 0xff0000,
                // envMap: texture/\Cube, 
                // envMap: parent.background,
                // refractionRatio: 0.5,
                specular: 0xffffff,
                shininess: 10
            });
            let main_material = new THREE.MeshStandardMaterial({
                map: main_base,
                normalMap: main_normal,
                roughnessMap: main_roughness,
                roughness: 1,
                // envMap: envMap,
                aoMap: main_ao
                    // map: base,
                    // normalMap: screen_normal,
                    // roughnessMap: screen_roughness,
                    // roughness: 0.5,
                    // aoMap: screen_ao
            });
            // main_material = material = new THREE.MeshBasicMaterial({ color: 0xffffff, envMap: envMap });
            main_material = new THREE.MeshPhongMaterial({
                // color: new THREE.Color('pink'),
                // emissive: new THREE.Color('cornflowerblue'),
                color: 0xe1adad,
                emissive: 0xcb8b8b,
                specular: 0xffffff,
                shininess: 100,
                // wireframe: true,
                // envMaps: CubeRefractionMapping,
                reflectivity: 1

            })

            main_material = new THREE.MeshStandardMaterial({
                color: 0xffa8b5,
                transmission: 0.25,
                opacity: 0.75,
                metalness: 0.25,
                roughness: 0,
                clearcoat: 1,
                envMap: envMap,
                reflectivity: 1

            })

            let screen_material = new THREE.MeshStandardMaterial({
                map: test_img,
                // normalMap: screen_normal,
                // roughnessMap: screen_roughness,
                // roughness: 1,
                // aoMap: screen_ao,
                // metalness: 0
            })
            const mats = [main_material, screen_material];
            mesh0 = new THREE.Mesh(child0.geometry);
            mesh0.scale.multiplyScalar(6);
            mesh0.rotation.set(1 * Math.PI / 16, 1 * Math.PI / 8, 0);
            // mesh0.rotation.set(0, 0, 0);
            mesh0.material = mats;

            // mesh1 = new THREE.Mesh(child1.geometry);
            // mesh1.scale.multiplyScalar(2);
            // mesh1.rotation.set(0, Math.PI/2, 0);
            // mesh1.material = material;


            // let textureLoader = new THREE.TextureLoader();
            // textureLoader.load(texture, function(tx) {
            //     tx.wrapS = THREE.RepeatWrapping;
            //     tx.wrapT = THREE.RepeatWrapping;
            //     tx.offset.set(0, -0.3);
            // 	tx.repeat.set(3,3);
            //     tx.flipY = false;
            // 	let material = new THREE.MeshPhongMaterial({
            // 		map: tx,
            // 		wireframe: false,
            // 		specular: 0xffffff,
            // 		shininess: 10,
            // 	});
            //     mesh.material = material;
            // 	// obj.children[0].material = stripeMaterial;
            // })

            var pivot = new THREE.Group();
            pivot.position.set(x, y, z);
            mesh0.position.set(x, y, z)

            this.add(pivot);
            this.add(mesh0);

            this.pivot = pivot;

            this.mesh = mesh0;
            this.pivot.add(this.mesh);
        });

        // Add self to parent's update list
        parent.addToUpdateList(this);

        // Populate GUI
        // this.state.gui.add(this.state, 'bob');
        // this.state.gui.add(this.state, 'spin');
    }

    spin() {
        // Add a simple twirl
        this.state.twirl += 6 * Math.PI;

        // Use timing library for more precice "bounce" animation
        // TweenJS guide: http://learningthreejs.com/blog/2011/08/17/tweenjs-for-smooth-animation/
        // Possible easings: http://sole.github.io/tween.js/examples/03_graphs.html
        const jumpUp = new TWEEN.Tween(this.position)
            .to({ y: this.position.y + 1 }, 300)
            .easing(TWEEN.Easing.Quadratic.Out);
        const fallDown = new TWEEN.Tween(this.position)
            .to({ y: 0 }, 300)
            .easing(TWEEN.Easing.Quadratic.In);

        // Fall down after jumping up
        jumpUp.onComplete(() => fallDown.start());

        // Start animation
        jumpUp.start();
    }

    update(timeStamp) {
        if (this.state.bob) {
            // Bob back and forth
            this.rotation.z = 0.01 * Math.sin(timeStamp / 300);
        }
        if (this.state.twirl > 0) {
            // Lazy implementation of twirl
            this.state.twirl -= Math.PI / 8;
            this.rotation.y += Math.PI / 8;
        }

        // Advance tween animations, if any exist
        TWEEN.update();
    }
}

export default TV;