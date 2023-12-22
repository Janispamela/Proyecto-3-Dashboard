const Country = document.getElementById("selectCountry");
const ctx = document.getElementById("ctx").getContext("2d");

const fetchData = async () => {
  try {
    const response = await fetch('https://api.worldbank.org/v2/country?format=json&per_page=500');
    const data = await response.json();

    const selectCountry = document.getElementById('selectCountry');
    data[1].forEach(country => {
      const option = document.createElement('option'); // crear dinámicamente elementos de opción y agregarlos a <select> en html
      option.value = country.id;
      option.textContent = country.name;
      selectCountry.appendChild(option);
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const fetchUrbanData = async () => {
  try {
      const selectedCountry = Country.value;
      const response = await fetch(`https://api.worldbank.org/v2/country/${selectedCountry}/indicator/SP.URB.TOTL.IN.ZS?format=json&per_page=16758`);
      const json = await response.json();

      drawChart(json[1]);
  } catch (error) {
      console.error('Error fetching urban data:', error);
  }
};



const drawChart = (urbanValuesArray) => {
  console.log(urbanValuesArray);

  const sortedData = urbanValuesArray
  .sort((a, b) => a.date - b.date);

const years = sortedData.map((pais) => pais.date);
const percentages = sortedData.map((pais) => pais.value);


//  const years = [2015, 2016, 2017, 2018, 2019]
//    const percentages = [20, 25, 27, 29, 30]

  const existingChart = Chart.getChart("ctx"); // Obtiene grafico actual

  if (existingChart) {
    existingChart.destroy(); // Si hay un gráfico existente, destrúyelo
}


  new Chart(ctx, {
    type: "bar", // line, pie, bar, radar, doughnut
    data: {
      labels: years, //anio eje x
      datasets: [
        {
            label: "Urban Population (% of total)",
            data: percentages, //indicadores eje y (Urban Population)
            borderWidth: 1,
            backgroundColor: ["#1F4E79", "#1F4E79", "#1F4E79", "#1F4E79", "#1F4E79", "#1F4E79"],
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
}

window.addEventListener("load", fetchData);
Country.addEventListener("change", fetchUrbanData);