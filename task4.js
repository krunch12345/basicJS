'use strict'

/*
1. (это задание делайте по желанию) Написать функцию, преобразующую число в объект. Передавая на вход число в диапазоне [0, 999],
мы должны получить на выходе объект, в котором в соответствующих свойствах описаны разряды числа:
- единицы (в свойстве units)
- десятки (в свойстве tens)
- сотни (в свойстве hundreds)
*/

const num = +prompt('Введите число от 0 до 999', '100')

/**
 * Функция раскладывает целое число от 0 до 999 на сотни, десятки и единицы.
 * @param {number} num - число, которое раскладывает функция.
 * @returns {{}|{tens: number, units: number, hundreds: number}}
 */
function decompositionNumber(num) {
    if (!Number.isInteger(num) || num < 0 || num > 999) {
        alert('Значение аргумента должно быть целым числом в диапазоне от 0 до  999')
        return {}
    }

    return {
        'units': num % 10,
        'tens': Math.floor(num / 10) % 10,
        'hundreds': Math.floor(num / 100)
    }
}

console.log(decompositionNumber(num))

//=====================================================

/*
2. 1.1 Сделайте в стиле es5, а затем в стиле es6:
конструктор Product, который принимает параметры name и price,
сохраните их как свойства объекта.
Также объекты типа Product должны иметь метод make25PercentDiscount,
который будет уменьшать цену в объекте на 25%.
*/

//es5

function Product(name, price) {
    this.name = name
    this.price = price
}

Product.prototype.make25PercentDiscount = function() {
    this.price *= 0.75
}

let product1 = new Product('product1', 100)
product1.make25PercentDiscount()
console.log(product1.price)

//es6

class Product2 {
    constructor(name, price) {
        this.name = name
        this.price = price
    }

    make25PercentDiscount2() {
        this.price *= 0.75
    }
}

let product2 = new Product2('product2', 100)
product2.make25PercentDiscount2()
console.log(product2.price)

//=====================================================

/*
1.2 Сделайте в стиле es5, а затем в стиле es6:
а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства объекта.
Объекты типа Post должны иметь метод edit, который будет принимать текст и записывать его в свойство text объекта.
б) конструктор AttachedPost, который принимает параметры author, text, date.
Проинициализируйте эти свойства с помощью конструктора Post, чтобы не дублировать код.
Также в конструкторе AttachedPost должно создаваться свойство highlighted со значением false.
Унаследуйте в объектах типа AttachedPost методы из Post.
Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать свойству highlighted значение true.
*/


// es5

function Post(author, text, date = new Date()) {
    this.author = author
    this.text = text
    this.date = date
}

Post.prototype.edit = function(textEdit) {
    this.text = textEdit
}

function AttachedPost(author, text, date = new Date()) {
    Post.call(this, author, text, date)
    this.highlighted = false
}

AttachedPost.prototype = Object.create(Post.prototype)
AttachedPost.prototype.constructor = AttachedPost

AttachedPost.prototype.makeTextHighlighted = function() {
    this.highlighted = true
}

let post1 = new Post('Author1', 'text1')
console.log(post1)

post1.edit('text2')
console.log(post1)

let post1Attached = new AttachedPost(post1.author, post1.text)
console.log(post1Attached)

post1Attached.makeTextHighlighted()
console.log(post1Attached)


// es6

class Post2 {
    constructor(author, text, date = new Date()) {
        this.author = author
        this.text = text
        this.date = date
    }

    edit(textEdit) {
        this.text = textEdit
    }
}

class AttachedPost2 extends Post2 {
    constructor(author, text, date = new Date()) {
        super(author, text, date)
        this.highlighted = false
    }

    makeTextHighlighted2() {
        this.highlighted = true
    }
}

let post2 = new Post('Author2', 'text2')
console.log(post2)

post2.edit('text3')
console.log(post2)

let post2Attached = new AttachedPost2(post2.author, post2.text)
console.log(post2Attached)

post2Attached.makeTextHighlighted2()
console.log(post2Attached)