import React, { useEffect, useState, useMemo, lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';

const Dashboard = lazy(() => import('./component/Dashboard'));
const Landing = lazy(() => import('./component/landing'));
const Appbar = lazy(() => import('./component/Appbar'));

// Your component logic here...


function App(){
  return  (
   <div> 
  <div>
   <BrowserRouter>
   <Appbar></Appbar>
     <Routes>
        <Route path='/dashboard' element={<Suspense fallback = {"loading.."}><Dashboard/></Suspense>}></Route>
        <Route path='/landingPage' element={<Suspense fallback = {"loading.."}><Landing/></Suspense>}></Route>
      </Routes>
   </BrowserRouter>
   </div>
  </div>
  )
} 
 

export default App;












