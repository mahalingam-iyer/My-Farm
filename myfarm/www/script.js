// script.js

    // create the module and name it myfarm
        // also include ngRoute for all our routing needs
    var myfarm = angular.module('myfarm', ['ngRoute','pascalprecht.translate']);
    var posts=[{
    	'name':'Wooden Plough',
    	'rating':5,
    	'amount':50,
    	'img':'img/plough.jpg',
    	'desc':'Tillage is the basic operation in farming. It is done to create favourable conditions for seed placement and plant growth. This is done mainly with a plough. A full history of the evolution of plough is not available. Farmers have been using plough since time immemorial. The primitive model might have been a crooked twig or a branch of a tree. The basic components of the plough are a shoe, a share, a body, a handle and a beam.',
    	'from':'17-Jul-2016',
    	'to':'17-Aug-2016',
        'owner':{
            'name':'Raj Mohan',
            'desc': 'Farmer at Ambad, Maharashtra.',
            'number':'98234905',
            'address':'Flat no. 202, TRT colony, MG road, Ambad, Maharashtra, 431203.'
        }
    },
    {
        	'name':'Hoe',
        	'rating':5,
        	'amount':50,
        	'img':'img/hoe.jpg',
        	'desc':'Tillage is the basic operation in farming. It is done to create favourable conditions for seed placement and plant growth. This is done mainly with a plough. A full history of the evolution of plough is not available. Farmers have been using plough since time immemorial. The primitive model might have been a crooked twig or a branch of a tree. The basic components of the plough are a shoe, a share, a body, a handle and a beam.',
        	'from':'17-Jul-2016',
        	'to':'17-Aug-2016',
        'owner':{
            'name':'Raj Mohan',
            'desc': 'Farmer at Ambad, Maharashtra.',
            'number':'98234905',
            'address':'Flat no. 202, TRT colony, MG road, Ambad, Maharashtra, 431203.'
        }
        },
        {
            	'name':'Chisel',
            	'rating':5,
            	'amount':50,
            	'img':'img/chisel.jpg',
            	'desc':'Tillage is the basic operation in farming. It is done to create favourable conditions for seed placement and plant growth. This is done mainly with a plough. A full history of the evolution of plough is not available. Farmers have been using plough since time immemorial. The primitive model might have been a crooked twig or a branch of a tree. The basic components of the plough are a shoe, a share, a body, a handle and a beam.',
            	'from':'17-Jul-2016',
            	'to':'17-Aug-2016',
        'owner':{
            'name':'Raj Mohan',
            'desc': 'Farmer at Ambad, Maharashtra.',
            'number':'98234905',
            'address':'Flat no. 202, TRT colony, MG road, Ambad, Maharashtra, 431203.'
        }
            },
            {
                	'name':'Sickle',
                	'rating':5,
                	'amount':50,
                	'img':'img/blade.jpg',
                	'desc':'Tillage is the basic operation in farming. It is done to create favourable conditions for seed placement and plant growth. This is done mainly with a plough. A full history of the evolution of plough is not available. Farmers have been using plough since time immemorial. The primitive model might have been a crooked twig or a branch of a tree. The basic components of the plough are a shoe, a share, a body, a handle and a beam.',
                	'from':'17-Jul-2016',
                	'to':'17-Aug-2016',
        'owner':{
            'name':'Raj Mohan',
            'desc': 'Farmer at Ambad, Maharashtra.',
            'number':'98234905',
            'address':'Flat no. 202, TRT colony, MG road, Ambad, Maharashtra, 431203.'
        }
        },{
    	'name':'Farm Working Labour',
    	'rating':5,
    	'amount':50,
    	'img':'img/farmworker.jpg',
    	'desc':'Tillage is the basic operation in farming. It is done to create favourable conditions for seed placement and plant growth. This is done mainly with a plough. A full history of the evolution of plough is not available. Farmers have been using plough since time immemorial. The primitive model might have been a crooked twig or a branch of a tree. The basic components of the plough are a shoe, a share, a body, a handle and a beam.',
    	'from':'17-Jul-2016',
    	'to':'17-Aug-2016',
        'owner':{
            'name':'Raj Mohan',
            'desc': 'Farmer at Ambad, Maharashtra.',
            'number':'98234905',
            'address':'Flat no. 202, TRT colony, MG road, Ambad, Maharashtra, 431203.'
        }
    },{
    	'name':'Tractor',
    	'rating':5,
    	'amount':50,
    	'img':'img/tractor.jpg',
    	'desc':'Tillage is the basic operation in farming. It is done to create favourable conditions for seed placement and plant growth. This is done mainly with a plough. A full history of the evolution of plough is not available. Farmers have been using plough since time immemorial. The primitive model might have been a crooked twig or a branch of a tree. The basic components of the plough are a shoe, a share, a body, a handle and a beam.',
    	'from':'17-Jul-2016',
    	'to':'17-Aug-2016',
        'owner':{
            'name':'Raj Mohan',
            'desc': 'Farmer at Ambad, Maharashtra.',
            'number':'98234905',
            'address':'Flat no. 202, TRT colony, MG road, Ambad, Maharashtra, 431203.'
        }
    }]
    var hindiTrnaslation={
    	    'Wooden Plough': 'हल',
    	    'Tillage is the basic operation in farming. It is done to create favourable conditions for seed placement and plant growth. This is done mainly with a plough. A full history of the evolution of plough is not available. Farmers have been using plough since time immemorial. The primitive model might have been a crooked twig or a branch of a tree. The basic components of the plough are a shoe, a share, a body, a handle and a beam.':'जुताई की खेती में बुनियादी ऑपरेशन है। यह बीज नियुक्ति और संयंत्र के विकास के लिए अनुकूल परिस्थितियों बनाने के लिए किया जाता है। यह मुख्य रूप से एक हल के साथ किया जाता है। हल के विकास का एक पूरा इतिहास उपलब्ध नहीं है। किसान अति प्राचीन काल से हल उपयोग किया गया है । आदिम मॉडल एक कुटिल टहनी या एक पेड़ की एक शाखा गया हो सकता है । हल के बुनियादी घटकों एक जूता , एक हिस्सा है, एक शरीर, एक संभाल और एक किरण हैं।',
    	    'Rating':'मूल्यांकन',
    	    'Amount':'रकम',
    	    'Month':'महीना',
    	    'Book it':'बुक कर',
    	    'My Farm':'मेरे खेत',
    	    'Post Resource':'उपकरण अपलोड',
    	    'Show Analysis':'विश्लेषण दिखा',
    	    'Search':'खोज',
    	    'Change Language':'भाषा बदलो',
    	    'Hindi':'हिंदी',
    	    'Sign Up':'साइन अप',
    	    'Login':'लॉग इन',
    	    'Day':'दिन',
    	    'Available from':'उपलब्ध',
    	    'To':'से तक',
    	    'Hoe':'कुदाल',
    	    'Chisel':'छेनी',
    	    'Women labour':'खेती महिला',
    	    'Tractor':'ट्रैक्टर',
            'Resource Name':'उपकरण का नाम',
            'Resource Description':'उपकरण का विवरण',
            'Resource Image':'उपकरण की छवि',
            'Available From':'से उपलब्ध',
            'Available Till':'तक उपलब्ध',
            'Cost of Resource per Day':'प्रति दिन उपकरण की लागत',
            'Post':'पोस्ट करे',
            'Cancel':'रद्द करे',
            'Search text':'खोज पाठ',
            'Book a resource':'उपकरण खरीद',
            'Owner Name':'मालिक का नाम',
            'Owner Description':'मालिक विवरण',
            'Contact Number':'संपर्क नंबर',
            'Enter mobile number':'मोबाइल नंबर दर्ज',
            'Proceed':'आगे बढ़ें',
            'Enter code sent to mobile number':'मोबाइल नंबर के लिए भेजा कोड दर्ज',
            'Owner Contact Number':'संपर्क नंबर',
            'Owner Contact Address':'संपर्क पता',
            'Got It':'ठीक है',
            'My Farm':'मेरे खेत',
            'Analyze My Farm':'खेत विश्लेषण',
            'Total Cultivable Land':'कुल कृषि योग्य भूमि',
            'Select a Crop':'एक फसल का चयन करें',
            'Cultivable Land For':'कृषि योग्य भूमि',
            'Add Crop & Analyze':'फसल जोड़े और विश्लेषण',
            'Name':'नाम',
            'Land':'भूमि',
            'Suggestions':'सुझाव',
            'Maximum Profit-Moderate investment (Recommended)':'अधिकतम लाभ - मध्यम निवेश (अनुशंसित)',
            'Tomato':'टमाटर',
            'Beet':'चुकंदर',
            'Radish':'मूली',
            'Medium Profit-Moderate investment':'मध्यम लाभ - मध्यम निवेश',
            'Cauliflower':'फूलगोभी',
            'Cabbage':'पत्ता गोभी',
            'Spinach':'पालक',
            'Chilli':'मिर्च',
            'Beans':'फलियां',
            'Onion':'प्याज',
            'Best suits the season; if sowed besides brinjal or capsicum avoid infection':'इस मौसम में सबसे अच्छा सूट ; यदि बैंगन या शिमला मिर्च से बचने के संक्रमण के अलावा बोया',
            'Brinjal':'बैंगन',
            'Capsicum':'शिमला मिर्च',
            'Unused':'अप्रयुक्त',
            'Minimum Profit-Low investment':'न्यूनतम लाभ - कम निवेश'
    	}
        var crops=[
            {
                name:'Brinjal'
            },
            {
                name:'Capsicum'
            }
        ]
    // configure our routes
    myfarm.config(function($routeProvider,$translateProvider) {
    	$translateProvider.translations('hi', hindiTrnaslation);
    	$translateProvider.preferredLanguage('en');
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'homepage.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/postresource', {
                templateUrl : 'postresource.html',
                controller  : 'postResourceController'
            })

            // route for the contact page
            .when('/showanalysis', {
                templateUrl : 'pages/showanalysis.html',
                controller  : 'contactController'
            })
            .when('/search', {
                templateUrl : 'pages/search.html',
                controller  : 'contactController'
            });
    });

    myfarm.filter('searchText',function($rootScope,$filter){
        return function(objArr){
            if(!$rootScope.searchTxt){
                return objArr;
            }
            var retnObj=[];
            var l=objArr.length;
            for(var i=0;i<l;i++){
                var obj=objArr[i];
                if($filter('translate')(obj.name).indexOf($rootScope.searchTxt)!=-1)
                    retnObj.push(obj);
                else if($filter('translate')(obj.name).indexOf($rootScope.desc)!=-1)
                    retnObj.push(obj);
            }
            return retnObj;
        }
    })

    myfarm.controller('HeaderController',function($scope,$translate){
    	    $scope.changeLang=function(lang){
    			$translate.use(lang);
    	    }
    })

    myfarm.directive('pieChart',['$filter',function($filter){
            return{
                restrict:'E',
                scope:{
                    chartData:'='
                },
                link:function(scope,elem,attrs){
                    scope.$watch('chartData',function(){
                        renderChart();
                    },true);
                    var data=[{name:'a',land:200},{name:'b',land:100}];
                    var data=scope.chartData;
                    var width = 200,
                        height = 200,
                        radius = Math.min(width, height) / 2;
                    var color = d3.scale.ordinal()
                        .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

                    var arc = d3.svg.arc()
                        .outerRadius(radius - 10)
                        .innerRadius(0);

                    var labelArc = d3.svg.arc()
                        .outerRadius(radius - 40)
                        .innerRadius(radius - 40);

                    var pie = d3.layout.pie()
                        .sort(null)
                        .value(function(d) { return d.land; });
                    var pos = d3.svg.arc().innerRadius(radius - 60).outerRadius(radius - 60); 
                      
                    var getAngle = function (d) {
                        return (180 / Math.PI * (d.startAngle + d.endAngle) / 2 - 90);
                    };
                    renderChart();
                    function renderChart(){
                        var transformX=(window.screen.width>650)?100:(width / 2);
                        d3.select(elem[0]).html('');
                        var svg = d3.select(elem[0]).append("svg")
                            .attr("width", width)
                            .attr("height", height)
                          .append("g")
                            .attr("transform", "translate(" + transformX + "," + height / 2 + ")");

                          var g = svg.selectAll(".arc")
                              .data(pie(data))
                            .enter().append("g")
                              .attr("class", "arc");

                          g.append("path")
                              .attr("d", arc)
                              .style("fill", function(d) { return color(d.data.land); });

                          g.append("text")
                              .attr("transform", function(d) { 
                                      return "translate(" + pos.centroid(d) + ") "+
                                      "rotate(" + getAngle(d) + ")"; 
                                    }) 
                              .attr("dy", ".35em")
                              .text(function(d) { return $filter('translate')(d.data.name); });

                    }
                }
            };
    }])

    // create the controller and inject Angular's $scope
    myfarm.controller('mainController', function($scope,$translate) {
        $scope.showChartFlg=false;
        $scope.selectedResource={};
        $scope.selectedResource.owner={};
        $scope.getDetailsStep=0;
        $scope.custDetails={};
        $("#postResFlUp").on('change',loadImg);
        $scope.posts=posts;
        $scope.crops=crops;
        $scope.selectedCrop=crops[0];
        $scope.cropLand=0;
        $scope.totalLand=100;
        $scope.chartData=[{name:'Unused',land:$scope.totalLand}]

        $scope.showChart=function(){
            if($scope.cropLand){
                $scope.chartData=$scope.chartData||[];
                $scope.chartData.push({
                    name:$scope.selectedCrop.name,
                    land:$scope.cropLand
                });
                var totalUsed=0;
                for(var i=0;i<$scope.chartData.length;i++){
                    if($scope.chartData[i].name!=='Unused'){
                        totalUsed+=$scope.chartData[i].land;
                    }
                }
                $scope.chartData[0].land=$scope.totalLand-totalUsed;
                $scope.showChartFlg=true;
                $scope.partLeftUnused=parseInt($scope.chartData[0].land/3);
            }else{
                alert('Please select value greater than 0.');
            }
        }
        $(document).on('click','.navbar-collapse.in',function(e) {
            if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
                $(this).collapse('hide');
            }
        });
        $scope.getPic=function(){
            var source=navigator.camera.PictureSourceType.PHOTOLIBRARY;
            if($scope.picSource=='CAMERA')
                source=navigator.camera.PictureSourceType.CAMERA;
            navigator.camera.getPicture(onCamSuccess,onCamFail,{
                quality:100,
                targetWidth:400,
                destinationType:navigator.camera.DestinationType.DATA_URL,
                sourceType:source,
                correctOrientation:true
            });
        }

        function onCamSuccess(imgData){
            $("#capturedImg").empty();
            $scope.postResourceCamImg="data:image/jpeg;base64,"+imgData;
            var img=document.createElement("img");
            img.src=$scope.postResourceCamImg;
            img.style.display="block";
            img.className="grivCamImg";
            $("#capturedImg").append(img);
        }

        function onCamFail(){
            $scope.postResourceCamImg=null;
        }

        $scope.bookThisPost=function(post){
            $scope.getDetailsStep=0;
            $scope.selectedResource.owner=post.owner
        }
        $scope.getMobileNo=function(){
            if($scope.custDetails.number)
                $scope.getDetailsStep++;
        }
        $scope.verifyCode=function(){
            if($scope.custDetails.code)
                $scope.getDetailsStep++;
        }
        //post resource
        $scope.newResource={};
        $scope.newResource.rating='N/A';
        $scope.postResource=function(){
            $scope.newResource.img = $scope.newResource.img || $scope.postResourceCamImg;
            $scope.newResource['owner']={
                'name':'Raj Mohan',
                'desc': 'Farmer at Ambad, Maharashtra.',
                'number':'98234905',
                'address':'Flat no. 202, TRT colony, MG road, Ambad, Maharashtra, 431203.'
            }
            posts.unshift($scope.newResource);
        }
        function loadImg(e){
            var file=this.files[0];
            var reader=new FileReader();
            reader.addEventListener("load", function () {
                $scope.newResource.img = reader.result;
              }, false);
            if (file) {
                reader.readAsDataURL(file);
              }
        }
        
        //post resource end
    });

    myfarm.controller('postResourceController', function($scope) {
        
    });

    myfarm.controller('contactController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });