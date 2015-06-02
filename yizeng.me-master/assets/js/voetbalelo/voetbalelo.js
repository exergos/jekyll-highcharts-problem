
  function max() {
  var args = Array.prototype.slice.call(arguments);
  return Math.max.apply(Math, args.filter(function(val) {
     return !isNaN(val);
  }));
}

  function drawEloChart(team_select) {
  // series = data that will be shown (dates & elo)
  series = []
  for (i=0;i<seasons.length;i++) {
      data = []
      for (j=0;j<elo_evolution[team_select][seasons[i]][0].length;j++) {
          data.push([elo_evolution[team_select][seasons[i]][0][j],elo_evolution[team_select][seasons[i]][1][j]])
      }
      series.push({name:seasons[i],data:data, marker: {symbol: "circle"} })
  }
  
  // Max ELO opmaak
  for(i=0;i < max_elo_data[team_select].length;i++) {
      series[max_elo_data[team_select][i][0]].data[max_elo_data[team_select][i][1]] = { marker: {
                                                                                          symbol: 'url(http://www.highcharts.com/demo/gfx/sun.png)',
                                                                                          enabled: true,
                                                                                          fillColor: '#FF0000',
                                                                                          lineWidth: 0.2,
                                                                                          radius: 2,
                                                                                          lineColor: "#FF0000" // inherit from series
                                                                                  },y:series[max_elo_data[team_select][i][0]].data[max_elo_data[team_select][i][1]][1],x: series[max_elo_data[team_select][i][0]].data[max_elo_data[team_select][i][1]][0]}
  }
//   (function($) {
// $.noConflict();
  jQuery(function ($) {
   $('#container').highcharts({
       chart: {
           type: 'spline',
           zoomType: 'x',
           plotBackgroundImage: 'http://i.imgur.com/9ePWdzK.png',
          // renderTo: 'container',
          // Fancy stuff here
          events: {
              selection: function (event) {
                  if (event.xAxis) {
                      // Zoom
                      // alert(this.options)
                      this.options.plotBackgroundImage= ""
                      this.redraw()
                      // this.chart.options.plotBackgroundImage='http://upload.wikimedia.org/wikipedia/commons/a/a6/Roses_renoir.JPG';
                      // this.chart
                      // text = 'min: ' + Highcharts.numberFormat(event.xAxis[0].min, 2) + ', max: ' + Highcharts.numberFormat(event.xAxis[0].max, 2);
                  } else {
                      // Reset zoom
                  }
              }
          }
      },
       credits: {
          enabled: false
        },
      // chart: {
      //     type: 'spline'
      // },
      title: {
          text: 'ELO Rating Jupiler Pro League Ploegen'
      },
      subtitle: {
          text: 'Een analyse van 20 jaar JPL.'
      },
      xAxis: {
          // events: {
          //     afterSetExtremes: function() {
          //     // Na Zoom, geen background image meer.
          //     }
          // },
          type: 'datetime',
          // dateTimeLabelFormats: { // don't display the dummy year
          //     month: '%e. %b',
          //     year: '%Y'
          // },
          // title: {
          //     text: 'Date'
          // },
          // labels: {
          //     format: "{value:%Y-%m-%d}"
          // },
          min: dates[0],
          max: dates[dates.length - 1],
          labels: {
                  formatter: function() {
                      if ((moment(this.value).year()-1)%5 == 0) {
                           date_string = String(moment(this.value).year()-1) + "/" + String(moment(this.value).year())
                      } else {
                          date_string = ""
                      }
                         
                      return date_string;
                  }            
          },

      },
      yAxis: {
          title: {
              text: 'ELO Rating'
          },
          min: 1100,
          max: 2000,
          labels: {
              formatter: function() {
                      if (this.value == 1500) {
                          y_label = "<strong>GEM</strong>"
                      }
                      else {
                          y_label = this.value
                      }
                      
                  return y_label;
              }  
          }
      },
      tooltip: {
          
          formatter: function () {
              var s = '<table><td colspan="2" style="text-align: center"><strong>' + this.y + '</strong></td>'
              gameday_index = this.series.data.indexOf(this.point)

                             
              s += '<tr><td class="tooltip-elo-one" style="text-align: right"><b>' + elo_evolution[team_select][this.series.name][2][gameday_index]   + '</b></td></tr>' +  
              '<td class="tooltip-elo-one" style="text-align: right"><b>' + elo_evolution[team_select][this.series.name][3][gameday_index]   + '</b></td></tr>' + 
              
              // Datum
              '<tr>' +
              '<td colspan="2" class="tooltip-elo-one" style="text-align: right"><b>' + moment(this.x).calendar()  + '</b></td></tr>'

                          // elo_evolution[team][this.series.name][3] +
                          
                          
                  s += '</table>'
              // });
              

              return s;
          },
          
          useHTML: true,
      },

      plotOptions: {
          spline: {
              marker: {
                  enabled: false,
                  states: {
                      hover: {
                          enabled: true
                      }
                  }
              },
              color: 'rgb(50,50,50)',
              showInLegend: false
          }
      },

      series: series
  });
  // });
  // }(jQuery));
});

}