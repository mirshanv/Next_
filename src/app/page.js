"use client"
import React from 'react';
import Link from 'next/link';
import ResponsiveAppBar from '../../Componentes/Header';
import SignIn from './Sign/SignedIn';
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
      <SignIn />
      <h1>Welcome to the Home Page</h1>
      <Link href="/contact">
        About
      </Link>
    </div>
  );
}

export default CookieExample;

