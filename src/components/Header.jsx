import React from 'react'

const Header = () => {
  return (
    <header className='h-96 bg-cover bg-center flex items-center justify-center text-white'
    style={{
        backgroundImage: "url('https://t4.ftcdn.net/jpg/03/02/39/97/360_F_302399784_k69fNY2NhbWLYf3Xg4fUz50docoFAwjk.jpg')",
    }}>
        <h1 className='text-2xl font-bold bg-black/50 rounded-lg backdrop-blur-sm p-4'>🚀Welcome to My Website</h1>
    </header>
  )
}

export default Header;