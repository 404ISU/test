import React from "react";
const Hero=()=>{

  return(
<div className="min-h-screen dark:bg-gray-100 dark:text-gray-800">
	<div className="p-6 space-y-8">
		
		<main>
			{/* Хиро */}
			<div className="container mx-auto space-y-16">
				<section className="grid gap-6 text-center lg:grid-cols-2 xl:grid-cols-5">
					<div className="w-full p-6 rounded-md sm:p-16 xl:col-span-2 dark:bg-gray-50">
						<span className="block mb-2 dark:text-violet-600">ТатАИСнефть</span>
						<h1 className="text-5xl font-extrabold dark:text-gray-900">Связь, на которую можно положиться</h1>
						<p className="my-8">
							<span className="font-medium dark:text-gray-900">Надежно и инновационно.</span> Ведущий оператор связи для вашего бизнеса и дома.
						</p>
						<form noValidate="" action="" className="self-stretch space-y-3">
							<div>
								<label htmlFor="name" className="text-sm sr-only">Ваше имя</label>
								<input id="name" type="text" placeholder="Ваше имя" className="w-full rounded-md focus:ring focus:dark:ring-violet-600 dark:border-gray-300" />
							</div>
							<div>
								<label htmlFor="email" className="text-sm sr-only">Email</label>
								<input id="email" type="email" placeholder="Email" className="w-full rounded-md focus:ring focus:dark:ring-violet-600 dark:border-gray-300" />
							</div>
							<button className="w-full py-2 font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Присоединиться к нам</button>
						</form>
					</div>
					<img src="https://avatars.mds.yandex.net/i?id=2d4aab28e161006cd3d97517bf3609a94214eca6-10113106-images-thumbs&n=13" alt="" className="object-cover w-full h-full rounded-md xl:col-span-3 dark:bg-gray-500" />
				</section>
				{/* 3 Пункта */}
				<section>
					<span className="block mb-2 text-xs font-medium tracking-widest uppercase lg:text-center dark:text-violet-600">Как это работает</span>
					<h2 className="text-5xl font-bold lg:text-center dark:text-gray-900">С ТатАИСнефть все просто</h2>
					<div className="grid gap-6 my-16 lg:grid-cols-3">
						<div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-50">
							<div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-violet-600 dark:text-gray-50">1</div>
							<p className="text-2xl font-semibold">
								<b>Подключение.</b> Быстрое и надежное подключение к нашим услугам.
							</p>
						</div>
						<div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-50">
							<div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-violet-600 dark:text-gray-50">2</div>
							<p className="text-2xl font-semibold">
								<b>Техническая поддержка.</b> Круглосуточная поддержка для всех клиентов.
							</p>
						</div>
						<div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-50">
							<div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-violet-600 dark:text-gray-50">3</div>
							<p className="text-2xl font-semibold">
								<b>Инновации.</b> Постоянное развитие и внедрение новых технологий.
							</p>
						</div>
					</div>
				</section>
				{/* Отзыв */}
				<section className="grid gap-6 lg:grid-cols-2">
					<img src="https://avatars.mds.yandex.net/i?id=e621352b3b3fc31e23fdaed3da88c538c5eeb47a-12603899-images-thumbs&n=13" alt="" className="object-cover w-full rounded-md max-h-96 dark:bg-gray-500" />
					<div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 dark:bg-gray-50">
						<img src="https://source.unsplash.com/random/100x100" alt="" className="object-cover w-20 h-20 rounded-full dark:bg-gray-500" />
						<blockquote className="max-w-lg text-lg italic font-medium text-center">"ТатАИСнефть - это надежность и качество связи, которым я доверяю."</blockquote>
						<div className="text-center dark:text-gray-600">
							<p>Иван Иванов</p>
							<p>Генеральный директор ABC</p>
						</div>
						<div className="flex space-x-2">
							<button type="button" aria-label="Page 1" className="w-2 h-2 rounded-full dark:bg-gray-900"></button>
							<button type="button" aria-label="Page 2" className="w-2 h-2 rounded-full dark:bg-gray-400"></button>
							<button type="button" aria-label="Page 3" className="w-2 h-2 rounded-full dark:bg-gray-400"></button>
							<button type="button" aria-label="Page 4" className="w-2 h-2 rounded-full dark:bg-gray-400"></button>
						</div>
					</div>
					<div className="p-8 space-y-8 rounded-md lg:col-span-full lg:py-12 dark:bg-gray-50">
						<h2 className="text-5xl font-bold dark:text-gray-900">Создавайте вместе с нами</h2>
						<p className="dark:text-gray-600">ТатАИСнефть предоставляет лучшие решения для связи, будь то для бизнеса или дома. Мы всегда стремимся к совершенству и предоставляем нашим клиентам самые инновационные технологии.</p>
					</div>
				</section>
				{/* Новости */}
				<section>
					<div className="grid gap-6 lg:grid-cols-3">
						<div className="overflow-hidden rounded lg:flex lg:col-span-3">
							<img src="https://thrivenextgen.com/wp-content/uploads/2020/11/thrive-img.jpg" alt="" className="object-cover w-full h-auto max-h-96 dark:bg-gray-500" />
							<div className="p-6 space-y-6 lg:p-8 md:flex md:flex-col dark:bg-gray-50">
								<span className="self-start px-3 py-1 text-sm rounded-full dark:bg-violet-600 dark:text-gray-50">Связь</span>
								<h2 className="text-3xl font-bold md:flex-1">Работа в ТатАИСнефть - это вдохновение и движение вперед</h2>
								<div>
									<p className="dark:text-gray-600">30 ноября 2023</p>
									<p className="dark:text-gray-600">Автор Иван Иванов</p>
								</div>
							</div>
						</div>
						
					</div>
				</section>
				
			</div>
		</main>

	</div>
</div>

  )

}

export default Hero
