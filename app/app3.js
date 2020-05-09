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
		//let spriteMap = new THREE.TextureLoader().load( "../front/img/icons/entrer2.png" );
        let spriteMap = new THREE.TextureLoader().load( "../images/icones/cible_visite2.png" );
		let spriteMaterial = new THREE.SpriteMaterial( { 
		 	map: spriteMap,
            transparent : false
			} );
		let sprite = new THREE.Sprite( spriteMaterial )
		sprite.name = point.name
		sprite.position.copy(point.position.clone().normalize().multiplyScalar(30))
        sprite.scale.set(2, 2 , 1)
        //sprite.scale.set(6, 3 , 1)
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
//let s = new Scene('../visite360/360.png', [])
let ac_theatre = new Scene('photos_360/ac_theatre.png', [])
let hall_theatre = new Scene('photos_360/hall_theatre.png', [])
let scene_theatre = new Scene('photos_360/scene_theatre.jpg', [])
let ruches = new Scene('photos_360/ruches.jpg', [])
let ac_centre_art = new Scene('photos_360/ac_centre_art.png', [])
let ac_auvent = new Scene('photos_360/ac_auvent.png', [])
let hall_centre_art = new Scene('photos_360/hall_centre_art.jpg', [])
let salle_expo1 = new Scene('photos_360/salle_expo1.jpg', [])
let salle_expo2 = new Scene('photos_360/salle_expo2.jpg', [])
let hall_cinema = new Scene('photos_360/hall_cinema.png', [])
let salon_bonus = new Scene('photos_360/salon_bonus.jpg', [])
let caravanserail = new Scene('photos_360/caravanserail.jpg', [], "caravanserail")

//allee centrale theatre 
ac_theatre.addPoint({
	position: new THREE.Vector3(1,0.35,0.23),
	name: "Hall du théâtre",
	scene: hall_theatre
})

ac_theatre.addPoint({
	position: new THREE.Vector3(5,0.2,-20),
	name: "Vers le centre d'art",
	scene: ac_centre_art
})

ac_theatre.addPoint({
	position: new THREE.Vector3(0,0.2,20),
	name: "Auvent",
	scene: ac_auvent
})

//Hall du theatre
hall_theatre.addPoint({
	position: new THREE.Vector3(1,0.35,0.2),
	name: "Sortie",
	scene: ac_theatre
})

hall_theatre.addPoint({
	position: new THREE.Vector3(-10,0,20),
	name: "Salle de theatre",
	scene: scene_theatre
})

//Scene du theatre
scene_theatre.addPoint({
	position: new THREE.Vector3(-10,0,20),
	name: "Ruches",
	scene: ruches
})

scene_theatre.addPoint({
	position: new THREE.Vector3(-10,0,-14),
	name: "Hall du theatre",
	scene: hall_theatre
})

//auvent
ac_auvent.addPoint({
	position: new THREE.Vector3(10,0,1),
	name: "Ruches",
	scene: ruches
})

ac_auvent.addPoint({
	position: new THREE.Vector3(1,0,-12),
	name: "Devant le théâtre",
	scene: ac_theatre
})

//Devant le centre d'art
ac_centre_art.addPoint({
	position: new THREE.Vector3(10,-0.5,13),
	name: "Centre d'art",
	scene: hall_centre_art
})

ac_centre_art.addPoint({
	position: new THREE.Vector3(-15,1,-18),
	name: "Devant le théâtre",
	scene: ac_theatre
})

ac_centre_art.addPoint({
	position: new THREE.Vector3(-11,0.7,18),
	name: "Hall du cinéma",
	scene: hall_cinema
})

ac_centre_art.addPoint({
	position: new THREE.Vector3(-29,1.5,16),
	name: "Caravansérail",
	scene: caravanserail
})

//ruches
ruches.addPoint({
	position: new THREE.Vector3(20,3,20),
	name: "Auvent",
	scene: ac_auvent
})

ruches.addPoint({
	position: new THREE.Vector3(-5.5,2,25),
	name: "Scène du théâtre",
	scene: scene_theatre
})

//centre d'art

hall_centre_art.addPoint({
	position: new THREE.Vector3(-5.5,2,1),
	name: "Sortie",
	scene: ac_centre_art
})

hall_centre_art.addPoint({
	position: new THREE.Vector3(5.5,1,-2),
	name: "Salle d'expo 1",
	scene: salle_expo1
})


//Expo 1 

salle_expo1.addPoint({
	position: new THREE.Vector3(5.5,3.5,-5),
	name: "Salle d'expo 2",
	scene: salle_expo2
})


salle_expo1.addPoint({
	position: new THREE.Vector3(5.5,3.5,-19.5),
	name: "Retour au hall",
	scene: hall_centre_art
})

//Expo 2

salle_expo2.addPoint({
	position: new THREE.Vector3(0,-0.2,-2),
	name: "Retour salle d'expo 1",
	scene: salle_expo1
})


//cinema 
hall_cinema.addPoint({
	position: new THREE.Vector3(5,0.5,7),
	name: "Retour à l'allée centrale",
	scene: ac_centre_art
})

hall_cinema.addPoint({
	position: new THREE.Vector3(-8,3,-5),
	name: "Salon des bonus",
	scene: salon_bonus
})

//Salon des bonus

salon_bonus.addPoint({
	position: new THREE.Vector3(1,0,0),
	name: "Hall du cinéma",
	scene: hall_cinema
})

caravanserail.addPoint({
	position: new THREE.Vector3(6,0,-20),
	name: "Retour allée principale",
	scene: ac_centre_art
})

ac_auvent.createScene(scene)

// RENDERER
const renderer = new THREE.WebGLRenderer();
//const renderer = new THREE.WebGLRenderer( { alpha: true } );



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
controls.rotateSpeed = 0.5
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
renderer.domElement.addEventListener('mousedown', ()=>{
	renderer.domElement.classList.add('grabbing')
})
renderer.domElement.addEventListener('mouseup', ()=>{
	renderer.domElement.classList.remove('grabbing')
})

