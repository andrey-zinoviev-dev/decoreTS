import { goodModel } from "./models/goodModel";

export const goods:goodModel[] = [
    {
        name: "Товар 1",
        desription: "Описание товара 1, цвет, формы, размэры",
        stock: 3,
        designer: {
            name: "Сергей",
            chatUrl: "https://t.me/presentilich"
        }
    },
    {
        name: "Товар 2",
        desription: "Описание товара 2, цвет, формы, размэры",
        stock: 1,
        designer: {
            name: "Алекс",
            chatUrl: "https://t.me/alexey_2k22"
        }
    }, 
    {
        name: "Товар 3",
        desription: "Описание товара 3, цвет, формы, размэры",
        stock: 1,
        designer: {
            name: "Елена",
            chatUrl: "https://t.me/SotnikovaSelena"
        } 
    },
    {
        name: "Товар 4",
        desription: "Описание товара 4, цвет, формы, размэры",
        stock: 6,
        designer: {
            name: "Анастасия",
            chatUrl: "https://t.me/hlvnstt"
        } 
    }
]