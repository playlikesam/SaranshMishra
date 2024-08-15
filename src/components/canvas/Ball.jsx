import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  Float, OrbitControls, Preload, useTexture, Decal
} from '@react-three/drei';
import CanvasLoader from '../Loader';

const Ball = ({ imgUrl }) => {
  const [texture] = useTexture([imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 10, 10]} intensity={1} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color='#fff8eb' polygonOffset polygonOffsetFactor={-5} />
        <Decal 
          position={[0, 0, 1]}
          rotation={[0, Math.PI, 0]}  // Adjust rotation as needed
          scale={1.5}
          map={texture} 
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
