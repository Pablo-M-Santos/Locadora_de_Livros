// Gráfico 1
const ctx = document.getElementById('barchart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    datasets: [
      {
        label: 'Devolvidos dentro do prazo',
        data: [35, 55, 55, 65, 40, 50],
        backgroundColor: 'rgba(0, 102, 102, 1)',  
        borderWidth: 1,
        borderRadius: 15
      },
      {
        label: 'Devolvidos fora do prazo',
        data: [35, 55, 50, 65, 35, 65],
        backgroundColor: 'rgba(0, 64, 128,1)',  
        borderWidth: 1,
        borderRadius: 15
      }
    ]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    },
    
    
  }
});


// Gráfico 2
const ctx2 = document.getElementById('doughnut');

new Chart(ctx2, {
  type: 'doughnut',
  data: {
    labels: ['Livros Emprestados', 'Livros Atrasados'],
    datasets: [{
      data: [63, 37],
      backgroundColor: ['rgba(0, 64, 128,1)','rgba(0, 102, 102, 1)'],
      borderWidth: 1
    }]
  },
  options: {
    plugins: {
      tooltip: {
        callbacks: {
          label: function(context) {
            let label = context.label || '';
            let value = context.raw || 0;
            return `${value} %`;
          }
        }
      },
      legend: {
        labels: {
          usePointStyle: true,
          pointStyle: 'circle'
        }
      }
    }
  }
});