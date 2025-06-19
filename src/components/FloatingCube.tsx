import { Float } from "@react-three/drei";

const FloatingCube = () => {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#f59e0b" />
      </mesh>
    </Float>
  )
}

export default FloatingCube;