import { useState } from 'react';

export default function Profile() {
  const [view, setView] = useState('profile');

  return (
    <div className="relative flex flex-col justify-center min-h-screen bg-gray-100">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-4xl">
        <div className="flex justify-between mb-4">
          <button 
            onClick={() => setView('profile')}
            className={`px-4 py-2 ${view === 'profile' ? 'bg-purple-700 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Профиль
          </button>
          <button 
            onClick={() => setView('cart')}
            className={`px-4 py-2 ${view === 'cart' ? 'bg-purple-700 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Корзина
          </button>
        </div>

        {view === 'profile' && (
          <div className="text-center">
            <h1 className="text-4xl font-bold text-purple-700 uppercase">Профиль</h1>
            <div className="mt-6 flex flex-col items-center">
              <img 
                className="w-32 h-32 rounded-full object-cover"
                src="https://via.placeholder.com/150"
                alt="User Avatar"
              />
              <p className="mt-4 text-xl font-medium text-gray-800">Иван Иванов</p>
              <p className="text-lg text-gray-600">Email: ivanov@example.com</p>
              <p className="text-lg text-gray-600">Местоположение: Казань, Россия</p>
              <a 
                href="https://wa.me/1234567890" 
                target="_blank"
                className="block mt-2 text-green-500 hover:text-green-700"
              >
                Связаться со мной в WhatsApp
              </a>
              <button className="px-4 py-2 mt-4 text-sm text-white bg-purple-700 rounded hover:bg-purple-800">
                Редактировать Профиль
              </button>
            </div>
          </div>
        )}

        {view === 'cart' && (
          <div className="text-center">
            <h1 className="text-4xl font-bold text-purple-700 uppercase">Корзина</h1>
            <div className="mt-6">
              <p className="text-lg text-gray-600">Ваша корзина в данный момент пуста.</p>
              <button className="px-4 py-2 mt-4 text-sm text-white bg-purple-700 rounded hover:bg-purple-800">
                Продолжить покупки
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
