const ctx = document.getElementById("ctx").getContext("2d");

const obtenerIndicadores = async () => {
      const response = await fetch("https://api.worldbank.org/v2/country/all/indicator/SL.UEM.TOTL.ZS?format=json&per_page=16758");
      const json = await response.json();
      console.log(json[1]);

      pintarGrafica(json[1])
    };

const pintarGrafica = (indicadoresArray) => {
      console.log(indicadoresArray) 
      
      
      const paises = ["Mexico", "Argentina", "Brasil", "USA", "India", "Canada"]
      const indicadores = [3.31, 6.49, 9.46, 3.61, 7.33, 5.21]
    new Chart(ctx, {
        type: "bar", // line, pie, bar, radar, doughnut
        data: {
          labels: paises, // eje x
          datasets: [
            {
              label: "Unemployment, total (% of total labor force)",
              data: indicadores, // eje y (Unemployment)
              borderWidth: 1,
              backgroundColor: ["#36a2eb", "#36a2eb", "#36a2eb", "#36a2eb"],
            },
            {
                label: "Urban Population (% of total)",
                data: [81.3, 92.35, 87.56, 83.08, 35.87, 81.75], // eje y (Urban Population)
                borderWidth: 1,
                backgroundColor: ["#1F4E79", "#1F4E79", "#1F4E79", "#1F4E79", "#1F4E79", "#1F4E79"],
              },
              {
                label: "Immigrants (% of total population)",
                data: [4.9, 4.8, .3, 14.05, .4, 21.8],
                borderWidth: 1,
                backgroundColor: ["#4CAF50", "#4CAF50", "#4CAF50", "#4CAF50", "#4CAF50", "#4CAF50"],
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
    
window.addEventListener("load", obtenerIndicadores);