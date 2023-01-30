import imagen from "../../public/img/nosotros.jpg";
import styles from "~/styles/nosotros.css";

export function meta() {
  return {
    title: "GuitarLA - Sobre Nosotros",
    description: "Venta de guitarras, blog de música",
  };
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
    {
      rel: "preload",
      href: imagen,
      as: "image",
    },
  ];
}

function Nosotros() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
      <div className="contenido">
        <img src={imagen} alt="imagen sobre nosotros" />

        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut maximus
            tristique porta. Curabitur ut augue id sapien faucibus mollis. Sed
            ex elit, venenatis in ultricies in, sollicitudin nec nisi. Curabitur
            sed velit eleifend, faucibus nulla at, placerat nunc. Phasellus
            mattis convallis neque.
          </p>
          <p>
            Proin hendrerit consequat ante eu imperdiet. Nam placerat nisl sem,
            et porta quam ultricies nec. Nam ultrices, quam ac faucibus auctor,
            massa sem lacinia augue, quis venenatis leo lorem sit amet nulla.
            Nullam euismod velit justo, quis euismod justo pharetra in. Nunc
            ultricies, massa id euismod tempus.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Nosotros;
