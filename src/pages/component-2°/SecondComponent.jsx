import { useState } from 'react'

const SecondComponent = () => {

  const [followed, setFollowed] = useState(false)

  const handleFollow = () => {
    setFollowed(!followed)
  }

  return(
    <div className="justify-around items-center flex bg-[#fafafa] w-screen h-screen">
      <div className="w-96 border rounded-md bg-[white] p-14">
        <div className='justify-around flex'>
          <div className='h-44 w-44'>
            <img className="object-cover w-auto h-[100%] rounded-full" src={require('../images/user.jpg')} alt="" />
          </div>
        </div>
        <div className='justify-around items-center flex'>
          <div className='text-center mt-4'>
            <h2 className='text-xl font-semibold font-[Roboto]'>George Milson</h2>
            <p className='hover:underline cursor-pointer font-[Roboto]' >@jmilson</p>
            <p className='mt-3 font-[Roboto]'>This is my biografy, i hope you like this video. If you do please subscribe and like. I'd appreciate that!</p>
          </div>
        </div>
        <div className='justify-around flex mt-8'>
          <div className='gap-14 flex'>
            <button onClick={() => handleFollow()} className='transition-all hover:text-[black] hover:border border-[black] hover:bg-[transparent] text-md text-[white] pr-4 pl-4 p-2 rounded-lg bg-[black]'>{
              followed ? "UnFollow" : "Follow me"
            }</button>
            <button className='transition-all hover:bg-[black] hover:text-[white] text-md text-[black] pr-4 pl-4 p-2 rounded-lg border border-[black]'>More</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecondComponent