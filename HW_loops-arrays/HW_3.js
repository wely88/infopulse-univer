var horoscope = {
  1 : {
    'Гороскоп на понедельник' : 'Сегодня звезды гороскопа настойчиво советуют вам как можно активнее общаться с окружающими, но при этом больше слушать, чем говорить. В делах такая тактика обещает принести неожиданные плоды, вплоть до новых предложений, выгодных сделок или даже повышения по службе.',
    'Небесное тело понедельника' : 'Марс: очень активный день'
  },
  2 : {
    'Гороскоп на вторник' : 'Сегодня звезды гороскопа на стороне тех, кто не пренебрегает порядком, так что если у вас получилось прийти на работу без опоздания, вы уже на полпути к успеху! Сегодня достаточно соблюдать элементарные правила, чтобы дела шли лучше обычного.',
    'Небесное тело вторника' : 'Меркурий: беспокойный день, покупки, поездки, переговоры'
  },
  3 : {
    'Гороскоп на среду' : 'Сегодня звезды гороскопа раз за разом будут провоцировать неуёмное желание одним махом разобраться с проблемами и делами, которые тяготили вас уже давно. Не сопротивляетесь этому порыву: день действительно хорош для того, чтобы довести до конца ранее начатое.',
    'Небесное тело среды' : 'Юпитер: мудрость, вера в себя'
  },
  4 : {
    'Гороскоп на четверг' : 'Сегодня стремления и возможности будут находиться в гороскопе на разных полюсах. Весь день звезды будут склонять к активным, энергичным действиям, однако организм будет активно противиться этому порыву, предпочитая отдыхать и расслабляться.',
    'Небесное тело четверга' : 'Венера: творческий день, романтические встречи, эмоции очень сильны'
  },
  5 : {
    'Гороскоп на пятницу' : 'Сегодняшний гороскоп буквально создан для того, чтобы провести день как можно дальше от дома! Сегодня тяга к приключениям и адреналину в крови способна внести заметные коррективы в ваши планы: может возникнуть внезапная идея обзавестись новыми знакомствами или новыми впечатлениями.',
    'Небесное тело пятницы' : 'Сатурн: тайна, уединение, самопознание'
  },
  6 : {
    'Гороскоп на субботу' : 'Сегодня звезды гороскопа задают сразу два противоположных тренда: с одной стороны день предполагает большие возможности, с другой же – лень. Работа может вызывать апатию и вялость, однако даваться будет легче обычного.',
    'Небесное тело субботы' : 'Солнце: активное проявление человека в окружающем мире, целительство'
  },
  7 : {
    'Гороскоп на воскресенье' : 'Сегодня звезды гороскопа с удвоенной силой будут склонять к осторожности, а также к необходимости тщательно взвешивать все «за» и «против», а потому приготовьтесь, что любое решение, пусть даже самое незначительное, будет даваться вам с большим трудом.',
    'Небесное тело воскресенья' : 'Луна: день капризный, беспокойный, переменчивый'
  }
};
  
//for (var day in horoscope){
  console.log(horoscope[new Date().getDay()]);
//}