import imgCategory1 from "/public/category/img1.jpg"
import imgCategory2 from "/public/category/img2.jpg"
import imgCategory3 from "/public/category/img3.png"

import primg1 from "/public/products/img1.png"
import primg2 from "/public/products/img2.png"
import primg3 from "/public/products/img3.png"
import primg4 from "/public/products/img4.png"

export const categories = [
    {
        id: 1,
        img: imgCategory1,
        name: 'мужчинам',
        path: "/catalog",
        
    },
    {
        id: 2,
        img: imgCategory2,
        name: "женщинам",
        path: "/catalog"
    },
    {
        id: 3,
        img: imgCategory3,
        name: "аксессуары",
        path: "/catalog"
    }
]

export const products = [
    {
        id: 1,
        img: primg1,
        name: "белый свитер",
        price: 5400,
        sizes: ['S', 'M', 'L'],
        colors: ['#9F7D5E', "#646464"]
    },
    {
        id: 2,
        img: primg2,
        name: "платье",
        price: 9400,
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['#9F7D5E', "#646464"]
    },
    {
        id: 3,
        img: primg3,
        name: "бежевая рубашка",
        price: 5800,
        sizes: ['S', 'L', 'XL'],
        colors: ['#9F7D5E', "#646464"]
    },
    {
        id: 4,
        img: primg4,
        name: "хлопковая рубашка",
        price: 9400,
        sizes: ['M', 'L', 'XL'],
        colors: ['#9F7D5E', "#646464"]
    },
    {
        id: 5,
        img: primg2,
        name: "платье",
        price: 1400,
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['#9F7D5E', "#646464"]
    },
    {
        id: 6,
        img: primg4,
        name: "хлопковая рубашка",
        price: 4500,
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['#9F7D5E', "#646464"]
    }
]

export const carts = [
    {
        id: 1,
        img: primg4,
        name: "хлопковая рубашка",
        price: 4500,
        size: 'L',
        color: 'Белый'
    }
]

