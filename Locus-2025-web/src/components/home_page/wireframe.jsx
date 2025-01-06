import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'; 
const WireframeSphere = () => { const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    // Scene, Camera, and Renderer
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.set(0, 0, 10);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true, // Enable transparency
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000000, 0); // Transparent background
    container.appendChild(renderer.domElement);

    // Shader Material: Render points as circles with shaders
    const shaderMaterial = new THREE.ShaderMaterial({
      uniforms: {
        pointSize: { value: 10.0 },
        color: { value: new THREE.Color(0x00ffff) },
      },
      vertexShader: `
        uniform float pointSize;
        void main() {
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = pointSize;
        }
      `,
      fragmentShader: `
        uniform vec3 color;
        void main() {
          float dist = length(gl_PointCoord - vec2(0.5));
          if (dist > 0.5) discard; // Cut off corners for circular points
          gl_FragColor = vec4(color, 1.0);
        }
      `,
    });

    const scalingvector = new THREE.Vector3(2.0, 2.0,2.0);
    // Geometry: Sparse Wireframe Sphere
    const geometry = new THREE.IcosahedronGeometry(3, 1);
    const points = new THREE.Points(geometry, shaderMaterial);
    points.scale.copy(scalingvector);
    scene.add(points);

    const wireframe = new THREE.WireframeGeometry(geometry);
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x00ffff });
    const edges = new THREE.LineSegments(wireframe, lineMaterial);


    
    edges.scale.copy(scalingvector);

    scene.add(edges);

    // Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enablePan = false; 
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 10; 
    controls.maxDistance = 20;



    // Handle Resize
    const handleResize = () => {
      const { clientWidth, clientHeight } = container;
      renderer.setSize(clientWidth, clientHeight);
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Smooth rotation
      points.rotation.y += 0.001;
      points.rotation.x += 0.001;
      edges.rotation.y += 0.001;
      edges.rotation.x += 0.001;

      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
};

export default WireframeSphere;
