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
import clsx from 'clsx'

interface Props {
  gates: any[]
  topHit: number
  leftHit: number
  challenge: any
  level?: number
}

export default function Game({
  gates,
  topHit,
  leftHit,
  challenge,
  level
}: Props) {
  const [top, setTop] = useState<number>(16)
  const [left, setLeft] = useState<number>(28)
  const [commands, setCommands] = useState<string[]>([])
  // const [topHit, leftHit] = [111, 828]

  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const [passedLevel, setPassedLevel] = useState<boolean>(false)

  const delay = (ms: number | undefined) =>
    new Promise(resolve => setTimeout(resolve, ms))

  const executeCommands = async () => {
    var [topTemp, leftTemp] = [0, 0]

    for (const command of commands) {
      if (command === 'right') {
        setLeft(prevLeft => {
          leftTemp = prevLeft + 160
          return prevLeft + 160
        })
        setTop(prevTop => {
          topTemp = prevTop + 95
          return prevTop + 95
        })
      } else if (command === 'top') {
        setLeft(prevLeft => {
          leftTemp = prevLeft + 160
          return prevLeft + 160
        })
        setTop(prevTop => {
          topTemp = prevTop - 95
          return prevTop - 95
        })
      }
      // Aguarde 1 segundo antes de executar o próximo comando (para visualização)
      await delay(500)
    }

    console.log(topTemp, leftTemp, topHit, leftHit)
    if (topHit === topTemp && leftHit === leftTemp) {
      // alert('ganhou')
      setPassedLevel(true)
      setModalOpen(true)
    } else {
      setPassedLevel(false)
      setModalOpen(true)
    }
  }

  const fullList = () => {
    return commands.length === 10 ? true : false
  }

  // const gates = [And, Nand, Xor, Nxor, Or, Nor]
  // const gates = [Void, And, Void, Nand, Void, Nor]

  const divs = []
  // var pos = 0

  /*corrigir */
  /*retirar este trecho  */
  // for (let i = 1; i < 37; i++) {
  //   if (i > 1 && i % 6 === 0) {
  //     divs.push(
  //       <div  className="bg-light-blue  border border-dark-blue flex justify-center items-center">
  //         <Image alt="" src={gates[pos]} width={level === 2 ? 140  : 80} height={95} />
  //       </div>
  //     )
  //     pos++
  //   } else {
  //     divs.push(<div className="bg-light-blue  border border-dark-blue"></div>)
  //   }
  // }
  for (let i = 1; i < 37; i++) {
    if (i > 1 && i % 6 === 0) {
      divs.push(
        <div className="bg-light-blue  border border-dark-blue flex justify-center items-center"></div>
      )
    } else {
      divs.push(<div className="bg-light-blue  border border-dark-blue"></div>)
    }
  }

  return (
    <div className="bg-[url('../../public/assets/bg.png')] h-screen w-screen bg-no-repeat bg-cover flex items-center justify-center ">
      <Modal open={modalOpen} passedLevel={passedLevel} />
      <main>
        {/* <div className="text-4xl text-[#004d59] w-fit px-4 bg-light-blue border border-dark-blue rounded-lg mb-2 h-14 flex flex-row items-center gap-2">
          <span>1</span>{' '}
          <span className="bg-white px-8 h-fit rounded-full">?</span>
          <span> 0 = 1</span>
        </div> */}

        {challenge}

        <div className="w-[960px] h-[570px] grid grid-cols-6 gap-0 border border-dark-blue rounded-xl overflow-hidden relative">
          {divs}

          {/*top começa de 16px e aumenta a cada 95 */}
          {/* left começa de 28px e aumenta a cada  160 */}

          <div
            style={{
              position: 'absolute',
              top: `${top}px`,
              left: `${left}px`,
              zIndex: 100,
            }}
          >
            <Image src={Aviator} width={100} alt="" />
          </div>
          <Image
            src={gates[0]}
            alt=""
            width={level !== 1 ? 140 : 80}
            height={95}
            className={clsx('absolute  top-[95px]', {
              'left-[840px]' : level === 1,
              'left-[810px]' : level === 2 || level === 3,
            })}
          />
          <Image
            src={gates[1]}
            alt=""
            width={level !== 1 ? 140 : 80}
            height={95}
            className={clsx('absolute  top-[285px]', {
              'left-[840px]' : level === 1,
              'left-[810px]' : level === 2 || level === 3,
            })}
          />
          <Image
            src={gates[2]}
            alt=""
            width={level !== 1 ? 140 : 80}
            height={95}
            className={clsx('absolute  top-[475px] ', {
              'left-[840px]' : level === 1,
              'left-[810px]' : level === 2 || level === 3,
            })}
          />
        </div>

        <div className="flex flex-row items-center gap-4 h-14 mt-2">
          <ArrowUp
            weight="bold"
            className="button-controls"
            onClick={() => {
              if (fullList()) {
                alert('O limite de comandos é 10')
                return
              }
              setCommands([...commands, 'top'])
            }}
          />
          <ArrowRight
            weight="bold"
            className="button-controls"
            onClick={() => {
              if (fullList()) {
                alert('O limite de comandos é 10')
                return
              }
              setCommands([...commands, 'right'])
            }}
          />
          <Trash
            weight="bold"
            className="bg-[#6DE9A6] text-red-500  p-1 w-14 h-12 border-4 border-red-500 rounded-md"
            onClick={() => {
              const array = commands
              array.pop()
              setCommands([...array])
            }}
          />
          <div className="bg-white h-full w-full pl-8  rounded-md border border-[#004d59] flex flex-row gap-2 items-center ">
            {commands?.map(command =>
              command === 'right' ? (
                <ArrowRight
                  key={command}
                  weight="bold"
                  className="button-controls"
                />
              ) : (
                <ArrowUp
                  key={command}
                  weight="bold"
                  className="button-controls"
                />
              )
            )}
          </div>
          <Play
            weight="bold"
            className="button-controls"
            onClick={() => {
              executeCommands()
            }}
          />
        </div>
      </main>
    </div>
  )
}
