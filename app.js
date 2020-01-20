

const container = document.body

//CREATING A SCENE WITH CAMERA

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 0.1, 1000 ); //(fov, aspect ratio, proximity field, background field )


//CREATING A SPHERE + TEXTURE
const geometry = new THREE.SphereGeometry( 50, 32, 32 ); //radius, width segments, height segments
const texture = new THREE.TextureLoader().load("360.png")
texture.wrapS = THREE.RepeatWrapping
texture.repeat.x = -1 //reverse picture 
const material = new THREE.MeshBasicMaterial( {
	map:texture,
	side:THREE.DoubleSide
} );
const sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );
texture.minFilter = THREE.LinearFilter;  //block the resizing of the image


//TOOLTIP
function addTooltip (position, name){
	
	let spriteMap = new THREE.TextureLoader().load( "sprite.png" );
	let spriteMaterial = new THREE.SpriteMaterial( { 
	 	map: spriteMap
		} );
	let sprite = new THREE.Sprite( spriteMaterial )
	sprite.name = name
	sprite.position.copy(position.clone().normalize().multiplyScalar(30))
	sprite.scale.multiplyScalar(2)
	scene.add( sprite )

}

// RENDERER
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight ); //aspect ratio renderer
container.appendChild( renderer.domElement ); //add the renderer to the html 

function onResize(){
	renderer.setSize(window.innerWidth, innerHeight)
	camera.aspect = window.innerWidth / window.innerHeight
	camera.updateProjectionMatrix()
	
}

const rayCaster = new THREE.Raycaster()


//CAMERA CONTROLS

const controls = new THREE.OrbitControls( camera, renderer.domElement );
camera.position.set( -1, 0, 0 ) //camera centered
controls.rotateSpeed = 0.2
controls.enableZoom = false
controls.update()

//UPDATING CAMERA RENDER

function animate() {

	requestAnimationFrame( animate );
	renderer.render( scene, camera );

}

function onClick(e) {
	let mouse = new THREE.Vector2(
		( e.clientX / window.innerWidth ) *2 -1, - ( e.clientY / window.innerHeight ) * 2 + 1
		)
	rayCaster.setFromCamera(mouse, camera)
	let intersects = rayCaster.intersectObjects(scene.children)
	intersects.forEach(function (intersect){
		if (intersect.object.type == 'Sprite'){
			console.log(intersect.object.name)
		}
	})
/*	let intersects = rayCaster.intersectObject(sphere)
	if(intersects.length > 0) {
		console.log(intersects[0].point) //to remove if needed, raw code
		addTooltip(intersects[0].point)
	}
*/
}

function onMouseMove (e) {
	let mouse = new THREE.Vector2(
		( e.clientX / window.innerWidth ) *2 -1, - ( e.clientY / window.innerHeight ) * 2 + 1
		)
	rayCaster.setFromCamera(mouse, camera)
	let intersects = rayCaster.intersectObjects(scene.children)
	intersects.forEach(function (intersect){
		if (intersect.object.type == 'Sprite'){
			console.log(intersect.object.name)
		}
	})
}

addTooltip(new THREE.Vector3(41.66006320223875, 1.7799572824780827,-27.43192409158089), "Copernic")

animate()
window.addEventListener('resize', onResize)
container.addEventListener('click', onClick)
container.addEventListener('mousemove', onMouseMove )