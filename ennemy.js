var body = new THREE.CubeGeometry(90, 120, 90);
var ball = new THREE.CubeGeometry(120, 120, 120);
var skin = new THREE.MeshLambertMaterial({
    color: 0xF3FFE2
});

var ex;
function AddEnnemy(number) {
    for (var n = 0; n < number; n++) {
        var enn = new THREE.Mesh(body, skin);
        var x = Math.floor(Math.random() * 2000) - 1000;
        var y = Math.floor(Math.random() * 2000) - 1000;
        //enn.position.set(x, 150, y);
        enn.position.set(x, 150, 0);
        scene.add(enn);
        //fall(enn);
        follow(enn);
    }
}


function fall(elem) {
    for (var i = 150; i >= 0; i--) {
        elem.position.z = i;
        //console.log(elem.position.z);
        renderer.render(scene, camera);
    }
}



var d;
var v = 2;  //vitesse des ennemies. Plus elle est grande moins il vont vite
var m;
var StepTime;

function follow(ennemy){                      //calcul de la distance
    setInterval(function(ennemy){
        m = camera.position.x;
        ex = Math.floor(ennemy.position.x);
        if(ex > 0){
            d = ex - m;
        }
        if(ex < 0){
            d = -ex + m;
        }
        if(d < 100){                        //calcul du delay en fonction de la distance
            StepTime = 6 * (d * v);
        }
        else{
            StepTime = 6 * (100 * v);
        }
        if(ex > 0){
            ex += 1;
        }
        else{
            ex -= 1;
        }
        console.log(ex);
    },StepTime);
}


function generateThree(nbr) {
    for (var t = 0; t < nbr; t++) {
        if (t <= nbr / 2) {
            var three = new THREE.Mesh(small, material);
            var threetop = new THREE.Mesh(circle, material);
            three.position.set(-600, 0, 400);
            threetop.position.set(-600, sma / 2, 400);
            scene.add(three);
            scene.add(threetop);
        }
        else {
            var three = new THREE.Mesh(big, material);
            var threetop = new THREE.Mesh(circle, material);
            var x = Math.floor(Math.random() * mapL) - mapL / 2;
            var y = Math.floor(Math.random() * mapl) - mapl / 2;
            three.position.set(x, 0, y);
            threetop.position.set(x, nor / 2, y);
            scene.add(three);
            scene.add(threetop);
        }
    }
}





/*
var Sunform;
function sun() {
    Sunform = new THREE.Mesh(ball, material);
    Sunform.position.set(50, 50, 50);
    scene.add(Sunform);
}
var time = 0;
requestAnimationFrame(sunMove);
function sunMove() {
    time += 0.01;
    Sunform.position.x = Math.sin(time) * 2000;
    Sunform.position.y = 150;
    Sunform.position.z = Math.cos(time) * 2000;
    renderer.sunMove(scene, Sunform);
    requestAnimationFrame(sunMove);
}
*/


