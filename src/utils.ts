import { goodModel } from "./models/goodModel";
import { filterModel } from "./models/filterModel";
import { MediaModel } from "./models/mediaLinkModel";
import { DesignerModel } from "./models/designerModel";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages, faLightbulb } from "@fortawesome/free-regular-svg-icons";
import { faVk } from "@fortawesome/free-brands-svg-icons/faVk";
import { faTelegram } from "@fortawesome/free-brands-svg-icons/faTelegram";
import { faYoutube } from "@fortawesome/free-brands-svg-icons/faYoutube";
import good1 from "./assets/photo_2024-03-07_02-21-30.jpg";
import good2 from "./assets/photo_2024-03-07_02-21-42.jpg";
import good3 from "./assets/photo_2024-03-07_02-21-58.jpg";
import good4 from "./assets/photo_2024-03-07_02-22-02.jpg";
import avatar1 from "./assets/photo_2019-05-18_19-59-59.jpg";
import avatar2 from "./assets/photo_2022-06-23_15-47-49.jpg";
import avatar3 from "./assets/photo_2023-12-02_21-27-11.jpg";
import avatar4 from "./assets/photo_2024-01-12_21-21-54.jpg";
import { navModel } from "./models/navModel";
import { faCouch, faHanukiah, faWineGlassEmpty } from "@fortawesome/free-solid-svg-icons";

export const goods:goodModel[] = [
    {
        name: "Товар 1",
        desription: "Описание товара 1, цвет, формы, размэры",
        stock: 3,
        cover: good1,
        price: 9750
    },
    {
        name: "Товар 2",
        desription: "Описание товара 2, цвет, формы, размэры",
        stock: 0,
        cover: good2,
        price: 12000
    }, 
    {
        name: "Товар 3",
        desription: "Описание товара 3, цвет, формы, размэры",
        stock: 1,
        cover: good3,
        price: 9750
    },
    {
        name: "Товар 4",
        desription: "Описание товара 4, цвет, формы, размэры",
        stock: 6,
        cover: good4,
        price: 12000
    },    
    {
        name: "Товар 1",
        desription: "Описание товара 1, цвет, формы, размэры",
        stock: 3,
        cover: good1,
        price: 12000
    },
    {
        name: "Товар 2",
        desription: "Описание товара 2, цвет, формы, размэры",
        stock: 0,
        cover: good2,
        price: 12000
    }, 
    {
        name: "Товар 3",
        desription: "Описание товара 3, цвет, формы, размэры",
        stock: 1,
        cover: good3,
        price: 12000
    },
    {
        name: "Товар 4",
        desription: "Описание товара 4, цвет, формы, размэры",
        stock: 6,
        cover: good4,
        price: 12000
    },    
    {
        name: "Товар 1",
        desription: "Описание товара 1, цвет, формы, размэры",
        stock: 3,
        cover: good1,
        price: 12000
    },
    {
        name: "Товар 2",
        desription: "Описание товара 2, цвет, формы, размэры",
        stock: 0,
        cover: good2,
        price: 12000
    }, 
    {
        name: "Товар 3",
        desription: "Описание товара 3, цвет, формы, размэры",
        stock: 1,
        cover: good3,
        price: 12000
    },
    {
        name: "Товар 4",
        desription: "Описание товара 4, цвет, формы, размэры",
        stock: 6,
        cover: good4,
        price: 12000
    }
]

export const categories:navModel[] = [
    {
        name: "Свет",
        link: "products/light",
        art: faLightbulb,
    },
    {
        name: "Мебель",
        link: "products/furniture",
        art: faCouch,
    },
    {
        name: "Картины",
        link: "products/paintings",
        art: faImages,
    },
    {
        name: "Посуда",
        link: "products/dishes",
        art: faWineGlassEmpty,
    },
    {
        name: "Свечи",
        link: "products/candles",
        art: faHanukiah,
    },
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

export const links:string[] = [
    "о нас",
    "воркшопы",
    "сотрудничество",
    "адрес шоурума",
    "доставка и оплата",
]

export const socialMediaLinks:MediaModel[] = [
    {
        link: "https://vk.com/id7553806",
        icon: faVk
    },
    {
        link: "https://t.me/Dronis_D",
        icon: faTelegram
    },
    {
        link: "https://www.youtube.com/",
        icon: faYoutube
    }
]

export const designers:DesignerModel[] = [
    {
        name: "Сергей",
        cover: avatar1,
        works: 9
    },
    {
        name: "Алекс",
        cover: avatar2,
        works: 1
    },
    {
        name: "Варя- Варюша",
        cover: avatar3,
        works: 12
    },
    {
        name: "Саня",
        cover: avatar4,
        works: 2
    }
];