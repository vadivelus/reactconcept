import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import Orderplace from './Components/Placeorder';
import Nomatch from './Components/Nomatch';
import Product from './Components/Product';
import Newproduct from './Components/Newproduct';
import Featurproduct from './Components/Featurproduct';
import Admin from './Components/Users/Admin';
import Superadmin from './Components/Users/Superadmin';
// import Lazyload from './Lazyloading/Lazyload';
import Operationalusers from './Components/Users/Operationaluser';
import Customermain from './Components/Redux/Customermain';
import Customerview from './Components/Redux/Customerview';
import Fruitadd from './Components/Redux/Fruitadd';
import Fruitsview from './Components/Redux/Fruitsview';
import Brandadd from './Components/Redux/Brandadd';
import Brandview from './Components/Redux/Brandview';
import Test from './Components/Validate/Test';
import Loginmaster from './ContextApi/Loginmaster';
import Asynsync from './Asynsync';
import Errorboundries from './Errorboundries/ErrorbouParent';
const Lazyhoc = React.lazy(() => import('./HOC/Apphoc'));
const Lazylazyload = React.lazy(() => import('./Lazyloading/Lazyload'));
const Lazybubcapture = React.lazy(() => import('./Components/Bubpropgatcapture'));
const Lazyusememo = React.lazy(() => import('./memo/Usememo'));
const Lazyrouting = React.lazy(() => import('./Routing/Mainmenu'));
const Lazycallback = React.lazy(() => import('./Usecallback/CalbackParent'));
const Lazyuseefect = React.lazy(() => import('./UseeffectClean/Masterpage'));

export default function App() {
  return(
    <div>
      <Navbar />
      <Routes>
      <Route path='/' element={<Home />} />
                     <Route path='/product' element={<Product />}>
                       <Route index element={<Newproduct />} />
                       <Route path='Newproduct' element={<Newproduct />} />
                       <Route path='Featureproduct' element={<Featurproduct />} />
                     </Route>
                     <Route path='about' element={<About />} />
                     <Route path='contacT' element={<Contact />} />
                     <Route path='/Customermain' element={<Customermain />}>
                       <Route path='Brandadd' element={<Brandadd />} />
                       <Route path='Bandview' element={<Brandview />} />
                     </Route>
                     <Route path='orderplace' element={<Orderplace />} />
                     <Route path='Users/:userid' element={<Superadmin />} />
                     <Route path='Customerview' element={<Customerview />} />
                     <Route path='Fruitadd' element={<Fruitadd />} />
                     <Route path='Fruitview' element={<Fruitsview />} />
                     <Route path='test' element={<Test />} />
                     <Route path='loginmaster' element={<Loginmaster />} />
                     <Route path='asynpromises' element={<Asynsync />} />
                     <Route path='errorboundries' element={<Errorboundries />} />

                     <Route path='lazyhoc' element={<React.Suspense fallback='loading...'><Lazyhoc /></React.Suspense>} />
                     <Route path='lazyload' element={<React.Suspense fallback='Loading...'> <Lazylazyload /></React.Suspense>} />
                     <Route path='lazyusememo' element={<React.Suspense fallback='loading...'><Lazyusememo /></React.Suspense>} />
                     <Route path='Bublingcapture' element={<React.Suspense fallback='Loading...'><Lazybubcapture /></React.Suspense>} />
                     <Route path='Routing' element={<React.Suspense fallback='Loading...'><Lazyrouting /></React.Suspense>} />
                     <Route path='Usecallback' element={<React.Suspense fallback='Loading...'><Lazycallback /></React.Suspense>} />
                     <Route path='useeffectclean' element={<React.Suspense fallback='Loading...'><Lazyuseefect /></React.Suspense>} />
      </Routes>
    </div>
  )
  // return(
  //   <div>
  //     <Navbar />
  //     <Routes>
  //                   <Route path='/' element={<Home />} />
  //                   <Route path='/product' element={<Product />}>
  //                     <Route index element={<Newproduct />} />
  //                     <Route path='Newproduct' element={<Newproduct />} />
  //                     <Route path='Featureproduct' element={<Featurproduct />} />
  //                   </Route>
  //                   <Route path='about' element={<About />} />
  //                   <Route path='contacT' element={<Contact />} />
  //                   <Route path='/Customermain' element={<Customermain />}>
  //                     <Route path='Brandadd' element={<Brandadd />} />
  //                     <Route path='Bandview' element={<Brandview />} />
  //                   </Route>
  //                   <Route path='orderplace' element={<Orderplace />} />
  //                   <Route path='Users/:userid' element={<Superadmin />} />
  //                   <Route path='Customerview' element={<Customerview />} />
  //                   <Route path='Fruitadd' element={<Fruitadd />} />
  //                   <Route path='Fruitview' element={<Fruitsview />} />
  //                   <Route path='test' element={<Test />} />
  //                   <Route path='loginmaster' element={<Loginmaster />} />
  //                   <Route path='asynpromises' element={<Asynsync />} />
  //                   <Route path='errorboundries' element={<Errorboundries />} />

  //                   <Route path='lazyhoc' element={<React.Suspense fallback='loading...'><Lazyhoc /></React.Suspense>} />
  //                   <Route path='lazyload' element={<React.Suspense fallback='Loading...'> <Lazylazyload /></React.Suspense>} />
  //                   <Route path='lazyusememo' element={<React.Suspense fallback='loading...'><Lazyusememo /></React.Suspense>} />
  //                   <Route path='Bublingcapture' element={<React.Suspense fallback='Loading...'><Lazybubcapture /></React.Suspense>} />
  //                   <Route path='Routing' element={<React.Suspense fallback='Loading...'><Lazyrouting /></React.Suspense>} />
  //                   <Route path='Usecallback' element={<React.Suspense fallback='Loading...'><Lazycallback /></React.Suspense>} />
  //                   <Route path='useeffectclean' element={<React.Suspense fallback='Loading...'><Lazyuseefect /></React.Suspense>} />
  //       <Routes>   
  //     </div>
          
  //   );
  }
