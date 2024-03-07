import { goodModel } from "./models/goodModel";
import { filterModel } from "./models/filterModel";
import good1 from "./assets/photo_2024-03-07_02-21-30.jpg";
import good2 from "./assets/photo_2024-03-07_02-21-42.jpg";
import good3 from "./assets/photo_2024-03-07_02-21-58.jpg";
import good4 from "./assets/photo_2024-03-07_02-22-02.jpg";
import avatar1 from "./assets/photo_2019-05-18_19-59-59.jpg";
import avatar2 from "./assets/photo_2022-06-23_15-47-49.jpg";
import avatar3 from "./assets/photo_2023-12-02_21-27-11.jpg";
import avatar4 from "./assets/photo_2024-01-12_21-21-54.jpg";

export const goods:goodModel[] = [
    {
        name: "Товар 1",
        desription: "Описание товара 1, цвет, формы, размэры",
        stock: 3,
        cover: good1,
        // cover:
        designer: {
            name: "Сергей",
            chatUrl: "https://t.me/presentilich",
            avatar: avatar1
        }
    },
    {
        name: "Товар 2",
        desription: "Описание товара 2, цвет, формы, размэры",
        stock: 1,
        cover: good2,
        designer: {
            name: "Алекс",
            chatUrl: "https://t.me/alexey_2k22",
            avatar: avatar2
        }
    }, 
    {
        name: "Товар 3",
        desription: "Описание товара 3, цвет, формы, размэры",
        stock: 1,
        cover: good3,
        designer: {
            name: "Елена",
            chatUrl: "https://t.me/SotnikovaSelena",
            avatar: avatar3
        } 
    },
    {
        name: "Товар 4",
        desription: "Описание товара 4, цвет, формы, размэры",
        stock: 6,
        cover: good4,
        designer: {
            name: "Анастасия",
            chatUrl: "https://t.me/hlvnstt",
            avatar: avatar4
        } 
    }
]

export const categories:string[] = [
    "Категория 1",
    "Категория 2",
    "Категория 3",
    "Сотрудничество",
]

export const filters:filterModel[] = [
    {
        name: "Цена"
    },
    {
        name: "Размер"
    },
    {
        name: "Форма" 
    },
    {
        name: "Дизайнер"
    }
]