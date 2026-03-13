/* reveal animation */


function reveal() {


    const reveals = document.querySelectorAll(".reveal")


    reveals.forEach(section => {


        const windowHeight = window.innerHeight
        const top = section.getBoundingClientRect().top


        if (top < windowHeight - 100) {


            section.classList.add("active")


        }


    })


}


window.addEventListener("scroll", reveal)






/* interactive glow cards */


document.querySelectorAll(".product-card").forEach(card => {


    card.addEventListener("mousemove", e => {


        const rect = card.getBoundingClientRect()


        const x = e.clientX - rect.left
        const y = e.clientY - rect.top


        card.style.background =
            `radial-gradient(circle at ${x}px ${y}px, rgba(56,189,248,0.2), 
rgba(15,23,42,0.7))`


    })


    card.addEventListener("mouseleave", () => {


        card.style.background = "rgba(15,23,42,0.7)"


    })


})
const canvas = document.getElementById("globe")


if (canvas) {


    const scene = new THREE.Scene()


    const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    )


    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true
    })


    renderer.setSize(window.innerWidth, window.innerHeight)


    const geometry = new THREE.SphereGeometry(3, 64, 64)


    const texture = new THREE.TextureLoader().load(
        "https://threejs.org/examples/textures/land_ocean_ice_cloud_2048.jpg"
    )


    const material = new THREE.MeshStandardMaterial({
        map: texture
    })


    const globe = new THREE.Mesh(geometry, material)


    scene.add(globe)


    const light = new THREE.DirectionalLight(0xffffff, 1)
    light.position.set(5, 3, 5)
    scene.add(light)


    camera.position.z = 6


    function animate() {


        requestAnimationFrame(animate)


        globe.rotation.y += 0.002


        renderer.render(scene, camera)


    }


    animate()


}