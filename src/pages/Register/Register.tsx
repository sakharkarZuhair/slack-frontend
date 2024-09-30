import { FcGoogle } from 'react-icons/fc'
import { slackRegister } from '../../assets'
import Image from '../../components/Image'
import PassportButton from '../../components/PassportButton'
import Typography from '../../components/Typography'
import { FaGithub } from 'react-icons/fa'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { BsStars } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className="relative flex justify-center items-center m-auto">
      <div className="absolute right-10 top-[70px]">
        <NewToSlack />
      </div>
      <div className="mt-[70px] flex flex-col items-center">
        <div className="h-[26px] w-[102px]">
          <Image className="w-full h-full object-cover" src={slackRegister} />
        </div>
        <Typography className="mt-[60px]" variant="h1" size="4xl" weight="bold">
          Sign in to Slack
        </Typography>
        <Typography
          variant="p"
          size="md"
          weight="light"
          className="mt-[20px] text-[#454245]"
        >
          We suggest using the{' '}
          <span className="font-semibold">email address you use at work.</span>
        </Typography>
        <div className="w-[350px] mt-6 flex flex-col gap-4">
          <div className="w-full">
            <PassportButton
              icon={<FcGoogle size={26} />}
              text="Sign in with google"
            />
          </div>
          <div className="w-full">
            <PassportButton
              icon={<FaGithub size={26} />}
              text="Sign in with google"
            />
          </div>

          <div className="flex items-center gap-3 w-full mt-3">
            <div className="w-full h-[1px] bg-gray-300" />
            <p className="m-0">OR</p>
            <div className="w-full h-[1px] bg-gray-300" />
          </div>

          <div className="mt-4 w-full">
            <Input placeholder="name@work-email.com" type="email" />
          </div>

          <div className="w-full">
            <Button variant="primary" className="w-full rounded-xl py-3">
              Sign In With Email
            </Button>
          </div>

          <div className="w-full bg-gray-200 flex items-start gap-2 p-4 rounded-md">
            <div className="text-gray-400">
              <BsStars size={20} />
            </div>
            <p className="text-gray-500 text-sm font-light">
              We’ll email you a magic code for a password-free sign in. Or you
              can{' '}
              <Link to={'/'} className="font-semibold text-blue-500">
                sign in manually instead.
              </Link>
            </p>
          </div>
        </div>
        <div className="absolute bottom-[-200px]">
          <ul className='flex items-center gap-4'>
            <Links link='/' text='Privacy & Terms' />
            <Links link='/' text='Contact Us' />
          </ul>
        </div>
      </div>
    </div>
  )
}

const Links = ({ link, text }: { link: string; text: string }) => {
  return (
    <li className='text-gray-500 text-sm hover:underline transition-all'>
      <Link to={link}>{text}</Link>
    </li>
  )
}

const NewToSlack = () => {
  return (
    <div className="flex flex-col w-full text-right justify-end items-center">
      <p className="text-right m-0 text-sm ml-10">New to Slack?</p>
      <Link className="text-blue-500 text-sm font-semibold" to={'/'}>
        Create an account
      </Link>
    </div>
  )
}

export default Register
