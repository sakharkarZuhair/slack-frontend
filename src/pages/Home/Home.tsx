import React from 'react'
import HeroSection from '../../components/Home/HeroSection'
import SecondSection from '../../components/Home/SecondSection'
import ThirdSection from '../../components/Home/ThirdSection'
import FourthSection from '../../components/Home/FourthSection'
import FifthSection from '../../components/Home/FifthSection'
import SixthSection from '../../components/Home/SixthSection'
import Container from '../../components/Container'
import CommonFooter from '../../components/CommonFooter'

const Home = () => {
  return (
    <div className="relative z-50">
      <HeroSection />
      <div className="h-[300px] w-full bg-secondary mt-[-250px] bottom-0 -z-10"></div>
      <div className="w-full py-[20px] bg-secondary">
        <SecondSection />
      </div>
      <div className="w-full bg-white py-[50px]">
        <ThirdSection />
      </div>
      <div className="max-w-[1500px] flex flex-col items-center justify-center m-auto w-full py-[50px]">
        <FourthSection />
        <p className="text-tertiary text-[15px] font-light text-center mt-16">
          * Weighted average. Based on 2,707 survey responses from weekly Slack
          users in the US, UK, Australia and Canada with a ± 2% margin of error
          at 95% CI (December 2021).
        </p>
      </div>
      <div className="w-full py-[60px] bg-secondary">
        <FifthSection />
      </div>
      <div className="w-full relative">
        <SixthSection />
      </div>
      <Container>
        <CommonFooter />
      </Container>
    </div>
  )
}

export default Home
