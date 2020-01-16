
//CREATING A SCENE WITH CAMERA

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 0.1, 1000 ); //(fov, aspect ratio, proximity field, background field )


//CREATING A SPHERE + TEXTURE
const geometry = new THREE.SphereGeometry( 50, 32, 32 ); //radius, width segments, height segments
const textureLoader = new THREE.TextureLoader()
const texture = textureLoader.load("360.png")
texture.minFilter = THREE.LinearFilter;  //block the resizing of the image
const material = new THREE.MeshBasicMaterial( {
	map:texture,
	side:THREE.DoubleSide
} );
const sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );


// RENDERER
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight ); //aspect ratio renderer
document.body.appendChild( renderer.domElement ); //add the renderer to the html 


//CAMERA CONTROLS

const controls = new THREE.OrbitControls( camera, renderer.domElement );
camera.position.set( 1, 0, 0 ) //camera centered
controls.rotateSpeed = 0.2
controls.enableZoom = false
controls.update()

//UPDATING CAMERA RENDER

function animate() {

	requestAnimationFrame( animate );
	renderer.render( scene, camera );

}
animate()

function onResize(){
	renderer.setSize(window.innerWidth, innerHeight)
	camera.aspect = window.innerWidth / window.innerHeight
	camera.updateProjectionMatrix()
	
}

window.addEventListener('resize', onResize)