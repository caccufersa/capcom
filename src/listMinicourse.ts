
interface ListMinicourseProps {
    id: number;
    title: string;
    instructor1: string;
    instructor2?: string;
    courseLocation: string;
    date: string;
    hour?: string;
    description: string;
    instructorImg1?: string;
    instructorImg2?: string;
}

export const listMinicourse: ListMinicourseProps[] = [
    {
        id: 1,
        title: 'Conhecendo robótica com LEGO EV3',
        instructor1: 'João Lucas Galdino Duarte',
        instructor2: 'Sarah Heloysa Oliveira Tomaz',
        courseLocation: 'Lab 6',
        date: '23/10',
        description: 'Introdução a conceitos de robótica, discussão sobre uso dessas ferramentas, e sessão prática de montagem e programação de robôs usando o kit de montagem Lego EV3.'
    },
    {
        id: 2,
        title: 'Primeiros passos com C#',
        instructor1: 'João Gabriel de Araújo Peixoto',
        courseLocation: 'Lab 3',
        date: '23/10',
        description: 'Conceitos básicos de C#. Discutindo sua utilidade, vantagens, aplicações no mercado. Conhecendo a sintaxe e estrutura do código.'
    },
    {
        id: 3,
        title: 'Criação de apps com Flutter',
        instructor1: 'Nickolas Emanuel de Oliveira Silva',
        instructor2: 'Arthur Peixoto de Almeida',
        courseLocation: 'Lab 7',
        date: '24/10',
        description: 'Conceitos básicos do framework. Conhecendo a estrutura do funcionamento, widgets básicos, formas de processar os dados para criar um aplicativo multiplataforma.'
    },
    {
        id: 4,
        title: 'Introdução ao desenvolvimento de jogos com a Godot Engine 4',
        instructor1: 'João Lucas Galdino Duarte',
        instructor2: 'Wesley Felipe Xavier Rocha',
        courseLocation: 'Lab 2',
        date: '24/10',
        description: 'Conhecendo a estrutura e design da Godot Engine 4. Programando um jogo simples para exercitar a lógica do funcionamento da Engine. Discussão acerca de padrões de design usados para desenvolver jogos na Godot.'
    },

]