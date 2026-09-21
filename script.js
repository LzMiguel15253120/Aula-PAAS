document.addEventListener('DOMContentLoaded', () => {
  console.log('⚽ Futebol Brasil iniciado!');
  // =====================================================
  // ANO AUTOMÁTICO DO RODAPÉ
  // =====================================================
  const rodape = document.querySelector('.site-footer p');
  if (rodape) {
    const ano = new Date().getFullYear();
    rodape.textContent = `© ${ano} Futebol Brasil | Conteúdo demonstrativo, sem dados oficiais.`;
  }
  // =====================================================
  // MENU
  // =====================================================
  const linksMenu = document.querySelectorAll('.site-nav a');
  linksMenu.forEach((link) => {
    link.addEventListener('click', () => {
      linksMenu.forEach((item) => {
        item.classList.remove('ativo');
      });
      link.classList.add('ativo');
    });
  });
  // =====================================================
  // BOTÕES
  // =====================================================
  const botoes = document.querySelectorAll('.action-link');
  botoes.forEach((botao) => {
    botao.addEventListener('click', () => {
      console.log('Ação:', botao.textContent.trim());
    });
  });
  // =====================================================
  // ANIMAÇÃO AO ROLAR A PÁGINA
  // =====================================================
  const elementos = document.querySelectorAll('.card, .match-card, .team-card');
  const observador = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.style.opacity = '1';
          entrada.target.style.transform = 'translateY(0)';
          observador.unobserve(entrada.target);
        }
      });
    },
    {
      threshold: 0.15,
    }
  );
  elementos.forEach((elemento) => {
    elemento.style.opacity = '0';
    elemento.style.transform = 'translateY(30px)';
    elemento.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observador.observe(elemento);
  });
  // =====================================================
  // EFEITO NO HEADER AO ROLAR
  // =====================================================
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.background = 'rgba(2, 14, 9, 0.97)';
    } else {
      header.style.background = 'rgba(4, 20, 12, 0.92)';
    }
  });
});
