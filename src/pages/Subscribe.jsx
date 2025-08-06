import React from 'react';

function Subscribe() {
  return (
    <div className="min-h-screen flex items-center justify-center  p-4  text-black">
      <div className="w-[1120px] text-black h-[600px] rounded-2xl shadow-lg bg-[url('/tourist.png')] bg-cover bg-center flex flex-col items-start justify-center p-10 text-white">
        <h2 className="text-3xl font-bold mb-3 text-black">Подпишитесь на нашу рассылку</h2>
        <p className="mb-6 max-w-md text-lg text-black">
          Подписывайтесь удобно и быстро для всех возможностей
        </p>
        <div className="flex space-x-4">
          <button className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition">
           <span><img src="/stickers/hello.png" alt="" /></span> Telegram
          </button>
          <button className="bg-gray-600 text-white py-2 px-6 rounded hover:bg-gray-700 transition">
            Вконтакте
          </button>
</div>
</div>
    </div>
  );
}

export default Subscribe;
