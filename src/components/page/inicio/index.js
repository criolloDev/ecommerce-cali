
export default function Inicio() {
  return (
    <>

      <div className="inicio">
        <div class="textos">
          <h1 class="text1">Just do it</h1>
        </div>
      </div>

      <section className="servicios">
        <div class="box-container">
          <div class="box">
            <i class="fas fa-shipping-fast"></i>
            <h3>Entrega rapida</h3>
            <p>
              Trabajamos con las mejores empresas de trasporte del pais, para que
              tu pedido sea 100% seguro y rapido.
            </p>
          </div>

          <div class="box">
            <i class="fas fa-undo"></i>
            <h3>10 dias para cambios</h3>
            <p>
              Te damos hasta 10 dias habiles para solicitar cambios, ya sea por 
              motivos de talla o algun imperfecto.
            </p>
          </div>

          <div class="box">
            <i class="fas fa-headset"></i>
            <h3>Soporte 24 x 7 </h3>
            <p>
              Tenemos a tu disposicion nuestro equipo de trabajo 24 x 7, para 
              cualquier duda, asesoria o reclamo.
            </p>
          </div>
        </div>
      </section>

    </>
  );
}
