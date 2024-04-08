
        //sales.html
                let salesData = [
            {protocolo: 1, nome: "João", telefone: "123456789", endereco: "Rua A", bairro: "Centro", data_entrega: "26/01/2024", tipo: "Doce", massa: "Chocolate", recheio: "Morango", decoracao: "Chantilly", valorTotal: 50.00},
            {protocolo: 2, nome: "Maria", telefone: "987654321", endereco: "Rua B", bairro: "Bairro X", data_entrega: "10/02/2024", tipo: "Salgado", massa: "Integral", recheio: "Frango", decoracao: "Salsinha", valorTotal: 30.00},
            {protocolo: 3, nome: "João", telefone: "123456789", endereco: "Rua A", bairro: "Centro", data_entrega: "02/03/2024", tipo: "Doce", massa: "Chocolate", recheio: "Morango", decoracao: "Chantilly", valorTotal: 50.00},
            {protocolo: 4, nome: "Carlos", telefone: "123456789", endereco: "Rua C", bairro: "Bairro Y", data_entrega: "15/01/2024", tipo: "Doce", massa: "Chocolate", recheio: "Nutella", decoracao: "Frutas", valorTotal: 60.00},
            {protocolo: 5, nome: "Ana", telefone: "987654321", endereco: "Rua D", bairro: "Bairro Z", data_entrega: "20/02/2024", tipo: "Salgado", massa: "Integral", recheio: "Queijo", decoracao: "Manjericão", valorTotal: 25.00},
            {protocolo: 6, nome: "Paula", telefone: "123456789", endereco: "Rua E", bairro: "Centro", data_entrega: "12/02/2024", tipo: "Doce", massa: "Baunilha", recheio: "Chocolate", decoracao: "Granulado", valorTotal: 40.00},
            {protocolo: 7, nome: "Marcos", telefone: "987654321", endereco: "Rua F", bairro: "Bairro X", data_entrega: "05/02/2024", tipo: "Salgado", massa: "Integral", recheio: "Frango", decoracao: "Salsinha", valorTotal: 30.00},
            {protocolo: 8, nome: "Juliana", telefone: "123456789", endereco: "Rua G", bairro: "Bairro Y", data_entrega: "18/01/2024", tipo: "Doce", massa: "Chocolate", recheio: "Morango", decoracao: "Chantilly", valorTotal: 50.00},
            {protocolo: 9, nome: "Pedro", telefone: "987654321", endereco: "Rua H", bairro: "Bairro Z", data_entrega: "23/01/2024", tipo: "Salgado", massa: "Integral", recheio: "Queijo", decoracao: "Manjericão", valorTotal: 25.00},
            {protocolo: 10, nome: "Luiza", telefone: "123456789", endereco: "Rua I", bairro: "Centro", data_entrega: "30/01/2024", tipo: "Doce", massa: "Baunilha", recheio: "Chocolate", decoracao: "Granulado", valorTotal: 40.00},
            {protocolo: 11, nome: "Mariana", telefone: "987654321", endereco: "Rua J", bairro: "Bairro X", data_entrega: "14/02/2024", tipo: "Salgado", massa: "Integral", recheio: "Frango", decoracao: "Salsinha", valorTotal: 30.00},
            {protocolo: 12, nome: "Fernando", telefone: "123456789", endereco: "Rua K", bairro: "Bairro Y", data_entrega: "27/01/2024", tipo: "Doce", massa: "Chocolate", recheio: "Morango", decoracao: "Chantilly", valorTotal: 50.00}
        ];

        document.addEventListener("DOMContentLoaded", function() {
            updateData();
        });

        function loadSalesData() {
            const salesTable = document.getElementById("sales-data");
            let totalSales = 0;
            salesTable.innerHTML = ''; // Limpa a tabela antes de carregar os novos dados

            salesData.forEach(sale => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${sale.protocolo}</td>
                    <td>${sale.nome}</td>
                    <td>${sale.telefone}</td>
                    <td>${sale.endereco}</td>
                    <td>${sale.bairro}</td>
                    <td>${sale.data_entrega}</td>
                    <td>${sale.tipo}</td>
                    <td>${sale.massa}</td>
                    <td>${sale.recheio}</td>
                    <td>${sale.decoracao}</td>
                    <td>${sale.valorTotal}</td>
                `;
                salesTable.appendChild(row);
                totalSales += sale.valorTotal;
            });

            // Exibe o total de vendas
            document.getElementById("total-sales").textContent = totalSales.toFixed(2);
        }

        function drawCharts() {
            drawLineChart();
            drawPieChartTipo();
            drawBarChartMassa();
            drawBarStackedChartRecheio();
        }

        function drawLineChart() {
            var ctxLine = document.getElementById('line-chart').getContext('2d');
            var lineChart = new Chart(ctxLine, {
                type: 'line',
                data: {
                    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
                    datasets: [{
                        label: 'Vendas Mensais',
                        data: getRandomData(),
                        fill: false,
                        borderColor: 'rgb(75, 192, 192)',
                        tension: 0.1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }

        function drawPieChartTipo() {
            const ctxPie = document.getElementById('pie-chart-tipo').getContext('2d');
            const pieChart = new Chart(ctxPie, {
                type: 'pie',
                data: {
                    labels: ['Doce', 'Salgado'],
                    datasets: [{
                        data: [50, 30],
                        backgroundColor: ['rgba(255, 99, 132, 0.7)', 'rgba(54, 162, 235, 0.7)']
                    }]
                }
            });
        }

        function drawBarChartMassa() {
            const ctxBar = document.getElementById('bar-chart-massa').getContext('2d');
            const barChart = new Chart(ctxBar, {
                type: 'bar',
                data: {
                    labels: ['Chocolate', 'Integral'],
                    datasets: [{
                        label: 'Vendas por Massa',
                        data: [100, 80],
                        backgroundColor: 'rgba(75, 192, 192, 0.7)'
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });
        }

        function drawBarStackedChartRecheio() {
            const ctxBarStacked = document.getElementById('bar-stacked-chart-recheio').getContext('2d');
            const barStackedChart = new Chart(ctxBarStacked, {
                type: 'bar',
                data: {
                    labels: ['Morango', 'Frango', 'Nutella'],
                    datasets: [{
                        label: 'Vendas por Recheio',
                        data: [60, 60, 60],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.7)',
                            'rgba(54, 162, 235, 0.7)',
                            'rgba(255, 206, 86, 0.7)'
                        ]
                    }]
                },
                options: {
                    scales: {
                        xAxes: [{
                            stacked: true
                        }],
                        yAxes: [{
                            stacked: true
                        }]
                    }
                }
            });
        }

        function updateData() {
            loadSalesData();
            drawCharts();
        }

        document.getElementById('salvarPDF').addEventListener('click', function() {
            const element = document.body;
            html2pdf().from(element).save();
        });

        document.getElementById('imprimir').addEventListener('click', function() {
            window.print();
        });

