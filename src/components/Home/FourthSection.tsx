import React from 'react'
import { fourthSection } from '../../assets'
import Typography from '../Typography'
import CustomLink from '../CustomLink'

const FourthSection = () => {
  return (
    <div className="w-full flex items-center justify-between gap-6">
      <div className="video-container w-[776.94px] h-[437.20px] rounded-r-full overflow-hidden mt-8">
        <video
          className="w-full h-auto"
          controls={false}
          autoPlay={true}
          loop={true}
          muted={true}
        >
          <source src={fourthSection} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="w-[600px]">
        <Typography
          variant="h1"
          size="3xl"
          weight="light"
          className="italic leading-[40px]"
        >
          {
            '"Many technology employees were gravitating naturally to Slack. So we followed our users to what has become one of our most important tools."'
          }
        </Typography>
        <p className="font-semibold text-lg mt-6">Matt Beal</p>
        <p className="font-normal text-lg">
          Director of Technology Strategy and Architecture, Vodafone
        </p>
        <div className="mt-6">
          <CustomLink link="/" desc="See more customer stories" />
        </div>
      </div>
    </div>
  )
}

export default FourthSection
