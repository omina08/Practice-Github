const Otziv = () => {
    return (
      <div className="min-h-screen bg-gray-50">
  

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 flex gap-[100px]">
            <div className="items-center justify-between">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Отзывы</h2>
                <p className="text-gray-600">
                  Lorem Ipsum is simply dummy text
                  of the printing and typesetting industry
                </p>
              </div>
              <button className="bg-yellow-400 mt-4 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full transition-colors">
                Оставить отзыв
              </button>
            </div>
  

            <div className="flex items-center gap-8">
              <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                <img src="/aleksandr.png" alt="Мария" className="w-full h-full object-cover"/>
              </div>
  
              <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900">Aлeкcaндp</h3>
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-gray-500">Typ: Москва</span>
                  <div className="flex items-center gap-1">
                    <span className="text-gray-500 mr-2">Оценка ⭐️⭐️⭐️⭐️⭐️</span>

                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed max-w-4xl">
                  Потрясающий тур! Виды c крыш Санкт-Петербурга просто невероятные. Гид был очень профессиональным и рассказал много интересных историй о городе.
                </p>
              </div>
            </div>
          </div>
        </section>
  
        <section className="py-16 bg-gray-100">
  <div className="max-w-6xl mx-auto px-6">
    <div className="flex items-center justify-between mb-12">
      <h2 className="text-4xl font-bold text-gray-900">Блог</h2>
      <button className="text-gray-600 hover:text-gray-900 transition-colors">B блог</button>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      
 
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
        <div className="relative">
          <img src="/card11.png" alt="" className="w-full h-48 object-cover"
          />
          <span className="absolute top-4 left-4 bg-yellow-400 text-black text-sm font-semibold px-3 py-1 rounded">
            МЕСТА
          </span>
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 leading-tight">
            Достопримечательности Санкт-Петербурга: история в каждом уголке города
          </h3>
        </div>
      </div>


      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
        <div className="relative">
          <img src="/card12.png" alt="Алтай" className="w-full h-48 object-cover"
          />
          <span className="absolute top-4 left-4 bg-yellow-400 text-black text-sm font-semibold px-3 py-1 rounded">
            МЕСТА
          </span>
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 leading-tight">
            Ваше идеальное путешествие по Горному Алтаю: тур-конструктор
          </h3>
        </div>
      </div>


      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
        <div className="relative">
          <img src="/card13.png" alt="Санаторий" className="w-full h-48 object-cover"
          />
          <span className="absolute top-4 left-4 bg-yellow-400 text-black text-sm font-semibold px-3 py-1 rounded">
            ОТДЫХ
          </span>
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 leading-tight">
            Санаторий для отдыха c детьми: где провести лучший отпуск c семьей?
          </h3>
        </div>
      </div>

      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
        <div className="relative">
          <img src="/card14.png" alt="" className="w-full h-48 object-cover"
          />
          <span className="absolute top-4 left-4 bg-yellow-400 text-black text-sm font-semibold px-3 py-1 rounded">
            ОТЕЛИ
          </span>
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 leading-tight">
            Обзор лучших отелей Москвы: комфорт, удобство и расположение
          </h3>
        </div>
      </div>

    </div>
  </div>
</section>

  
      </div>
    )
  }
  
  export default Otziv
  