var maps = []
maps['Vector']=
          ['XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
           'X.................................X',
           'X..S...........................S..X',
           'X..XX......S..................XX..X',
           'X..XX..................X......XX..X',
           'X......XXXXXXXXXX......XXXX.......X',
           'X....................S.X..........X',
           'X...................XXXX..........X',
           'X...XXXXX..X...........X..XXXXX...X',
           'X.....S.X..X...........X..X.S.....X',
           'X...X...X..X..XXXXX....X..X...X...X',
           'X...XXXXX..X...........X..XXXXX...X',
           'X..........X......................X',
           'X..........X......XXXX............X',
           'X......X...X...S..X.......XXXXXXXXX',
           'X..S...X...X..XXXXX...........S...X',
           'X..XX..X...............S.....XXX..X',
           'X..XX..X............XXXXXXX..XXX..X',
           'X............................XXX..X',
           'X.................................X',
           'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'];
           
maps['Rooms']=
        ['XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
         'X.......S.........................X',
         'X......XXXX...................S...X',
         'X...X........X...X..XXXX....XXXX..X',
         'X...X........X...X................X',
         'X..XXX..XX..XXX..X................X',
         'X...X........X...XXXX....XX....XXXX',
         'X...X....S...X...X............S...X',
         'X...X..XXXX..X...XS.XXXX....XXXX..X',
         'X................X................X',
         'XXX..XXXXXXXXXXXXXXXXXXXXXXXX...XXX',
         'X....X...........X...........X....X',
         'X..XXX...........X...S.......X....X',
         'X.......XS.......X..XXX......XXX..X',
         'XXXXXXXXXXX......X..X.X........X..X',
         'X...X...X........X.XX..X.......X..X',
         'X................X..X..X.......X..X',
         'X................X..X...X......X..X',
         'X.S.......S.........X...X.........X',
         'X...X...X...X......XX....X.......XX',
         'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'];
  
maps['Platforms'] = 
       ['XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        '...................................',
        '................S..................',
        '.....S......SSXXXX......S..........',
        '...XXXXX....XXXXXXX....XXXS....S...',
        '....XXX......XXXXX.....XXXXX..XXX..',
        '.....X.............................',
        '...................................',
        '...................................',
        '...................................',
        '...................................',
        '...................................',
        '.....S........XXX..................',
        '...............X........XXX...S....',
        '....XXX........X.........X........',
        '.....X.........X...XXX...X...XXX..',
        '.....X.........X....X....X....X....',
        '.....X...XXX...X....X....X....X....',
        '.....X....X....X....X....X....X....',
        '.....X....X....X....X....X....X....',
        '.....X....X....X....X....X....X....'];
 
        
maps['Blockfield']=
       ['X.................................X',
        '............S........S.............',
        '..X.......XXXXXX...XXXXXX.......X..',
        '..XXXXX.....................XXXXX..',
        '..X..............S..............X..',
        '.......S.......XXXXX.......S.......',
        '.....XXXXX.....XXXXX.....XXXXX.....',
        '...................................',
        '............S.........S............',
        '..X.......XXXXX.....XXXXX.......X..',
        '.XX...S.....................S...XX.',
        '.X...XXXX........S........XXXX...X.',
        '.X...XXXX......XXXXX......XXXX...X.',
        '.XX.............................XX.',
        '..X.......S.............S.......X..',
        '.......XXXXXXXX..X..XXXXXXXX.......',
        '.......XXXXXXXX..X..XXXXXXXX.......',
        '..XS...........................SX..',
        '..XXXXX.....................XXXXX..',
        '..X.............................X..',
        'X...........XXXXXXXXXXX...........X'];
        
maps['Pig']=['XX..........X.........X..........XX',
'X........XXXX...XXX...XXXX........X',
'......XXXX......XXX......XXXX......',
'....XXX.......S..X..S.......XXX....',
'..XXX........XX.....XX........XXX..',
'.XX..........XX.....XX..........XX.',
'.XX.............................XX.',
'...................................',
'......S.....................S......',
'....XXXXX...XXXX...XXXX...XXXXX....',
'....XXXXX...XXXX...XXXX...XXXXX....',
'...............X...X...............',
'...................................',
'.XX........S...........S........XX.',
'.XXS.....XXXXXX.....XXXXXX.....SXX.',
'..XXX.......X.........X.......XXX..',
'....XXX.....X.........X.....XXX....',
'......XXXX.SX.........XS.XXXX......',
'.........XXXX.........XXXX.........',
'X...........X.........X...........X',
'XX..........X...XXX...X..........XX',
];

maps['Skull'] = ['XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
'XXXXXXXXX.................XXXXXXXXX',
'XXXXXXXX......S.....S......XXXXXXXX',
'XXXXXXX.....XXXX...XXXX.....XXXXXXX',
'XXXXXXX.....XXXX...XXXX.....XXXXXXX',
'XXXXXXX......XXX...XXX......XXXXXXX',
'XXXXXXX.....................XXXXXXX',
'XXXXXXX..........S..........XXXXXXX',
'XXXXXXX..........X..........XXXXXXX',
'XXXXXXXS........XXX........SXXXXXXX',
'XXXXXXXX.......SXXXS.......XXXXXXXX',
'XXXXXXXXX......XXXXX......XXXXXXXXX',
'XXXXXXXXXX......XXX......XXXXXXXXXX',
'XXXXXXXXXX...............XXXXXXXXXX',
'XXXXXXXXXX...............XXXXXXXXXX',
'XXXXXXXXXX....XX...XX....XXXXXXXXXX',
'XXXXXXXXXXS..XXX...XXX..SXXXXXXXXXX',
'XXXXXXXXXXX..XXXXSXXXX..XXXXXXXXXXX',
'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
];

maps['Face'] = ['...................................',
'...................................',
'......X...X.............X...X......',
'.......X.X...............X.X.......',
'.......SX.................XS.......',
'.......X.X...............X.X.......',
'......X...X...XSSSSSX...X...X......',
'..............X.....X..............',
'........S.....XXXXXXX.....S........',
'...................................',
'...................................',
'...................................',
'...................................',
'.....XXXXXXXXXXXXXXXXXXXXXXXXX.....',
'.....XXXXXXXXXXXXXXXXXXXXXXXXX.....',
'......XXXX...............XXXX......',
'.......XXX...............XXX.......',
'........XX...XXXXXXXXX...XX........',
'.........X...XXXXXXXXX...X.........',
'..........X...XXXXXXX...X..........',
'...........X...........X...........'
];

maps['Saloon'] = ['..................................X',
'...XX.............................X',
'..XXXX............................X',
'..XXXX............................X',
'...XX.....................X.X.....X',
'.........................XX.XX..S.X',
'....................XXXXXXX.XXXXXXX',
'..................XXX.X.X.X.X.X.X.X',
'..................X.X.X.X.X.X.X.X.X',
'..........S.......X.X.X.X.X.X.X.X.X',
'.S........X.S.....XXXXXXXXX.XXXXXXX',
'XX......S.X.X......XX............XX',
'XXX.....X.X.X......X..............X',
'X.......XSXX.......X..............X',
'X.XX.....XX................S......X',
'X.XX......X...XX.......XS.XXX.SX..X',
'X.XXX.XX.SX..XXXX.XXX..XX..X..XX..X',
'X..XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX.X',
'X.................................X',
'X...........S...........S.........X',
'XXXX.XXX..XXXX...XXXX.XXXX..XXXXXXX'
];

maps['Rift'] = ['XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
'XXXXX.........................XXXXX',
'XXXXX............S............XXXXX',
'XXXXX.........................XXXXX',
'XXXXX....S...............S....XXXXX',
'XXXXX..XXXXX...........XXXXX..XXXXX',
'XXXXX..XXXXX...........XXXXX..XXXXX',
'.................S.................',
'................XXX................',
'................XXX................',
'...................................',
'..S......S.......S.......S......S..',
'XXXXX..XXXXX...XXXXX...XXXXX..XXXXX',
'XXXXX..XXXXX...XXXXX...XXXXX..XXXXX',
'XXXXX.........................XXXXX',
'XXXXX.........................XXXXX',
'XXXXX.........................XXXXX',
'XXXXX.........................XXXXX',
'XXXXX.........................XXXXX'
];

maps['Arena'] = ['...................................',
'...................................',
'...................................',
'.....XXXXXXXXXXXX.XXXXXXXXXXXX.....',
'.....X.......................X.....',
'.....X...S.......S.......S...X.....',
'.....X..XXX.....XXX.....XXX..X.....',
'.....X..XXX.....XXX.....XXX..X.....',
'.....X..XXX.....XXX.....XXX..X.....',
'.....X.......................X.....',
'.....X.......................X.....',
'.....X...S.......S.......S...X.....',
'.....X..XXX.....XXX.....XXX..X.....',
'.....X..XXX.....XXX.....XXX..X.....',
'.....X..XXX.....XXX.....XXX..X.....',
'.....X.......................X.....',
'.....X.......................X.....',
'.....XXXXXXXXXXXXXXXXXXXXXXXXX.....',
'...................................',
'...................................',
'...................................'
];

maps['Castle'] = ['...................................',
'........S.................S........',
'..X.X.X.X.X.............X.X.X.X.X..',
'..X.XXXXXXX.............XXXXXXX.X..',
'..X.......X.X.X.XSX.X.X.X.......X..',
'..X......SXXXXXXXXXXXXXXXS......X..',
'..XXX...XXX.............XXX...XXX..',
'....X...X.................X...X....',
'....X...X.................X...X....',
'....X....S...............S....X....',
'....X...XXX.............XXX...X....',
'........X......XX.XX......X........',
'..S.X...X.....X.....X.....X...X.S..',
'..XXX...X.....X.....X.....X...XXX..',
'....X.....S...X.....X....S....X....',
'....X...XXX...X.....X...XXX...X....',
'....X...X.....X.....X.....X...X....',
'....X...X....SX.....XS....X...X....',
'....X...X....XXXX.XXXX....X...X....',
'....XX......XX...S...XX......XX....',
'....XXXXXXXXXX..XXX..XXXXXXXXXX....',
];

maps['Sir Coddington'] = ['XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
'X............................S....X',
'X.................................X',
'X.................................X',
'X..................S..............X',
'X.........S.......XXX.............X',
'X.........XX....XX..X.XX..........X',
'X....S...XX..........XX..XX....S..X',
'X...XXX.XX..X...XX.X.XXX..XXX.XXX.X',
'X...XX..XXSX...XS.X..XX.XXX.XX....X',
'XS.....XXXXXX..XX....XXXXXS....X..X',
'XS....X.XXXXXXX.X..X.XX...X.X.....X',
'XX...XXXXXX.XX.XXXXX..X.X.........X',
'XX..XX.XXXXX.X.XX.....X..XX..SXX..X',
'X...X.XXXX...X........XS.X.X.XXX..X',
'X...XXXXX....X.X....S.XXXXXXX.....X',
'X...XX..X.......XXXXXXXXXX........X',
'X...XX.XX.XXSX....................X',
'X...XXXX..XXXXX.SXXXXXXXXXXS...XX.X',
'XS........XXXXXXXXXXXXXXXXXXXXXS..X',
'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
];

var mapNames = ['Sir Coddington','Castle','Arena','Saloon','Rift','Skull','Pig','Face','Vector','Rooms','Blockfield','Platforms'];
var currentMap = 2;
var map = maps[mapNames[currentMap]]; 

//document.getElementById('a').innerHTML = "Map: " + mapNames[0];     
//mappp = false;     
//window.setInterval(function(){mappp = !mappp;map=maps[+mappp];},1000);
var cols = new Array();
cols['.'] = "#3B3B3B";
cols['X'] = "#EBEBEB";
cols['S'] = "#3B3B3B";
var spawnPoints = [];

function setUpMap() {
    spawnPoints = null;
    spawnPoints = [];

    for(var i =0; i< c; i++){
    
        for(var j = 0;j<r;j++){
     
           if(map[j].charAt(i) == 'S'){
            var o = {x:i,y:j};
            spawnPoints.push(o);
          
              }
    
       }
    }
    
    }
  
