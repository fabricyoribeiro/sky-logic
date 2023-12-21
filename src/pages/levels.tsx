import Link from 'next/link'
import { ArrowUUpLeft, Backpack, KeyReturn, SkipBack } from 'phosphor-react'

export default function Levels() {
  return (
    <div className="bg-[url('../../public/assets/bg.png')] h-screen w-screen bg-no-repeat bg-cover flex items-center justify-center font-nerkoone">
      <main>
        <div className="flex justify-between">
          <h1 className="text-5xl ">Selecione um nível</h1>
          <Link href="/instructions">
            <ArrowUUpLeft size={50} weight="bold" />
          </Link>
        </div>
        <div className="flex justify-center items-center gap-24 w-[500px] h-[300px] border-4 bg-light-blue border-dark-green rounded-2xl text-4xl">
          <Link href="/levelone" className="level-styles">
            <span>1</span>
          </Link>
          <Link href="/leveltwo" className="level-styles">
            <span>2</span>
          </Link>
          <Link href="/levelthree" className="level-styles">
            <span>3</span>
          </Link>
        </div>
      </main>
    </div>
  )
}
