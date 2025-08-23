import WhesleyImg from './assets/instructors/whesley.jpg';
import GaldinoImg from './assets/instructors/Galdino.jpg';
import SarahEloisaImg from './assets/instructors/sarahEloisa.jpg';

export interface ListMinicourseProps {
    id: number;
    title: string;
    courseLocation: string;
    date: string;
    hour?: string;
    description: string;
    instructor1: InstructorProps;
    instructor2?: InstructorProps;
    prerequisites?: string;
}

export interface InstructorProps {
    name: string;
    img?: string;
    insta?: string;
    github?: string
    description?: string;
}

export const ListMinicourse: ListMinicourseProps[] = [
    {
        id: 1,
        title: 'Conhecendo robótica com LEGO EV3',
        instructor1: {
            name: 'João Lucas Galdino Duarte',
            insta: 'https://www.instagram.com/g4ld1n0_/',
            github: 'https://github.com/G4ldin0',
            description: 'Sênior Lego Scratch, desenvolvendo jogos e pra sempre preso entre paginas de documentação ou ando meio desligado.',
            img: GaldinoImg
        },
        instructor2: {
            name: 'Sarah Heloysa Oliveira Tomaz',
            img: SarahEloisaImg
        },
        courseLocation: 'Lab 6',
        date: '23/10',
        description: 'Introdução a conceitos de robótica, discussão sobre uso dessas ferramentas, e sessão prática de montagem e programação de robôs usando o kit de montagem Lego EV3.',
        prerequisites: 'Não há pré-requisitos, mas é recomendável ter noções básicas de lógica de programação.'
    },
    {
        id: 2,
        title: 'Primeiros passos com C#',
        instructor1: {
            name: 'João Gabriel de Araújo Peixoto'
        },
        courseLocation: 'Lab 3',
        date: '23/10',
        description: 'Conceitos básicos de C#. Discutindo sua utilidade, vantagens, aplicações no mercado. Conhecendo a sintaxe e estrutura do código.',
        prerequisites: 'Não há pré-requisitos'
    },
    {
        id: 3,
        title: 'Criação de apps com Flutter',
        instructor1: {
            name: 'Nickolas Emanuel de Oliveira Silva'
        },
        instructor2: {
            name: 'Arthur Peixoto de Almeida'
        },
        courseLocation: 'Lab 7',
        date: '24/10',
        description: 'Conceitos básicos do framework. Conhecendo a estrutura do funcionamento, widgets básicos, formas de processar os dados para criar um aplicativo multiplataforma.',
        prerequisites: 'Não há pré-requisitos'
    },
    {
        id: 4,
        title: 'Introdução ao desenvolvimento de jogos com a Godot Engine 4',
        instructor1: {
            name: 'João Lucas Galdino Duarte',
            insta: 'https://www.instagram.com/g4ld1n0_/',
            github: 'https://github.com/G4ldin0',
            description: 'Sênior Lego Scratch, desenvolvendo jogos e pra sempre preso entre paginas de documentação ou ando meio desligado.',
            img: GaldinoImg
        },
        instructor2: {
            name: 'Wesley Felipe Xavier Rocha',
            insta: 'https://www.instagram.com/whesxavi/',
            github: 'GitHub.com/X4vierWhes',
            description: 'Acho que dá pra rodar DOOM aqui.',
            img: WhesleyImg
        },
        courseLocation: 'Lab 2',
        date: '24/10',
        description: 'Conhecendo a estrutura e design da Godot Engine 4. Programando um jogo simples para exercitar a lógica do funcionamento da Engine. Discussão acerca de padrões de design usados para desenvolver jogos na Godot.',
        prerequisites: 'Conhecimento basico de programação de computadores'
    },

]