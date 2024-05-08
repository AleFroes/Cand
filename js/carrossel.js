let scrollInterval; // Variável global para armazenar o intervalo de rolagem

// Função para iniciar o carrossel automaticamente
function startAutoScroll(container) {
  scrollInterval = setInterval(() => {
    scrollProdutos('right', container);
  }, 10000); // Intervalo de 3 segundos
  return scrollInterval; // Retornar o intervalo para que possa ser parado mais tarde
}

// Parar o carrossel automático quando o mouse estiver sobre ele
function stopAutoScroll(interval) {
  clearInterval(interval);
}

// Reiniciar o carrossel automático quando o mouse sair dele
function restartAutoScroll(container) {
  stopAutoScroll(container.scrollInterval);
  container.scrollInterval = startAutoScroll(container);
}

// Função para rolar os produtos
function scrollProdutos(direction, container) {
  const scrollAmount = container.querySelector('.produto').offsetWidth; // Largura de um único item
  const maxScroll = container.scrollWidth - container.clientWidth;
  let newPosition = container.scrollLeft;

  if (direction === 'left') {
    newPosition -= scrollAmount;
    newPosition = Math.max(newPosition, 0);
  } else if (direction === 'right') {
    newPosition += scrollAmount;
    newPosition = Math.min(newPosition, maxScroll);
  }

  container.scrollLeft = newPosition;

  // Se atingiu o fim da lista, volta para o início
  if (newPosition === maxScroll && direction === 'right') {
    container.scrollLeft = 0;
  }
}

// Iniciar o carrossel automaticamente ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
  const carrossels = document.querySelectorAll('.produtos-wrapper');
  
  carrossels.forEach(carrossel => {
    carrossel.scrollInterval = startAutoScroll(carrossel);
    
    carrossel.addEventListener('mouseover', () => stopAutoScroll(carrossel.scrollInterval));
    carrossel.addEventListener('mouseout', () => restartAutoScroll(carrossel));
  });
});