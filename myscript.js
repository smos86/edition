// Пропись функции с помощью библиотеки jquery
// Изначально все примеры печати скрыты
$('.pic img').hide();
$('.p1').hide();
$('.p2').hide();
$('.h3').hide();
// Проверяем были ли изменнены поля в форме, если да, то запускаем функцию
$(function () {
    $('.calc').change(function () {
        // Определение переменной тиража:
        $card = $('select#card').val();
        // Определение переменной типа бумаги:
        $paper = $('select#paper').val();
        // Опеределение переменной типа печати:
        $color = $('select#color').val();
        // Опеределение переменной стоимости листа бумаги:
        $bumaga = $('select#paper option:selected').attr("bumaga");
        // Опеределение переменной стоимости печати:
        $print = $('select#color option:selected').attr('print');
        // Опеределение переменной типа печати с привязкой примера через id=data:
        $color1 = $('select#color option:selected').attr('data');
        // При изменении полей формы показываем текущий тип печати:
        $('.p1').show();
        $('.p2').show();
        $('.h3').show();
        // Демонстрация типа печати на основе выбора:
        if ($color1 == 1) {
            $('.pic img').hide();
            $('#card1').show('slow');
            $('#card6').show('slow');
        }
        if ($color1 == 2) {
            $('.pic img').hide();
            $('#card2').show('slow');
            $('#card7').show('slow');
        }
        if ($color1 == 3) {
            $('.pic img').hide();
            $('#card3').show('slow');
            $('#card8').show('slow');
        }
        if ($color1 == 4) {
            $('.pic img').hide();
            $('#card4').show('slow');
            $('#card9').show('slow');
        }
        if ($color1 == 5) {
            $('.pic img').hide();
            $('#card5').show('slow');
            $('#card10').show('slow');
        }
        // Переменная - количество штук визиток помещающихся на одном листе формата А3:
        $tir = 30;
        // Итоговый тираж делим на 30
        $fin = $card / $tir;
        // Формула расчёта тиража: Итоговый тираж умножаем на стоимость листа бумаги и умножаем на цену за печать:
        $price = $fin * $bumaga * $print
        // Вывод округлённой суммы:
        $('span#price').text(Math.round($price));
    });
});