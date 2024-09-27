import React from 'react'
import Image from './Image'
import { slackSoloLogo } from '../assets'
import {
  companyList,
  featuresList,
  productList,
  resourcesList,
  solutionsList,
  whySlackList,
} from '../utils/footer-links'
import { Link } from 'react-router-dom'
import { MdOutlineCloudDownload } from 'react-icons/md'

interface ListProps {
  title: string
  link: string
}

const CommonFooter = () => {
  return (
    <div className="w-full mt-[55px] border-t-[1px] border-gray-200 pb-[55px]">
      <div className="w-full flex items-start gap-36 mt-16">
        <div>
          <div className="h-[80px] w-[80px]">
            <Image src={slackSoloLogo} className="h-full w-full object-cover" />
          </div>
        </div>
        <div className="flex items-start gap-20 w-full">
          <div className="flex flex-col gap-6">
            <FooterLinksLayout heading="PRODUCTS" links={productList} />
            <FooterLinksLayout heading="WHY SLACK?" links={whySlackList} />
          </div>
          <FooterLinksLayout heading="FEATURES" links={featuresList} />
          <FooterLinksLayout heading="SOLUTIONS" links={solutionsList} />
          <FooterLinksLayout heading="RESOURCES" links={resourcesList} />
          <FooterLinksLayout heading="COMPANY" links={companyList} />
        </div>
      </div>
      <div className="h-[1px] bg-gray-200 mt-[55px]" />
      <div className="flex justify-between items-center mt-[30px]">
        <div className="flex items-start gap-6">
          <div className="flex items-center gap-2 cursor-pointer text-blue-500">
            <p className="font-medium">Download Slack</p>
            <div>
              <MdOutlineCloudDownload size={20} />
            </div>
          </div>
          <div className="flex gap-6 items-center">
            <SecondaryLinks link="/" title="Privacy" />
            <SecondaryLinks link="/" title="Terms" />
            <SecondaryLinks link="/" title="Cookie preferences" />
            <SecondaryLinks link="/" title="Your privacy choices" />
          </div>
        </div>
        <div className='w-[450px]'>
          <p className="text-[14px] text-tertiary">
            ©2024 Slack Technologies, LLC, a Salesforce company. All rights
            reserved. Various trademarks held by their respective owners.
          </p>
        </div>
      </div>
    </div>
  )
}

const SecondaryLinks = ({ link, title }: ListProps) => {
  return (
    <Link className="text-tertiary font-medium text-[14px]" to={link}>
      {title}
    </Link>
  )
}

const FooterLinksLayout = ({
  heading,
  links,
}: {
  heading: string
  links: ListProps[]
}) => {
  return (
    <div>
      <p className="font-medium text-[16px] mb-2">{heading}</p>
      {links.map((value, key) => (
        <div className="flex flex-col gap-6 mt-2">
          <FooterLinks key={key} link={value?.link} title={value?.title} />
        </div>
      ))}
    </div>
  )
}

const FooterLinks = ({ link, title }: ListProps) => {
  return (
    <Link className="text-tertiary text-[14px]" to={link}>
      {title}
    </Link>
  )
}

export default CommonFooter
