// src/app/page.tsx

'use client'

import { useState } from 'react'
import Image from 'next/image'
import { PlusCircle } from 'lucide-react'

const characters = [
  { id: 1, name: 'Lion', image: 'https://pub-3626123a908346a7a8be8d9295f44e26.r2.dev/lion.png' },
  { id: 2, name: 'Elephant', image: 'https://pub-3626123a908346a7a8be8d9295f44e26.r2.dev/elephant.png' },
  { id: 3, name: 'Giraffe', image: 'https://pub-3626123a908346a7a8be8d9295f44e26.r2.dev/giraffe.png' },
  { id: 4, name: 'Penguin', image: 'https://pub-3626123a908346a7a8be8d9295f44e26.r2.dev/penguin.png' },
  { id: 5, name: 'Kangaroo', image: 'https://pub-3626123a908346a7a8be8d9295f44e26.r2.dev/kangaroo.png' },
  { id: 6, name: 'Gorilla', image: 'https://pub-3626123a908346a7a8be8d9295f44e26.r2.dev/gorilla.png' },
  { id: 7, name: 'Zebra', image: 'https://pub-3626123a908346a7a8be8d9295f44e26.r2.dev/zebra.png' },
  { id: 8, name: 'Koala', image: 'https://pub-3626123a908346a7a8be8d9295f44e26.r2.dev/koala.png' },
  { id: 9, name: 'Hippo', image: 'https://pub-3626123a908346a7a8be8d9295f44e26.r2.dev/hippo.png' },
  { id: 10, name: 'Panda', image: 'https://pub-3626123a908346a7a8be8d9295f44e26.r2.dev/panda.png' },
]


export default function Home() {
  const [selectedCharacter, setSelectedCharacter] = useState(null)

  const handleCreateCharacter = () => {
    alert('Create your own character feature coming soon!')
  }

  return (
    <div className="h-screen w-full max-w-4xl">
      <h2 className="text-3xl font-bold mb-6 text-center text-black">Select Your Animal Fighter</h2>
      <div className="grid grid-cols-3 gap-6">
        {characters.map((character) => (
          <button
            key={character.id}
            className={`p-4 rounded-lg transition-all transform hover:scale-110 ${
              selectedCharacter === character.id ? 'bg-yellow-400 scale-110' : 'bg-white'
            }`}
            onClick={() => setSelectedCharacter(character?.id)}
          >
            <Image
              src={character.image}
              alt={character.name}
              width={120}
              height={120}
              className="rounded-md object-cover"
            />
            <p className="mt-2 text-center font-semibold text-lg">{character.name}</p>
          </button>
        ))}
        <button
          className="p-4 rounded-lg transition-all transform hover:scale-110 bg-white flex flex-col items-center justify-center"
          onClick={handleCreateCharacter}
        >
          <PlusCircle size={80} className="text-gray-400 mb-2" />
          <p className="text-center font-semibold text-lg">Create Your Own</p>
        </button>
      </div>
      {selectedCharacter && (
        <p className="mt-6 text-2xl font-bold text-center text-black">
          You selected {characters.find((c) => c.id === selectedCharacter).name}!
        </p>
      )}
    </div>
  )
}
