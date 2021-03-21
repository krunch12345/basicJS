'use strict'

/*
1. С помощью цикла for написать алгоритм для вывода чисел
(выводите в консоль, с помощью console.log) от 0 до 10 включительно,
чтобы результат выглядел так:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
...
10 – четное число
*/

for (let i = 0; i <= 10; i++) {
    if (i === 0) {
        console.log(`${i} - это ноль`)
    } else if (i % 2 === 0) {
        console.log(`${i} - четное число`)
    } else {
        console.log(`${i} - нечетное число`)
    }
}

//=====================================================

/*
2. Выведите в консоль значения, указанные рядом с комментариями
*/

const post = {
    author: "John", //вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2 //вывести это число
            }
        },
        {
            userId: 5, //вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", //вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1
            }
        },
    ]
}

console.log(post.author)
console.log(post.comments[0].rating.dislikes)
console.log(post.comments[1].userId)
console.log(post.comments[1].text)

//=====================================================

/*
3. Перед вами находится массив с продуктами,
сегодня распродажа и вам нужно на каждый товар применить скидку 15%
*/

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
]

products.forEach(product => {
    product.price = product.price * 0.85
    console.log(product.price)
})

//=====================================================

/*
4. Перед вами находится массив с продуктами в интернет-магазине.
Вам нужно:
    1. Получить все товары, у которых есть фотографии
    2. Отсортируйте товары по цене (от низкой цены к высокой)
*/

const products2 = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
]

const products2WithPhotos = products2.filter(products2 => products2.photos && products2.photos.length > 0)
console.log(products2WithPhotos)

const product2SortPrice = products2.sort(function (a, b) {
    if (a.price > b.price) {
        return 1 }
    if (a.price < b.price) {
        return -1 }
    return 0
})

console.log(product2SortPrice)

//=====================================================

/*
5. Вывести с помощью цикла for числа от 0 до 9, НЕ используя тело цикла.
*/

for (let i = 0; i <= 9; console.log(i++)) {}

//=====================================================

/*
6. Нарисовать пирамиду с помощью console.log, как показано на рисунке,
только у вашей пирамиды должно быть 20 рядов, а не 5:
x
xx
xxx
xxxx
xxxxx
*/

for (let i = 'x'; i.length <= 20; i+='x') {
    console.log(i)
}