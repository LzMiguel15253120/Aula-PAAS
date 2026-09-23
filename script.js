document.addEventListener("DOMContentLoaded", () => {

  /* =================================================
     ANO AUTOMÁTICO
  ================================================= */

  const year = document.getElementById("year");

  if (year) {
      year.textContent = new Date().getFullYear();
  }


  /* =================================================
     MENU MOBILE
  ================================================= */

  const menuButton =
      document.getElementById("menuButton");

  const nav =
      document.getElementById("nav");


  menuButton.addEventListener("click", () => {

      const aberto =
          nav.classList.toggle("open");

      menuButton.setAttribute(
          "aria-expanded",
          aberto
      );

      menuButton.textContent =
          aberto ? "✕" : "☰";
  });


  /* =================================================
     FECHAR MENU AO CLICAR
  ================================================= */

  const navLinks =
      document.querySelectorAll(".nav-link");


  navLinks.forEach(link => {

      link.addEventListener("click", () => {

          nav.classList.remove("open");

          menuButton.setAttribute(
              "aria-expanded",
              "false"
          );

          menuButton.textContent = "☰";
      });

  });


  /* =================================================
     TEMA CLARO / ESCURO
  ================================================= */

  const themeButton =
      document.getElementById("themeButton");


  const temaSalvo =
      localStorage.getItem("tema");


  if (temaSalvo === "light") {

      document.body.classList.add("light");

      themeButton.textContent = "☀️";
  }


  themeButton.addEventListener("click", () => {

      document.body.classList.toggle("light");


      const modoClaro =
          document.body.classList.contains("light");


      themeButton.textContent =
          modoClaro ? "☀️" : "🌙";


      localStorage.setItem(
          "tema",
          modoClaro ? "light" : "dark"
      );

  });


  /* =================================================
     BUSCA DE TIMES
  ================================================= */

  const search =
      document.getElementById("teamSearch");


  const teams =
      document.querySelectorAll(".team-card");


  search.addEventListener("input", () => {

      const texto =
          search.value
              .toLowerCase()
              .trim();


      teams.forEach(team => {

          const nome =
              team.dataset.team
                  .toLowerCase();


          if (nome.includes(texto)) {

              team.style.display = "";

          } else {

              team.style.display = "none";
          }

      });

  });


  /* =================================================
     ANIMAÇÃO AO ROLAR
  ================================================= */

  const elementos =
      document.querySelectorAll(
          ".section, .news-card, .team-card, .featured-match"
      );


  elementos.forEach(elemento => {

      elemento.classList.add("reveal");

  });


  const observer =
      new IntersectionObserver(
          entradas => {

              entradas.forEach(entrada => {

                  if (entrada.isIntersecting) {

                      entrada.target.classList.add("show");

                      observer.unobserve(
                          entrada.target
                      );
                  }

              });

          },
          {
              threshold: 0.12
          }
      );


  elementos.forEach(elemento => {

      observer.observe(elemento);

  });


  /* =================================================
     NAVEGAÇÃO ATIVA
  ================================================= */

  const sections =
      document.querySelectorAll("main section");


  window.addEventListener("scroll", () => {

      let secaoAtual = "";


      sections.forEach(section => {

          const topo =
              section.offsetTop - 150;


          if (window.scrollY >= topo) {

              secaoAtual =
                  section.getAttribute("id");
          }

      });


      navLinks.forEach(link => {

          link.classList.remove("active");


          if (
              link.getAttribute("href") ===
              `#${secaoAtual}`
          ) {

              link.classList.add("active");
          }

      });

  });


  /* =================================================
     BOTÃO DE DETALHES
  ================================================= */

  const detailButton =
      document.querySelector(".text-button");


  detailButton.addEventListener("click", () => {

      alert(
          "Os detalhes da partida serão adicionados quando o site estiver conectado a uma API de futebol."
      );

  });

});