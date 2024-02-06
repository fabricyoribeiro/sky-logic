import Aviator from '../../public/assets/aviator.png'
import Obstacle from '../../public/obstacles/airplane.png'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import { ArrowRight, ArrowUp, Trash } from 'phosphor-react'
const inter = Inter({ subsets: ['latin'] })
import Two from '../../public/gates/Two.svg'
import Link from 'next/link'

export default function Instructions() {
  return (
    <main
      className={`bg-[url('../../public/assets/bg.png')] h-screen w-screen bg-no-repeat bg-cover flex items-center justify-center text-[#004d59] ${inter.className}`}
    >
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center font-extrabold text-2xl">
          <span>Botões</span>
          <span>Instruções</span>
          <Image alt="" src={Aviator} width={100} />
        </div>
        <ul className="flex flex-col gap-4 text-xl font-semibold">
          <li className="flex items-center gap-8">
            <ArrowUp className="button-controls" weight="bold" />
            <p>
              Ao executar este comando, o avião sobe uma casa na diagonal (para
              direita e para cima)
            </p>
          </li>
          <li className="flex items-center gap-8">
            <ArrowRight className="button-controls" weight="bold" />
            <p>
              Ao executar este comando, o avião desce uma casa na diagonal (para
              direita e para baixo)
            </p>
          </li>
          <li className="flex items-center gap-8">
            <Trash
              weight="bold"
              className="bg-[#6DE9A6] text-red-500  p-1 w-14 h-12 border-4 border-red-500 rounded-md"
            />
            <p>Remove o último comando da lista de comandos</p>
          </li>
        </ul>
        <span className="font-extrabold text-2xl">Obetivo</span>
        <p className="text-xl font-semibold">
          O avião deverá voar até o circuito que satisfaz os valores de entrada
          e o de saída
        </p>
        <span className="font-extrabold text-2xl">Exemplo</span>
        <p className="text-xl font-semibold">
          Os seguintes valores são referentes ao circuito abaixo
        </p>
        <div className="flex  items-center">
          <div className="flex items-center gap-16 text-xl">
            <span className="font-semibold">A = 1 | B = 0 | S = 0</span>
            <Image alt="" src={Two} width={100} />
          </div>

        </div>
        <span className="font-extrabold text-2xl">Cuidado</span>
        <div className="flex items-center justify-between gap-3">
          <div className='flex items-center gap-3'>
            <Image src={Obstacle} alt="" width={100} />
            <p className="text-xl font-semibold">
              Se o avião colidir com o obstáculo, você perderá
            </p>
          </div>
          <Link
            href="/levels"
            className="bg-light-green border-4 border-dark-green py-3 px-8 rounded-full text-xl text-white  font-bold "
          >
            Continuar
          </Link>
        </div>
      </div>
    </main>
  )
}
