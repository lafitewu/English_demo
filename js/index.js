$(function() {
	function English() {
		this.index = 0;
		this.a = -1;
		this.b;
		this.timer;
		this.font = ["Frist Screen","Second Screen","Thrid Screen","Four Screen","Fifth Screen"];
		this.data = {
			font1:[
				["Radio Deejay surprises, entertains and deeply<br>touches. Radio, video, audio, music and stories<br>especially chosen for you."],
				["Wherever your trip is… switch-on Laeffe.<br>Feltrinelli publisher tv channel."],
				["Only love, when it’s true and consistent, is capable<br>of making us deeply happy, empowering our life and others life<br>quality."],
				["Not having a website nowadays is like sending out<br>of your business several clients everyday: the<br>importance of having a corporate website."],
				["We're always the same."]
			],
			infro1:[
				["Deejay is like<br>\"the mate of a<br>lifetime\""],
				["Tell<br>your story."],
				["Nothing can happen<br>without an<br>encounter."],
				["Register<br>your website."],
				["We're<br>the Bank."]
			],
			title1:[
				["TV SPOT"],
				["TV SPOT"],
				["SPOT"],
				["TV SPOT"],
				["TV COMMERCIAL"]
			],
			title2:[
				["A LOVE STORY"],
				["EACH TALE HAS A TRIP"],
				["LOVE, CHARITY AND MUSIC"],
				["WOULD YOU EVER SEND OUT YOUR CLIENTS?"],
				["OUR BANK IS DIFFERENT FROM THE OTHERS."]
			],
			infro2:[
				["The last spot designed from Studio Marani in collaboration with Userfarm and<br>Linus, is signed by Federico Brugia (Filmmaster Group) director of great talent of<br>an enormous number of prized commercials."],
				["In 2014 spring Laeffe, told something about itself to the public with an integrated<br>communication project(tv/radio/web) enlightening its specific editorial plus: the<br>capability of being a real stakeholder of the sense of the trip, either in a<br>physical either in a symbolic way."],
				["Time to Love has born in 2015 from Giacomo Maiolini(founder of Time Records)<br>desire to put an eye on charity projects with a particular attention to women<br>and children.<br><br>The idea takes start from the encounter between Giacomo Maiolini and Ibu Robin<br>Lim even known as “the bare foots obstetrician”, director of the Foundation Bumi<br>Sheet Bali, charity project dedicated to children birth in a Country in which<br>there’s no public sanity service and the death rate among new mothers and new<br>borns is dramatically high. Ibu Robin Lim has been prized in 2006 of the important<br>Alexander Lange Prize for Peace and has been nominated as “hero of the year” from<br>CNN in 2011."],
				["First time ever in tv for Register.it has been signed from Maurizio Marani, who had<br>the right skills to satisfy a client with a simple and creative idea.<br><br>In the commercial, we can see paradox situations in which real clients are<br>physically thrown out in different entrepreneurial fields. The equation is simple:<br>nowadays, not having a website is like throwing clients away everyday. Would<br>you ever do that?"],
				["We grow, we evolve but in the end, if we think thoroughly, we stay always the same,<br>faithful to ourselves.<br><br>This is the concept on which we’ve been filming the last Banca Mediolanum<br>corporate video; the film has been written, designed and directed by Studio Marani,<br>with the claim “We’re always the same”."]
			],
			infro3:[
				["The commercial goes through Banca Mediolanum<br>history, remarking how changes in its history, have<br>never been able to change its values. Banca<br>Mediolanum main values have become stronger day by<br>day exactly as a tree, during its life “grows its trunk,<br>multiplies its branches without changing its nature”.<br><br>The film represents a new stage in the collaboration<br>between Studio Marani and Mediolanum, and it is now<br>visible on the “corporate” section of the Bank website<br>and on its official channels."],
				["Following this store word Studio Marani has studied a<br>communication strategy and created the first<br>commercial for the tv channel Laeffe. Each tale has a<br>trip is the claim in with the schedule of the tv<br>channel is presented: real trips and soul trips,<br>tastings from the world, cinematographic tales,<br>emotional experiences, looks, faces and stories running<br>one after the other, evolving through the rhythm of the<br>song “Follow the Sun”."],
				["A huge amount of materials for communication has<br>been created for Time to Love launch, even thanks to<br>the work of an extraordinary group of people of Time<br>Records, artists, friends and sponsors strongly<br>believing in Time to Love values.<br><br>IThe film has been produced by Time Records, under<br>the direction of Maurizio Marani, Enrico Venturi and<br>Anna Scardovelli."],
				["The tv campaign, that purposes in rotation three<br>different stories, is completed by communication<br>activities onto digital medias: a video onto register.it<br>online stores and social platforms, and a retargeting<br>activity on a mini/dedicated website.<br><br>The film has been produced from Karen film under the<br>direction of Alberto Colombo."],
				["The commercial goes through Banca Mediolanum<br>history, remarking how changes in its history, have<br>never been able to change its values. Banca<br>Mediolanum main values have become stronger day by<br>day exactly as a tree, during its life “grows its trunk,<br>multiplies its branches without changing its nature”.<br><br>The film represents a new stage in the collaboration<br>between Studio Marani and Mediolanum, and it is now<br>visible on the “corporate” section of the Bank website<br>and on its official channels."]
			],
			pic:["pagevideo1.jpg","pagevideo2.jpg","pagevideo3.jpg","pagevideo4.jpg","pagevideo5.jpg"],
			hua_pic1:[
				["onehua_pic1.jpg","onehua_pic2.jpg","onehua_pic3.jpg"],
				["imga1.jpg","imga2.jpg","imga3.jpg"],
				["im3a1.jpg","img3a2.jpg","img2a3.jpg"],
				["img4a1.jpg","img4a2.jpg","img4a3.jpg"],
				["img5a1.jpg","img5a2.jpg","img5a3.jpg"]
			],
			hua_pic2:[
				["onehua1_pic1.jpg","onehua2_pic2.jpg","onehua3_pic3.jpg"],
				["imgb1.jpg","imgb2.jpg","imgb3.jpg"],
				["im3b1.jpg","img3b2.jpg","img3b3.jpg"],
				["img4b1.jpg","img4b2.jpg","img4b3.jpg"],
				["img5b1.jpg","img5b2.jpg","img5b3.jpg"],
			]
		}
	};
	English.prototype = {
		//banner 初始化
		banner:function() {
			$(".banner_pro_pro").animate({
				width:"100%",
			},7000,function() {
				$(".banner_pro_pro").css("width","0%");
			});
		},
		//轮播核心函数
		Initlun:function(a) {
			$(".banner ul li").hide();
			$(".banner_font").removeClass("slideInUp");
			if(a == "next") {
				Eng.a++;
				if(Eng.a > 4) {
					Eng.a = 0;
				}
				$(".banner ul li").eq(Eng.a).show().addClass("fadeInRight");
			}else {
				Eng.a--;
				if(Eng.a < 0) {
					Eng.a = 0;
				};
				$(".banner ul li").eq(Eng.a).show().removeClass("fadeInRight").addClass("fadeInLeft");
			}
			$(".banner_font").addClass("slideInUp");
			$(".banner_font").text(Eng.font[Eng.a]);
			Eng.banner();
		},
		// 调用轮播
		lun:function() {
			Eng.Initlun("next");
		},
		// 左右切换
		Click:function() {
			$(".previous").click(function() {
				Eng.Initlun()
			});
			$(".next").click(function() {
				Eng.Initlun("next");
			});
		},
		// 启用定时器
		Interval:function() {
			Eng.timer = setInterval(Eng.lun,7000);
		},
		// about模块
		About:function() {
			$(".about").click(function() {
				$(".previous2 .font,.next2 .font").css("marginTop","-110px");
				if($(this)[0].innerText == "about") {
					$(".banner").slideUp(600);
					$(".about_page").show();
					clearInterval(Eng.timer);
				}else {
					Eng.Interval();
					$(".previous2 .font,.next2 .font").animate({
						marginTop:"120px",
					},800,function() {
						$(".about_page").fadeOut(600);
						$(".banner").slideDown(600);
					});
				}
			});
		},
		// banner 跳转到子页面模板
		animateInit:function(obj) {
				obj.fn1;
				obj.fn3;
				$(".banner").animate({
					"width":obj.b,
					"height":obj.c,
					"top":obj.d},800,function() {
						obj.fn2;
						$(".next3,.previous3").css("top",obj.g);
			});
		},
		// 定义进入和back
		bannerInit:function(x) {
			if(x == 1) {
				var obj = {
					b: "1100px",
					c: "480px",
					d: "60px",
					g: "65%",
					fn1: $(".one_page").fadeIn(500),
					fn2: $(".banner .language,.banner .about,.previous,.next,.banner_progress").fadeOut(300),
				}
			}else {
				var obj = {
					b: "100%",
					c: "100%",
					d: "0",
					g: "55%",
					fn1: $(".one_page").fadeOut(500),
					fn2: $(".banner .language,.banner .about,.previous,.next,.banner_progress").fadeIn(300),
					fn3: $(".next3,.previous3").css("top","55%"),
				}
			}
			Eng.animateInit(obj);
		},
		//调用banner 函数
		bannerShow:function() {
			$(".banner ul li").click(function() {
				Eng.index = $(this).index();
				Eng.b = 1;

				// 切换页面内容模块
				$(".one_page_font1").html(Eng.data.font1[Eng.index]);
				$(".one_p_right_font").html(Eng.data.infro1[Eng.index]);
				$(".one_p_r_title").html(Eng.data.title1[Eng.index]);
				$(".one_page_title2").html(Eng.data.title2[Eng.index]);
				$(".one_page_infro2").html(Eng.data.infro2[Eng.index]);
				$(".one_page_lastfont").html(Eng.data.infro3[Eng.index]);
				$(".one_p_pic_left").css({
					"background":"url(images/"+Eng.data.pic[Eng.index]+") no-repeat",
					"background-size": "105%",
				});

				// 每次切换页面时，初始化滑动模块
				$(".one_num1").text("0"+Eng.b);
				$(".one_page_hua_pic1").css({
					"background":"url(images/"+Eng.data.hua_pic1[Eng.index][0]+") no-repeat",
					"background-size":"100%"
				});
				$(".one_page_hua_pic2").css({
					"background":"url(images/"+Eng.data.hua_pic2[Eng.index][0]+") no-repeat",
					"background-size":"100%"
				});
				Eng.bannerInit(1);
				clearInterval(Eng.timer);
			});
			$(".back,.one_page_footer").click(function() {
				Eng.Interval();
				Eng.bannerInit();
			});
		},
		// >> || << 初始化
		huaInit:function(opt) {
			Eng.b = 1;
			var that = this;
			$(opt.className).click(function() {
				if(opt.turn == 1) {
					Eng.b++;
					if(Eng.b > 3) {
						Eng.b = 1;
					};
				}else{
					Eng.b--;
					if(Eng.b < 1) {
						Eng.b = 3;
					};
				}
				$(".one_num1").text("0"+Eng.b);
				$(".one_page_hua_pic1").css({
					"background":"url(images/"+that.data.hua_pic1[that.index][Eng.b-1]+") no-repeat",
					"background-size":"100%"
				});
				$(".one_page_hua_pic2").css({
					"background":"url(images/"+that.data.hua_pic2[that.index][Eng.b-1]+") no-repeat",
					"background-size":"100%"
				});
			});
		},
		// 调用 >> 
		hua:function() {
			Eng.huaInit({
				className: ".one_page_hua_next",
				turn: 1
			});
			Eng.huaInit({
				className: ".one_page_hua_pre",
			});
		},
		pageAbout:function() {
			$(".about3").click(function() {
				Eng.bannerInit();
				setTimeout(function() {
					$(".previous2 .font,.next2 .font").css("marginTop","-110px");
					$(".banner").slideUp(600);
					$(".about_page").show();
					clearInterval(Eng.timer);
				},1500);
			});
		},
	}
	var Eng = new English();
	Eng.lun();
	Eng.Interval();
	Eng.Click();
	Eng.About();
	Eng.bannerShow();
	Eng.hua();
	Eng.pageAbout();
});