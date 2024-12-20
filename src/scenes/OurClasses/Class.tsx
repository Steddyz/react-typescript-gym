import { FC } from 'react'



type Props = {
    name: string,
    description?: string,
    image: string, 
}

const Class: FC<Props> = ({ name, description = "some description", image }) => {
    const overlayStyles = `absolute p-5 z-30 flex h-[380px] w-[450px] flex-col items-center justify-center whitespace-normal bg-primary-500 text-center text-white opacity-0 transition duration-500 hover:opacity-90`


  return (
    <li className='relative mx-5 inline-block h-[380px] w-[450px]'>
    <div className={overlayStyles}>
        <p className='text-2xl'>{name}</p>
        <p className='mt-5'>{description}</p>
    </div>
    <img src={image} alt="ourclasses-image"/>
  </li>
  )

}

export default Class 