import { useState } from "preact/hooks";

export default function Menu({tags}) {

//   const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

//   const [greeting, setGreeting] = useState(messages[0]);

  const [visible, setVisible] = useState(false)

  return (
    <section className="menu">
      <div className="menu-hamburguer" onClick={() => setVisible(!visible)}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className={`menu-window ${visible && 'menu-visible'}`} >
        <a href="/" className="navigation">Início</a>
        <a href="/projects/" className="navigation">Projetos</a>
        <a href="/blog/" className="navigation">Blog</a>
        <a href="/about/" className="navigation">Sobre</a>
        <p>Tags</p>
        {tags.map((post) => <a className="tags" href={`/tags/${post}`}>{post}</a>)}
      </div>
    </section>
  );
}