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
    
    // In voetbalelo.js
      drawEloChart(team_select);
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
