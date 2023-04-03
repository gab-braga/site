import siteImage from "../assets/images/articles/site-pessoal.png";

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
    }
];