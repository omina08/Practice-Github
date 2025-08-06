import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between md:items-start">
          {/* Chap taraf */}
          <div className="md:w-1/4 flex flex-col">
          <img className='w-[100px] mb-5' src="/logo.png" alt="" />
            <div className="flex items-center space-x-4 mb-6">
              <div className=" space-x-2">
              <h1>Мы в соц сетях</h1>
 <div className='flex mt-2'>
 <div className="w-8 h-8  rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold"><img src="https://img.icons8.com/fluency/50/whatsapp.png" alt="" /></span>
                </div>
                <div className="w-8 h-8  rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold"><img src="https://img.icons8.com/3d-fluency/50/telegram.png" alt="" /></span>
                </div>
                <div className="w-8 h-8 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold"><img src="/wk.png" alt="" /></span>
                </div>
 </div>
              </div>
            </div>
          </div>

          {/* To'rttasi */}
          <div className="md:w-3/4 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Сервис</h3>
              <ul className="space-y-1">
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Бронирование</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Оплата</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Отмена</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Гидам</h3>
              <ul className="space-y-1">
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Стать гидом</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Правила</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Документы</h3>
              <ul className="space-y-1">
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Условия</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Конфиденциальность</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Юрид. информация</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Поддержка клиентов</h3>
              <ul className="space-y-1">
                <li className="text-gray-600 text-sm">+7 (495) 123 - 45 - 67</li>
                <li><a href="mailto:hello@trevelme.ru" className="text-gray-600 hover:text-gray-900 text-sm">hello@trevelme.ru</a></li>
                <li className="text-gray-600 text-sm">Москва, ул. Название улицы 10, офис 11</li>
              </ul>
            </div>
          </div>
        </div>


        <div className="border-t border-gray-200 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-600 text-sm mb-4 md:mb-0">
            © 2023 Tenloc
          </div>
          <div className="flex space-x-6">
            <div className="flex items-center">
              <span className="text-gray-500 text-sm mr-2">💳</span>
              <span className="text-gray-500 text-sm">Платежные системы</span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-500 text-sm mr-2">🌐</span>
              <span className="text-gray-500 text-sm">Создание сайта</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
