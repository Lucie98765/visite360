
//CREATING A SCENE WITH CAMERA

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 ); //(fov, aspect ratio, proximity field, background field )


//CREATING A SPHERE
const geometry = new THREE.SphereGeometry( 50, 32, 32 ); //radius, width segments, height segments
const material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
const sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );


// RENDERER
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight ); //aspect ratio renderer
document.body.appendChild( renderer.domElement ); //add the renderer to the html 


//CAMERA CONTROLS

const controls = new THREE.OrbitControls( camera, renderer.domElement );
camera.position.set( 200, 0, 0 )
controls.update()

//UPDATING CAMERA RENDER

function animate() {

	requestAnimationFrame( animate );
	renderer.render( scene, camera );

}
animate()