---
layout: post
title: "De geschiedenis van de eerste klasse."
description: "The first 'Hello world' post for Yi Zeng's personal website
'yizeng.me' in order to test Jekyll code highlightings."
categories: [posts,random]
tags: [jekyll]
alias: [/2013/04/22/]
utilities: highlight
---
<p>This is just a paragraph.</p>


<script src="https://gist.github.com/yizeng/2371e8b83c9254ed77f2.js"></script>

<script type="text/javascript" src="/assets/js/jQuery/jquery-1.11.1.min.js"></script>

<!--<script type="text/javascript" src="/assets/js/highcharts/highcharts.js"></script>-->

<!--<script type="text/javascript" src="/assets/js/highcharts/highcharts-more.js"></script> -->



<link rel="stylesheet" type="text/css" href="/assets/css/custom.css" />

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
  
   <!--Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap-theme.min.css">

<script type="text/javascript" src="/assets/js/bootstrap/bootstrap.min.js"></script> 

<script src="/assets/js/moment/moment.js"></script>


<!--<script type="text/javascript" src="/assets/js/voetbalelo/voetbalelo.js"></script> -->
<script>
  // {#On document ready, load stuff#}
  elo_evolution = {{ site.data.elo-evolution | jsonify }}
  max_elo_data ={{ site.data.max_elo_data | jsonify}}
  dates = {{site.data.dates| jsonify}}
  teams = {{site.data.teams| jsonify}}
  seasons = {{site.data.seasons| jsonify}}
</script>
<script>

</script>
  <script>
  $( document ).ready(function() {
      // $.getScript('/assets/js/highcharts/highcharts.js');
      // $.getScript('/assets/js/highcharts/highcharts-more.js');
      // $.getScript('/assets/js/voetbalelo/voetbalelo.js');
      
      for (i = 0;i<teams.length;i++) {
          if (teams[i] == "Anderlecht") {
              // $("#dropdown").append('<option><a id="team_' +String(i) +'" href="#" onclick="clickTeam(this.id);return false;">' +
              //                              '<img class="floatLeft" src="/assets/images/posts/Team Logos/' + teams[i] + '.png"' +  'height="20" width="20" />' +
              //                              '&nbsp;' + teams[i] + '</a></option>')
              
              $("#dropdown_list").append('<li><a id="team_' +String(i) +'" href="#" onclick="clickTeam(this.id);return false;">' +
                                          '<img class="floatLeft" src="/assets/images/posts/Team Logos/' + teams[i] + '.png"' +  'height="20" width="20" />' +
                                          '&nbsp;' + teams[i] + '</a></li>'
                  )
                  
              var team_select = teams[i]
              var team_count = i
              $("#button_list").html(teams[i] + '  &nbsp;<span class="caret"></span>')
              
          } else  {
                              // $("#dropdown").append('<option><a id="team_' +String(i) +'" href="#" onclick="clickTeam(this.id);return false;">' +
                              //              '<img class="floatLeft" src="/assets/images/posts/Team Logos/' + teams[i] + '.png"' +  'height="20" width="20" />' +
                              //              '&nbsp;' + teams[i] + '</a></option>')
              $("#dropdown_list").append('<li><a id="team_' +String(i) +'" href="#" onclick="clickTeam(this.id);return false;">' +
                                          '<img class="floatLeft" src="/assets/images/posts/Team Logos/' + teams[i] + '.png"' +  'height="20" width="20" />' +
                                          '&nbsp;' + teams[i] + '</a></li>'
                  )
          }
          
      }
    //   $.getScript( "/assets/js/highcharts/highcharts.js", function( data, textStatus, jqxhr ) {

    //     console.log( jqxhr.status ); // 200
    // });
      $.getScript('/assets/js/highcharts/highcharts.js');

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


      // drawEloChart(team_select);
});
</script>


<div class="btn-group text-center" role="group">

<button id="button_list" type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false">Kies team&nbsp;<span class="caret"></span></button>

<ul id= "dropdown_list" class="dropdown-menu scrollable-menu" role="menu">
</ul>

</div>

 
  <div id="container" style="min-width: 310px; height: 600px; margin: 0 auto"></div>



{% highlight ruby %}
def foo
  puts 'foo'
end
{% endhighlight %}




{% highlight javascript linenos=table %}
function myFunction() {
	alert("Hello World!");
}
{% endhighlight %}
