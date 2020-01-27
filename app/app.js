const container = document.body
const tooltip = document.querySelector('.tooltip')
let spriteActive = false


class Scene{

	constructor(image, points){
		this.image = image
		this.points = []
		this.sprites = []
		this.scene = null
	}
	
	createScene(scene){
		this.scene = scene
		const geometry = new THREE.SphereGeometry( 50, 32, 32 ); //radius, width segments, height segments
		const texture = new THREE.TextureLoader().load(this.image)
		texture.wrapS = THREE.RepeatWrapping
		texture.repeat.x = -1 //reverse picture 
		const material = new THREE.MeshBasicMaterial( {
			map:texture,
			side:THREE.DoubleSide
		} )
		material.transparent = true
		this.sphere = new THREE.Mesh(geometry,material)
		this.scene.add(this.sphere)
		this.points.forEach(this.addTooltip.bind(this))
	}

	addPoint (point){
		this.points.push(point) 
	}

	addTooltip (point){
		let spriteMap = new THREE.TextureLoader().load( "sprite.png" );
		let spriteMaterial = new THREE.SpriteMaterial( { 
		 	map: spriteMap
			} );
		let sprite = new THREE.Sprite( spriteMaterial )
		sprite.name = point.name
		sprite.position.copy(point.position.clone().normalize().multiplyScalar(30))
		sprite.scale.multiplyScalar(2)
		this.scene.add(sprite)
		this.sprites.push(sprite)
		sprite.onClick = () => {
			this.destroy()
			point.scene.createScene(scene)
			point.scene.appear()
		}
	}

	destroy(){
		gsap.to(this.sphere.material, 1, {
			opacity: 0,
			onComplete: () => {
				this.scene.remove(this.sphere)
			}
		})
		this.sprites.forEach((sprite) => {
				gsap.to(sprite.scale, 1, {
					x: 0,
					y: 0,
					z: 0,
					onComplete: () => {
						this.scene.remove(sprite)
					}
				})
		})
	}

	appear(){
		this.sphere.material.opacity = 0
		gsap.to(this.sphere.material, 1, {
			opacity: 1
		})
		this.sprites.forEach((sprite) => {
			sprite.scale.set(0,0,0)
			gsap.to(sprite.scale, 1, {
				x: 2,
				y: 2,
				z: 2
			})
		})
	}

}
//CREATING A SCENE WITH CAMERA


const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 0.1, 1000 ) //(fov, aspect ratio, proximity field, background field )

//CREATING A SPHERE 
let s = new Scene('360.png', [])
let s2 = new Scene('3602.png', [])

s.addPoint({
	position: new THREE.Vector3(41.66006320223875, 1.7799572824780827,-27.43192409158089),
	name: "Copernic",
	scene: s2
})

s2.addPoint({
	position: new THREE.Vector3(1,0,0.5),
	name: "Sortie",
	scene: s
})
s.createScene(scene)

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
		if (intersect.object.type === 'Sprite'){
			intersect.object.onClick()
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
	let foundSprite = false
	let intersects = rayCaster.intersectObjects(scene.children)
	intersects.forEach(function (intersect){
		if (intersect.object.type == 'Sprite'){
			let p = intersect.object.position.clone().project(camera)
			tooltip.style.top =  (-1 * p.y + 1) * window.innerHeight / 2 + 'px'
			tooltip.style.left = ((p.x + 1) * window.innerWidth / 2) + 'px'
			tooltip.classList.add('is-active')
			tooltip.innerHTML = intersect.object.name
			spriteActive = intersect.object
			foundSprite = true
		}
	})
	if (foundSprite === false && spriteActive){
		tooltip.classList.remove('is-active')
		spriteActive = false
		
	}
}


animate()
window.addEventListener('resize', onResize)
container.addEventListener('click', onClick)
container.addEventListener('mousemove', onMouseMove )
