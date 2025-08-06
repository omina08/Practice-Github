import React from 'react'

const Population = () => {
  return (
    <div>
      <div className="p-10 px-[50px]">
  <h2 className="text-3xl font-bold mb-2">Популярные направления</h2>
  <p className="text-gray-500 mb-6">Проводим индивидуальные и групповые экскурсии на русском языке</p>

  <div className="flex flex-wrap gap-6">

    <div className="rounded-xl h-[400px] bg-[url('/Mask.png')] bg-cover bg-center text-white flex flex-col justify-end p-4 w-[450px] ml-[0px]">
      <h3 className="text-lg font-semibold">Экскурсии <br /> в Санкт-Петербурге</h3>
      <span className="bg-yellow-400 text-black px-3 py-1 mt-2 rounded-full text-sm w-max">15 экскурсий</span>
    </div>
    
    <div className="rounded-xl h-[400px] bg-[url('/Adobe.png')] bg-cover bg-center text-white flex flex-col justify-end p-4 w-[450px]">
      <h3 className="text-lg font-semibold">Экскурсии в Стамбуле</h3>
      <span className="bg-yellow-400 text-black px-3 py-1 mt-2 rounded-full text-sm w-max">15 экскурсий</span>
    </div>
    
    <div className="rounded-xl h-[400px] bg-[url('/Stock.png')] bg-cover bg-center text-white flex flex-col justify-end p-4 w-[450px]">
      <h3 className="text-lg font-semibold">Экскурсии в Дубае</h3>
      <span className="bg-yellow-400 text-black px-3 py-1 mt-2 rounded-full text-sm w-max">15 экскурсий</span>
    </div>
    
    <div className=" rounded-xl h-[350px] bg-[url('/image.png')] bg-cover bg-center text-white flex flex-col justify-end p-4 w-[600px] ml-[100px]">
      <h3 className="text-lg font-semibold">Экскурсии в Калининграде</h3>
      <span className="bg-yellow-400 text-black px-3 py-1 mt-2 rounded-full text-sm w-max">15 экскурсий</span>
    </div>
    
    <div className="rounded-xl h-[350px] bg-[url('/img2.png')] bg-cover bg-center text-white flex flex-col justify-end p-4 w-[600px]">
      <h3 className="text-lg font-semibold">Экскурсии в Мурманске</h3>
      <span className="bg-yellow-400 text-black px-3 py-1 mt-2 rounded-full text-sm w-max">15 экскурсий</span>
    </div>
  </div>
</div>

    </div>
  )
}

export default Population
