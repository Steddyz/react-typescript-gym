import { FC } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

interface Props{
  page: string
  selectedPage: string;
  setSelectedPage: (value: string) => void;
}

const Link: FC<Props> = ({ page, selectedPage, setSelectedPage }) => {
  const toLoverCasePage = page.toLowerCase().replace(/ /g, "");

  return (
    <AnchorLink
    className={`${selectedPage === toLoverCasePage ? "text-primary-500" : ""} transititon duration-500 hover:text-primary-300`}
    href={`#${toLoverCasePage}`}
    onClick={() => setSelectedPage(toLoverCasePage)}

    >
      {page}
    </AnchorLink>
  )
  
}

export default Link