import {React,Suspense,useEffect,useState} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'
const Computers = ({isMobile}) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <primitive object={computer.scene} scale={isMobile ? 0.7 : 0.4} position={isMobile ?[0,-2.7,-2.2]:[0,-1.6,-0.3]} rotation={[-0.01,-0.3,-0.2]}/>
    </mesh>
  )
}
const ComputersCanvas = () => {
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
    <Canvas frameloop='demand' shadows camera={{position:[20,3,5],fov:25}} gl={{preserveDrawingBuffer:true}}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all />
    </Canvas>
  )
}
export default ComputersCanvas