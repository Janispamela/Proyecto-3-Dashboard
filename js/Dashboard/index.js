const ctx = document.getElementById("ctx");

const pintarGrafica= () => {
    new Chart(ctx, {
        type: "bar", // line, pie, bar, radar, doughnut
        data: {
          labels: ["Mexico", "Argentina", "Brasil", "USA", "India", "Canada"], // eje x
          datasets: [
            {
              label: "Unemployment, total (% of total labor force)",
              data: [3.31, 6.49, 9.46, 3.61, 7.33, 5.21], // eje y
              borderWidth: 1,
              backgroundColor: ["#ff6384", "#36a2eb", "yellow", "green"],
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    };
    
window.addEventListener("load", pintarGrafica);