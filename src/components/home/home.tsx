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
          1. Acceso a Todas las Recetas: Una vez registrado, tendrás acceso
          completo a todas las recetas disponibles en nuestro sitio web. Desde
          platos clásicos hasta las creaciones más innovadoras, podrás explorar
          y cocinar una variedad de deliciosos platillos.
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
