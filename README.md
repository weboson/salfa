# Интерент магазин на Next.js:

## screenshots:
1) /products: 
![Image](https://github.com/user-attachments/assets/4a5163eb-3554-46b8-8f56-1838bbbf0b95)



### Задание :
----------------------------------------------------------------------------------------------------------
Тестовое задание react/next:

Задача: 
Создать SPA со списком карточек, на каждой из которых выводится картинка и любая информация на ваш вкус, которая пришла с эндпоинта или созданная пользователем. 

Дизайн не важен, главное, чтобы было просто и аккуратно. По стэку ориентируемся на список ниже. Остальные решения на вас. 
Стэк: Typescript \ React \ Redux (Redux Toolkit) || Zustand

Для задачи можно выбрать любое публичное api, например, отсюда https://github.com/public-apis/public-apis Все полученные и созданные данные хранить во внутреннем store

Можно использовать ui библиотеки, библиотеки для работы с формой. 
Будет оцениваться подход к заданию, качество и структура кода.

Задача 1. Вывести список продуктов
На странице /products 
• вывести весь список продуктов
• карточке должна быть иконка лайка. При нажатии на которую, ставится или убирается like. Иконка должна подкрашиваться, когда проставлен like. 
• карточке должна быть иконка удаления. При нажатии на которую, карточка удаляется.
• фильтр для просмотра всех карточек и карточек, добавленных в избранное
• карточки(текст) должен быть урезан, чтобы у карточек была одинаковая высота
• клике на любом месте карточки (кроме иконки лайка и кнопки удаления) мы должно попадать на отдельную страницу карточки.

Задача 2. Страница продукта
На странице /products/:id 
• более подробную информацию о продукте. 
• кнопку для перехода на основную страницу

Задача 3. Создание продукта
На отдельной странице /create- product реализовать создание продукта
• форму с полями. Поля обязательные и с минимальной валидацией.
• отправке формы, сохранить данные в общий store.

Бонусы
• пагинацию списка
• возможность редактирования карточки продукта
• дополнительную фильтрацию
• поиск (без кнопки отправки)

----------------------------------------------------------------------------------------------------------

Видео - помощник "NextJS 13. Быстрый старт" канала "Михаил Непомнящий": https://www.youtube.com/watch?v=VGiphTEApfo&t=169s&ab_channel=%D0%9C%D0%B8%D1%85%D0%B0%D0%B8%D0%BB%D0%9D%D0%B5%D0%BF%D0%BE%D0%BC%D0%BD%D1%8F%D1%89%D0%B8%D0%B9 

----------------------------------------------------------------------------------------------------------


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
