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

        $(document).ready(function() {
            $('.carousel img').click(function() {
                var type = $(this).data('type');
                var mass = $(this).data('mass');
                var filling = $(this).data('filling');
                var decoration = $(this).data('decoration');
                
                var confirmation = confirm('Você gosta do ' + type + '?\n\nDetalhes:\n- Massa: ' + mass + '\n- Recheio: ' + filling + '\n- Decoração: ' + decoration + '\n\nClique em "OK" para adicionar ao carrinho.');
                
                if (confirmation) {
                    alert('O ' + type + ' foi adicionado ao carrinho!');
                }
            });
        });


