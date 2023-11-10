window.onload=()=>{
    google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Partidos', 'Personas'],
          ['PSOE',   121],
          ['SUMAR',  31],
          ['ERC', 7],
          ['JxCat',    7],
          ['PNV',5],
          ['Vox',33],
          ['PP',131]
        ]);

        var options = {
          title: 'Partidos',
          is3D: true,
          slices:{
            0:{color: '#da050f'},
            1:{color: 'pink'},
            2:{color: '#fcc34e'},
            3:{color:'#40e0d0'},
            4:{color: '#387f45'},
            5:{color: '#6db32a'},
            6:{color:'#0f438f'}
          }
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }



      
    google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart2);
    function drawChart2() {
      var data2 = google.visualization.arrayToDataTable([
        ["Partido", "personas", { role: "style" } ],
          ['PSOE',   121,'#da050f'],
            ['SUMAR',  31,'#da050f'],
            ['ERC', 7,'#fcc34e'],
            ['JxCat',    7,'#40e0d0'],
            ['PNV',5,'#387f45'],
            ['Vox',33,'#6db32a'],
            ['PP',131,'#0f438f']
      ]);

      var view2 = new google.visualization.DataView(data2);
      view2.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);

      var options2 = {
        title: "Density of Precious Metals, in g/cm^3",
        width: 600,
        height: 400,
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
      };
      var chart2 = new google.visualization.BarChart(document.getElementById("barchart_values"));
      chart2.draw(view2, options2);
  }

}

