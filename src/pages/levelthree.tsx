import Image from 'next/image'
import Aviator from '../../public/assets/aviator.png'

import And from '../../public/gates/and.svg'
import Nand from '../../public/gates/nand.svg'
import Nor from '../../public/gates/nor.svg'
import Nxor from '../../public/gates/nxor.svg'
import Or from '../../public/gates/or.svg'
import Xor from '../../public/gates/xor.svg'

import Airplane from '../../public/obstacles/airplane.png'


import GroupOne from '../../public/gates_level_three/one.svg'
import GroupTwo from '../../public/gates_level_three/two.svg'
import GroupThree from '../../public/gates_level_three/three.svg'

import Void from '../../public/gates/void.svg'

import { ArrowRight, ArrowUp, Play, Trash } from 'phosphor-react'
import { useState } from 'react'
import Modal from '@/components/Modal'
import Game from '@/components/Game'

export default function LevelThree() {
  const gates = [GroupOne, GroupTwo, GroupThree]
  const challenge = (
    // <div className="text-4xl text-[#004d59] w-fit px-4 bg-light-blue border border-dark-blue rounded-lg mb-2 h-14 flex flex-row items-center gap-2">
    //   <span>1</span>
    //   <span className="bg-white px-8 h-fit rounded-full">?</span>
    //   <span> 0 = 1</span>
    // </div>

    <div className="flex items-center gap-4">
      <div className="text-3xl text-[#004d59] w-fit px-4 bg-light-blue border border-dark-blue rounded-lg mb-1 h-10 flex items-center justify-center">
        <span>A = 1 | B = 0 | C = 1 | D = 0 | S = 1</span>
      </div>
      <span className="text-2xl font-bold text-[#004d59]">Lv. 3</span>
    </div>
  )
  return (
    <Game
      key={1}
      level={3}
      gates={gates}
      leftHit={828}
      topHit={491}
      challenge={challenge}
      obstacle={Airplane}
      obstaclePoints={{x: 186, y:301}}
      startPoints={{x: 28, y: 396}}
    />
  )
}
