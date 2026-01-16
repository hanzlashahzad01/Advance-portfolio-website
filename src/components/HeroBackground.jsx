import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment } from '@react-three/drei';
import { useRef } from 'react';

const Shapes = () => {
    return (
        <group>
            <Float speed={1.5} rotationIntensity={1.5} floatIntensity={1.5} position={[0, 1, -2]}>
                <mesh>
                    <torusGeometry args={[1, 0.4, 16, 100]} />
                    <meshStandardMaterial color="#6366f1" roughness={0.1} metalness={0.8} />
                </mesh>
            </Float>
            <Float speed={1.5} rotationIntensity={2} floatIntensity={2} position={[2, -1, -3]}>
                <mesh>
                    <sphereGeometry args={[0.5, 32, 32]} />
                    <meshStandardMaterial color="#a855f7" roughness={0.2} metalness={0.8} />
                </mesh>
            </Float>
            <Float speed={2} rotationIntensity={1} floatIntensity={1} position={[-2, -1, -1]}>
                <mesh>
                    <octahedronGeometry args={[0.8]} />
                    <meshStandardMaterial color="#06b6d4" roughness={0.1} metalness={0.6} />
                </mesh>
            </Float>
        </group>
    );
};

const HeroBackground = ({ theme }) => {
    return (
        <div className="absolute inset-0 -z-10 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
            {/* Gradient Overlay */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[128px] opacity-50 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[100px] opacity-50 pointer-events-none" />

            <Canvas camera={{ position: [0, 0, 5], fov: 50 }} className="w-full h-full">
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                {/* <Environment preset={theme === 'dark' ? "city" : "studio"} /> */}
                <Environment preset="city" />
                <Shapes />
            </Canvas>
        </div>
    );
};

export default HeroBackground;
