import React,{useState,useEffect} from 'react'
import batman from '../assets/batman.jpg'
import hero from '../assets/hero.jpg'
import forza from '../assets/forza.jpg'
import nike from '../assets/nike.jpg'
import dhoni from '../assets/dhoni.jpg'
import zebra from '../assets/zebra.jpg'

const Slide = () => {
  
  const data = [batman,hero,forza,nike,dhoni,zebra]
  const [index, setIndex] = useState(0)
  
  const plus = () => {
    setIndex(index  === data.length - 1 ? 0 : index+1 )
  }
  const minus = () => {
    setIndex(index === 0 ? data.length - 1 : index-1 )
    
  }
  

  useEffect(() => {
    const intervalId = setInterval(() => {
      plus()
    }, 2000);
     
    return () => clearInterval(intervalId);
  }, [index]); 

  

  
  
  return (
     
    <>
    <div  className='flex pt-10 main relative  justify-start gap-4 items-center flex-col h-[100vh] w-[100vw] bg-zinc-700'>
    <div className='h-[100%] top-0 blur grayscale-[100%] w-[100%] absolute z-20'>
            <img src={data[index]} className='w-[100%] h-[100%] object-cover' />
    </div>
    
    <p className='text-zinc-200 text-4xl z-40'>{index + 1}</p>
      <div className='w-[70%] border border-zinc-500 shadow-2xl z-40 rounded-xl overflow-hidden h-[70%] ' >
            <img src={data[index]} className='w-[100%] h-[100%] object-cover' />
      </div>
      <div className='w-[50%] z-40 gap-5 flex h-10 bg  '>
      <div onClick={() => {
        minus()
      }} className='sm:w-[50%] lg:w-[20%]  leading-10 rounded-xl bg-zinc-500  text-center text-6xl h-[100%]'>
         -  </div>
      <div onClick={() => {
        plus()
      }} className='w-[50%] text-center rounded-xl bg-zinc-500 leading-10 text-4xl h-[100%]'>
         +  </div>
      </div>
      
    </div>
    </>
  )
}

export default Slide