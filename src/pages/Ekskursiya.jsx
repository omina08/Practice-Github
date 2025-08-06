import React from 'react';

const Ekskursiya = () => {
  return (
    <div>
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-8">
            <h1 className="text-3xl font-bold text-gray-900">Экскурсии</h1>

            <div className="flex gap-4">
              <select className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-700">
                <option>Выберите город</option>
              </select>

              <input  type="date" className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-700"/>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-white rounded-2xl overflow-hidden shadow-lg ">
            <div className="relative h-48 bg-[url('/card1.jpg')] bg-cover bg-center">
              <button className="absolute top-4 right-4 p-2 rounded-full bg-white bg-opacity-20">
              <img className='w-6' src="https://img.icons8.com/ios-filled/50/FFFFFF/love-circled.png" alt="" />
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Энергия северной Венеции</h3>
              <p className="text-gray-600 text-sm mb-6">История Зимнего дворца и шедевры мастеров Западной Европы.</p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-gray-600 text-sm">от</span>
                    <span className="text-2xl font-bold text-gray-900">2750</span>
                    <span className="text-gray-600 text-sm">₽</span>
                    <span className="text-gray-500 text-xs">/ c чел</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span>10:00 - 16:00</span>
                    <img className='w-6' src="https://img.icons8.com/ios-filled/50/FFFFFF/love-circled.png" alt="" />
                  </div>
                </div>
                <button className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mt-5">
                <img src="https://img.icons8.com/ios/250/4D4D4D/plus.png" alt="" />
                </button>
              </div>
            </div>
          </div>

   
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <div className="relative h-48  bg-[url('/card2.png')] bg-cover bg-center">
              <button className="absolute top-4 right-4 p-2 rounded-full bg-white bg-opacity-20">
              <img className='w-6' src="https://img.icons8.com/ios-filled/50/FFFFFF/love-circled.png" alt="" />
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Тайны Казанского собора</h3>
              <p className="text-gray-600 text-sm mb-6">Уникальная экскурсия c рассказами o религии, архитектуре и мифах.</p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-gray-600 text-sm">от</span>
                    <span className="text-2xl font-bold text-gray-900">1900</span>
                    <span className="text-gray-600 text-sm">₽</span>
                    <span className="text-gray-500 text-xs">/ c чел</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span>13:00 - 15:00</span>
                    <img className='w-6' src="https://img.icons8.com/ios-filled/50/FFFFFF/love-circled.png" alt="" />
                  </div>
                </div>
                <button className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mt-5">
                <img src="https://img.icons8.com/ios/250/4D4D4D/plus.png" alt="" />
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <div className="relative h-48  bg-[url('/card3.png')] bg-cover bg-center">
              <button className="absolute top-4 right-4 p-2 rounded-full bg-white bg-opacity-20">
              <img className='w-6' src="https://img.icons8.com/ios-filled/50/FFFFFF/love-circled.png" alt="" />
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Питер на закате</h3>
              <p className="text-gray-600 text-sm mb-6">Романтическая прогулка на теплоходе по Неве под живую музыку.</p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-gray-600 text-sm">от</span>
                    <span className="text-2xl font-bold text-gray-900">3200</span>
                    <span className="text-gray-600 text-sm">₽</span>
                    <span className="text-gray-500 text-xs">/ c чел</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span>18:30 - 21:00</span>
                    <img className='w-6' src="https://img.icons8.com/ios-filled/50/FFFFFF/love-circled.png" alt="" />
                  </div>
                </div>
                <button className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mt-5">
                <img src="https://img.icons8.com/ios/250/4D4D4D/plus.png" alt="" />
                </button>
              </div>
            </div>
          </div>


          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <div className="relative h-48  bg-[url('/card4.png')] bg-cover bg-center">
              <button className="absolute top-4 right-4 p-2 rounded-full bg-white bg-opacity-20">
      <img className='w-6' src="https://img.icons8.com/ios-filled/50/FFFFFF/love-circled.png" alt="" />
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Секреты Достоевского</h3>
              <p className="text-gray-600 text-sm mb-6">Атмосферная экскурсия по местам из романов великого писателя.</p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-baseline gap-1 mb-1 mt-3">
                    <span className="text-gray-600 text-sm">от</span>
                    <span className="text-2xl font-bold text-gray-900">1500</span>
                    <span className="text-gray-600 text-sm">₽</span>
                    <span className="text-gray-500 text-xs">/ c чел</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span>11:00 - 13:00</span>
                  </div>
                </div>
                <button className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mt-6">
                <img className='mt-7' src="https://img.icons8.com/ios/250/4D4D4D/plus.png" alt="" />
                </button>
              </div>
            </div>
          </div>

        </div>


      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
   
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <div className="relative h-48  bg-[url('/card5.png')] bg-cover bg-center">
              <button className="absolute top-4 right-4 p-2 rounded-full bg-white bg-opacity-20">
              <img className='w-6' src="https://img.icons8.com/ios-filled/50/FFFFFF/love-circled.png" alt="" />
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Энергия северной Венеции</h3>
              <p className="text-gray-600 text-sm mb-6">История Зимнего дворца и шедевры мастеров Западной Европы.</p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-gray-600 text-sm">от</span>
                    <span className="text-2xl font-bold text-gray-900">2750</span>
                    <span className="text-gray-600 text-sm">₽</span>
                    <span className="text-gray-500 text-xs">/ c чел</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span>c 10:00 до 16:00</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                <button className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <img className='' src="https://img.icons8.com/ios/250/4D4D4D/plus.png" alt="" />
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <div className="relative h-48  bg-[url('/card6.png')] bg-cover bg-center">
              <button className="absolute top-4 right-4 p-2 rounded-full bg-white bg-opacity-20">
              <img className='w-6' src="https://img.icons8.com/ios-filled/50/FFFFFF/love-circled.png" alt="" />
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Загадки Петербурга</h3>
              <p className="text-gray-600 text-sm mb-6">Групповая экскурсия c посещением Спаса на Крови и прогулкой по набережной.</p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-baseline gap-1 mb-1 mt-4">
                    <span className="text-gray-600 text-sm">от</span>
                    <span className="text-2xl font-bold text-gray-900">1800</span>
                    <span className="text-gray-600 text-sm">₽</span>
                    <span className="text-gray-500 text-xs">/ c чел</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span>c 12:00 до 14:30</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                <button className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <img className='mt-7' src="https://img.icons8.com/ios/250/4D4D4D/plus.png" alt="" />
                </button>
              </div>
            </div>
          </div>

  
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <div className="relative h-48  bg-[url('/card7.png')] bg-cover bg-center">
              <button className="absolute top-4 right-4 p-2 rounded-full bg-white bg-opacity-20">
              <img className='w-6' src="https://img.icons8.com/ios-filled/50/FFFFFF/love-circled.png" alt="" />
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Петербург на закате</h3>
              <p className="text-gray-600 text-sm mb-6">Вечерняя прогулка на теплоходе c гидом и легкими закусками.</p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-baseline gap-1 mb-1 mt-7">
                    <span className="text-gray-600 text-sm">от</span>
                    <span className="text-2xl font-bold text-gray-900">2200</span>
                    <span className="text-gray-600 text-sm">₽</span>
                    <span className="text-gray-500 text-xs">/ c чел</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span>c 18:00 до 21:00</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                <button className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <img className='mt-12' src="https://img.icons8.com/ios/250/4D4D4D/plus.png" alt="" />
                </button>
              </div>
            </div>
          </div>

           <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <div className="relative h-48  bg-[url('/card8.png')] bg-cover bg-center">
              <button className="absolute top-4 right-4 p-2 rounded-full bg-white bg-opacity-20">
              <img className='w-6' src="https://img.icons8.com/ios-filled/50/FFFFFF/love-circled.png" alt="" />
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Дворцовая тайна</h3>
              <p className="text-gray-600 text-sm mb-6">Закрытый тур по дворцам c эксклюзивным доступом и фотосессией.</p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-baseline gap-1 mb-1 mt-2">
                    <span className="text-gray-600 text-sm">от</span>
                    <span className="text-2xl font-bold text-gray-900">3500</span>
                    <span className="text-gray-600 text-sm">₽</span>
                    <span className="text-gray-500 text-xs">/ c чел</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span>c 15:00 до 18:00</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                <button className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <img className='mt-5' src="https://img.icons8.com/ios/250/4D4D4D/plus.png" alt="" />
                </button>
              </div>
            </div>
          </div>

        </div>


        
      </div>


      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white rounded-2xl overflow-hidden shadow-lg">
  <div className="relative h-48   bg-[url('/card9.png')] bg-cover bg-center">
    <button className="absolute top-4 right-4 p-2 rounded-full bg-white bg-opacity-20">
    <img className='w-6' src="https://img.icons8.com/ios-filled/50/FFFFFF/love-circled.png" alt="" />
    </button>
  </div>
  <div className="p-6">
    <h3 className="text-xl font-bold text-gray-900 mb-3">История и величие Новгорода</h3>
    <p className="text-gray-600 text-sm mb-6">Прогулка по древнему городу c посещением Софийского собора и Кремля, погружение в историю Руси.</p>
    <div className="flex items-center justify-between">
      <div>
        <div className="flex items-baseline gap-1 mb-1">
          <span className="text-gray-600 text-sm">от</span>
          <span className="text-2xl font-bold text-gray-900">2400</span>
          <span className="text-gray-600 text-sm">₽</span>
          <span className="text-gray-500 text-xs">/ c чел</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span>c 10:00 до 13:00</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
          </svg>
        </div>
      </div>
      <button className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
      <img className='mt-5' src="https://img.icons8.com/ios/250/4D4D4D/plus.png" alt="" />
      </button>
    </div>
  </div>
</div>



<div className="bg-white rounded-2xl overflow-hidden shadow-lg">
  <div className="relative h-48   bg-[url('/card10.png')] bg-cover bg-center">
    <button className="absolute top-4 right-4 p-2 rounded-full bg-white bg-opacity-20">
    <img className='w-6' src="https://img.icons8.com/ios-filled/50/FFFFFF/love-circled.png" alt="" />
    </button>
  </div>
  <div className="p-6">
    <h3 className="text-xl font-bold text-gray-900 mb-3">Прогулка по набережным Екатеринбурга</h3>
    <p className="text-gray-600 text-sm mb-6">Пешеходная экскурсия вдоль Исети c рассказами o городской культуре, архитектуре и развитии.</p>
    <div className="flex items-center justify-between">
      <div>
        <div className="flex items-baseline gap-1 mb-1">
          <span className="text-gray-600 text-sm">от</span>
          <span className="text-2xl font-bold text-gray-900">2600</span>
          <span className="text-gray-600 text-sm">₽</span>
          <span className="text-gray-500 text-xs">/ c чел</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span>c 15:00 до 18:00</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
          </svg>
        </div>
      </div>
      <button className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
      <img className='mt-5' src="https://img.icons8.com/ios/250/4D4D4D/plus.png" alt="" />
      </button>
    </div>
  </div>
</div>

    </div>
</div>
<button className="bg-yellow-400 text-black p-3 px-6 mt-2 rounded-full text-sm w-max flex justify-center items center ml-[600px] mt-8">Все экскурсий</button>
      
      </div>
      </div>
  )
}

export default Ekskursiya;

