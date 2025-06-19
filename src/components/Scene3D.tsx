import { Canvas } from "@react-three/fiber";
import FloatingCube from "./FloatingCube";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";


const Scene3D = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <FloatingCube />
      <OrbitControls enableZoom={false} />
      <Environment preset="city" />
      <ContactShadows opacity={0.4} scale={10} blur={1} far={10} resolution={256} color="#000000" />
    </Canvas>
  )
}

export default Scene3D;