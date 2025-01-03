import { useFrame, useLoader } from '@react-three/fiber'
import { useRef, useEffect } from 'react'
import { TextureLoader, DoubleSide } from 'three';

const Viewport = ({imageUrl}) => {
    const meshRef = useRef();

    const colorMap = useLoader(TextureLoader, imageUrl)

    const animHandler = (state, delta) => {
        meshRef.current.rotation.z += delta
    }

    useEffect(() => {
        meshRef.current.geometry.center();
        meshRef.current.rotation.x = 1.5
    }, [])

    useFrame((state, delta) => animHandler(state, delta));

    return (
        <>
            <ambientLight intensity={0.1} />
            <directionalLight color="red" position={[0, 0, 5]} />
            <mesh
                ref={meshRef} >
                {/* <cylinderGeometry args={[2.5, 2.5, 0.1, 64]} /> */}
                <boxGeometry args={[4, .05, 4]} />
                <meshBasicMaterial map={colorMap}/>
            </mesh>
        </>
    );
}

export default Viewport