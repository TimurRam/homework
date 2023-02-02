function seasons(userNumber = Number(prompt('Введите число от 1 до 12'))) {
    if (isNaN(userNumber)) {
        alert('Это не число')
    } else {
        switch (userNumber) {
            case (1):
            case (2):
            case (12):
                alert('Зима')
                break;
            case (3):
            case (4):
            case (5):
                alert('Весна')
                break;
            case (6):
            case (7):
            case (8):
                alert('Лето')
                break;
            case (9):
            case (10):
            case (11):
                alert('Осень')
                break;
            default:
                alert('Только числа от 1 до 12')
                break;
        }
    }
}