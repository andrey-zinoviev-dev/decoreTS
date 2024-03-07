import { goodModel } from "./models/goodModel";
import good1 from "./assets/photo_2024-03-07_02-21-30.jpg";
import good2 from "./assets/photo_2024-03-07_02-21-42.jpg";
import good3 from "./assets/photo_2024-03-07_02-21-58.jpg";
import good4 from "./assets/photo_2024-03-07_02-22-02.jpg";

export const goods:goodModel[] = [
    {
        name: "Товар 1",
        desription: "Описание товара 1, цвет, формы, размэры",
        stock: 3,
        cover: good1,
        // cover:
        designer: {
            name: "Сергей",
            chatUrl: "https://t.me/presentilich"
        }
    },
    {
        name: "Товар 2",
        desription: "Описание товара 2, цвет, формы, размэры",
        stock: 1,
        cover: good2,
        designer: {
            name: "Алекс",
            chatUrl: "https://t.me/alexey_2k22"
        }
    }, 
    {
        name: "Товар 3",
        desription: "Описание товара 3, цвет, формы, размэры",
        stock: 1,
        cover: good3,
        designer: {
            name: "Елена",
            chatUrl: "https://t.me/SotnikovaSelena"
        } 
    },
    {
        name: "Товар 4",
        desription: "Описание товара 4, цвет, формы, размэры",
        stock: 6,
        cover: good4,
        designer: {
            name: "Анастасия",
            chatUrl: "https://t.me/hlvnstt"
        } 
    }
]

export const categories:string[] = [
    "Категория 1",
    "Категория 2",
    "Категория 3",
    "Сотрудничество",
]