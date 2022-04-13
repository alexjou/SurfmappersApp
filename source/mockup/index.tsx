// mockupData.js
import Surfer1 from '../assets/Friend1/friend1.png';
import Surfer2 from '../assets/Friend2/friend2.png';
import Surfer3 from '../assets/Friend3/friend3.png';
import Surfer4 from '../assets/Friend4/friend4.png';
import Surfer5 from '../assets/Friend5/friend5.png';

export const mockupImgs = [
  {
    alt: 'Img1',
    url: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
  },
  {
    alt: 'Img2',
    url: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
  },
  {
    alt: 'Img3',
    url: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
  },
  {
    alt: 'Img4',
    url: 'https://images.unsplash.com/photo-1535182463927-440364075d9c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80',
  },
  {
    alt: 'Img5',
    url: 'https://images.unsplash.com/photo-1535182463927-440364075d9c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80',
  },
  {
    alt: 'Img6',
    url: 'https://images.unsplash.com/photo-1535182463927-440364075d9c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80',
  },
  {
    alt: 'Img7',
    url: 'https://images.unsplash.com/photo-1512249167167-32fb4f8b17f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
  },
  {
    alt: 'Img8',
    url: 'https://images.unsplash.com/photo-1512249167167-32fb4f8b17f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
  },
  {
    alt: 'Img9',
    url: 'https://images.unsplash.com/photo-1512249167167-32fb4f8b17f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
  },
];

export const mockupSession = {
  session: {
    title: 'Praia de Miami',
    location: 'Natal/RN',
    date: 'Sábado, 17 abril 2021 - 07h às 10h',
    cover:
      'https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
  },
  liked: false,
  author: {
    instagramProfile: 'yurigargarin',
  },
};

export const mockupSessionList = [
  mockupSession,
  mockupSession,
  mockupSession,
  mockupSession,
  mockupSession,
  mockupSession,
  mockupSession,
];

export const mockupStories = [
  {
    profileImg:
      'https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    profileName: 'Kelly Slater',
  },
  {
    profileImg:
      'https://images.unsplash.com/photo-1535182463927-440364075d9c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80',
    profileName: 'Carlos Burle',
  },
  {
    profileImg:
      'https://images.unsplash.com/photo-1502933691298-84fc14542831?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    profileName: 'Gabriel Medina',
  },
  {
    profileImg:
      'https://images.unsplash.com/photo-1512249167167-32fb4f8b17f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    profileName: 'Kelly Slater',
  },
];

export const mockupUser = {
  avatar: Surfer1,
  username: 'Yuri Gargarin',
  userid: 'gargarin_',
  city: 'Natal/RN - Brasil',
  coverImage:
    'https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
};

export const mockupExplorer = [
  {
    id: '1',
    img: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    title: 'Ponta Negra - RN',
    date: '23/04/2021 - 14h',
  },
  {
    id: '2',
    img: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    title: 'Ponta Negra - RN',
    date: '23/04/2021 - 14h',
  },
  {
    id: '3',
    img: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    title: 'Ponta Negra - RN',
    date: '23/04/2021 - 14h',
  },
  {
    id: '4',
    img: 'https://images.unsplash.com/photo-1535182463927-440364075d9c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80',
    title: 'Ponta Negra - RN',
    date: '23/04/2021 - 14h',
  },
  {
    id: '5',
    img: 'https://images.unsplash.com/photo-1502933691298-84fc14542831?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    title: 'Ponta Negra - RN',
    date: '23/04/2021 - 14h',
  },
  {
    id: '6',
    img: 'https://images.unsplash.com/photo-1526241118614-728ce3418077?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    title: 'Ponta Negra - RN',
    date: '23/04/2021 - 14h',
  },
  {
    id: '7',
    img: 'https://images.unsplash.com/photo-1510777554755-dd3dad5980ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    title: 'Ponta Negra - RN',
    date: '23/04/2021 - 14h',
  },
  {
    id: '8',
    img: 'https://images.unsplash.com/photo-1512249167167-32fb4f8b17f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    title: 'Ponta Negra - RN',
    date: '23/04/2021 - 14h',
  },
  {
    id: '9',
    img: 'https://images.unsplash.com/photo-1512249167167-32fb4f8b17f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    title: 'Ponta Negra - RN',
    date: '23/04/2021 - 14h',
  },
  {
    id: '10',
    img: 'https://images.unsplash.com/photo-1512249167167-32fb4f8b17f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    title: 'Ponta Negra - RN',
    date: '23/04/2021 - 14h',
  },
  {
    id: '11',
    img: 'https://images.unsplash.com/photo-1512249167167-32fb4f8b17f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    title: 'Ponta Negra - RN',
    date: '23/04/2021 - 14h',
  },
  {
    id: '12',
    img: 'https://images.unsplash.com/photo-1512249167167-32fb4f8b17f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    title: 'Ponta Negra - RN',
    date: '23/04/2021 - 14h',
  },
];

export const mockupSequenceImgs = [
  {
    photo:
      'https://images.unsplash.com/photo-1510777554755-dd3dad5980ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
  },
  { photo: mockupImgs },
  { photo: mockupImgs },
  {
    photo:
      'https://images.unsplash.com/photo-1512249167167-32fb4f8b17f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
  },
  {
    photo:
      'https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
  },
  {
    photo:
      'https://images.unsplash.com/photo-1502933691298-84fc14542831?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
  },
  { photo: mockupImgs },
  {
    photo:
      'https://images.unsplash.com/photo-1512249167167-32fb4f8b17f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
  },
  { photo: mockupImgs },
];

export const mockupSurfers = [
  {
    name: 'Roberto',
    lasName: 'Oliveira',
    numPhotos: 'Marcado em 32 fotos',
    avatar: Surfer1,
    userid: 'roberto_oliveira',
  },
  {
    name: 'Joana',
    lasName: 'Aragão',
    numPhotos: 'Marcado em 24 fotos',
    avatar: Surfer2,
    userid: 'joana.aragao1',
  },
  {
    name: 'Alessandro',
    lasName: 'F. Moura',
    numPhotos: 'Marcado em 11 fotos',
    avatar: Surfer3,
    userid: 'alessandro_fm',
  },
  {
    name: 'Rodrigo',
    lasName: 'Mapfra',
    numPhotos: 'Marcado em 48 fotos',
    avatar: Surfer4,
    userid: 'r.mapfra',
  },
  {
    name: 'Juliana',
    lasName: 'Barbosa',
    numPhotos: 'Marcado em 35 fotos',
    avatar: Surfer5,
    userid: 'juliana.barbosa_',
  },
];

export const mockupChatMessages = [
  {
    _id: Math.random(),
    text:
      'Olá! Estou vendo que você quer escolher duas ' +
      'fotos da session de hoje. Posso te ajudar em algo?',
    createdAt: '2021-06-10T10:15:00',
    user: {
      _id: 2,
      name: 'Yuri Gargarin',
      userid: 'gargarin_',
      avatar: Surfer1,
    },
  },
  {
    _id: Math.random(),
    text: 'Olá, estou vendo quais são as melhores fotos.',
    createdAt: '2021-06-10T10:17:00',
    user: {
      _id: 1,
      name: 'Developer',
      userid: 'dev.loper',
      avatar: Surfer2,
    },
  },
  {
    _id: Math.random(),
    text: 'Certo. Essa sessão ficou excelente!',
    createdAt: '2021-06-10T10:20:00',
    user: {
      _id: 2,
      name: 'Yuri Gargarin',
      userid: 'gargarin_',
      avatar: Surfer1,
    },
  },
  {
    _id: Math.random(),
    text: 'É verdade, ficou mesmo!',
    createdAt: '2021-06-10T10:28:00',
    user: {
      _id: 1,
      name: 'Developer',
      userid: 'dev.loper',
      avatar: Surfer2,
    },
  },
];

export const mockupProductsList = [
  {
    img: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    code: 2,
    type: 'Digital',
    value: 18,
  },
  {
    img: 'https://images.unsplash.com/photo-1512249167167-32fb4f8b17f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    code: 35,
    type: 'Digital',
    value: 18,
    discount: 7,
  },
];

export const mockupInteractivity = [
  {
    id: '1',
    title: 'Você foi marcado nessa foto',
    date: '23/04/2021',
    img: 'https://images.unsplash.com/photo-1512249167167-32fb4f8b17f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
  },

  {
    id: '2',
    title: 'Começou a seguir você',
    date: '23/04/2021',
    img: 'https://images.unsplash.com/photo-1512249167167-32fb4f8b17f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
  },
  {
    id: '3',
    title: '@murilio.sw postou uma nova foto',
    date: '23/04/2021',
    img: 'https://images.unsplash.com/photo-1512249167167-32fb4f8b17f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
  },
  {
    id: '4',
    title: 'Você foi marcado nessa foto',
    date: '23/04/2021',
    img: 'https://images.unsplash.com/photo-1512249167167-32fb4f8b17f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
  },
  {
    id: '5',
    title: 'Começou a seguir você',
    date: '23/04/2021',
    img: 'https://images.unsplash.com/photo-1512249167167-32fb4f8b17f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
  },
  {
    id: '6',
    title: '@danieljeronimo_ postou uma nova foto',
    date: '23/04/2021',
    img: 'https://images.unsplash.com/photo-1512249167167-32fb4f8b17f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
  },
];

export const mockupPurchases = [
  {
    id: '1',
    status: 'recused',
    type: 'Crédito',
    card: 'visa',
    number: '111',
    value: '18.00',
    new: false,
    date: '23/04/2021',
    img: 'https://images.unsplash.com/photo-1512249167167-32fb4f8b17f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
  },
  {
    id: '2',
    status: 'cancel',
    type: 'Débito',
    card: 'visa',
    number: '111',
    value: '18.00',
    new: true,
    date: '23/04/2021',
    img: 'https://images.unsplash.com/photo-1512249167167-32fb4f8b17f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
  },
  {
    id: '3',
    status: 'waiting',
    type: 'Débito',
    card: 'visa',
    number: '111',
    value: '18.00',
    new: true,
    date: '23/04/2021',
    img: 'https://images.unsplash.com/photo-1512249167167-32fb4f8b17f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
  },
];

export const mockupSearchQuerys = [
  {
    name: 'Ponta Negra',
    cidade: 'Natal/RN',
  },
  {
    name: 'Praia do Meio',
    cidade: 'Natal/RN',
  },
  {
    name: 'Praia de Miami',
    cidade: 'Natal/RN',
  },
];

export const mockupSessionFound = {
  session: {
    title: 'Praia de Miami',
    location: 'Natal/RN',
    date: 'Sábado, 17 abril 2021 - 07h às 10h',
    cover:
      'https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    images: mockupSequenceImgs,
  },
  liked: false,
  author: mockupUser,
};

export const listOfSessionsFoundOnTheBeach = [
  mockupSessionFound,
  mockupSessionFound,
  mockupSessionFound,
  mockupSessionFound,
  mockupSessionFound,
];
