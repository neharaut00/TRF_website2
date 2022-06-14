
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/Bot_Compressd2.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, 0, -5.11]} rotation={[-Math.PI / 2, 0, 0]} scale={0.16}>
        <mesh geometry={nodes.Object_2.geometry} material={materials['glass.003']} />
        <mesh geometry={nodes.Object_3.geometry} material={materials['main_mat.003']} />
        <mesh geometry={nodes.Object_4.geometry} material={materials['main_mat.003']} />
        <mesh geometry={nodes.Object_5.geometry} material={materials['main_mat.003']} />
        <mesh geometry={nodes.Object_6.geometry} material={materials['main_mat.003']} />
        <mesh geometry={nodes.Object_7.geometry} material={materials['main_mat.003']} />
      </group>
    </group>
  )
}

useGLTF.preload('/Bot_Compressd2.glb')
