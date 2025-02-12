import "./index.html"
import "./index.scss"
import Swiper from "swiper"
import { Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import img1 from "./img/img.jpg"
import img2 from "./img/img-(0).jpg"
import img3 from "./img/img-(2).jpg"
import img4 from "./img/img-(3).jpg"
import img5 from "./img/img-(4).jpg"
import img6 from "./img/img-(5).jpg"
import img7 from "./img/img-(6).jpg"
import img8 from "./img/img-(7).jpg"
import img9 from "./img/img-(8).jpg"
import plus from "./svg/plus.svg"

const sliderData = [
  {
    img: img1,
    title: "Уверенность в завтрашнем дне",
    text: "ООО «Conecom», российское подразделение французского концерна DuffBeer. Мы компания, которая честно ведет свой бизнес на территории РФ, соблюдая законодательство и гарантируя стабильность и уверенность в завтрашнем дне.",
  },
  {
    img: img2,

    title: "Безопасность на рабочем месте – приоритет №1",
    text: "Вопросам безопасности и качества пищевой продукции в нашей компании уделяется повышенное внимание. Все производства группы DuffBeer в России постоянно работают над улучшением процессов и стремятся сделать все возможное, чтобы рабочий процесс был максимально безопасным и комфортным.",
  },
  {
    img: img3,

    title: "Заботимся о здоровье сотрудников",
    text: "Каждый сотрудник в нашей компании обеспечен полисом добровольного медицинского страхования. Кроме того, на каждом заводе есть медицинский пункт для сотрудников. Осуществляется страхование от несчастных случаев с первого дня работы.",
  },
  {
    img: img4,

    title: "Стабильная заработная плата",
    text: "Мы обеспечиваем нашим сотрудникам стабильную заработную плату в соответствии с рынком региона. Средний стаж работы в нашей компании – 7 лет.",
  },
  {
    img: img5,

    title:
      "Предоставление удобной спецодежды и СИЗ для производственного персонала",
    text: "Мы предоставляем удобные СИЗ и спецодежду и в случае износа или порчи обмениваются на новые.",
  },
  {
    img: img6,

    title: "Обучение: различные программы обучения и профессиональные тренинги",
    text: "Мы уделяем много внимания развитию наших сотрудников. В компании работает Внутренний центр обучений и ежегодно проводится большое количество обучающих мероприятий как локально на заводах, так и в головном офисе DuffBeer во Франции.",
  },
  {
    img: img7,

    title: "Возможности для реализации творческого потенциала",
    text: "Мы ставим перед собой амбициозные и интересные цели, а реализация задач является командной работой сотрудников из различных подразделений. Мы также принимаем активное участие в работе над кросс-функциональными проектам с коллегами из других стран присутствия DuffBeer.",
  },
  {
    img: img8,

    title: "Мы - социально ответственная компания и заботимся об окружающих",
    text: "Наша миссия лежит в основе социально-корпоративной ответственности. Мы ведем свою деятельность в соответствии с тремя основными правилами: мы заботимся о людях; наша деятельность устойчива по своей природе; мы заботимся об окружающей среде.",
  },
  {
    img: img9,

    title: "Мы - семейная компания и любим проводить время вместе",
    text: "Ежегодно мы проводим корпоративные мероприятия не только для наших сотрудников, но и для семей наших сотрудников. А корпоративные подарки для детей сотрудников – наша добрая предновогодняя традиция.",
  },
]

document.addEventListener("DOMContentLoaded", function () {
  let swiperInstances = []

  function checkScreenSize() {
    if (window.innerWidth <= 1019) {
      if (swiperInstances.length === 0) {
        document
          .querySelectorAll(".content-slider")
          .forEach((slider, index) => {
            // const nextButton = slider.querySelector(".swiper-button-next")
            // const prevButton = slider.querySelector(".swiper-button-prev")
            // const pagination = slider.querySelector(".swiper-pagination")

            // if (!nextButton || !prevButton || !pagination) {
            //   console.warn(
            //     "Навигационные элементы отсутствуют в слайдере",
            //     slider
            //   )
            //   return
            // }
            const swiper = new Swiper(slider, {
              modules: [Navigation, Pagination],
              loop: true,
              breakpoints: {
                0: { slidesPerView: 1, spaceBetween: 0 },
                400: { slidesPerView: 2, spaceBetween: 10 },
                700: { slidesPerView: 2, spaceBetween: 20 },
              },
              pagination: {
                el: `.swiper-pagination${index + 1}`,
                clickable: true,
              },
              navigation: {
                nextEl: `.swiper-button-next${index + 1}`,
                prevEl: `.swiper-button-prev${index + 1}`,
              },
              slidesPerGroup: 1,
            })
            swiperInstances.push(swiper)
          })
      }
    } else {
      swiperInstances.forEach((swiper) => swiper.destroy(true, true))
      swiperInstances = []
      document.querySelectorAll(".content-slider").forEach((slider) => {
        slider.classList.remove("swiper-initialized")
      })
    }
  }

  const swiperWrapper = document.querySelector(".swiper-wrapper")

  sliderData.forEach((slide, index) => {
    const slideElement = document.createElement("div")
    slideElement.classList.add("swiper-slide")
    slideElement.innerHTML = `

        <div class="slider-img">
            <img src=${slide.img} alt="" />
        </div>
        <div class="slider-text">
            <div class ="slider-text_title">${slide.title}</div>
            <div class="slider-text_main">${slide.text}</div>
            <div class="slider-text_plus"><img src=${plus} alt="plus"/></div> 
        </div>
        
        
    `
    swiperWrapper.appendChild(slideElement)
  })

  const plusButtons = document.querySelectorAll(".slider-text_plus")

  plusButtons.forEach((button) => {
    button.addEventListener("click", () => {
      console.log("click")
      const parent = button.closest(".swiper-slide") // Указывай правильный родительский селектор
      if (parent) {
        parent.classList.toggle("active")
      }
    })
  })

  // Проверка при загрузке и изменении экрана
  window.addEventListener("resize", checkScreenSize)
  window.addEventListener("load", checkScreenSize)
  checkScreenSize()
})
