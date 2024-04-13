// script que atende index.html
        document.getElementById('qualidade').addEventListener('mouseover', function() {
            document.getElementById('qualidade-explanation').style.display = 'block';
        });

        document.getElementById('qualidade').addEventListener('mouseout', function() {
            document.getElementById('qualidade-explanation').style.display = 'none';
        });
        document.getElementById('comprometimento').addEventListener('mouseover', function() {
            document.getElementById('comprometimento-explanation').style.display = 'block';
        });

        document.getElementById('comprometimento').addEventListener('mouseout', function() {
            document.getElementById('comprometimento-explanation').style.display = 'none';
        });

        document.getElementById('criatividade').addEventListener('mouseover', function() {
            document.getElementById('criatividade-explanation').style.display = 'block';
        });

        document.getElementById('criatividade').addEventListener('mouseout', function() {
            document.getElementById('criatividade-explanation').style.display = 'none';
        });

  
        slider(document.getElementById("slideshow"), [
      ["img/cake1.jpg", "Hot Wheels"],
      ["img/cake2.jpg", "Borboletas"],
      ["img/cake3.jpg", "Rosas"],
      ["img/cake4.jpg", "Futebol"],
      ["img/cake5.jpg", "Borboletas Roxas"],
      ["img/cake6.jpg", "Studious Girl"],
      ["img/cake7.jpg", "Palmeiras"],
      ["img/cake8.jpg", "Barbie"],
      ["img/cake9.jpg", "Docinho (Meninas Superpoderosas)"],
      ["img/cake10.jpg", "Toy Story"],
      ["img/cake11.jpg", "Torre de Flores"],
      ["img/cake12.jpg", "Meu Ursinho"]
    ]);



