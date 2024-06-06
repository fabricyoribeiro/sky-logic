import Image from "next/image";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import Aviator from "../../public/assets/aviator.png";
import Logo from "../../public/logo.svg";
import Link from "next/link";

export default function Home() {
  function saveLevelStates() {
    const initialState = {
      level2: false, // Nível 2 está bloqueado test
      level3: false, // Nível 2 está bloqueado
    };

    try {
      const stateJSON = JSON.stringify(initialState);
      localStorage.setItem("levelStates", stateJSON);
      console.log("Estado dos níveis salvo com sucesso.");
    } catch (error) {
      console.error("Erro ao salvar o estado dos níveis:", error);
    }
  }

  return (
    <div
      className={`bg-[url('../../public/assets/bg.png')] h-screen w-screen bg-no-repeat bg-cover flex items-center justify-center ${inter.className}`}
    >
      <main className="flex flex-col items-center gap-10 ">
        <Image src={Aviator} height={200} width={200} alt={""} />
        <Image alt="" src={Logo} width={350} height={50} />
        <Link href="/instructions">
          <button
            className="text-4xl bg-light-green border-dark-green border-4 px-8 py-4 font-bowlbyone rounded-full "
            onClick={saveLevelStates}
          >
            Jogar
          </button>
        </Link>
      </main>
    </div>
  );
}
