const Catalog=()=>{
  return(
    <div>
  {/* ХИРО */}
  <section className="p-6 dark:bg-gray-100 dark:text-gray-800">
    <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
      <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-50">
        <span className="block mb-2 dark:text-violet-600">ТатАИСнефть</span>
        <h1 className="text-5xl font-extrabold dark:text-gray-900">Связь для вашего бизнеса</h1>
        <p className="my-8">
          <span className="font-medium dark:text-gray-900">Надежно и эффективно.</span> Мы предоставляем высококачественные услуги связи для вашего бизнеса, обеспечивая стабильную и безопасную коммуникацию.
        </p>
        <form noValidate="" action="" className="self-stretch space-y-3">
          <div>
            <label htmlFor="name" className="text-sm sr-only">Ваше имя</label>
            <input id="name" type="text" placeholder="Ваше имя" className="w-full rounded-md focus:ring focus:dark:ring-violet-600 dark:border-gray-300" />
          </div>
          <div>
            <label htmlFor="lastname" className="text-sm sr-only">Электронная почта</label>
            <input id="lastname" type="text" placeholder="Электронная почта" className="w-full rounded-md focus:ring focus:dark:ring-violet-600 dark:border-gray-300" />
          </div>
          <button type="button" className="w-full py-2 font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Присоединиться к ожиданию</button>
        </form>
      </div>
      <img src="https://t4.ftcdn.net/jpg/04/08/74/11/360_F_408741114_84tO0bIJIVTztVpABWGRjeUYuHHQf2ve.jpg" alt="" className="object-cover w-full rounded-md xl:col-span-3 dark:bg-gray-500" />
    </div>
  </section>
  {/* ПРАЙС ЛИСТ */}
  <section className="py-20 dark:bg-gray-100 dark:text-gray-800">
    <div className="container px-4 mx-auto">
      <div className="max-w-2xl mx-auto mb-16 text-center">
        <span className="font-bold tracking-wider uppercase dark:text-violet-600">Тарифы</span>
        <h2 className="text-4xl font-bold lg:text-5xl">Выберите лучший план</h2>
      </div>
      <div className="flex flex-wrap items-stretch -mx-4">
        <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
          <div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 dark:bg-gray-50">
            <div className="space-y-2">
              <h4 className="text-2xl font-bold">Начальный</h4>
              <span className="text-6xl font-bold">Бесплатно</span>
            </div>
            <p className="mt-3 leading-relaxed dark:text-gray-600">Подключитесь к основным услугам связи без затрат.</p>
            <ul className="flex-1 mb-6 dark:text-gray-600">
              <li className="flex mb-2 space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-600">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Базовые функции связи</span>
              </li>
              <li className="flex mb-2 space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-600">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Поддержка 24/7</span>
              </li>
              <li className="flex mb-2 space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-600">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Высокая скорость интернета</span>
              </li>
            </ul>
            <button type="button" className="inline-block px-5 py-3 font-semibold tracking-wider text-center rounded dark:bg-violet-600 dark:text-gray-50">Начать</button>
          </div>
        </div>
        <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
          <div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 dark:bg-violet-600 dark:text-gray-50">
            <div className="space-y-2">
              <h4 className="text-2xl font-bold">Профессиональный</h4>
              <span className="text-6xl font-bold">$24
                <span className="text-sm tracking-wide">/месяц</span>
              </span>
            </div>
            <p className="leading-relaxed">Для тех, кто требует больше возможностей и скорости.</p>
            <ul className="flex-1 space-y-2">
              <li className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Все функции бесплатного плана</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Более высокая скорость интернета</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Расширенные функции безопасности</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Приоритетная поддержка</span>
              </li>
            </ul>
            <button type="button" className="inline-block px-5 py-3 font-semibold tracking-wider text-center rounded dark:bg-gray-50 dark:text-violet-600">Выбрать</button>
          </div>
        </div>
        <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
          <div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 dark:bg-gray-50">
            <div className="space-y-2">
              <h4 className="text-2xl font-bold">Корпоративный</h4>
              <span className="text-6xl font-bold">$72
                <span className="text-sm tracking-wide">/месяц</span>
              </span>
            </div>
            <p className="leading-relaxed dark:text-gray-600">Идеально подходит для крупных компаний и предприятий.</p>
            <ul className="flex-1 space-y-2 dark:text-gray-600">
              <li className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-600">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Все функции профессионального плана</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-600">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Персональный менеджер</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-600">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Неограниченные ресурсы</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-600">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Премиум поддержка 24/7</span>
              </li>
            </ul>
            <button type="button" className="inline-block px-5 py-3 font-semibold tracking-wider text-center rounded dark:bg-violet-600 dark:text-gray-50">Выбрать</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

  )
}
export default Catalog