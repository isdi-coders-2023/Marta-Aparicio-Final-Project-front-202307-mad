import styles from '../home/home.module.scss';
export default function HomePage() {
  return (
    <main className={styles.homePage}>
      <hgroup>
        <h1>¡Bienvenid@ A YUMMY PIÑAMI!</h1>
        <p>
          Regístrate hoy mismo para desbloquear todas las ventajas de ser parte
          de nuestra comunidad:
        </p>
        <p>
          1. Únete a nuestra comunidad culinaria para acceder a todas nuestras
          recetas. Desde platos clásicos hasta creaciones innovadoras, tendrás
          una amplia variedad de opciones culinarias. Además, podrás compartir
          tus propias recetas y formar parte de una comunidad apasionada por la
          cocina. ¡Regístrate hoy y comienza a disfrutar de estas ventajas
          culinarias!
        </p>
        <p>
          2. Comparte Tus Creaciones: ¿Tienes una receta secreta que deseas
          compartir con el mundo? ¡Sube tus propias recetas y permite que otros
          usuarios las disfruten y se inspiren!
        </p>
      </hgroup>
    </main>
  );
}
