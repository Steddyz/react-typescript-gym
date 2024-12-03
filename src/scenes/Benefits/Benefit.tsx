import { SelectedPage } from '@/shared/type'
import { FC } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { motion } from 'framer-motion'

type Props = {
    setSelectedPage: (value: SelectedPage) => void,
    icon: JSX.Element,
    title: string,
    description: string,
}

const childVariant = {
    hidden: {opacity: 0, scale: 0.9},
    visible: {opacity: 1, scale: 1}
}

const Benefit: FC<Props> = ({setSelectedPage, icon, title, description}) => {
  return (

        <motion.div 
        className='mt-5 text-center rounded-md border-2 border-gray-100 px-5 py-16'
        variants={childVariant}
        >
            <div className='md-4 flex justify-center'>
                <div className='rounded-full border-2 border-gray-100 bg-primary-100 p-4'>{icon}</div>
            </div>
            <h4 className='font-bold'>{title}</h4>
            <p className='my-3'>{description}</p>
            <AnchorLink
            className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
            href={`#${SelectedPage.ContactUs}`}
            >
                Learn More
            </AnchorLink>
        </motion.div>
  )
}

export default Benefit