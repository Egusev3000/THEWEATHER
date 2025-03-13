function generateCountryOptions() {
    const countries = [
        { name: 'Афганистан', code: 'AF', prefix: '+93' },
        { name: 'Албания', code: 'AL', prefix: '+355' },
        { name: 'Алжир', code: 'DZ', prefix: '+213' },
        { name: 'Андорра', code: 'AD', prefix: '+376' },
        { name: 'Ангола', code: 'AO', prefix: '+244' },
        { name: 'Антигуа и Барбуда', code: 'AG', prefix: '+1-268' },
        { name: 'Аргентина', code: 'AR', prefix: '+54' },
        { name: 'Армения', code: 'AM', prefix: '+374' },
        { name: 'Австралия', code: 'AU', prefix: '+61' },
        { name: 'Австрия', code: 'AT', prefix: '+43' },
        { name: 'Азербайджан', code: 'AZ', prefix: '+994' },
        { name: 'Багамские Острова', code: 'BS', prefix: '+1-242' },
        { name: 'Бахрейн', code: 'BH', prefix: '+973' },
        { name: 'Бангладеш', code: 'BD', prefix: '+880' },
        { name: 'Барбадос', code: 'BB', prefix: '+1-246' },
        { name: 'Беларусь', code: 'BY', prefix: '+375' },
        { name: 'Бельгия', code: 'BE', prefix: '+32' },
        { name: 'Белиз', code: 'BZ', prefix: '+501' },
        { name: 'Бенин', code: 'BJ', prefix: '+229' },
        { name: 'Бутан', code: 'BT', prefix: '+975' },
        { name: 'Боливия', code: 'BO', prefix: '+591' },
        { name: 'Босния и Герцеговина', code: 'BA', prefix: '+387' },
        { name: 'Ботсвана', code: 'BW', prefix: '+267' },
        { name: 'Бразилия', code: 'BR', prefix: '+55' },
        { name: 'Бруней', code: 'BN', prefix: '+673' },
        { name: 'Болгария', code: 'BG', prefix: '+359' },
        { name: 'Буркина-Фасо', code: 'BF', prefix: '+226' },
        { name: 'Бурунди', code: 'BI', prefix: '+257' },
        { name: 'Камбоджа', code: 'KH', prefix: '+855' },
        { name: 'Камерун', code: 'CM', prefix: '+237' },
        { name: 'Канада', code: 'CA', prefix: '+1' },
        { name: 'Кабо-Верде', code: 'CV', prefix: '+238' },
        { name: 'Центрально-Африканская Республика', code: 'CF', prefix: '+236' },
        { name: 'Чад', code: 'TD', prefix: '+235' },
        { name: 'Чили', code: 'CL', prefix: '+56' },
        { name: 'Китай', code: 'CN', prefix: '+86' },
        { name: 'Колумбия', code: 'CO', prefix: '+57' },
        { name: 'Коморы', code: 'KM', prefix: '+269' },
        { name: 'Конго (ДРК)', code: 'CD', prefix: '+243' },
        { name: 'Конго (Республика)', code: 'CG', prefix: '+242' },
        { name: 'Коста-Рика', code: 'CR', prefix: '+506' },
        { name: 'Кот-д\'Ивуар', code: 'CI', prefix: '+225' },
        { name: 'Хорватия', code: 'HR', prefix: '+385' },
        { name: 'Куба', code: 'CU', prefix: '+53' },
        { name: 'Кипр', code: 'CY', prefix: '+357' },
        { name: 'Чехия', code: 'CZ', prefix: '+420' },
        { name: 'Дания', code: 'DK', prefix: '+45' },
        { name: 'Джибути', code: 'DJ', prefix: '+253' },
        { name: 'Доминика', code: 'DM', prefix: '+1-767' },
        { name: 'Доминиканская Республика', code: 'DO', prefix: '+1-809' },
        { name: 'Восточный Тимор', code: 'TL', prefix: '+670' },
        { name: 'Эквадор', code: 'EC', prefix: '+593' },
        { name: 'Египет', code: 'EG', prefix: '+20' },
        { name: 'Сальвадор', code: 'SV', prefix: '+503' },
        { name: 'Экваториальная Гвинея', code: 'GQ', prefix: '+240' },
        { name: 'Эритрея', code: 'ER', prefix: '+291' },
        { name: 'Эстония', code: 'EE', prefix: '+372' },
        { name: 'Эсватини', code: 'SZ', prefix: '+268' },
        { name: 'Эфиопия', code: 'ET', prefix: '+251' },
        { name: 'Фиджи', code: 'FJ', prefix: '+679' },
        { name: 'Финляндия', code: 'FI', prefix: '+358' },
        { name: 'Франция', code: 'FR', prefix: '+33' },
        { name: 'Габон', code: 'GA', prefix: '+241' },
        { name: 'Гамбия', code: 'GM', prefix: '+220' },
        { name: 'Грузия', code: 'GE', prefix: '+995' },
        { name: 'Германия', code: 'DE', prefix: '+49' },
        { name: 'Гана', code: 'GH', prefix: '+233' },
        { name: 'Греция', code: 'GR', prefix: '+30' },
        { name: 'Гренада', code: 'GD', prefix: '+1-473' },
        { name: 'Гватемала', code: 'GT', prefix: '+502' },
        { name: 'Гвинея', code: 'GN', prefix: '+224' },
        { name: 'Гвинея-Бисау', code: 'GW', prefix: '+245' },
        { name: 'Гайана', code: 'GY', prefix: '+592' },
        { name: 'Гаити', code: 'HT', prefix: '+509' },
        { name: 'Гондурас', code: 'HN', prefix: '+504' },
        { name: 'Венгрия', code: 'HU', prefix: '+36' },
        { name: 'Исландия', code: 'IS', prefix: '+354' },
        { name: 'Индия', code: 'IN', prefix: '+91' },
        { name: 'Индонезия', code: 'ID', prefix: '+62' },
        { name: 'Иран', code: 'IR', prefix: '+98' },
        { name: 'Ирак', code: 'IQ', prefix: '+964' },
        { name: 'Ирландия', code: 'IE', prefix: '+353' },
        { name: 'Израиль', code: 'IL', prefix: '+972' },
        { name: 'Италия', code: 'IT', prefix: '+39' },
        { name: 'Ямайка', code: 'JM', prefix: '+1-876' },
        { name: 'Япония', code: 'JP', prefix: '+81' },
        { name: 'Иордания', code: 'JO', prefix: '+962' },
        { name: 'Казахстан', code: 'KZ', prefix: '+7' },
        { name: 'Кения', code: 'KE', prefix: '+254' },
        { name: 'Кирибати', code: 'KI', prefix: '+686' },
        { name: 'Косово', code: 'XK', prefix: '+383' },
        { name: 'Кувейт', code: 'KW', prefix: '+965' },
        { name: 'Киргизия', code: 'KG', prefix: '+996' },
        { name: 'Лаос', code: 'LA', prefix: '+856' },
        { name: 'Латвия', code: 'LV', prefix: '+371' },
        { name: 'Ливан', code: 'LB', prefix: '+961' },
        { name: 'Лесото', code: 'LS', prefix: '+266' },
        { name: 'Либерия', code: 'LR', prefix: '+231' },
        { name: 'Ливия', code: 'LY', prefix: '+218' },
        { name: 'Лихтенштейн', code: 'LI', prefix: '+423' },
        { name: 'Литва', code: 'LT', prefix: '+370' },
        { name: 'Люксембург', code: 'LU', prefix: '+352' },
        { name: 'Северная Македония', code: 'MK', prefix: '+389' },
        { name: 'Мадагаскар', code: 'MG', prefix: '+261' },
        { name: 'Малави', code: 'MW', prefix: '+265' },
        { name: 'Малайзия', code: 'MY', prefix: '+60' },
        { name: 'Мальдивы', code: 'MV', prefix: '+960' },
        { name: 'Мали', code: 'ML', prefix: '+223' },
        { name: 'Мальта', code: 'MT', prefix: '+356' },
        { name: 'Маршалловы Острова', code: 'MH', prefix: '+692' },
        { name: 'Мавритания', code: 'MR', prefix: '+222' },
        { name: 'Маврикий', code: 'MU', prefix: '+230' },
        { name: 'Мексика', code: 'MX', prefix: '+52' },
        { name: 'Микронезия', code: 'FM', prefix: '+691' },
        { name: 'Молдова', code: 'MD', prefix: '+373' },
        { name: 'Монако', code: 'MC', prefix: '+377' },
        { name: 'Монголия', code: 'MN', prefix: '+976' },
        { name: 'Черногория', code: 'ME', prefix: '+382' },
        { name: 'Марокко', code: 'MA', prefix: '+212' },
        { name: 'Мозамбик', code: 'MZ', prefix: '+258' },
        { name: 'Мьянма', code: 'MM', prefix: '+95' },
        { name: 'Намибия', code: 'NA', prefix: '+264' },
        { name: 'Науру', code: 'NR', prefix: '+674' },
        { name: 'Непал', code: 'NP', prefix: '+977' },
        { name: 'Нидерланды', code: 'NL', prefix: '+31' },
        { name: 'Новая Зеландия', code: 'NZ', prefix: '+64' },
        { name: 'Никарагуа', code: 'NI', prefix: '+505' },
        { name: 'Нигер', code: 'NE', prefix: '+227' },
        { name: 'Нигерия', code: 'NG', prefix: '+234' },
        { name: 'КНДР', code: 'KP', prefix: '+850' },
        { name: 'Норвегия', code: 'NO', prefix: '+47' },
        { name: 'Оман', code: 'OM', prefix: '+968' },
        { name: 'Пакистан', code: 'PK', prefix: '+92' },
        { name: 'Палау', code: 'PW', prefix: '+680' },
        { name: 'Панама', code: 'PA', prefix: '+507' },
        { name: 'Папуа-Новая Гвинея', code: 'PG', prefix: '+675' },
        { name: 'Парагвай', code: 'PY', prefix: '+595' },
        { name: 'Перу', code: 'PE', prefix: '+51' },
        { name: 'Филиппины', code: 'PH', prefix: '+63' },
        { name: 'Польша', code: 'PL', prefix: '+48' },
        { name: 'Португалия', code: 'PT', prefix: '+351' },
        { name: 'Катар', code: 'QA', prefix: '+974' },
        { name: 'Румыния', code: 'RO', prefix: '+40' },
        { name: 'Россия', code: 'RU', prefix: '+7' },
        { name: 'Руанда', code: 'RW', prefix: '+250' },
        { name: 'Сент-Китс и Невис', code: 'KN', prefix: '+1-869' },
        { name: 'Сент-Люсия', code: 'LC', prefix: '+1-758' },
        { name: 'Сент-Винсент и Гренадины', code: 'VC', prefix: '+1-784' },
        { name: 'Самоа', code: 'WS', prefix: '+685' },
        { name: 'Сан-Марино', code: 'SM', prefix: '+378' },
        { name: 'Сан-Томе и Принсипи', code: 'ST', prefix: '+239' },
        { name: 'Саудовская Аравия', code: 'SA', prefix: '+966' },
        { name: 'Сенегал', code: 'SN', prefix: '+221' },
        { name: 'Сербия', code: 'RS', prefix: '+381' },
        { name: 'Сейшелы', code: 'SC', prefix: '+248' },
        { name: 'Сьерра-Леоне', code: 'SL', prefix: '+232' },
        { name: 'Сингапур', code: 'SG', prefix: '+65' },
        { name: 'Словакия', code: 'SK', prefix: '+421' },
        { name: 'Словения', code: 'SI', prefix: '+386' },
        { name: 'Соломоновы Острова', code: 'SB', prefix: '+677' },
        { name: 'Сомали', code: 'SO', prefix: '+252' },
        { name: 'Южная Африка', code: 'ZA', prefix: '+27' },
        { name: 'Южная Корея', code: 'KR', prefix: '+82' },
        { name: 'Южный Судан', code: 'SS', prefix: '+211' },
        { name: 'Испания', code: 'ES', prefix: '+34' },
        { name: 'Шри-Ланка', code: 'LK', prefix: '+94' },
        { name: 'Судан', code: 'SD', prefix: '+249' },
        { name: 'Суринам', code: 'SR', prefix: '+597' },
        { name: 'Швеция', code: 'SE', prefix: '+46' },
        { name: 'Швейцария', code: 'CH', prefix: '+41' },
        { name: 'Сирия', code: 'SY', prefix: '+963' },
        { name: 'Таджикистан', code: 'TJ', prefix: '+992' },
        { name: 'Танзания', code: 'TZ', prefix: '+255' },
        { name: 'Таиланд', code: 'TH', prefix: '+66' },
        { name: 'Того', code: 'TG', prefix: '+228' },
        { name: 'Тонга', code: 'TO', prefix: '+676' },
        { name: 'Тринидад и Тобаго', code: 'TT', prefix: '+1-868' },
        { name: 'Тунис', code: 'TN', prefix: '+216' },
        { name: 'Турция', code: 'TR', prefix: '+90' },
        { name: 'Туркменистан', code: 'TM', prefix: '+993' },
        { name: 'Тувалу', code: 'TV', prefix: '+688' },
        { name: 'Уганда', code: 'UG', prefix: '+256' },
        { name: 'Украина', code: 'UA', prefix: '+380' },
        { name: 'ОАЭ', code: 'AE', prefix: '+971' },
        { name: 'Великобритания', code: 'GB', prefix: '+44' },
        { name: 'США', code: 'US', prefix: '+1' },
        { name: 'Уругвай', code: 'UY', prefix: '+598' },
        { name: 'Узбекистан', code: 'UZ', prefix: '+998' },
        { name: 'Вануату', code: 'VU', prefix: '+678' },
        { name: 'Ватикан', code: 'VA', prefix: '+39' },
        { name: 'Венесуэла', code: 'VE', prefix: '+58' },
        { name: 'Вьетнам', code: 'VN', prefix: '+84' },
        { name: 'Йемен', code: 'YE', prefix: '+967' },
        { name: 'Замбия', code: 'ZM', prefix: '+260' },
        { name: 'Зимбабве', code: 'ZW', prefix: '+263' }
    ];

    return countries.sort((a, b) => {
        // Всегда ставим Россию первой
        if (a.code === 'RU') return -1;
        if (b.code === 'RU') return 1;
        return a.name.localeCompare(b.name);
    }).map(country => `
        <option value="${country.prefix}" data-flag="${country.code}"
            ${country.code === 'RU' ? 'selected' : ''}>
            ${country.code} ${country.prefix}
        </option>
    `).join('');
}

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    const select = document.getElementById('inputGroupSelect01');
    const select2 = document.getElementById('inputGroupSelect02');
    select.innerHTML = generateCountryOptions();
    select2.innerHTML = generateCountryOptions();
});