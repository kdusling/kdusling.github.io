

var pipes=[
{id:"0.125st40", nps:"0.125", display:"<sup>1</sup>&frasl;<sub>8</sub>",  od:0.405, t:0.068,  sch:40, DN:6,  mat:"comSteel"},
{id:"0.250st40", nps:"0.25" , display:"<sup>1</sup>&frasl;<sub>4</sub>",  od:0.540, t:0.088,  sch:40, DN:8,  mat:"comSteel"},
{id:"0.375st40", nps:"0.375", display:"<sup>3</sup>&frasl;<sub>8</sub>",  od:0.675, t:0.091,  sch:40, DN:10, mat:"comSteel"},
{id:"0.500st40", nps:"0.5"  , display:"<sup>1</sup>&frasl;<sub>2</sub>",  od:0.840, t:0.109,  sch:40, DN:15, mat:"comSteel"},
{id:"0.750st40", nps:"0.75" , display:"<sup>3</sup>&frasl;<sub>4</sub>",  od:1.050, t:0.113,  sch:40, DN:20, mat:"comSteel"},
{id:"1.000st40", nps:"1"    , display:"1",                                od:1.315, t:0.133,  sch:40, DN:25, mat:"comSteel"},
{id:"1.250st40", nps:"1.25" , display:"1 <sup>1</sup>&frasl;<sub>4</sub>",od:1.660, t:0.140,  sch:40, DN:32, mat:"comSteel"},
{id:"1.500st40", nps:"1.5"  , display:"1 <sup>1</sup>&frasl;<sub>2</sub>",od:1.900, t:0.145,  sch:40, DN:40, mat:"comSteel"},
{id:"2.000st40", nps:"2"    , display:"2",                                od:2.375, t:0.154,  sch:40, DN:50, mat:"comSteel"},
{id:"2.500st40", nps:"2.5"  , display:"2 <sup>1</sup>&frasl;<sub>2</sub>",od:2.875, t:0.203,  sch:40, DN:65, mat:"comSteel"},
{id:"3.000st40", nps:"3"    , display:"3",                                od:3.500, t:0.216,  sch:40, DN:80, mat:"comSteel"},
{id:"3.500st40", nps:"3.5"  , display:"3 <sup>1</sup>&frasl;<sub>2</sub>",od:4.000, t:0.226,  sch:40, DN:90, mat:"comSteel"},
{id:"4.000st40", nps:"4"    , display:"4",                                od:4.500, t:0.237,  sch:40, DN:100, mat:"comSteel"},
{id:"5.000st40", nps:"5"    , display:"5",                                od:5.563, t:0.258,  sch:40, DN:125, mat:"comSteel"},
{id:"6.000st40", nps:"6"    , display:"6",                                od:6.625, t:0.280,  sch:40, DN:150, mat:"comSteel"},
{id:"8.000st40", nps:"8"    , display:"8",                                od:8.625, t:0.322,  sch:40, DN:200, mat:"comSteel"},
{id:"10.000st40", nps:"10"  , display:"10",                               od:10.750, t:0.365,  sch:40, DN:250, mat:"comSteel"},
{id:"12.000st40", nps:"12"  , display:"12",                               od:12.750, t:0.406,  sch:40, DN:300, mat:"comSteel"},
{id:"14.000st40", nps:"14"  , display:"14",                               od:14.000, t:0.438,  sch:40, DN:350, mat:"comSteel"},
{id:"16.000st40", nps:"16"  , display:"16",                               od:16.000, t:0.500,  sch:40, DN:400, mat:"comSteel"},
{id:"18.000st40", nps:"18"  , display:"18",                               od:18.000, t:0.562,  sch:40, DN:450, mat:"comSteel"},
{id:"20.000st40", nps:"20"  , display:"20",                               od:20.000, t:0.594,  sch:40, DN:500, mat:"comSteel"},
{id:"24.000st40", nps:"24"  , display:"24",                               od:24.000, t:0.688,  sch:40, DN:600, mat:"comSteel"},
{id:"32.000st40", nps:"32"  , display:"32",                               od:32.000, t:0.688,  sch:40, DN:800, mat:"comSteel"},
{id:"0.125st80", nps:"0.125", display:"<sup>1</sup>&frasl;<sub>8</sub>",  od:0.405, t:0.095,  sch:80, DN:6,  mat:"comSteel"},
{id:"0.250st80", nps:"0.25" , display:"<sup>1</sup>&frasl;<sub>4</sub>",  od:0.540, t:0.119,  sch:80, DN:8,  mat:"comSteel"},
{id:"0.375st80", nps:"0.375", display:"<sup>3</sup>&frasl;<sub>8</sub>",  od:0.675, t:0.126,  sch:80, DN:10, mat:"comSteel"},
{id:"0.500st80", nps:"0.5"  , display:"<sup>1</sup>&frasl;<sub>2</sub>",  od:0.840, t:0.147,  sch:80, DN:15, mat:"comSteel"},
{id:"0.750st80", nps:"0.75" , display:"<sup>3</sup>&frasl;<sub>4</sub>",  od:1.050, t:0.154,  sch:80, DN:20, mat:"comSteel"},
{id:"1.000st80", nps:"1"    , display:"1",                                od:1.315, t:0.179,  sch:80, DN:25, mat:"comSteel"},
{id:"1.250st80", nps:"1.25" , display:"1 <sup>1</sup>&frasl;<sub>4</sub>",od:1.660, t:0.191,  sch:80, DN:32, mat:"comSteel"},
{id:"1.500st80", nps:"1.5"  , display:"1 <sup>1</sup>&frasl;<sub>2</sub>",od:1.900, t:0.200,  sch:80, DN:40, mat:"comSteel"},
{id:"2.000st80", nps:"2"    , display:"2",                                od:2.375, t:0.218,  sch:80, DN:50, mat:"comSteel"},
{id:"2.500st80", nps:"2.5"  , display:"2 <sup>1</sup>&frasl;<sub>2</sub>",od:2.875, t:0.276,  sch:80, DN:65, mat:"comSteel"},
{id:"3.000st80", nps:"3"    , display:"3",                                od:3.500, t:0.300,  sch:80, DN:80, mat:"comSteel"},
{id:"3.500st80", nps:"3.5"  , display:"3 <sup>1</sup>&frasl;<sub>2</sub>",od:4.000, t:0.318,  sch:80, DN:90, mat:"comSteel"},
{id:"4.000st80", nps:"4"    , display:"4",                                od:4.500, t:0.337,  sch:80, DN:100, mat:"comSteel"},
{id:"5.000st80", nps:"5"    , display:"5",                                od:5.563, t:0.375,  sch:80, DN:125, mat:"comSteel"},
{id:"6.000st80", nps:"6"    , display:"6",                                od:6.625, t:0.432,  sch:80, DN:150, mat:"comSteel"},
{id:"8.000st80", nps:"8"    , display:"8",                                od:8.625, t:0.500,  sch:80, DN:200, mat:"comSteel"},
{id:"10.000st80", nps:"10"  , display:"10",                               od:10.750, t:0.594,  sch:80, DN:250, mat:"comSteel"},
{id:"12.000st80", nps:"12"  , display:"12",                               od:12.750, t:0.688,  sch:80, DN:300, mat:"comSteel"},
{id:"14.000st80", nps:"14"  , display:"14",                               od:14.000, t:0.750,  sch:80, DN:350, mat:"comSteel"},
{id:"16.000st80", nps:"16"  , display:"16",                               od:16.000, t:0.844,  sch:80, DN:400, mat:"comSteel"},
{id:"18.000st80", nps:"18"  , display:"18",                               od:18.000, t:0.938,  sch:80, DN:450, mat:"comSteel"},
{id:"20.000st80", nps:"20"  , display:"20",                               od:20.000, t:1.031,  sch:80, DN:500, mat:"comSteel"},
{id:"24.000st80", nps:"24"  , display:"24",                               od:24.000, t:1.219,  sch:80, DN:600, mat:"comSteel"},];

function innerD(pipe) {
  return (pipe.od - 2.0*pipe.t);
}

function roughness(pipe) {
  if (pipe.mat === 'comSteel'){
      return 0.0018;
  }
return 1e-12;
}

function weightus(pipe) {
  return 10.69*(pipe.od - pipe.t)*pipe.t;
}

function weightmetric(pipe) {
  return 0.0246615*(pipe.od - pipe.t)*pipe.t;
}

function area(pipe) {
    return 3.14159*Math.pow(innerD(pipe),2.0)/4.0;
}

//Friction factor in the zone of complete turbulence
function ffturb(pipe) {
  var rr = roughness(pipe)/innerD(pipe);
  return 1./Math.pow(2.*Math.log10(rr/3.7),2.0);
}

//Colebrook–White equation
function cw(f, Re, rr)
{
 return 1/Math.sqrt(f) + 2.0*Math.log10( rr/3.7 + 2.51/(Re*Math.sqrt(f)) );
}

function FrictionFactor(Re, rr)
{
 var a = 1.e-6;
 var b = 1.e-5;
 var err = 1.e-10;

 var c;

 do {
        c=(a*cw(b,Re,rr)-b*cw(a,Re,rr))/(cw(b,Re,rr)-cw(a,Re,rr));
        a=b;
        b=c;

    } while(Math.abs(cw(c,Re,rr))>err);

return c;
}

google.charts.load('current', {'packages':['corechart', 'line']});

function drawChart(pipe) {

  var datalin = new google.visualization.DataTable();
  datalin.addColumn('number', 'Re');
  datalin.addColumn('number', 'Friction factor');

  datalin.addRows(1361);

   var NR = 640.;
  for(var i = 0; i <= 1360; i++) {
    datalin.setCell(i, 0, NR);
    datalin.setCell(i, 1, 64./NR );
    NR = NR + 1;
  }


     var datacw = new google.visualization.DataTable();
     datacw.addColumn('number', 'Re');
     datacw.addColumn('number', 'Friction factor');

     datacw.addRows(110);

      var rr = roughness(pipe)/innerD(pipe);
      var NR = 4000.;
     for(var i = 0; i < 110; i++) {
       datacw.setCell(i, 0, NR);
       datacw.setCell(i, 1, FrictionFactor(NR,rr) );
       NR = (NR * 1.1).toPrecision(2);
     }


      var joinedData = google.visualization.data.join(datalin, datacw, 'full', [[0, 0]], [1], [1]);


     var moodyOptions = {
       title: "Moody's diagram for relative roughness, \u03B5/D=" + (rr).toPrecision(3),
       legend: 'none',
       width: 600,
       height: 400,
        hAxis: {
         title: 'Reynolds number',
         scaleType: 'log',
         format: 'scientific'
       },
       vAxis: {
         title: 'Friction Factor',
         scaleType: 'log'
       }
     };

     var logChart = new google.visualization.LineChart(document.getElementById('moody_div'));
     logChart.draw(joinedData, moodyOptions);
     //logChart.draw(datacw, moodyOptions);
}
