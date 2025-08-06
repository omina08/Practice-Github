import React from "react";

const Navbar = () => {
  return (
    <div className="p-6 px-[50px]">
      <header className="flex gap-[50px] items-start items-center">

        <div className="font-bold text-xl w-24"><img src="/logo.png" alt="" /></div>


        <div className="flex gap-6 items-center">

          <div className="relative group items-center">
            <button className="font-semibold flex  gap-2 bg-yellow-300 p-2 rounded-2xl">Направления <span><img className="w-4 mt-2" src="https://img.icons8.com/external-others-inmotus-design/67/external-Bottom-basic-web-ui-elements-others-inmotus-design.png " alt="" /></span></button>
            <div className="absolute hidden group-hover:block bg-white border p-4 w-56 z-10">
              <div>Экскурсии в Санкт-Петербурге</div>
              <div>Экскурсии в Калининграде</div>
              <div>Экскурсии в Мурманске</div>
              <div>Экскурсии в Стамбуле</div>
              <div>Экскурсии в ОАЭ</div>

   
              <div className="relative group mt-2 cursor-pointer">
              <button className="font-semibold flex  gap-2 cursor-pointer">Авторские туры <span><img className="w-4 mt-2" src="https://img.icons8.com/ios-glyphs/50/chevron-right.png " alt="" /></span></button>
                <div className="absolute left-full top-0 hidden group-hover:block bg-white border p-4 w-56">
                  <div>Авторский тур в Дагестан</div>
                  <div>Авторский тур на Камчатку</div>
                  <div>Авторский тур в Мурманск</div>
                  <div>Авторский тур в Стамбул</div>
                  <div>Авторский тур на Байкал</div>
                </div>
              </div>
            </div>
          </div>

          <div className="cursor-pointer font-semibold text-center">O сервисе</div>
          <div className="cursor-pointer font-semibold">Блог</div>


          <div className="relative group">
            <button className="font-semibold flex  gap-2 cursor-pointer">Помощь клиентам <span><img className="w-4 mt-2" src="https://img.icons8.com/external-others-inmotus-design/67/external-Bottom-basic-web-ui-elements-others-inmotus-design.png " alt="" /></span></button>
            <div className="absolute hidden group-hover:block bg-white border p-4 w-64 z-10 space-y-2">
              <p className="text-sm">Мы на связи c 09:00 до 21:00 мск</p>
              <div className="flex gap-2">
                <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">WhatsApp</button>
                <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">Telegram</button>
              </div>
              <p className="text-sm">+7 (495) 123-45-67</p>
              <p className="text-sm">hello@trevelme.ru</p>
            </div>
          </div>
        </div>


        
<div className="flex items-center gap-3 ml-[620px]">
<img className="w-6" src="https://img.icons8.com/material-outlined/50/like.png" alt="" />
<button className="border px-4 py-1 rounded">Войти</button>
</div>
    
      </header>

    </div>
  );
};

export default Navbar
