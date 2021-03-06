const createData = (orderNumber, city, date, product, amount) => {
  return { orderNumber, city, date, product, amount };
}

const getRandomData = (count) => {
	const citis = ['Москва м. Комсомольская', 'Москва м. Озёрная', 'Санкт-Петербург м. Площадь Восстания', 'Санкт-Петербург м. Черная речка', 'Архангельск', 'Волгоград', 'Воронеж', 'Екатеринбург', 'Иваново','Ижевск', 'Казань', 'Калининград', 'Киров', 'Краснодар', 'Красноярск', 'Липецк', 'Магнитогорск', 'Мурманск','Мытищи','Набережные Челны','Нижний Новгород','Нижний Тагил','Новосибирск','Омск','Оренбург','Пенза','Пермь','Петрозаводск','Псков','Ростов-на-Дону','Рязань','Самара','Саратов','Сочи','Сургут','Тверь','Тольятти','Тула','Тюмень','Ульяновск','Уфа','Чебоксары','Челябинск','Ярославль'];
	const products = ['Подставка настольная металлическая фигурная (хром. сталь под серебро) 02','Жилет из нейлона 02','Штандарт вышитый на бархате 01','Календарь квартальный с 1 рекламным полем, блоки СТАНДАРТ (цифровая печать)','Футболка сублимационная Спэйс Плюс с полной запечаткой 01','Спортивная форма для черлидинга Молли 01','Куртка Норд с полной запечаткой взрослая 01','Флагшток уличный из алюминия с закрытым механизмом 02 (Орион)','Комплектующие для уличных конструкций Пламя 01','Флагшток уличный из алюминия с закрытым механизмом 01 (Нептун)','Флагшток уличный из алюминия с открытым механизмом 01 (Юпитер)','Флагшток уличный из алюминия с открытым механизмом 02 (Сириус)','Шорты футбольные Реал с полной запечаткой 01','Спецпредложение: полотенце с вышитой надписью 01','Спортивная форма для черлидинга детская ЭЛЕМЕНТЫ 01','Сумка Я-майка сублимационная 01','Акция: Флаги и аксессуары','Транспарант 01','Фартук Промо для сублимации 01','Водолазка Стив (Stan) 02','Конструкция для ширмы 01','Тент для ширмы сублимационный 01','Шарф печатный однослойный детский 01','Футбольная вратарская форма Челси с полной запечаткой 01','Топ для фитнеса (с полной запечаткой) 01'];
  let result = [];
  for (let i = 0; i < 150; i++) {
    result.push(createData((200000 + i),
      citis[Math.floor(Math.random() * Math.floor(citis.length - 1))],
      `${10 + Math.floor(Math.random() * Math.floor(21))}.03.2020`,
      products[Math.floor(Math.random() * Math.floor(products.length - 1))],
      10 * Math.floor(Math.random() * Math.floor(100)) || 1
    ));
  }
  return result;
};

export default getRandomData;