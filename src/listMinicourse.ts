import WhesleyImg from './assets/instructors/whesley.jpg';
import GaldinoImg from './assets/instructors/Galdino.jpg';
import SarahEloisaImg from './assets/instructors/sarahEloisa.jpg';
import JoaoGabrielImg from './assets/instructors/JoaoGabriel.jpg';
import NickolasEmanuel from "./assets/instructors/nikolasEmanuel.jpg";
import ArthurPeixoto from "./assets/instructors/arthurPeixoto.jpg";
import PolianaImg from "./assets/instructors/Poliana Araújo.jpeg";
import IsaulImg from "./assets/instructors/Isaul Felipe.jpg";
import TalyssonImg from "./assets/instructors/Talysson Emanoel.jpg";
import ArturSegantiniImg from "./assets/instructors/me - Artur Guedes.webp";
import GustavoImg from "./assets/instructors/Gustavo.webp";
import RafaelBronzoImg from "./assets/instructors/Rafael Bronzo.jpg";

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
    tags?: string[];
}

export interface InstructorProps {
    name: string;
    img?: string;
    insta?: string;
    github?: string
    description?: string;
    email?: string;
    itchio?: string;
    linkedin?: string;
}

export const ListMinicourse: ListMinicourseProps[] = [
    {
        id: 1,
        title: 'Criação de apps com Flutter',
        instructor1: {
            name: 'Nickolas Emanuel de Oliveira Silva',
            insta: 'https://www.instagram.com/nickolas_emanuel_/',
            email: "nickolasemanuel10@gmail.com",
            description: "Desenvolvedor Front-end Multiplataforma.",
            img: NickolasEmanuel,
            linkedin: "https://www.linkedin.com/in/n%C3%ADckolas-emanuel-02924b223/"
        },
        instructor2: {
            name: 'Arthur Peixoto de Almeida',
            email: "ggpeaol@gmail.com",
            description: "Ex-Jogador amador de fortnite, 2x semi finalista do interclasse da escola, desenvolvedor junior aprendiz de programação e loucamente apaixonado",
            img: ArthurPeixoto
        },
        courseLocation: 'Lab 2',
        date: '23/10',
        description: 'Conceitos básicos do framework. Conhecendo a estrutura do funcionamento, widgets básicos, formas de processar os dados para criar um aplicativo multiplataforma.',
        prerequisites: 'Noções de orientação a objetos.',
        tags: ['Flutter', 'Dart', 'Mobile', 'Cross-platform']
    },
    {
        id: 2,
        title: 'Conhecendo robótica com LEGO EV3',
        instructor1: {
            name: 'João Lucas Galdino Duarte',
            insta: 'https://www.instagram.com/g4ld1n0_/',
            github: 'https://github.com/G4ldin0',
            description: 'Sênior Lego Scratch, desenvolvendo jogos e pra sempre preso entre paginas de documentação ou ando meio desligado.',
            img: GaldinoImg,
            itchio: 'https://g4ldin0.itch.io/',
            email: 'joao.duarte31219@alunos.ufersa.edu.br'
        },
        instructor2: {
            name: 'Sarah Heloysa Oliveira Tomaz',
            img: SarahEloisaImg,
            description: 'Não existem criações pequenas na robótica; cada uma carrega um pedaço do futuro.',
            email: 'sarah.tomaz@alunos.ufersa.edu.br',
            github: 'https://github.com/SarahTomaz'
        },
        courseLocation: 'Lab 6',
        date: '23/10',
        description: 'Introdução a conceitos de robótica, discussão sobre uso dessas ferramentas, e sessão prática de montagem e programação de robôs usando o kit de montagem Lego EV3.',
        prerequisites: 'Não há pré-requisitos, mas é recomendável ter noções básicas de lógica de programação.',
        tags: ['Robótica', 'LEGO', 'Scratch', 'Hardware']
    },
    {
        id: 3,
        title: 'Crie seu primeiro site com HTML e CSS',
        instructor1: {
            name: 'Poliana de Araújo Alves',
            insta: 'https://www.instagram.com/polianasaldanha_/',
            description: 'Estudante de Ciência da Computação da UFERSA',
            img: PolianaImg,
            email: 'polianaaraujo210@gmail.com'
        },
        courseLocation: 'Lab 1',
        date: '23/10',
        description: 'Introdução a programação web a partir da elaboração de um site simples utilizando a linguagem de marcação HTML e utilizando CSS para sua estilização.',
        prerequisites: 'Não possui pré-requisitos todos podem participar.',
        tags: ['HTML', 'CSS', 'Web', 'Frontend']
    },
    {
        id: 4,
        title: 'Git e Github: Uma introdução a versionamento de código',
        instructor1: {
            name: 'Artur Segantini Guedes',
            insta: 'https://www.instagram.com/artur_sals/',
            description: '90% dos apostadores desistem antes de atingir o grande prêmio',
            img: ArturSegantiniImg,
            email: 'artsonic89@gmail.com'
        },
        courseLocation: 'Lab 4',
        date: '23/10',
        description: 'Um minicurso introdutório sobre utilizar git e github. Pretende-se ensinar aos alunos como confiantemente aprender a criar repositórios no github e como interagir com eles via o terminal do git, bem como onde buscar conteúdo para se aprofundarem no uso dessas que são duas das ferramentas mais importântes para a graduação.',
        prerequisites: 'Nenhum',
        tags: ['Git', 'GitHub', 'Versionamento', 'DevOps']
    },
    {
        id: 5,
        title: 'Dominando a arte da impressão 3d',
        instructor1: {
            name: 'Rafael Kepler Bronzo',
            insta: 'https://www.instagram.com/rafaelbronzo/',
            description: 'A persistência é o caminho do êxito.',
            img: RafaelBronzoImg,
            email: 'rafaelldd@hotmail.com'
        },
        instructor2: {
            name: 'Daniel Kleber Bronzo',
            insta: 'https://www.instagram.com/daniel_bronzo/',
            description: 'A persistência é o caminho do êxito.',
            img: RafaelBronzoImg,
            email: 'danielbronzo@hotmail.com'
        },
        courseLocation: 'Lab Laacoste',
        date: '23/10',
        description: 'Dominando a impressão 3d, nesse minicurso os alunos serão capacitados a utilizar uma impressora 3d, de tecnologia FDM, tornando capaz de imprimir suas primeiras peças sozinhos.',
        prerequisites: 'Ter vontade de aprender',
        tags: ['3D Print', 'CAD', 'Maker', 'Hardware']
    },
    {
        id: 5,
        title: 'Introdução a Computação Quântica com Qiskit',
        instructor1: {
            name: 'Talysson Emanoel Medeiros da Costa',
            insta: 'https://www.instagram.com/talysson.emanoel/',
            github: 'https://github.com/talyssonemanoel',
            description: 'Sou estudante/pesquisador em Computação, com foco em Computação Quântica e IA. Membro da Liga Acadêmica de Computação e Informação Quântica e participante do programa Qiskit Advocate, atuo na disseminação e ensino introdutório de computação quântica.',
            img: TalyssonImg,
            email: 'talyssonemanoel@gmail.com'
        },
        courseLocation: 'Lab 6',
        date: '24/10',
        description: 'Neste minicurso, vamos explorar os conceitos fundamentais que diferenciam a computação quântica da computação clássica — como superposição, emaranhamento e portas quânticas — de forma acessível e prática. Mais do que apenas teoria, você terá contato direto com o Qiskit, o kit de desenvolvimento open source da IBM, que permite criar, simular e até executar algoritmos em computadores quânticos reais pela nuvem.',
        prerequisites: 'Conhecimentos básicos de programação (preferencialmente em Python). Álgebra linear (vetores e matrizes) e noções de probabilidade.',
        tags: ['Python', 'Qiskit', 'Quantum', 'IBM']
    },
    {
        id: 6,
        title: 'Inglês para DEVs - Code and Talk',
        instructor1: {
            name: 'Gustavo Fernandes de Lima',
            github: 'https://github.com/gustavofernandesz',
            description: 'Gosto de música inglês e programação',
            img: GustavoImg,
            email: 'gustavo.lima83060@alunos.ufersa.edu.br'
        },
        courseLocation: 'Lab 1',
        date: '24/10',
        description: 'Um minicurso prático e direto ao ponto para desenvolvedores que querem turbinar o inglês técnico. Você vai aprender o vocabulário essencial usado em programação, entrevistas e documentação, além de praticar situações reais do dia a dia de um dev: Como participar de reuniões técnicas e explicar seu código em inglês. Tudo de forma leve, interativa e aplicada ao mundo da tecnologia.',
        prerequisites: 'Noções básicas de programação e algoritmos e conhecimento básico de inglês',
        tags: ['Inglês', 'Soft Skills', 'Comunicação', 'Tech']
    },
    {
        id: 7,
        title: 'Primeiros passos com C#',
        instructor1: {
            name: 'João Gabriel de Araújo Peixoto',
            img: JoaoGabrielImg,
            github: 'https://github.com/CalmMagma',
            email: 'joaogabrielpeixoto2005@gmail.com',
            description: 'Às vezes, a única coisa necessária para resolver um problema é uma mudança de perspectiva.'
        },
        courseLocation: 'Lab 7',
        date: '24/10',
        description: 'Conceitos básicos de C#. Discutindo sua utilidade, vantagens, aplicações no mercado. Conhecendo a sintaxe e estrutura do código.',
        prerequisites: 'Noções de introdução à computação, ou especificamente as disciplinas Algoritmo e Programação I ou Introdução a Computação.',
        tags: ['C#', '.NET', 'POO', 'Backend']
    },
    {
        id: 9,
        title: 'Introdução ao desenvolvimento de jogos com a Godot Engine 4',
        instructor1: {
            name: 'João Lucas Galdino Duarte',
            insta: 'https://www.instagram.com/g4ld1n0_/',
            github: 'https://github.com/G4ldin0',
            description: 'Sênior Lego Scratch, desenvolvendo jogos e pra sempre preso entre paginas de documentação ou ando meio desligado.',
            img: GaldinoImg,
            itchio: 'https://g4ldin0.itch.io/',
            email: 'joao.duarte31219@alunos.ufersa.edu.br'
        },
        instructor2: {
            name: 'Wesley Felipe Xavier Rocha',
            insta: 'https://www.instagram.com/whesxavi/',
            github: 'GitHub.com/X4vierWhes',
            description: 'Acho que dá pra rodar DOOM aqui.',
            img: WhesleyImg,
            email: 'whesley.rocha@alunos.ufersa.edu.br'
        },
        courseLocation: 'Lab 2',
        date: '24/10',
        description: 'Conhecendo a estrutura e design da Godot Engine 4. Programando um jogo simples para exercitar a lógica do funcionamento da Engine. Discussão acerca de padrões de design usados para desenvolver jogos na Godot.',
        prerequisites: 'Conhecimento basico de programação de computadores',
        tags: ['Godot', 'Game Dev', 'GDScript', '2D/3D']
    },
    {
        id: 10,
        title: 'O Caminho do Hardware: Circuitos, Arquitetura e Organização',
        instructor1: {
            name: 'Isaul Felipe Dos Santos Souza',
            insta: 'https://www.instagram.com/isaulfelipe0/',
            github: 'https://github.com/isaulfelipe',
            description: 'Existem 10 tipos de pessoas no mundo: aquelas que entendem binário e aquelas que não.',
            img: IsaulImg,
            email: 'isaul.souza@alunos.ufersa.edu.br'
        },
        courseLocation: 'Lab 4',
        date: '24/10',
        description: 'Passando e entendendo sobre a transição de circuitos digitais para arquitetura e organização de computadores.',
        prerequisites: 'Não há pré-requisitos.',
        tags: ['Hardware', 'Arquitetura', 'Circuitos', 'Assembly']
    },
    
]