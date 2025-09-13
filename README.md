# 📱 Mobile News App

[![📋 Техническое задание](https://img.shields.io/badge/📋-Техническое%20задание-4285F4?style=flat-square&logo=google-docs)](REQUIREMENTS.md)
[![🚀 Инструкция по запуску](https://img.shields.io/badge/🚀-Инструкция%20по%20запуску-00C851?style=flat-square&logo=rocket)](SETUP.md)
[![🧭 Навигация по проекту](https://img.shields.io/badge/🧭-Навигация%20по%20проекту-9C27B0?style=flat-square&logo=compass)](NAVIGATION.md)

Мобильное веб-приложение для просмотра новостей, построенное с использованием Feature-Sliced Design (FSD) архитектуры.

## 🚀 Технологии

- **React 19** - UI библиотека
- **TypeScript** - типизация
- **Redux Toolkit** - управление состоянием
- **Vite** - сборщик
- **SCSS** - стилизация
- **Feature-Sliced Design** - архитектурная методология

## 📱 Функциональность

- ✅ Мобильная адаптивная верстка
- ✅ Бесконечная прокрутка новостей
- ✅ Автоматическое обновление каждые 30 секунд
- ✅ Группировка новостей по датам
- ✅ Боковое меню навигации
- ✅ Загрузка изображений с fallback
- ✅ Обработка ошибок
- ✅ Плавные анимации и переходы

## 🏗️ Архитектура FSD

```
src/
├── app/                    # Настройки приложения
│   ├── store.ts           # Redux store
│   ├── App.tsx            # Корневой компонент
│   └── index.tsx          # Точка входа
├── pages/                 # Страницы приложения
│   └── main-page/         # Главная страница
├── widgets/               # Крупные UI блоки
│   ├── header/            # Шапка с меню
│   ├── news-list/         # Список новостей
│   ├── news-card/         # Карточка новости
│   └── loading/           # Индикатор загрузки
├── features/              # Бизнес-функции
│   └── news-list/         # Функциональность новостей
├── entities/              # Бизнес-сущности
│   └── news/              # Сущность новости
│       ├── api/           # API слой
│       ├── model/         # Модель данных
│       └── ui/            # UI компоненты
└── shared/                # Переиспользуемые ресурсы
    ├── api/               # API конфигурация
    ├── lib/               # Утилиты и хуки
    ├── ui/                # UI компоненты
    └── assets/            # Статические ресурсы
```

## 🛠️ Установка и запуск

1. **Установите зависимости:**
   ```bash
   npm install
   ```

2. **Запустите dev сервер:**
   ```bash
   npm run dev
   ```

3. **Откройте браузер:**
   ```
   http://localhost:3000
   ```

## 📦 Доступные команды

- `npm run dev` - запуск dev сервера
- `npm run build` - сборка для продакшена
- `npm run preview` - предварительный просмотр сборки
- `npm run lint` - проверка кода линтером

## 🔧 API

Приложение использует New York Times API для получения новостей:

- **Endpoint:** `/api/svc/archive/v1/{year}/{month}.json`
- **API Key:** `GGGhhmrt3fYco6gwoPGVYZ56diJbK5z9`
- **Прокси:** Настроен в `vite.config.ts`

## 🎨 Дизайн

- Мобильно-первый подход
- Современный Material Design
- Плавные анимации и переходы
- Адаптивная типографика
- Темная/светлая тема (готова к расширению)

## 📱 Особенности мобильной версии

- Оптимизированная прокрутка
- Touch-friendly интерфейс
- Адаптивные изображения
- Sticky элементы
- Backdrop blur эффекты

## 🚀 Производительность

- Ленивая загрузка изображений
- Виртуализация списков (готова к внедрению)
- Оптимизированные анимации
- Минимальный bundle size
- Tree shaking

## 🔒 Безопасность

- Валидация данных
- Обработка ошибок API
- XSS защита
- CORS настройки

## 📈 Мониторинг

- Обработка ошибок
- Логирование API запросов
- Метрики производительности (готова к внедрению)

## 🤝 Вклад в проект

1. Fork репозитория
2. Создайте feature ветку
3. Внесите изменения
4. Создайте Pull Request

## 📄 Лицензия

MIT License

---

## 🔗 Полезные ссылки

[![📋 Полное техническое задание](https://img.shields.io/badge/📋-Полное%20техническое%20задание-4285F4?style=flat-square&logo=google-docs)](REQUIREMENTS.md)
[![🚀 Подробная инструкция по запуску](https://img.shields.io/badge/🚀-Подробная%20инструкция%20по%20запуску-00C851?style=flat-square&logo=rocket)](SETUP.md)
[![🧭 Навигация по проекту](https://img.shields.io/badge/🧭-Навигация%20по%20проекту-9C27B0?style=flat-square&logo=compass)](NAVIGATION.md)

### 📚 Документация

- **[Техническое задание](REQUIREMENTS.md)** - полные требования и спецификация
- **[Инструкция по запуску](SETUP.md)** - пошаговое руководство по установке и запуску
- **[Архитектура FSD](https://feature-sliced.design/)** - методология, используемая в проекте

### 🛠️ Разработка

- **[Vite](https://vitejs.dev/)** - сборщик проекта
- **[React](https://react.dev/)** - UI библиотека
- **[Redux Toolkit](https://redux-toolkit.js.org/)** - управление состоянием
- **[TypeScript](https://www.typescriptlang.org/)** - типизация

---

**Создано с ❤️ используя Feature-Sliced Design**

[![Made with FSD](https://img.shields.io/badge/Made%20with-FSD-FF6B6B?style=flat-square&logo=heart)](https://feature-sliced.design/)
