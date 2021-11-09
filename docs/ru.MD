
Прежде чем начать должны быть установлены python и node.js (для сборки фронта). По-пунктно:

- Выбрать папку назначения и выполнить следующую команду в терминале: `git clone git@github.com:Sanshain/polls_app.git`.
- После закрытия зайти внутрь через `cd pulling_project` и установить все зависимости python: `pip install -r requirements.txt`
- Запустить сервер разработки с помощью `python manage.py runserver`

Для сборки фронта: 

- перейдите в каталог со статикой: `cd polling_app/static` и запустить `npm i`. Эта команда установит все node.js зависимости.
- Собственно сама сборка: `rollup -c`

