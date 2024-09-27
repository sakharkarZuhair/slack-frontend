import React from 'react'
import Typography from '../Typography'
import Container from '../Container'
import Button from '../Button'

interface NumberDataProps {
  number: string
  description: string
}

const numberData = [
  {
    number: '85%',
    description: 'of users say that Slack has improved communication*',
  },
  {
    number: '86%',
    description: 'feel that their ability to work remotely has improved*',
  },
  {
    number: '88%',
    description: 'feel more connected to their teams*',
  },
]

const ThirdSection = () => {
  return (
    <Container className="w-full my-[60px] flex-col gap-4">
      <p className="font-bold text-center text-[50px]">
        Teams large and small rely on Slack
      </p>
      <Typography variant="p" size="lg" weight="medium">
        Slack securely scales up to support collaboration at the world’s biggest
        companies.
      </Typography>
      <div className="flex items-center gap-4 mt-4">
        <Button className="py-4 px-[40px]" variant="primary">
          MEET SLACK FOR ENTERPRISE
        </Button>
        <Button className="py-4 px-[20px]" variant="outline">
          TALK TO SALES
        </Button>
      </div>
      <div className="grid grod-cols-1 md:grid-cols-3 justify-between w-full mt-10">
        {numberData.map((value, key) => {
          return (
            <NumberCard
              key={key}
              description={value?.description}
              number={value?.number}
            />
          )
        })}
      </div>
    </Container>
  )
}

const NumberCard = ({ number, description }: NumberDataProps) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <p className="text-[55px] text-primary font-bold">{number}</p>
      <p className='w-[250px]'>{description}</p>
    </div>
  )
}

export default ThirdSection
