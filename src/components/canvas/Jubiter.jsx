import {React,Suspense,useEffect,useState} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import Mars from './Mars'
import CanvasLoader from '../Loader'
const Jubiter = ({isMobile}) => {
  const computer = useGLTF('./jupiter/scene.gltf')
  return (
    <mesh scale={0.5}>
      <hemisphereLight intensity={1} />
      <primitive object={computer.scene} scale={isMobile ? 0.05 : 0.03} position={isMobile ?[0,0,0]:[0,-1.6,-0.3]} rotation={[-0.01,-0.3,-0.2]}/>
    </mesh>
    
  )
}
const JubiterCanvas = () => {
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
    <div className=' border-4 border-indigo-600 w-[200px] h-[200px]'>
    <Canvas frameloop='demand'  camera={{position:[20,3,5],fov:25}} gl={{preserveDrawingBuffer:true}}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls autoRotate enableZoom={false} maxPolarAngle={Math.PI / 2}  minPolarAngle={Math.PI / 2} />
        <Jubiter isMobile={isMobile}/>
      </Suspense>
      <Preload all />
    </Canvas>
    </div>
  )
}
export default JubiterCanvas