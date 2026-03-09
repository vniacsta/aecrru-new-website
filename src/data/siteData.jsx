import {
  MailIcon,
  MapPinIcon,
  MobileIcon,
  PhoneIcon,
} from "../components/icons";

export const navLinks = [
  { href: "#home", label: "Início" },
  { href: "#about", label: "Quem Somos" },
  { href: "#work", label: "Áreas de Intervenção" },
  { href: "#contacts", label: "Contatos" },
];

export const heroSlides = [
  "/media/work-type-3/type3-22.jpeg",
  "/media/work-type-3/type3-21.jpg",
  "/media/work-type-3/type3-18.jpeg",
  "/media/work-type-3/type3-10.jpg",
  "/media/work-type-3/type3-20.jpeg",
  "/media/work-type-3/type3-07.jpeg",
  "/media/work-type-3/type3-11.jpeg",
  "/media/work-type-3/type3-19.jpeg",
];

export const aboutColumns = [
  {
    title: "A Nossa História",
    content: (
      <p>
        <span className="about-txt">
          <span className="about-txt-brand">Agostinho Emanuel</span> -
          Construção, Remodelação &amp; Reabilitação, Unipessoal Lda.
        </span>{" "}
        é uma jovem PME, fundada em 2017, com grande foco na excelência e na
        satisfação do cliente. Desenvolvemos as nossas atividades de construção
        de edifícios, bem como remodelação e reabilitação de edifícios
        comerciais, industriais, públicos e residenciais. Somos uma empresa em
        franco crescimento e em constante evolução e adaptação aos meios e
        recursos modernos.
      </p>
    ),
  },
  {
    title: "Os Nossos Valores",
    content: (
      <p>
        Os nossos valores assentam numa base sólida de trabalho árduo em prol da
        excelência, eficiência e satisfação plena do cliente. Somos uma equipa
        jovem, qualificada e motivada, trabalhando em conjunto com os nossos
        parceiros, primamos pelo rigor e qualidade no trabalho que executamos.
      </p>
    ),
  },
];

export const workSections = [
  {
    id: "workType1",
    title: "Edifícios Comerciais e Industriais",
    cover: "/media/work-type-1/type1-01.JPG",
    images: [
      "/media/work-type-1/type1-02.JPG",
      "/media/work-type-1/type1-03.JPG",
      "/media/work-type-1/type1-04.JPG",
      "/media/work-type-1/type1-05.JPG",
      "/media/work-type-1/type1-06.jpeg",
      "/media/work-type-1/type1-07.jpeg",
      "/media/work-type-1/type1-08.jpg",
      "/media/work-type-1/type1-09.jpeg",
    ],
  },
  {
    id: "workType2",
    title: "Edifícios e Espaços Públicos",
    cover: "/media/work-type-2/type2-01.jpeg",
    images: [
      "/media/work-type-2/type2-02.jpeg",
      "/media/work-type-2/type2-03.jpeg",
    ],
  },
  {
    id: "workType3",
    title: "Edifícios Residenciais",
    cover: "/media/work-type-3/type3-11.jpeg",
    images: [
      "/media/work-type-3/type3-21.jpg",
      "/media/work-type-3/type3-09.jpeg",
      "/media/work-type-3/type3-10.jpg",
      "/media/work-type-3/type3-11.jpeg",
      "/media/work-type-3/type3-12.jpeg",
      "/media/work-type-3/type3-13.jpeg",
      "/media/work-type-3/type3-14.jpeg",
      "/media/work-type-3/type3-15.jpeg",
      "/media/work-type-3/type3-16.jpeg",
      "/media/work-type-3/type3-17.jpeg",
      "/media/work-type-3/type3-02.jpg",
      "/media/work-type-3/type3-03.jpg",
      "/media/work-type-3/type3-01.jpg",
      "/media/work-type-3/type3-04.jpg",
      "/media/work-type-3/type3-05.jpg",
      "/media/work-type-3/type3-06.jpg",
      "/media/work-type-3/type3-07.jpeg",
      "/media/work-type-3/type3-08.jpeg",
      "/media/work-type-3/type3-18.jpeg",
      "/media/work-type-3/type3-19.jpeg",
    ],
  },
  {
    id: "workType4",
    title: "Reabilitação e Remodelação",
    cover: "/media/work-type-4/type4-01.JPG",
    images: [
      "/media/work-type-4/type4-02.jpg",
      "/media/work-type-4/type4-03.jpg",
      "/media/work-type-4/type4-04.jpg",
      "/media/work-type-4/type4-05.jpg",
    ],
  },
];

export const contactItems = [
  {
    title: "Endereço",
    icon: <MapPinIcon />,
    content: (
      <a
        href="https://goo.gl/maps/n6s4yYFqn47iHgXN6"
        target="_blank"
        rel="noreferrer"
        className="contacts-link"
      >
        <p>Est. Vale Mourão</p>
        <p>Rua da Bica N.º 1</p>
        <p>2635-228 Rio de Mouro</p>
        <p>Sintra, Portugal</p>
      </a>
    ),
  },
  {
    title: "Telefone",
    icon: <PhoneIcon />,
    content: <p>+351 211 607 204</p>,
  },
  {
    title: "Telemóvel",
    icon: <MobileIcon />,
    content: <p>+351 910 892 786</p>,
  },
  {
    title: "Email",
    icon: <MailIcon />,
    content: (
      <a
        href="mailto:geral@aecrru.pt"
        target="_blank"
        rel="noreferrer"
        className="contacts-link"
      >
        <p>geral@aecrru.pt</p>
      </a>
    ),
  },
];
