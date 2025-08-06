import React from 'react'

const Main = () => {
  return (
    <div className='p-[20px] container'>
<div className="px-[30px] ml-[25px] bg-[url('/bgimg.png')] bg-cover bg-center h-[600px] w-[1450px] flex flex-col items-center justify-center rounded-3xl">

  <div className="flex gap-4 mt-4 w-[600px] justify-center items-center">
    <input  type="text"  placeholder="Введите направление"  className="flex-1 border px-4 py-2 rounded-xl"/>
    <button className="bg-yellow-400 px-6 py-2 rounded-md font-semibold">Найти</button>
  </div>


  <div className="flex flex-wrap gap-6 mt-6 justify-center mt-[300px]">
    <span className="bg-gray-300 px-4 py-1 rounded-full border border-gray-400">Дубай</span>
    <span className="bg-gray-300 px-4 py-1 rounded-full border border-gray-400">Стамбул</span>
    <span className="bg-gray-300 px-4 py-1 rounded-full border border-gray-400">Санкт-Петербург</span>
    <span className="bg-gray-300 px-4 py-1 rounded-full border border-gray-400">Казань</span>
    <span className="bg-gray-300 px-4 py-1 rounded-full border border-gray-400">Мурманск</span>
  </div>
</div>

    </div>
  )
}

export default Main
