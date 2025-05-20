import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const BackgroundEffects = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    
    // Make renderer smaller than the window - 80% of height and width
    const width = window.innerWidth * 0.8;
    const height = window.innerHeight * 0.8;
    
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);
    
    // Create particles - REDUCED COUNT but RESTORED SIZE
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 600; // Reduced count
    
    const posArray = new Float32Array(particlesCount * 3);
    
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 5; // Restore original range
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    // Materials - RESTORED SIZE
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.005, // Original size
      color: 0x6366f1,
      transparent: true,
      opacity: 0.6, // Slightly transparent
      blending: THREE.AdditiveBlending
    });
    
    // Mesh
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    
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
      
      // Rotate particles
      particlesMesh.rotation.y = elapsedTime * 0.03;
      
      // Interactive rotation based on mouse position
      if (mouseX.current > 0) {
        particlesMesh.rotation.x = -mouseY.current * 0.00005;
        particlesMesh.rotation.y = -mouseX.current * 0.00005;
      }
      
      // Render
      renderer.render(scene, camera);
      
      // Call animate recursively
      window.requestAnimationFrame(animate);
    };
    
    animate();
    
    // Handle resize
    const handleResize = () => {
      const newWidth = window.innerWidth * 0.8;
      const newHeight = window.innerHeight * 0.8;
      
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousemove', handleMouseMove);
      containerRef.current?.removeChild(renderer.domElement);
      particlesGeometry.dispose();
      particlesMaterial.dispose();
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