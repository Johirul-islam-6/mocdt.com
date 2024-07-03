import { MokiBanner } from '@/Components/Moki/MokiBanner';
import { MokiContainer } from '@/Components/Moki/MokiContainer';
import { MokiServices } from '@/Components/Moki/MokiServices';
import React from 'react'

 const Moki = () => {
  return (
    <>
    <div className="max-w-screen-xl mx-auto pb-[200px]">
    <MokiBanner/>
    <MokiContainer/>
    <MokiServices/>
    </div>
    
    </>
  )
}

export default Moki;