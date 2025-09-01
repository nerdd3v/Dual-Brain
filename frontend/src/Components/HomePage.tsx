import React from 'react'
import NavBar from './NavBar'
import Card from './Card'

function HomePage() {
  return (
    <div className='flex flex-col w-full h-screen '>
        <div className=' flex w-full  flex-col '>
            <NavBar/>
        </div>
        <div className='h-full w-full flex flex-wrap gap-6 justify-center'>
          <Card title={'hacker'} tags={['pro','jk']} link={'https://localhost'} description={'hahahha'}/>
          <Card title={'hacker'} tags={['pro','jk']} link={'https://localhost'} description={'hahahha'}/>
          <Card title={'hacker'} tags={['pro','jk']} link={'https://localhost'} description={'hahahha'}/>
          <Card title={'hacker'} tags={['pro','jk']} link={'https://localhost'} description={'hahahha'}/>
          <Card title={'hacker'} tags={['pro','jk']} link={'https://localhost'} description={'hahahha'}/>
          <Card title={'hacker'} tags={['pro','jk']} link={'https://localhost'} description={'hahahha'}/>
          <Card title={'hacker'} tags={['pro','jk']} link={'https://localhost'} description={'hahahha'}/>
          <Card title={'hacker'} tags={['pro','jk']} link={'https://localhost'} description={'hahahha'}/>
          <Card title={'hacker'} tags={['pro','jk']} link={'https://localhost'} description={'hahahha'}/>
          <Card title={'hacker'} tags={['pro','jk']} link={'https://localhost'} description={'hahahha'}/>
          <Card title={'hacker'} tags={['pro','jk']} link={'https://localhost'} description={'hahahha'}/>
          <Card title={'hacker'} tags={['pro','jk']} link={'https://localhost'} description={'hahahha'}/>
          <Card title={'hacker'} tags={['pro','jk']} link={'https://localhost'} description={'hahahha'}/>
          <Card title={'hacker'} tags={['pro','jk']} link={'https://localhost'} description={'hahahha'}/>
          <Card title={'hacker'} tags={['pro','jk']} link={'https://localhost'} description={'hahahha'}/>
          <Card title={'hacker'} tags={['pro','jk']} link={'https://localhost'} description={'hahahha'}/>
          <Card title={'hacker'} tags={['pro','jk']} link={'https://localhost'} description={'hahahha'}/>
          <Card title={'hacker'} tags={['pro','jk']} link={'https://localhost'} description={'hahahha'}/>
          <Card title={'hacker'} tags={['pro','jk']} link={'https://localhost'} description={'hahahha'}/>
          <Card title={'hacker'} tags={['pro','jk']} link={'https://localhost'} description={'hahahha'}/>
          <Card title={'hacker'} tags={['pro','jk']} link={'https://localhost'} description={'hahahha'}/>
        </div>
    </div>
  )
}

export default HomePage
