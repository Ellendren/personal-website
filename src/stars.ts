import { PointsMaterial, BufferGeometry, BufferAttribute, Points } from "three";

/*
Description: Creates a given numvber of stars at random positions in
the distance
********************************************************************
Varible(s):
    -num: the number of stars to be rendered
    -far: the number of the far veiing plane
********************************************************************
Reurns: its self
*/
export default function Stars(num = 500, far: number){

    let material = new PointsMaterial({
        size: 0.001,
        color: 0xffffff
    });

    let positions = new Float32Array(num*3);

    for (let i = 0; i < num*3; i++){
        let num = (Math.random() - 0.5);

        positions[i] = num;
    }

    let geometry = new BufferGeometry();

    let attribute = new BufferAttribute(positions, 3);

    geometry.setAttribute(
        "position", 
        attribute
    );

    let points = new Points(
        geometry, 
        material
    );

    return {geometry, material, points};

}