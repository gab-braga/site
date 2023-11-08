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
      legend: "Página principal do meu site pessoal",
    },
    paragraphs: [
      <p key={1}>
        React é uma das bibliotecas de construção de interfaces web mais famosas
        atualmente. Ela possui diversos recursos de grande interesse pelo
        desenvolvedor front-end, dentre eles podemos citar a componentização de
        elementos gráficos e uso de estados. Além disso, possui uma grande
        facilidade, pois utiliza como mecanismo o JSX que possibilita a
        utilização de uma sintaxe muito semelhante ao HTML tradicional. Pensando
        nisso, decidi utilizá-lo para a construção do meu site pessoal.
      </p>,
      <p key={2}>
        Se utilizando da minha criatividade modelei um protótipo visual do meu
        site pessoal no figma, aqui foi um momento de planejamento de decisões
        importantes, onde pude escolher cores, fonte, formas, etc. Veja como
        ficou{" "}
        <a
          href="https://www.figma.com/file/Bqv4X28Vpmri4phFlhtgvM/Gabriel-Braga?node-id=0%3A1&t=MDHh5uLRLA03gOOt-1"
          target="_blank"
        >
          aqui
        </a>
        . Desfrutando dos poderosos recursos oferecidos pelo React desenvolvi
        meu site. Aqui tive alguns dias de trabalho onde fui descobrindo e
        trilhando os caminhos de desenvolvimento. Sem muitos processos utilizei
        code-fix como metodologia.
      </p>,
      <p key={3}>
        O site foi feito, puramente, em React. Para roteamento e navegação das
        páginas apliquei{" "}
        <a href="https://reactrouter.com/en/main" target="_blank">
          React Router
        </a>
        , uma biblioteca baseada em React para roteamento de aplicações. Para
        estilização utilizei minha experiência e o puro CSS.
      </p>,
      <p key={4}>
        Confira como ficou o resultado{" "}
        <a href="https://f-gabriel-braga.github.io/site/" target="_blank">
          aqui
        </a>
        .
      </p>,
    ],
    video: (
      <iframe
        src="https://www.youtube.com/embed/vVDwFDtNUtY"
        title="Apresentação do meu site pessoal"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    ),
  },
  {
    id: "e667e4f3-aabf-41fd-adaf-0d7a3210f7ae",
    author: "Gabriel Braga",
    publishedIn: 1682866480067,
    title: "Quem é Gabriel Braga em 2023?",
    image: {
      url: colacaoImageI,
      legend:
        "Colação curso técnico em informática com os professores Willian e Henrique.",
    },
    paragraphs: [
      <p key={1}>
        Meu nome é Francisco Gabriel Braga do Nascimento, brasileiro, tenho 21
        anos, moro na cidade de Tianguá - CE.
      </p>,
      <p key={2}>
        Nascido em Guaraciaba do Norte - CE, onde vivi e cresci, estudei até o
        ensino médio. Durante minha infância fui uma criança curiosa e
        aventureira, sempre me questionava como os eletrônicos funcionavam.
        Achava fascinante as possibilidades que um computador podia oferecer.
        Buscava desmontar computadores e eletrônicos quebrados para conhecer o
        que havia dentro mesmo sem saber o nome de cada componente e o que cada
        um deles faziam, as vezes não sabia montar de volta. Com o tempo, minha
        vontade de entender a aprender cada vez mais sobre tecnologia crescia.
      </p>,
      <p key={3}>
        Hoje sou diplomado técnico em informática, o qual estudei durante 2017 a
        2019. Pude então aprender os fundamentos de informática, tanto no âmbito
        de arquitetura de computadores quanto no âmbito de desenvolvimento de
        aplicações. Nesse período tive o privilégio de ter sido aluno dos
        professores{" "}
        <a href="https://www.linkedin.com/in/willian-ribeiro/" target="_blank">
          Willian Ribeiro
        </a>{" "}
        e{" "}
        <a
          href="https://www.linkedin.com/in/henrique-alves-685a1777/"
          target="_blank"
        >
          Henrique Alves
        </a>{" "}
        que foram agentes que contribuíram, fortemente, para meu desenvolvimento
        inicial em tecnologia, dois grandes profissionais que abraçaram o
        exercício de professor.
        <figure key={4}>
          <figcaption>Colação do curso técnico em informática</figcaption>
          <img
            src={colacaoImageII}
            alt="Colação do curso técnico em informática"
          />
        </figure>
      </p>,
      <p key={4}>
        Em 2018 pude participar da Jornada Nacional de Foguetes que aconteceu na
        cidade de Barra do Piraí - RJ. A OBA (Olimpíada Brasileira de Astronomia
        e Astronáutica) tem diversos projetos que aplicam os conceitos de física
        e astronomia. Dentre dele destaco a MOBFOG (Mostra Brasileira de
        Foguetes), uma prova prática que inclui construir um foguete com base em
        materiais recicláveis e não metálicos alimentado por reações químicas
        não poluentes. Após participar da primeira fase fui selecionado para
        fase nacional em Barra do Piraí, onde pude conhecer participantes de
        todo o país além de ouvir grandes nomes brasileiros que estão ligados a
        projetos de física como o Astronauta Marcos Pontes.
      </p>,
      <p key={5}>
        Atualmente, sou estudante de bacharelado em ciências da computação pelo
        Instituto Federal de Educação, Ciência e Tecnologia do Ceará em Tianguá,
        que se deu início em 2020 e tem previsão de término em 2025. Aqui tenho
        realizado trabalhos e pesquisas relacionados a artigos científicos e
        aplicação de algoritmos. Além disso, venho sempre me aprimorando com
        estudos externos para garantir um maior escopo de conhecimento e ampliar
        minha experiência.
      </p>,
      <p key={6}>
        Trabalho como Professor, em uma incrível Editech brasileira, ministrando
        aulas de tecnologia, com foco em desenvolvimento web, no formato remoto.
        Sou um professor apaixonado pelo que ensino, as aulas que ministro tem
        como destaque algumas das principais tecnologias e frameworks do mercado
        atual, como Spring, Angular, Node.js e React.
      </p>,
      <p key={7}>
        Tenho habilidades em algumas linguagens de programação, incluindo Java,
        JavaScript e TypeScript, bem como em frameworks e bibliotecas como
        Spring, Hibernate, Angular, React e Node.js. Também tenho conhecimento
        prático em bancos de dados como MySQL e Firebase. Eu já apliquei essas
        habilidades em vários projetos (veja meu{" "}
        <a
          href="https://f-gabriel-braga.github.io/site/#/portfolio"
          target="_blank"
        >
          portfólio
        </a>
        ), como o sistema de gerenciamento de vendas, plataforma de música e
        landing pages.
      </p>,
      <p key={8}>
        Para 2023 continuo trabalhando e me dedicando para o meu desenvolvimento
        pessoal e profissional. Diariamente, busco aprender novos termos, novos
        conceitos, novas ferramentas, conhecer profissionais. Busco também
        aperfeiçoar o que já sei, treinando e me desafiando em projetos e
        funcionalidades.
      </p>,
    ],
  },
];
