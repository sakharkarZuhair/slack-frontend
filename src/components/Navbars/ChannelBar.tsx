import React, { useState } from 'react'
import Header from '../Channel/Sidebar/Header'
import SubscriptionButton from '../Channel/Sidebar/SubscriptionButton'
import HeaderOption from '../Channel/Sidebar/HeaderOption'
import AllChannels from '../Channel/Channels/AllChannels'
import DirectMessages from '../DirectMessages/DirectMessages'

const ChannelBar = () => {
  const [showOptions, setShowOptions] = useState({
    showStarred: true,
    showChannels: true,
    showDirectMessages: true,
  })

  const handleToggleStarred = (isOpen: boolean) => {
    setShowOptions((prevState) => ({
      ...prevState,
      showStarred: isOpen,
    }))
  }

  const handleToggleChannel = (isOpen: boolean) => {
    setShowOptions((prevState) => ({
      ...prevState,
      showChannels: isOpen,
    }))
  }

  const handleToggleDirectMessages = (isOpen: boolean) => {
    setShowOptions((prevState) => ({
      ...prevState,
      showDirectMessages: isOpen,
    }))
  }
  return (
    <div className="p-3 flex flex-col">
      <Header />
      <SubscriptionButton />

      {/* Starred Section */}
      <HeaderOption
        isOpen={showOptions.showStarred}
        setIsOpen={handleToggleStarred}
        heading="Starred"
      >
        <ShowSowmthing />
      </HeaderOption>
      {showOptions.showStarred && (
        <div className="mt-1">
          <AllChannels />
        </div>
      )}

      {/* Channels Section */}
      <HeaderOption
        isOpen={showOptions.showChannels}
        setIsOpen={handleToggleChannel}
        heading="Channel"
      >
        <ShowSowmthing />
      </HeaderOption>
      {showOptions.showChannels && (
        <div className="mt-1">
          <AllChannels />
        </div>
      )}

      {/* Direct Messages Section */}
      <HeaderOption
        isOpen={showOptions.showDirectMessages}
        setIsOpen={handleToggleDirectMessages}
        heading="Direct Messages"
      >
        <ShowSowmthing />
      </HeaderOption>
      {showOptions.showDirectMessages && (
        <div className="mt-1">
          <DirectMessages />
        </div>
      )}
    </div>
  )
}

const ShowSowmthing = () => {
  return <div className="w-[200px] h-[200px] bg-white"></div>
}

export default ChannelBar
