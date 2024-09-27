import React from 'react'
import Container from '../Container'
import Typography from '../Typography'
import { cardFour, cardOne, cardThree, cardTwo } from '../../assets'
import Image from '../Image'
import { Link } from 'react-router-dom'
import { IoIosArrowRoundForward } from 'react-icons/io'

interface CardDataProps {
  image: string
  type: string
  title: string
  link: string
  linkDesc: string
}

const cardData = [
  {
    image: cardOne,
    type: 'Event',
    title: 'Ready for the future of AI in Slack',
    link: '/',
    linkDesc: 'WATCH ON DEMAND',
  },
  {
    image: cardTwo,
    type: 'Blog',
    title: "Ten featuresto know (and love) on Slack's tenth birthday",
    link: '/',
    linkDesc: 'READ MORE',
  },
  {
    image: cardThree,
    type: 'Customer story',
    title: 'How openAI expands ChatGPT with Slack',
    link: '/',
    linkDesc: 'READ MORE',
  },
  {
    image: cardFour,
    type: 'Webinar',
    title: 'Top Slack tips to boost productivity',
    link: '/',
    linkDesc: 'WATCH NOW',
  },
]

const FifthSection = () => {
  return (
    <Container>
      <div className="w-full">
        <Typography
          weight="bold"
          variant="h1"
          size="4xl"
          className="text-center"
        >
          Take a deeper dive into a new way to work
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 justify-between items-start mt-10">
          {cardData.map((value, key) => (
            <Card
              key={key}
              image={value?.image}
              link={value?.link}
              linkDesc={value?.linkDesc}
              title={value?.title}
              type={value?.type}
            />
          ))}
        </div>
      </div>
    </Container>
  )
}

const Card = ({ image, link, linkDesc, title, type }: CardDataProps) => {
  return (
    <div className="bg-white p-4 rounded-sm h-[420px] relative hover:scale-105 transition-transform duration-300">
      <div className='h-[208px]'>
        <Image src={image} className="w-full h-full object-cover" />
      </div>
      <div>
        <p className="text-sm text-tertiary mt-4">{type}</p>
        <Typography className="mt-4" variant="h2" size="xl" weight="bold">
          {title}
        </Typography>
        <div className="absolute bottom-2 w-full left-0 px-4">
          <div className="flex items-center justify-between w-full">
            <Link className="text-blue-500 text-base" to={link}>
              {linkDesc}
            </Link>
            <div className="text-blue-500 text-[28px]">
              <IoIosArrowRoundForward size={28} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FifthSection
