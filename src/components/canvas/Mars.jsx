import {React,Suspense,useEffect,useState} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'
const Mars = ({isMobile}) => {
  const computer = useGLTF('./solar/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={1} />
      <primitive object={computer.scene} scale={isMobile ? 0.1 : 0.1} position={isMobile ?[0,-0.5,0]:[0,-1,-0.3]} rotation={[-0.01,-0.3,-0.2]}/>
    </mesh>
  )
}
const MarsCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width:500px)')
    setIsMobile(mediaQuery.matches)
    
    const handelMedia = (e) => {
      setIsMobile(e.matches)
    }
    mediaQuery.addEventListener('change', handelMedia)
    return () => {
      mediaQuery.removeEventListener('change', handelMedia)
    }
  }, [])
  return(
    <Canvas frameloop='demand'  camera={{ fov: 15, near: 0.05, far: 4000, position: [0, 10, 30] }} gl={{preserveDrawingBuffer:true}}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls autoRotate enableZoom={false} maxPolarAngle={Math.PI / 2}  minPolarAngle={Math.PI / 2} />
        <Mars isMobile={isMobile}/>
      </Suspense>
      <Preload all />
    </Canvas>
  )
}
export default MarsCanvas