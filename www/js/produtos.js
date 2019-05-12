// ERRO

function acao(){
  if (document.getElementById("result").textContent == null)
  {
    document.getElementById('produto-img-1').src=""
    document.getElementById("produto-txt-1").textContent="Nenhuma correspondência";
    document.getElementById("produto-txt-2").textContent="";
    document.getElementById("produto-txt-3").textContent="";
    document.getElementById("produto-txt-4").textContent="";
    document.getElementById("produto-txt-5").textContent="";
    document.getElementById("produto-txt-6").textContent="";
    document.getElementById("produto-txt-7").textContent="";
    document.getElementById("produto-txt-8").textContent="";
    document.getElementById("produto-txt-9").textContent="";
  }

    // Produtos cadastrados

  if (document.getElementById("result").value == 280720550)
  {
    document.getElementById('produto-img-1').src="img/produto1.jpg"
    document.getElementById("produto-txt-1").textContent="Apple iPad Mini Wi-Fi";
    document.getElementById("produto-txt-2").textContent="Valor: R$ 3.499,00";
    document.getElementById("produto-txt-3").textContent="Cor: Cinza Espacial";
    document.getElementById("produto-txt-4").textContent="S.O: iOS";
    document.getElementById("produto-txt-5").textContent="Processador: A12 Bionic";
    document.getElementById("produto-txt-6").textContent="Memoria Interna: 64GB";
    document.getElementById("produto-txt-7").textContent="Memoria Ram: ---";
    document.getElementById("produto-txt-8").textContent="Tela: 7.9";
    document.getElementById("produto-txt-9").textContent="Camera: 8MP";
  }

  if (document.getElementById("result").value == 989895555)
  {
    document.getElementById('produto-img-1').src="img/produto2.jpg"
    document.getElementById("produto-txt-1").textContent="Samsung Galaxy J8 Dual Chip";
    document.getElementById("produto-txt-2").textContent="Valor: R$ 1.888,00";
    document.getElementById("produto-txt-3").textContent="Cor: Preto";
    document.getElementById("produto-txt-4").textContent="S.O: Android 9 Pie";
    document.getElementById("produto-txt-5").textContent="Processador: Octa Core";
    document.getElementById("produto-txt-6").textContent="Memoria Interna: 64GB";
    document.getElementById("produto-txt-7").textContent="Memoria Ram: 4GB";
    document.getElementById("produto-txt-8").textContent="Tela: 6";
    document.getElementById("produto-txt-9").textContent="Camera: 16MP";
  }

  if (document.getElementById("result").value == 85236987)
  {
    document.getElementById('produto-img-1').src="img/produto3.jpg"
    document.getElementById("produto-txt-1").textContent="Motorola One XT1941";
    document.getElementById("produto-txt-2").textContent="Valor: R$ 1.099,00";
    document.getElementById("produto-txt-3").textContent="Cor: Preto";
    document.getElementById("produto-txt-4").textContent="S.O: Android 8 Oreo";
    document.getElementById("produto-txt-5").textContent="Processador: Octa Core";
    document.getElementById("produto-txt-6").textContent="Memoria Interna: 64GB";
    document.getElementById("produto-txt-7").textContent="Memoria Ram: 4GB";
    document.getElementById("produto-txt-8").textContent="Tela: 6";
    document.getElementById("produto-txt-9").textContent="Camera: 13MP";
  }

  if (document.getElementById("result").value == 85369877444)
  {
    document.getElementById('produto-img-1').src="img/produto4.jpg"
    document.getElementById("produto-txt-1").textContent="Asus Zenfone Max Pro M1";
    document.getElementById("produto-txt-2").textContent="Valor: R$ 1.199,00";
    document.getElementById("produto-txt-3").textContent="Cor: Azul Espacial";
    document.getElementById("produto-txt-4").textContent="S.O: Android 8.1 Oreo";
    document.getElementById("produto-txt-5").textContent="Processador: Octa Core";
    document.getElementById("produto-txt-6").textContent="Memoria Interna: 64GB";
    document.getElementById("produto-txt-7").textContent="Memoria Ram: 4GB";
    document.getElementById("produto-txt-8").textContent="Tela: 6";
    document.getElementById("produto-txt-9").textContent="Camera: 16MP";
  }
}