const stool = ['Нет', 'Без особенностей', 'Кашицеобразный, 1-3 раза в день', 'Кашицеобразный, чаще 3 раз в день',
  'Диарея', 'С кровью'];
const vomit = ['Нет', 'Однократно', '2-3 раза в сутки', 'Чаще 3 раз в сутки'];
const nausea = ['Нет', 'Иногда в течение дня', 'Часто', 'Постоянно'];
const appetite = ['Сохранен', 'Снижен', 'Отсутствует', 'Избирательный', 'Повышен'];
const mucositis = ['Нет', '1-2 степень', '3-4 степень'];
const ration = ['Отсутствует', 'Минимально нерегулярно', 'Минимально регулярно', 'Обычные порции, но нерегулярно',
  'Регулярно, но разные объемы порций', 'Без проблем', 'Избыточное питание'];

const taste = ['Очень нравится', 'Нравится', 'Нормально', 'Не нравится', 'Очень не нравится', 'Отказывается'];

const tube = ['Назогастральный зонд', 'Гастростома', 'Назоинтестинальный зонд', 'Еюностома'];

const reasonForChange = ['Нет в аптеке', 'Отказ пациента', 'Гастроинтестинальные проблемы',
  'Аллергия', 'Решение врача', 'Решение родителей'];

const mixture = ['Изосурс стандарт', 'Изосурс Энерджи Файбер', 'Инфатрини', 'Клинутрен Юниор', 'Модулен',
  'Неокейт LCP', 'Неокейт Юниор', 'Новасурс Диабет Плюс', 'Нутридринк ваниль', 'Нутридринк клубника',
  'Нутридринк банан', 'Нутридринк шоколад', 'Нутридринк компакт протеин персик-манго', 'Нутризон',
  'Нутризон эдванс Нутридринк', 'Нутризон Энергия', 'Нутризон Энергия с пищевыми волокнами',
  'Нутрикомп Дринк Плюс', 'Нутрикомп Стандарт ликвид', 'Нутрикомп Энергия Файбер Ликвид', 'Нутрини',
  'Нутрини ПВ', 'Нутрини Энергия', 'Нутринидринк', 'Нутриэн Гепа', 'Нутриэн Диабет', 'Нутриэн Стандарт',
  'Нутриэн Стандарт клубника', 'Нутриэн Стандарт карамель', 'Нутриэн Стандарт ваниль',
  'Нутриэн Стандарт с пищевыми волокнами', 'Педиашур Малоежка клубника', 'Педиашур Малоежка ваниль',
  'Педиашур Малоежка шоколад', 'Педиашур Малоежка натуральный', 'Педиашур Малоежка', 'ПедиаШур Здоровейка',
  'Пептамен АФ', 'Пептамен', 'Пептамен Энтерал', 'Пептамен Юниор с 1 до 10 лет', 'Пептамен Юниор Эдванс',
  'Пептикейт', 'Пептисорб Нутризон Эдванс', 'Ресурс 2.0 Файбер', 'Ресурс Оптиум', 'Суппортан каппучино',
  'Суппортан тропические фрукты', 'Фортикер апельсин-лимон', 'Фрезубин Оригинал',
  'Фрезубин Оригинал с пищевыми волокнами', 'Фрезубин Энергия с пищевыми волокнами',
  'Хумана ЛП СЦТ (жидкая смесь)', 'Сурвимед', 'Другие детские'];

const components = ['Глюкоза', 'Аминокислоты', 'Липиды', 'Три в одном', 'Глюкоза+аминокислоты', 'Глюкоза+липиды'];
const interval = ['Круглосуточно', '12-18 часов', 'Дневное 8-12 часов', 'Ночное 8-12 часов', 'Менее 8 часов'];
const needs = ['1/3 и менее', 'около половины', '2/3', 'Полностью'];

const doctors = ['ВAЮ', 'ВЕС', 'ШМС', 'АЮА', 'Другой'];

export {stool, vomit, nausea, appetite, mucositis, mixture, reasonForChange,
  taste, tube, ration, components, interval, needs, doctors};
