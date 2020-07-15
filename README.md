<h1>[RN] Product Screen Page</h1> </br>
<h2>Якори:</h2>
<ol>
  <li><a href="#start">Как запустить</a></li>
  <li><a href="#p1">Цель</a></li>
  <li><a href="#p2">Технологии</a></li>
  <li><a href="#p3">Сложности</a></li>
  <li><a href="#p4">Новые навыки</a></li>
  <li><a href="#p5">Качество кода</a></li>
  <li><a href="#p6">Время</a></li>
</ol>

<h2 id="start">Как запустить</h2>
Запускаем консоль в корне и прописываем npm start или expo start, далее в открывшемся окне браузера сканируем QRCode с телефона в приложении Expo, и приложение запускается. Или можно запустить с помощью 'Run on Android/IOS Emulator', но тогда должен быть настроенный  эмулятор, это уже не ко мне :)

<h2 id="p1">Цель</h2></hr>
Цель у проекта была одна: Попрактиковать работу на новой для меня технологии React Native, при этом сделать красивый и адаптивный дизайн. В общем - создать достойный проект в портфолио

<h2 id="p2">Технологии</h2></hr>
Не особо знаю, что уместно сюда написать, поэтоум напишу все подряд: git, фреймы, библиотеки которые подключал и все прочее
Технологии которыми я пользовался по ходу разработки это: </br>
<ul>
  <li>React Native - ну соотвественно то на чем писал</li>
  <li>Expo-cli - среда в которой запускал и тестил код (хз можно ли считать за технологию, но все равно напишу, пускай будет :) )</li>
  <li>[Electron] React Native devtools - не помню точно как называется пакет, но суть ясна, очень удобная приколямба для просмотра блоков верстки как в Chrome devtools, правда были немного проблемы с установкой, но не критичные</li>
  <li>GIT - ну тут ясно</li>
  <li>Ну и множество библиотек всяких по типу ViewPager, Ripple и тд с которыми научился обращаться..</li>
</ul>

<h2 id="p3">Сложности</h2></hr>
Вот тут наверное больше всего можно написать, сложностей было много, т.к это первый мой проект на RN, и по незнанию было сначало немного тяжко, если прям перечилять, то: Не мог научиться запускать Expo, не мог понять как правильно работать с эмулятором, не мог привыкнуть к новой системе компонентов (тип View вместо div и т.д)</br>
Но это все по мелочи, проблем при разработке (нормальных) было немного
<ul>
  <li>Был баг с ScrollView (pagindEnabled={true} в главном слайдере, на андроид можно было при определенных условиях заставить pagindEnabled тупить и останавливать скролл между 2 пикчами, решил с помощью смторонней либы ViewPager )</li>
  <li>Появилась очень серьёзная для меня проблема при заливке на GIT, у меня появился какой то ворнинг об уязвимостях, т.к раньше с таким не сталкивался + не очень хорошо понимаю логику npm пакетов и прочего, стало немного сложно разобраться со всем этим, но вроде как я пофиксил все уязвимости, и получил новый экспириенс в работе с npm и git </li>
  <li>Была (возможно и есть) проблема с адаптивом, т.к эмулятор отображает каряво (или я настроил через жопу, как обычно) то не было возможности особо тестить с разной диагональю, у меня было 2 смартфона с 4.7" и 6.4" (андроид) ну и + телефоны товарищей, поэтому большого спектра в выборе диагоналей не было, и пришлось выкручиваться, но вроде как решил эту проблему и на всех устройствах все выглядит намана</li>
  <li>Так же проблемы при использовании новых технологий, т.е впервые заюзал useContext, Animated в RN (кстати, по моему получилось круто) но это по мелочи и стандартно</li>
</ul>
Впринципе все проблемы не очень могу вспомнить, это так то и не важно, важно то, что как я считаю я справился со всеми и выполнил задачу)
Ну а еще я зафигачил 3 коммита подряд т.к git не обновлялся ... ну я нечаяно

<h2 id="p4">Новые навыки</h2></hr>
Ну этот пункт можно было совместить с предыдущим, т.к решение проблем - это прибавка к своему скиллу, и вообще я пишу этот огромный текст за один пресест и уже немного устал, так что просто поверте на слово пж, там много нового опыта было, полюбому)

<h2 id="p5">Качество кода</h2></hr>
Насчет качества кода сказать именно сейчас затрудняюсь, т.к я его только что написал :D Ну как по мне, в некоторых местах можно было найти множество других, более правильных и логичных решений, но в свое опрадание могу сказать, что код получился достаточно простой для понимания и я дмаю, что многие правила хорошего кода я смог собл.. соблюсти капец слвово сложное
 
<h2 id="p5">Время</h2></hr>
На проект потратил много времени и сил, т.к все технологии новые, да и в день я мог уделять немного времени, поэтому на такю кроху (ну реально очень мало сдела) потратил почти месяц, как по мне это ОЧЕНЬ долго
