// import React, { Suspense } from 'react';
// import { OrbitControls } from "@react-three/drei";
// import { Canvas } from "@react-three/fiber"
// import './ThreeDModel.css';

// import Model from "./Bot_Compressd2.js";

// function ThreeDModel(props) {

//     return ( 
//     //   <>
//       <Canvas
//          camera={{ position: [0, 1, 125], fov: 15 }}
//                 style={{
//              display: "block",
//             backgroundColor: '#111a21',
//             width: '100vw',
//                     height: '100vh',
                
                    
            
//          }}
//       >
//          <ambientLight intensity={1.25} />
//          <ambientLight intensity={0.1} />
//          <directionalLight position={[-2, 5, 2]} />
//          <Suspense fallback={null}>
//             <Model position={[0.025, -10, 0]} />
//          </Suspense>
//          <OrbitControls enableZoom={false} />
//             </Canvas>
//     //         {/* <Canvas
//     //      camera={{ position: [2, 0, 12.25], fov: 15 }}
//     //             style={{
//     //                 position: 'absolute',
//     //         backgroundColor: '#111a21',
//     //         width: '100vw',
//     //         height: '100vh',
//     //      }}
//     //   >
//     //      <ambientLight intensity={1.25} />
//     //      <ambientLight intensity={0.1} />
//     //      <directionalLight intensity={0.4} />
//     //      <Suspense fallback={null}>
//     //         <Model position={[0.025, -0.9, 0]} />
//     //      </Suspense>
//     //             <OrbitControls enableZoom={ false} />
//     //   </Canvas> */}

// //  </>
//   );
// }

// export default ThreeDModel