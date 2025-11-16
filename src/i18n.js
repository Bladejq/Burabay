import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      home: "Home",
      headerTitle: "T214 • Sherkhan Gulnaz",
      main: "burabay",
      mainTitle: "Borovoe is one of the most beautiful natural habitats of Kazakhstan, which is popularly called the \"Blue Valley\". Here, a deep pine forest, blue lakes and rocks of unusual shape are combined in one scene and become a hand-painted painting of nature. The region is famous for such transparent lakes as Borovoe, Shortandy, Bolshaya Chebakty, and when the sun comes down, the surface of the lake shines like a mirror. The most famous rock in borovoe is Zhumbaktas, a unique natural sculpture that looks like a young girl on the one hand and an old woman on the other. And about the okzhetpes peak there is a legend that \"no bullet reaches its height.\" It is believed that the pine air of this region is very clean, useful for the respiratory tract. Burabay is a sacred place where the beauty and history of nature are intertwined, each stone and Hill retains its legend.",
      footerText: "© 2025 Ndeveloper. All rights reserved."
    }
  },
  ru: {
    translation: {
      home: "Главная",
      headerTitle: "T214 • Шерхан Гулназ",
      main: "Боровое",
      mainTitle: "Бурабай-одна из самых живописных природных мест Казахстана, которую в народе называют \«Голубая долина\». Здесь глубокий сосновый лес, бирюзовые озера и скалы необычной формы слились воедино, превратившись в картину природы своими руками. Регион известен своими кристально чистыми озерами, такими как Боровое, Щучье, большое Мальковое, с восходом солнца поверхность озера светится как зеркало. Самая известная скала Борового-это Жумбактас, уникальная природная скульптура, которая с одной стороны выглядит как молодая девушка, а с другой-как образ старухи. А о пике Окжетпес существует легенда, что \«ни одна пуля не достигает его высоты\». Сосновый воздух этого региона считается очень чистым, полезным для дыхательных путей. Боровое-это священное место, где переплетаются красота и история природы, и это удивительное место, где каждый камень и потолок сохраняют свою легенду.",
      footerText: "© 2025 Ndeveloper. Все права защищены."
    }
  },
  kz: {
    translation: {
      home: "Басты бет",
      headerTitle: "T214 • Шерхан Гүлназ",
      main: "Бурабай",
      mainTitle: "Бурабай – Қазақстанның ең әсем табиғи мекендерінің бірі, оны халық \«көк алқап\» деп атайды. Мұнда терең қарағай орманы, көгілдір көлдер мен пішіні ерекше жартастар бір көріністе үйлесіп, табиғаттың өз қолымен салған картинасына айналған. Аймақ Бурабай, Шортанды, Үлкен Шабақты сияқты мөлдір көлдерімен танымал, күн түскенде көл беті айнадай жарқырап тұрады. Бурабайдағы ең әйгілі жартас – Жұмбақтас, ол бір жағынан жас қызға, екінші жағынан кемпір бейнесіне ұқсап көрінетін ерекше табиғи мүсін. Ал Оқжетпес шыңы туралы \«оның биігіне ешқандай оқ жетпейді\» деген аңыз бар. Бұл өңірдің қарағайлы ауасы өте таза, тыныс жолдарына пайдалы деп есептеледі. Бурабай – табиғаттың сұлулығы мен тарихы тоғысқан киелі мекен, әр тасы мен төбесі өз аңызын сақтап тұрған таңғажайып орын.",
      footerText: "© 2025 Ndeveloper. Барлық құқықтар қорғалған."
    }
  },
  ch: {
    translation: {
      home: "家",
      headerTitle: "T214 • 谢尔汉古尔纳兹",
      main: "博罗麦",
      mainTitle: "布拉拜是哈萨克斯坦最美丽的自然景观之一，被称为\"Kok alap\"。 在这里，一片深邃的松树林，碧绿的湖泊和形状不寻常的岩石融合在一起，用自己的双手变成了一幅大自然的图画。 该地区以其清澈的湖泊而闻名，如Borovoe，Shchuchye，Bolshoe Malkovoe，当太阳升起时，湖面像一面镜子一样发光。 Borovoi最着名的岩石是Zhumbaktas，这是一个独特的自然雕塑，一方面看起来像一个年轻女孩，另一方面像一个老妇人。 关于Okzhetpes峰有一个传说：\"没有一颗子弹达到它的高度。\" 该地区的松树空气被认为非常清洁，对呼吸道有益。 Borovoe是一个神圣的地方，大自然的美丽和历史交织在一起，这是一个令人惊叹的地方，每一块石头和天花板都保存着他们的传奇。",
      footerText: "© 2025 Ndeveloper。版权所有。"
    }
  }
};


i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng: "kz",
        fallbackLng: "kz",
        interpolation: { escapeValue: false }
    });

export default i18n;
