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
        {tags.map((post) => <a href={`/tags/${post}`}>{post}</a>)}
      </div>
    </section>
  );
}