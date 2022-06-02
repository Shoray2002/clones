import Image from 'next/image'
import React from 'react'
import {
  ChevronDownIcon,
  HomeIcon,
  SearchIcon,
  MenuIcon,
} from '@heroicons/react/solid'
import {
  BellIcon,
  ChatIcon,
  GlobeIcon,
  PlusIcon,
  SparklesIcon,
  SpeakerphoneIcon,
  VideoCameraIcon,
} from '@heroicons/react/outline'
import { signIn, signOut, useSession } from 'next-auth/react'
function Header() {
  const { data: session } = useSession()
  return (
    <div className="flex bg-slate-50 px-4 py-2 shadow-sm sticky top-0 z-50">
      <div className="relative h-10 w-20 flex-shrink-0">
        <Image
          objectFit="contain"
          src="https://upload.wikimedia.org/wikipedia/en/thumb/5/58/Reddit_logo_new.svg/2560px-Reddit_logo_new.svg.png"
          layout="fill"
        />
      </div>
      <div className="flex items-center mx-7 xl:min-w-[250px] bg-transparent ">
        <HomeIcon className="h-5 w-5 ml-2" />
        <p className="flex-1 ml-2 hidden lg:inline">Home</p>
        <ChevronDownIcon className="h-5 w-5" />
      </div>

      {/* search box */}
      <form
        action=""
        className="flex flex-1 items-center space-x-2 border border-gray-200 bg-gray-100 px-3 py-1 rounded-sm"
      >
        <SearchIcon className="h-6 w-6 text-gray-400" />
        <input
          type="text"
          placeholder="Search Reddit"
          className="outline-none flex-1 bg-transparent"
        />
        <button type="submit" className="hidden" />
      </form>

      <div className="text-gray-500 space-x-2 items-center mx-5 hidden lg:inline-flex">
        <SparklesIcon className="icon" />
        <GlobeIcon className="icon" />
        <VideoCameraIcon className="icon" />
        <hr className="h-10 border border-gray-100" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <PlusIcon className="icon" />
        <SpeakerphoneIcon className="icon" />
      </div>
      <div className="ml-5 flex items-center lg:hidden">
        <MenuIcon className="icon" />
      </div>
      {/* sign in/out */}
      {session ? (
        <div
          className="hidden lg:flex items-center space-x-2 border border-gray-100 p-2 cursor-pointer flex-shrink-0"
          onClick={() => signOut()}
        >
          <div className="relative h-5 w-5   ">
            <Image
              src="https://logoeps.com/wp-content/uploads/2014/09/52053-reddit-logo-icon-vector-icon-vector-eps.png"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="flex-1 text-sm">
            <p className="truncate">{session.user?.name}</p>
            <p className="text-gray-500">1 Karma</p>
          </div>
          <ChevronDownIcon className="h-5 flex-shrink-0 text-gray-400" />
        </div>
      ) : (
        <div
          className="hidden lg:flex items-center space-x-2 border border-gray-100 p-2 cursor-pointer flex-shrink-0"
          onClick={() => signIn()}
        >
          <div className="relative h-5 w-5   ">
            <Image
              src="https://logoeps.com/wp-content/uploads/2014/09/52053-reddit-logo-icon-vector-icon-vector-eps.png"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <p className="text-gray-500">Sign-In</p>
        </div>
      )}
    </div>
  )
}

export default Header
