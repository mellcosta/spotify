import { Home as HomeIcon, Search, Library, PlusSquare, Heart, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize2 } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className=" flex flex-1">
        <aside className=" w-72 bg-zinc-950 p-6 ">

          <div className=" flex items-center gap-2 ">
            <div className=" w-3 h-3 bg-red-500 rounded-full " />
            <div className=" w-3 h-3 bg-yellow-500 rounded-full " />
            <div className=" w-3 h-3 bg-green-500 rounded-full " />
          </div>

          <nav className="space-y-5 mt-10">
            <a href="" className=" flex items-center gap-3 text-s font-semibold text-zinc-100 ">
              <HomeIcon />
              Home
            </a>
            <a href="" className=" flex items-center gap-3 text-sm font-semibold text-zinc-200 ">
              <Search />
              Search
            </a>
            <a href="" className=" flex items-center gap-3 text-sm font-semibold text-zinc-200 ">
              <Library />
              Your Library
            </a>
          </nav>

          <nav className="space-y-5 mt-10">
              <a href="" className=" flex items-center gap-3 text-sm font-semibold text-zinc-200 pt-50">
                <PlusSquare />
                Create Playlist
              </a>
              <a href="" className=" flex items-center gap-3 text-sm font-semibold text-zinc-200 ">
                <Heart className="bg-purple-600 text-xs rounded"/>
                Liked Songs
              </a>
          </nav>

          <nav className=" mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3 ">
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100" > Kpop Songs </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100" > Hot Hits Brasil </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100" > Best J-Rock </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100" > My Playlist </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100" > Top Angola </a>
          </nav>

        </aside>

        <main className=" flex-1 p-6 ">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <a className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
                <Image src="/BP-born.webp" width={104} height={104} alt="Capa do Album Born Pink"/>
                <strong>Born Pink</strong>

                <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                  <Play />
                </button>
            </a>
            <a className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
                <Image src="/OK-eye.png" width={104} height={104} alt="Capa do Album Eye of the Storm"/>
                <strong>Eye of The Storm</strong>

                <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                  <Play />
                </button>
            </a>
            <a className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
                <Image src="/DC-nightmare.jpg" width={104} height={104} alt="Capa do Album Nightmare"/>
                <strong>Nightmare</strong>

                <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                  <Play />
                </button>
            </a>
            <a className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
                <Image src="/DC-summer.webp" width={104} height={104} alt="Capa do Album Summer Holiday"/>
                <strong>Summer Holiday</strong>

                <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                  <Play />
                </button>
            </a>
            <a className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
                <Image src="/BP-album.png" width={104} height={104} alt="Capa do Album Album"/>
                <strong>Album</strong>

                <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                  <Play />
                </button>
            </a>
            <a className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
                <Image src="/OK-ambitions.jpg" width={104} height={104} alt="Capa do Album Ambitions"/>
                <strong>Ambitions</strong>

                <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                  <Play />
                </button>
            </a>
            
          </div>

          <h2 className="font-semibold text-2xl mt-10">Made for Melissa Costa</h2>

          <div className="grid grid-cols-8 gap-4 mt-4">
            <a className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10 ">
                <Image src="/BP-born.webp" width={120} height={120} alt="Capa do Album Born Pink"/>
                <strong className="font-semibold">Born Pink</strong>
                <span className="text-sm text-zinc-400">Wallows, COIN. girl in red and more</span>
            </a>
            <a className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10 ">
                <Image src="/OK-eye.png" width={120} height={120} alt="Capa do Album Eye of the Storm"/>
                <strong className="font-semibold">Eye of The Storm</strong>
                <span className="text-sm text-zinc-400">Wallows, COIN. girl in red and more</span>
            </a>
            <a className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10 ">
                <Image src="/DC-nightmare.jpg" width={120} height={120} alt="Capa do Album Nightmare"/>
                <strong className="font-semibold">Nightmare</strong>
                <span className="text-sm text-zinc-400">Wallows, COIN. girl in red and more</span>
            </a>
            <a className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10 ">
                <Image src="/DC-summer.webp" width={120} height={120} alt="Capa do Album Summer Holiday"/>
                <strong className="font-semibold">Summer Holiday</strong>
                <span className="text-sm text-zinc-400">Wallows, COIN. girl in red and more</span>
            </a>
            <a className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10 ">
                <Image src="/BP-album.png" width={120} height={120} alt="Capa do Album Album"/>
                <strong className="font-semibold">Album</strong>
                <span className="text-sm text-zinc-400">Wallows, COIN. girl in red and more</span>
            </a>
            <a className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10 ">
                <Image src="/OK-ambitions.jpg" width={120} height={120} alt="Capa do Album Ambitions"/>
                <strong className="font-semibold">Ambitions</strong>
                <span className="text-sm text-zinc-400">Wallows, COIN. girl in red and more</span>
            </a>
            
          </div>

        </main>
      </div>
      <footer className=" bg-zinc-800 border-t border-zinc-700 px-6 py-4  flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/OK-eye.png" width={56} height={56} alt="Capa do Album Eye of the Storm" />
          <div className="flex flex-col">
            <strong className="font-normal">Headache</strong>
            <span className="text-xs text-zinc-400">One Ok Rock</span>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-6">
            <Shuffle size={20} className="text-zinc-200"/>
            <SkipBack size={20} className="text-zinc-200"/>

            <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black">
              <Play />
            </button>

            <SkipForward size={20} className="text-zinc-200"/>
            <Repeat size={20} className="text-zinc-200"/>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-400">0:31</span>
            <div className="h-1 rounded-full w-96 bg-zinc-600">
              <div className="h-1 w-40 bg-zinc-200 rounded-full"></div>
            </div>
            <span className="text-xs text-zinc-400">2:14</span>
          </div>
        </div>
        <div className="flex items-centergap-4">
          <Mic2 size={20} />
          <LayoutList size={20} />
          <Laptop2 size={20} />
          <div className="flex items-center gap-2">
            <Volume size={20} />
            <div className="h-1 rounded-full w-24 bg-zinc-600">
              <div className="bg-zinc-200 w-10 h-1 rounded-full"></div>
            </div>
          </div>
          <Maximize2 size={20} />
        </div>
      </footer>
    </div>
  )
}
