import './App.css';
import RootLayout from './components/RootLayout'
import Clubs from './components/Clubs/Clubs'
import Home from './components/HomePage/Home'
import Events from './components/Events/Events'
import Register from './components/Register/Register'
import StudentLogin from './components/Login/StudentLogin/StudentLogin'
import ClubLogin from './components/Login/ClubLogin/ClubLogin'
import PreviousEvents from './components/Events/PreviousEvents/PreviousEvents'
import UpcomingEvents from './components/Events/UpcomingEvents/UpcomingEvents'
import StudentRegister from './components/Register/StudentRegister/StudentRegister'
import ClubRegister from './components/Register/ClubRegister/ClubRegister'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<RootLayout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/clubs",
          element:<Clubs/>
        },
        {
          path:"/events",
          element:<Events/>,
          children:[
            {
              path:"previousevents",
              element:<PreviousEvents/>
            },
            {
              path:"upcomingevents",
              element:<UpcomingEvents/>
            }
          ]
        },
        {
          path:'/studentlogin',
          element:<StudentLogin/>
        },
        {
          path:'/clublogin',
          element:<ClubLogin/>
        },
        {
          path:"/register",
          element:<Register/>
        },    
        {
          path:'/studentregister',
          element:<StudentRegister/>
        },
        {
          path:'/clubregister',
          element:<ClubRegister/>
        }
      ]
    }
  ])
  return (
    <div >
      
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;