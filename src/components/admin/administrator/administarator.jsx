import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import 'tailwindcss/tailwind.css';

const dataLine = {
  labels: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль'],
  datasets: [
    {
      label: 'Продажи',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      backgroundColor: 'rgb(75, 192, 192)',
      borderColor: 'rgba(75, 192, 192, 0.2)',
    },
  ],
};

const dataBar = {
  labels: ['Красный', 'Синий', 'Желтый', 'Зеленый', 'Фиолетовый', 'Оранжевый'],
  datasets: [
    {
      label: 'Количество голосов',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex flex-col md:flex-row">
        <aside className="w-full md:w-48 bg-white shadow-md">
          <div className="p-4">
            <h1 className="text-l font-bold">Панель администратора</h1>
            <nav className="mt-4">
              <ul>
                <li className="py-2">
                  <a href="#" className="text-gray-700 hover:text-gray-900">
                    Главная
                  </a>
                </li>
                <li className="py-2">
                  <a href="#" className="text-gray-700 hover:text-gray-900">
                    Пользователи
                  </a>
                </li>
                <li className="py-2">
                  <a href="#" className="text-gray-700 hover:text-gray-900">
                    Настройки
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
        <main className="flex-1 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold">Пользователи</h2>
              <p className="text-gray-700 text-2xl">1,234</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold">Выручка</h2>
              <p className="text-gray-700 text-2xl">₽12,345</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold">Продукты</h2>
              <p className="text-gray-700 text-2xl">567</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold">Заказы</h2>
              <p className="text-gray-700 text-2xl">89</p>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-2xl font-bold">Обзор продаж</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Line data={dataLine} />
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-2xl font-bold">Голоса за продукты</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Bar data={dataBar} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
