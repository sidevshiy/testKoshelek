Здравствуйте!
Чтобы запустить проект проделайте следующие операции:
 Установите пакеты:
 npm install
 Запустить dev режим командой:
 npm run serve
 Запустить сборку только на клиенской стороне:
 npm run build:client
 Запустить сборку только на серверной стороне:
 npm run build:server
 Запустить сборку в продакшн и SSR:
 npm run build

 Я делал SSR и у меня возникли некоторые проблемы с обновлением рендеринга кода серверной части с вебсокетами. Меня очень заинтересовал этот вопрос, я обязательно донего докопаюсь :) Проект я выложил на домене https://liakh.ru/

 Чтобы запустить SSR в проекте:


 Запустить сборку в продакшн и SSR:
 npm run build

 напишите в консоль:
 node server.js

Смотрите результат на http://localhost:3000/