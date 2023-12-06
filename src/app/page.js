// import Image from 'next/image'
// import { MantineProvider, ColorSchemeProvider } from '@mantine/core'
// import { useColorScheme } from '@mantine/hooks'
// import { ColorModeSwitcher } from './Components/ColorModeSwitcher'
// import Cookies from 'js-cookie';
// export default function Home() {
// Cookies.set('user', 'mirshan', { expires: 30, path: '/app', domain: '.example.com' });

// const user = Cookies.get('user');
// console.log('User:', user);


//   return (
//     // <MantineProvider>
//     //   <ColorModeSwitcher />
//     // </MantineProvider>
//     <div>
//     </div>
//   )
// }

"use client"
import React from 'react';
import Link from 'next/link';
import ResponsiveAppBar from '../../Componentes/Header';
function CookieExample() {
  const [myConst, setMyConst] = React.useState('hello')
  // const click=()=>{
  //   Cookies.set('username', 'JohnDoe', { expires: 10, path: '/' });
  // }
  const rem = () => {
    // Cookies.remove('username');
    // Cookies.remove('MIRSHSN');

  }
  // const username = Cookies.get('username');
  // console.log('====================================');
  // console.log(username);
  // console.log('====================================');
  return (
    <div>
      <ResponsiveAppBar />
      <h1>Welcome to the Home Page</h1>
      <Link href="/contact">
        About
      </Link>
    </div>
  );
}

export default CookieExample;

