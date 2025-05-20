import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const BackgroundEffects = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    // Make renderer wider - 95% of height and width
    const width = window.innerWidth * 0.95;
    const height = window.innerHeight * 0.95;
    
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Better performance
    containerRef.current.appendChild(renderer.domElement);
    
    // Create multiple star layers with different colors
    const createStarField = (count: number, size: number, color: number, range: number) => {
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(count * 3);
      
      for (let i = 0; i < count * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * range;
        positions[i + 1] = (Math.random() - 0.5) * range;
        positions[i + 2] = (Math.random() - 0.5) * range;
      }
      
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      
      const material = new THREE.PointsMaterial({
        size,
        color,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending
      });
      
      return new THREE.Points(geometry, material);
    };
    
    // Create multiple star layers with different colors
    const starField1 = createStarField(700, 0.015, 0xffffff, 8);
    const starField2 = createStarField(500, 0.012, 0x88ccff, 9);
    const starField3 = createStarField(300, 0.02, 0xff88ff, 7);
    
    scene.add(starField1);
    scene.add(starField2);
    scene.add(starField3);
    
    // Create Sun with glowing effect
    const sunGeometry = new THREE.SphereGeometry(0.35, 32, 32);
    const sunTexture = new THREE.TextureLoader().load('https://www.solarsystemscope.com/textures/download/2k_sun.jpg');
    const sunMaterial = new THREE.MeshBasicMaterial({
      map: sunTexture,
      transparent: true,
      opacity: 0.9
    });
    const sun = new THREE.Mesh(sunGeometry, sunMaterial);
    sun.position.set(1.8, 1.2, -3);
    scene.add(sun);
    
    // Add glow to sun
    const sunLight = new THREE.PointLight(0xffaa00, 2, 12);
    sunLight.position.copy(sun.position);
    scene.add(sunLight);
    
    // Create glow sphere around the sun
    const sunGlowGeometry = new THREE.SphereGeometry(0.45, 32, 32);
    const sunGlowMaterial = new THREE.MeshBasicMaterial({
      color: 0xffdd55,
      transparent: true,
      opacity: 0.2,
      side: THREE.BackSide
    });
    const sunGlow = new THREE.Mesh(sunGlowGeometry, sunGlowMaterial);
    sunGlow.position.copy(sun.position);
    scene.add(sunGlow);
    
    // Outer glow
    const outerGlowGeometry = new THREE.SphereGeometry(0.6, 32, 32);
    const outerGlowMaterial = new THREE.MeshBasicMaterial({
      color: 0xff5500,
      transparent: true,
      opacity: 0.1,
      side: THREE.BackSide
    });
    const outerGlow = new THREE.Mesh(outerGlowGeometry, outerGlowMaterial);
    outerGlow.position.copy(sun.position);
    scene.add(outerGlow);
    
    // Create planets with textures
    // Earth-like planet
    const planet1Geometry = new THREE.SphereGeometry(0.15, 32, 32);
    const planet1Texture = new THREE.TextureLoader().load('https://www.solarsystemscope.com/textures/download/2k_earth_daymap.jpg');
    const planet1Material = new THREE.MeshPhongMaterial({ 
      map: planet1Texture,
      shininess: 25
    });
    const planet1 = new THREE.Mesh(planet1Geometry, planet1Material);
    planet1.position.set(-1.5, -0.8, -2);
    scene.add(planet1);
    
    // Add atmosphere to Earth
    const earthAtmosphereGeometry = new THREE.SphereGeometry(0.158, 32, 32);
    const earthAtmosphereMaterial = new THREE.MeshPhongMaterial({
      color: 0x88aaff,
      transparent: true,
      opacity: 0.3,
      side: THREE.BackSide
    });
    const earthAtmosphere = new THREE.Mesh(earthAtmosphereGeometry, earthAtmosphereMaterial);
    earthAtmosphere.position.copy(planet1.position);
    scene.add(earthAtmosphere);
    
    // Mars-like planet
    const planet2Geometry = new THREE.SphereGeometry(0.18, 32, 32);
    const planet2Texture = new THREE.TextureLoader().load('https://www.solarsystemscope.com/textures/download/2k_mars.jpg');
    const planet2Material = new THREE.MeshPhongMaterial({ map: planet2Texture });
    const planet2 = new THREE.Mesh(planet2Geometry, planet2Material);
    planet2.position.set(2.2, -1.5, -3);
    scene.add(planet2);
    
    // Gas giant planet
    const planet3Geometry = new THREE.SphereGeometry(0.25, 32, 32);
    const planet3Texture = new THREE.TextureLoader().load('https://www.solarsystemscope.com/textures/download/2k_jupiter.jpg');
    const planet3Material = new THREE.MeshPhongMaterial({ map: planet3Texture });
    const planet3 = new THREE.Mesh(planet3Geometry, planet3Material);
    planet3.position.set(-2.2, 1.5, -4);
    scene.add(planet3);
    
    // Create ring system for gas giant
    const ringGeometry = new THREE.RingGeometry(0.3, 0.45, 64);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0xcdcdcd,
      transparent: true,
      opacity: 0.6,
      side: THREE.DoubleSide
    });
    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    ring.position.copy(planet3.position);
    ring.rotation.x = Math.PI / 2.5;
    scene.add(ring);
    
    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    scene.add(ambientLight);
    
    // Add directional light from sun
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.copy(sun.position);
    scene.add(directionalLight);
    
    // Camera position
    camera.position.z = 4;
    
    // Mouse interaction
    const mouseY = { current: 0 };
    const mouseX = { current: 0 };
    
    const handleMouseMove = (event: MouseEvent) => {
      mouseY.current = event.clientY;
      mouseX.current = event.clientX;
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    // Animation
    const clock = new THREE.Clock();
    
    const animate = () => {
      const elapsedTime = clock.getElapsedTime();
      
      // Rotate star fields at different speeds
      starField1.rotation.y = elapsedTime * 0.02;
      starField1.rotation.x = elapsedTime * 0.01;
      
      starField2.rotation.y = -elapsedTime * 0.015;
      starField2.rotation.x = -elapsedTime * 0.01;
      
      starField3.rotation.y = elapsedTime * 0.01;
      starField3.rotation.z = elapsedTime * 0.008;
      
      // Rotate sun
      sun.rotation.y = elapsedTime * 0.05;
      
      // Pulsate sun glow
      const pulseFactor = (Math.sin(elapsedTime * 2) * 0.05) + 1;
      sunGlow.scale.set(pulseFactor, pulseFactor, pulseFactor);
      outerGlow.scale.set(pulseFactor * 0.9, pulseFactor * 0.9, pulseFactor * 0.9);
      
      // Rotate planets
      planet1.rotation.y = elapsedTime * 0.2;
      planet2.rotation.y = elapsedTime * 0.15;
      planet3.rotation.y = elapsedTime * 0.1;
      
      // Orbit planets around the sun
      const orbit1 = elapsedTime * 0.3;
      const orbit2 = elapsedTime * 0.2;
      const orbit3 = elapsedTime * 0.15;
      
      // Orbit planets in different planes
      planet1.position.x = -1.5 * Math.cos(orbit1);
      planet1.position.z = -2 * Math.sin(orbit1);
      earthAtmosphere.position.copy(planet1.position);
      
      planet2.position.x = 2.2 * Math.cos(orbit2);
      planet2.position.z = -3 * Math.sin(orbit2);
      
      planet3.position.x = -2.2 * Math.cos(orbit3);
      planet3.position.z = -4 * Math.sin(orbit3);
      ring.position.copy(planet3.position);
      ring.rotation.x = Math.PI / 2.5;
      ring.rotation.z = elapsedTime * 0.1;
      
      // Interactive rotation based on mouse position
      if (mouseX.current > 0) {
        const rotationSpeed = 0.00001;
        
        starField1.rotation.x = -mouseY.current * rotationSpeed * 2;
        starField1.rotation.y = -mouseX.current * rotationSpeed * 2;
        
        camera.position.x = (mouseX.current - window.innerWidth / 2) * 0.0005;
        camera.position.y = -(mouseY.current - window.innerHeight / 2) * 0.0005;
        camera.lookAt(scene.position);
      }
      
      // Render
      renderer.render(scene, camera);
      
      // Call animate recursively
      window.requestAnimationFrame(animate);
    };
    
    animate();
    
    // Handle resize
    const handleResize = () => {
      const newWidth = window.innerWidth * 0.95;
      const newHeight = window.innerHeight * 0.95;
      
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousemove', handleMouseMove);
      
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      // Dispose all geometries and materials
      [
        sunGeometry, sunMaterial, sunGlowGeometry, sunGlowMaterial, 
        outerGlowGeometry, outerGlowMaterial,
        planet1Geometry, planet1Material, earthAtmosphereGeometry, earthAtmosphereMaterial,
        planet2Geometry, planet2Material, planet3Geometry, planet3Material,
        ringGeometry, ringMaterial
      ].forEach(item => item && item.dispose && item.dispose());

      // Remove all objects from memory
      scene.clear();
    };
  }, []);
  
  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 flex items-center justify-center -z-10"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default BackgroundEffects; 