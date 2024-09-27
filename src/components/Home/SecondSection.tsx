import React from 'react'
import Container from '../Container'
import {
  secondSectionOne,
  secondSectionThree,
  secondSectionTwo,
} from '../../assets'
import Typography from '../Typography'
import CustomLink from '../CustomLink'

interface CardProps {
  video: string
  title: string
  linkDesc: string
  description: string
  link: string
  right?: boolean
}

const cardData = [
  {
    video: secondSectionOne,
    title: 'Move faster with your tools in one place',
    description:
      'Automate away routine tasks with the power of generative AI and simplify your workflow with all your favourite apps ready to go in Slack.',
    linkDesc: 'Learn more about the Slack platform',
    link: '/',
  },
  {
    video: secondSectionTwo,
    title: 'Choose how you want to work',
    description:
      'In Slack, you’ve got all the flexibility to work when, where and how it’s best for you. You can easily chat, send audio and video clips, or join a huddle to talk things through live.',
    linkDesc: 'Learn more about flexible communication',
    link: '/',
    right: true,
  },
  {
    video: secondSectionThree,
    title: 'Bring your team together',
    description:
      'At the heart of Slack are channels: organised spaces for everyone and everything that you need for work. In channels, it’s easier to connect across departments, offices, time zones and even other companies.',
    linkDesc: 'Learn more about channels',
    link: '/',
  },
]

const SecondSection = () => {
  return (
    <Container className="my-[40px] w-full">
      <div className="w-full flex flex-col gap-[40px]">
        {cardData.map((value, key) => (
          <Card
            key={key}
            video={value?.video}
            title={value?.title}
            description={value?.description}
            linkDesc={value?.linkDesc}
            link={value?.link}
            right={value?.right}
          />
        ))}
      </div>
    </Container>
  )
}

const Card = ({
  video,
  title,
  description,
  linkDesc,
  link,
  right,
}: CardProps) => {
  return (
    <div
      className={`flex ${right == true ? 'flex-row-reverse' : 'flex-row'} items-center justify-between`}
    >
      <div className="video-container w-[600px] h-[346.39px] rounded-md overflow-hidden mt-8">
        <video
          className="w-full h-auto"
          controls={false}
          autoPlay={true}
          loop={true}
          muted={true}
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="w-[500px]">
        <p className="font-semibold text-[55px] leading-[60px]">{title}</p>
        <Typography className="mt-6" variant="p" size="xl" weight="light">
          {description}
        </Typography>
        <CustomLink desc={linkDesc} link={link} />
      </div>
    </div>
  )
}

export default SecondSection
