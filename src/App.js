import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './component/Home';
import Main from './layout/Main';
import { theme } from './theme';



function App() {

  const router = createBrowserRouter([{

    path: '/',
    element: <Main></Main>,
    children: [
      {

        path: '/',
        
        element:<Home></Home>
      },

      {

        path: '/home',
        
        element:<Home></Home>
      }
    ]

  }])




  return (
    
    <>
      

      <div className='App'>
       
          <ThemeProvider theme={theme}>
         <RouterProvider router={router} />
         <CssBaseline />
      </ThemeProvider>
     
      </div>
    
    
    </>



      


      

  )
}

export default App;



// import React from 'react';
// import { Button, Typography } from '@mui/material';
// import { useEffect, useState } from 'react';
// import Rating from '@mui/material/Rating';




// function App() {


  
//   const [submit, setSubmit] = useState(false);

//   useEffect(()=>{

//     const id = setTimeout(() => {
      
//       setSubmit(false)
//     }, 1000)
//     return () => {
//       clearTimeout(id)
//     }


//   }, [submit])
  
//   const [rating, setRating] =useState(2);


//   return (
//     <div className="App">
      
//       <Button variant="text">Text</Button>
// <Button variant="contained">Contained</Button>
//       <Button variant="outlined">Outlined</Button>
      
//       <Rating onChange={(event, newValue) => {
//         setRating(newValue)
//       }} name="read-only" value={rating} />

// <Typography variant="h1" component="h2">
//   h1. Heading
// </Typography>;




      


      
//     </div>
//   );
// }

// export default App;
