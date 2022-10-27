import { Group, DirectionalLight, SpotLight, AmbientLight, PointLight, HemisphereLight, Color, HemisphereLightHelper, DirectionalLightHelper } from 'three';

class BasicLights extends Group {
    constructor(...args) {
        // Invoke parent Group() constructor with our args
        super(...args);

        // // color intensity distance angle penumbra decay
        // const dir = new SpotLight(0xffffff, 1.0, 7, 0.8, 1, 1);

        // // illuminates everything equally
        // // const ambi = new AmbientLight(0xfeffa8, 0.5);
        // const ambi = new AmbientLight(0x000000, 0.5);

        // // sky ground intensity
        // // const hemi = new HemisphereLight(new Color('cornflowerblue'), new Color('cornflowerblue'), 1.0);
        // // const hemi = new HemisphereLight(0xffffff, 0xffffff, 0.5);

        // // x and z inverted
        // dir.position.set(4, 4, 0);
        // dir.target.position.set(0, 0, 0);

        // this.add(dir, ambi);



        // const light1 = new PointLight(0xffffff, 1, 0);
        // light1.position.set(0, 200, 0);
        // this.add(light1);

        // const light2 = new PointLight(0xffffff, 0.5, 0);
        // light2.position.set(100, 200, 100);
        // this.add(light2);

        // const light3 = new PointLight(0xffffff, 1, 0);
        // light3.position.set(-100, -200, -100);
        // this.add(light3);
        // const light = new HemisphereLight(0x000000, 0xff0000, 10);
        // this.add(light);

        /////

        // const ambientLight = new AmbientLight(0x000000);
        // this.add(ambientLight);

        // const light4 = new PointLight(0xffffff, 1.2, 0);
        // light4.position.set(100, 0, 100);
        // this.add(light4);

        // const hemiLight = new HemisphereLight(0xffffff, 0xffffff, 0.6);
        // hemiLight.color.setHSL(0.6, 1, 0.6);
        // hemiLight.color.setColorName('pink');
        // hemiLight.groundColor.setHSL(0.095, 1, 0.75);
        // hemiLight.groundColor.setColorName('pink');
        // hemiLight.position.set(0, 10, 0);
        // this.add(hemiLight);

        // const hemiLightHelper = new HemisphereLightHelper(hemiLight, 10);
        // this.add(hemiLightHelper);

        //

        // const dirLight = new DirectionalLight(0xffffff, 1);
        // dirLight.color.setHSL(0.1, 1, 0.95);
        // dirLight.color.setColorName('white');
        // dirLight.position.set(1, 0, 1);
        // dirLight.position.multiplyScalar(30);
        // this.add(dirLight);

        // dirLight.castShadow = true;

        // dirLight.shadow.mapSize.width = 2048;
        // dirLight.shadow.mapSize.height = 2048;

        // const d = 50;

        // dirLight.shadow.camera.left = -d;
        // dirLight.shadow.camera.right = d;
        // dirLight.shadow.camera.top = d;
        // dirLight.shadow.camera.bottom = -d;

        // dirLight.shadow.camera.far = 3500;
        // dirLight.shadow.bias = -0.0001;

        // const dirLightHelper = new DirectionalLightHelper(dirLight, 10);
        // this.add(dirLightHelper);


        /////
        const hemiLight = new HemisphereLight(0xffffff, 0x444444);
        hemiLight.position.set(0, 100, 200);
        this.add(hemiLight);

        const dirLight = new DirectionalLight(0xffffff, 0.7);
        dirLight.position.set(0, 70, 100);
        dirLight.castShadow = true;
        dirLight.shadow.camera.top = 180;
        dirLight.shadow.camera.bottom = -100;
        dirLight.shadow.camera.left = -120;
        dirLight.shadow.camera.right = 120;
        this.add(dirLight);

    }

}

export default BasicLights;