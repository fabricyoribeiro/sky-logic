import Image from 'next/image'
import Aviator from '../../public/assets/aviator.png'

import And from '../../public/gates/and.svg'
import Nand from '../../public/gates/nand.svg'
import Nor from '../../public/gates/nor.svg'
import Nxor from '../../public/gates/nxor.svg'
import Or from '../../public/gates/or.svg'
import Xor from '../../public/gates/xor.svg'

import Void from '../../public/gates/void.svg'

import { ArrowRight, ArrowUp, Play, Trash } from 'phosphor-react'
import { useState } from 'react'
import Modal from '@/components/Modal'
import Game from '@/components/Game'

export default function LevelThree() {
  const gates = [Void, And, Void, Nand, Void, Nor]
  const challenge = (
    <div className="text-4xl text-[#004d59] w-fit px-4 bg-light-blue border border-dark-blue rounded-lg mb-2 h-14 flex flex-row items-center gap-2">
      <span>1</span> 
      <span className="bg-white px-8 h-fit rounded-full">?</span>
      <span> 0 = 1</span>
    </div>
  )
  return (
    <Game key={1} gates={gates} leftHit={828} topHit={301} challenge={challenge} />
  )
}