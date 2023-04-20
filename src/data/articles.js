import siteImage from "../assets/images/articles/site-pessoal.png";
import colacaoImageI from "../assets/images/articles/colacao-1.jpg";
import colacaoImageII from "../assets/images/articles/colacao-2.jpg";

export const articles = [
    {
        id: "2fa6e483-b06e-4cdb-9172-0e6c5682b4f6",
        author: "Gabriel Braga",
        publishedIn: 1680457501230,
        title: "Desenvolvi meu site pessoal, inteiramente, com React.",
        image: {
            url: siteImage,
            legend: "Página principal do meu site pessoal"
        },
        paragraphs: [
            (<p key={1}>
                React é uma das bibliotecas de construção de interfaces web mais famosas atualmente. Ela possui diversos recursos de grande interesse pelo desenvolvedor front-end, dentre eles podemos citar a componentização de elementos gráficos e uso de estados. Além disso, possui uma grande facilidade, pois utiliza como mecanismo o JSX que possibilita a utilização de uma sintaxe muito semelhante ao HTML tradicional. Pensando nisso, decidi utilizá-lo para a construção do meu site pessoal.
            </p>),
            (<p key={2}>
                Se utilizando da minha criatividade modelei um protótipo visual do meu site pessoal no figma, aqui foi um momento de planejamento de decisões importantes, onde pude escolher cores, fonte, formas, etc. Veja como ficou <a href="https://www.figma.com/file/Bqv4X28Vpmri4phFlhtgvM/Gabriel-Braga?node-id=0%3A1&t=MDHh5uLRLA03gOOt-1" target="_blank">aqui</a>. Desfrutando dos poderosos recursos oferecidos pelo React desenvolvi meu site. Aqui tive alguns dias de trabalho onde fui descobrindo e trilhando os caminhos de desenvolvimento. Sem muitos processos utilizei code-fix como metodologia.
            </p>),
            (<p key={3}>
                O site foi feito, puramente, em React. Para roteamento e navegação das páginas apliquei <a href="https://reactrouter.com/en/main" target="_blank">React Router</a>, uma biblioteca baseada em React para roteamento de aplicações. Para estilização utilizei minha experiência e o puro CSS.
            </p>),
            (<p key={4}>
                Confira como ficou o resultado <a href="https://f-gabriel-braga.github.io/site/" target="_blank">aqui</a>.
            </p>)
        ],
        video: (<iframe src="https://www.youtube.com/embed/vVDwFDtNUtY" title="Apresentação do meu site pessoal" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>)
    },
    {
        id: "e667e4f3-aabf-41fd-adaf-0d7a3210f7ae",
        author: "Gabriel Braga",
        publishedIn: 1681990127668,
        title: "Quem é Gabriel Braga em 2023?",
        image: {
            url: colacaoImageI,
            legend: "Colação curso técnico em informática com os professores Willian e Henrique."
        },
        paragraphs: [
            (<p key={1}>
                Meu nome é Francisco Gabriel Braga do Nascimento, brasileiro, tenho 21 anos, moro na cidade de Tianguá - CE. 
            </p>),
            (<p key={2}>
                Trabalho como Professor, em uma incrivel Editech brasileira, ministrando aulas de tecnologia, com foco em desenvolvimento web, no formato remoto. Sou um professor apaixonado pelo que ensino, as aulas que ministro tem como destaque algumas das principais tecnologias e frameworks do mercado atual, como Spring, Angular, Node.js e React.
            </p>),
            (<p key={3}>
                Sou diplomado técnico em informática pela <a href="https://www.linkedin.com/company/eeep-deputado-jose-maria-melo/" target="_blank">EEEP Deputado José Maria Melo</a>, o qual estudei durante os anos de 2017 a 2019. Nesse período tive o privilégio de ter sido aluno dos professores <a href="https://www.linkedin.com/in/willian-ribeiro/" target="_blank">Willian Ribeiro</a> e <a href="https://www.linkedin.com/in/henrique-alves-685a1777/" target="_blank">Henrique Alves</a> que foram agentes que contribuiram, fortemente, para meu desenvolvimento inicial em tecnolgia, dois grande profissionais que abraçaram o exercicio de professor o qual, hoje, também atuo.
                <figure key={4}>
                    <figcaption>Colação do curso técnico em informática</figcaption>
                    <img src={colacaoImageII} alt="Colação do curso técnico em informática" />
                </figure>
            </p>),
            (<p>
                Em 2018 pude participar da Jornada Nacional de Foguetes que aconteceu na cidade de Barra do Piraí - RJ. A OBA (Olimpiada Brasileira de Antronomia e Astronatica) tem diversos projetos que aplicam os conceitos de fisica e anstronomia. Dentre dele destaco a MOBFOG (Mostra Brasileira de Foguetes), uma prova prática que inclui contruir um foguete com base em materiais reciclaveis e não metalicos alimentado por reações quimicas não poluentes. Após participar da primeira fase fui selecionado para fase nacional, onde pude conhecer participantes de todo o pais além de ouvir grandes nomes brasileiros que estão ligados a projetos de física como o Astronauta Masrcos Pontes.
            </p>),
            (<p key={4}>
                Atualmente, sou estudante de bacharelado em ciências da computação pelo Instituto Federal de Educação, Ciência e Tecnologia do Ceará Campus Tianguá, que se deu inicio em 2020 e tem previsão de término em 2025. Aqui tenho realizado trabalhos e pesquisas relacinados a artigos ciêntificos e aplicação de algoritmos. Além disso, venho sempre me apromirando com estudos externos para garantir um maior escopo de conhecimento e ampliar minha experiência.
            </p>),
            (<p key={5}>
                Para 2023 contiuo trabalhando e me dedicando para o meu desenvolvimento pessoal e profissional. Diariamente, busco aprender novos termos, novos conceitos novas ferramentas, conhecer novos profissionais. Busco também aperfeiçoar o que já sei, treinando e me desafiando em novos projetos e funcinalidades.
            </p>)
        ]
    }
];