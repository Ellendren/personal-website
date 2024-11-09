import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import Stars from './stars.js';

let clock =  new THREE.Clock();

export default async function canvas(canvas: HTMLCanvasElement) {

    const renderer = new THREE.WebGLRenderer({canvas});


    const fov = 75;
    const aspect = canvas.width/canvas.height; 
    const near = 0.1;
    const far = 1000;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.z = 2;

    const scene = new THREE.Scene()

    let range = 20000;
    let num_stars = 2000000;
    const stars = Stars(num_stars, range);

    scene.add(stars.points);

    const render = () => {
        renderer.render(scene, camera);
    };

    const animate = () => {
        let _ = clock.getElapsedTime();
        let move = 5;
        requestAnimationFrame(animate);

        camera.position.x += move;
        if (camera.position.x >= range/2) {
            camera.position.x = -range/2;
        }

        render();
    }

    animate();
}