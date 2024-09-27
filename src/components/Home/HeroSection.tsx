import React from 'react'
import Typography from '../Typography'
import Button from '../Button'
import { airBnb, etsy, heroVideo, nasa, nyt, target, uber } from '../../assets'
import Image from '../Image'
import Container from '../Container'

const clients = [airBnb, nasa, uber, target, nyt, etsy]

const HeroSection = () => {
  return (
    <Container className="w-ful p-0 z-50">
      <div className="flex flex-col justify-center items-center gap-5">
        <p
          className="text-center font-bold text-[50px]"
          
        >
          Made for people.{' '}
          <span className="text-primary">Built for productivity.</span>
        </p>
        <Button className="py-4 px-6" variant="primary">
          GET STARTED
        </Button>
        <Typography
          className="text-center"
          variant="h3"
          size="lg"
          weight="semibold"
        >
          Slack is free to try{' '}
          <span className="font-normal">for as long as you like</span>
        </Typography>
        <div className="mt-6">
          <IconsSection />
        </div>
        <div className="video-container w-[900px] h-[547.03px] rounded-md overflow-hidden mt-8">
          <video
            className="w-full h-auto"
            controls={false}
            autoPlay={true}
            loop={true}
            muted={true}
          >
            <source src={heroVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </Container>
  )
}

const IconsSection = () => {
  return (
    <ul className="flex items-center gap-10">
      {clients.map((value, key) => (
        <li key={key} className="inline-flex">
          <Image
            src={value}
            alt="Clients"
            className="h-full w-full object-contain"
          />
        </li>
      ))}
    </ul>
  )
}

export default HeroSection
