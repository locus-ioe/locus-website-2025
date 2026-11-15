import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const WireframeSphere = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene setup
    const scene = new THREE.Scene();

    const getDimensions = () => {
      const width = container.clientWidth || 300;
      const height = container.clientHeight || 300;
      return { width, height, aspect: width / height };
    };

    const initial = getDimensions();

    // Use fov = 60 for natural perspective projection
    const camera = new THREE.PerspectiveCamera(60, initial.aspect, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true, // Transparent background
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(initial.width, initial.height);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Shader Material: Render points as circular dots
    const shaderMaterial = new THREE.ShaderMaterial({
      uniforms: {
        pointSize: { value: 9.0 },
        color: { value: new THREE.Color(0xdf7fe6) },
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
          if (dist > 0.5) discard;
          gl_FragColor = vec4(color, 1.0);
        }
      `,
    });

    const scalingvector = new THREE.Vector3(2.0, 2.0, 2.0);
    // Geometry: Sparse Wireframe Sphere (radius 3 * 2 = 6 units)
    const geometry = new THREE.IcosahedronGeometry(3, 1);
    const points = new THREE.Points(geometry, shaderMaterial);
    points.scale.copy(scalingvector);
    scene.add(points);

    const wireframe = new THREE.WireframeGeometry(geometry);
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x8d2b8f,
      transparent: true,
      opacity: 0.85,
    });
    const edges = new THREE.LineSegments(wireframe, lineMaterial);
    edges.scale.copy(scalingvector);
    scene.add(edges);

    // Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enablePan = false;
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    // Responsive camera fitting & strict enlargement bounds
    const updateSizeAndCamera = () => {
      const { width, height, aspect } = getDimensions();

      renderer.setSize(width, height);
      camera.aspect = aspect;

      // Sphere radius is 3 * 2 = 6.0 units
      const sphereRadius = 6.0;
      // 15% safety margin: guarantees particle dots and rotation NEVER clip any border at max zoom
      const effectiveRadius = sphereRadius * 1.15;

      // Angular perspective limits:
      // Half vertical FOV
      const vFovRad = (camera.fov * Math.PI) / 360;
      const sinVFov = Math.sin(vFovRad);
      // Minimum distance to keep the entire sphere in vertical view
      const distMinVertical = effectiveRadius / sinVFov;

      // Half horizontal FOV
      const hFovRad = Math.atan(Math.tan(vFovRad) * aspect);
      const sinHFov = Math.sin(hFovRad);
      // Minimum distance to keep the entire sphere in horizontal view
      const distMinHorizontal = effectiveRadius / sinHFov;

      // Hard limit: the closest the camera can EVER zoom in without ANY part getting cut off
      const minAllowedDistance = Math.max(distMinVertical, distMinHorizontal);

      // Comfortable default viewing distance
      const idealDistance = minAllowedDistance * 1.25;

      // Only position camera on first load or if near default
      if (!camera.position.z || Math.abs(camera.position.length() - idealDistance) < 0.2) {
        camera.position.set(0, 0, idealDistance);
      }
      camera.lookAt(0, 0, 0);
      camera.updateProjectionMatrix();

      controls.target.set(0, 0, 0);

      const isLargeDevice = window.innerWidth >= 768;
      if (isLargeDevice) {
        // Large devices: enable smooth zoom gestures (wheel/trackpad)
        controls.enableZoom = true;
        controls.zoomSpeed = 0.8;
        // Strictly capped: cannot be enlarged beyond the point where 100% of the globe is visible
        controls.minDistance = minAllowedDistance;
        // Allows reducing down to a neat compact sphere
        controls.maxDistance = idealDistance * 1.8;
      } else {
        // Small/mobile devices: strictly fixed scale, no zoom/enlarge
        controls.enableZoom = false;
        controls.minDistance = idealDistance;
        controls.maxDistance = idealDistance;
      }

      controls.update();
    };

    updateSizeAndCamera();

    // Use ResizeObserver for accurate sizing on mount & container resizes
    let resizeObserver = null;
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(() => {
        updateSizeAndCamera();
      });
      resizeObserver.observe(container);
    }
    window.addEventListener('resize', updateSizeAndCamera);

    // Animation Loop
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Smooth auto-rotation
      points.rotation.y += 0.0012;
      points.rotation.x += 0.001;
      edges.rotation.y += 0.0012;
      edges.rotation.x += 0.001;

      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', updateSizeAndCamera);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
      controls.dispose();
      geometry.dispose();
      shaderMaterial.dispose();
      wireframe.dispose();
      lineMaterial.dispose();
      renderer.dispose();
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full flex items-center justify-center select-none cursor-default"
      style={{ touchAction: 'pan-y' }}
    />
  );
};

export default WireframeSphere;
