		// Variables
	  	// Timer Variable
	  	var timer;
	  	// Variable for Timer Start/Stop Logic
	  	var started = false;
	  	var frameNumber = 0;
	  	
	  	// Javamon Object
	  	function Javamon(id, name, level, exp, ability1, ability2, ability3, ability4) {
  			
  			// properties
  			this.id = id;
  			this.name = name;
  			this.level = level;
  			this.exp = exp;
  			this.ability1 = ability1;
  			this.ability2 = ability2;
  			this.ability3 = ability3;
  			this.ability4 = ability4;

  			// methods
  			this.getAttackPower = function() {
    		//return 
  			};
		}

		function Flurge()
		{
		  	this.id = 2;
		  	this.name = "FLURGE";
		  	this.level = 5;
		 	this.exp = 0;
		 	this.ability1 = "Fire Cough";
		  	this.ability1ATK = 1.6;
		  	this.ability2 = "Wing Slap";
		 	this.ability2StatChanged = "speed";
		  	this.ability2Alter = -0.5;

		  	this.hp = 20;
		  	this.attack = 10;
		  	this.defense = 10;
		  	this.speed = 10;

		  	this.minAttack = this.attack - 2;
		  	this.minDefense = this.defense - 2;
		  	this.minSpeed = this.speed - 2;

		  	this.getAttackPower = function() {
		  		var returnVar = 0;
		  		returnVar = this.attack * this.ability1ATK;
		   		return returnVar;
		  	};
		}

		function Nibbler()
		{
		  this.id = 1;
		  this.name = "NIBBLER";
		  this.level = 5;
		  this.exp = 0;
		  this.ability1 = "Water Squirt";
		  this.ability1ATK = 1.5;
		  this.ability2 = "Slobber";
		  this.ability2StatChanged = "defense";
		  this.ability2Alter = -0.5;

		  this.hp = 20;
		  this.attack = 10;
		  this.defense = 10;
		  this.speed = 5;

		  this.minAttack = this.attack - 2;
		  this.minDefense = this.defense - 2;
		  this.minSpeed = this.speed - 2;

		    this.getAttackPower = function()
		    {
		      	var returnVar = 0;
		    	returnVar = this.attack * this.ability1ATK;
		      	return returnVar;
		    };
		}

		function Rootlet()
		{
		  this.id = 3;
		  this.name = "ROOTLET";
		  this.level = 5;
		  this.exp = 0;
		  this.ability1 = "Throwing Leaves";
		  this.ability1ATK = 1.4;
		  this.ability2 = "Weep";
		  this.ability2StatChanged = "attack";
		  this.ability2Alter = -0.5;

		  this.hp = 20;
		  this.attack = 10;
		  this.defense = 10;
		  this.speed = 10;

		  this.minAttack = this.attack - 2;
		  this.minDefense = this.defense - 2;
		  this.minSpeed = this.speed - 2;

		    this.getAttackPower = function()
		    {
		      	var returnVar = 0;
		    	returnVar = this.attack * this.ability1ATK;
		      	return returnVar;
		    };
		}



		//sjavamon1.currentAttack = javamon1.baseAttack;



		var javamonArray = [
  							 ["Javamon Name", "Type", "Action 1", "Action 2", "Action 3"],
  							 ["Javamon Name", "Type", "Action 1", "Action 2", "Action 3"],
  							 ["Javamon Name", "Type", "Action 1", "Action 2", "Action 3"]
							 ];

		var introTextArray = ["Welcome to the world of Java'mon. I am professor Coke.",
							  "We live alongside Java'mon in our world of Morrister. It is MY job to study Java'mon.",
							  "Some like to raise Java'mon as pets, while others enjoy forcing them to fight against their wills.",
							  "One second here . . .",
							  "We capture and store Java'mon in our shoes!",
							  "We should probably store them somewhere else, but, there really isn't another place that's convenient.",
							  "We can't store them in our pockets because that's where we keep our huge wads of cash winnings.",
							  "We can't store them in our jacket pockets because those are always full of unnecessarily large amounts of orange slices.",
							  "I sure do wish there was something perfectly designed for storing them... some type of orb or sphere maybe ..?",
							  "Well, a guy can dream can't he? Anyways, onward.",
							  "Well, a guy can dream can't he? Anyways, onward."];

		var labTextArray = ["*BURP* Oh! I have visitors! Hold on a second, let me put some socks<br>on...",
							"Hello! Is it already time for you two to begin your adventures?",
							"Gosh. It seems like only yesterday that you two made this game.",
							"Yeah man! I'm totally ready to get my Java'mon on!",
							": You know it! I've been waiting my entire angsty teen life for this moment.",
							"Alright you two! Step right this way, I have three Java'mon ready for you guys."];
	  	
		var startScreenActive = false;
		//
	  	// variables for key elements
	  	//
		var leftCharacter = document.getElementById("leftCharacter");
		var rightCharacter = document.getElementById("rightCharacter");
		// title image
		var titleImage = document.getElementById("title");
		var titleTop = 175;
		var titleOpacity = 0.0;

		var titleAnimationRunning = false;
		// professor coke
		var profCoke = document.getElementById("profCoke");
		profCoke.style.transform = "scaleX(-1)";
		var opacityVar = 0.0;
		// get canvas and context
	  	var canvas = document.getElementById("myCanvas");
	  	var context = canvas.getContext("2d");
	  	// start button
	  	var startButton = document.getElementById("startButton");
	  	// text bubble and text paragraph
	  	var textBubble = document.getElementById("textBubble");
	  	var introBubbleText = document.getElementById("introBubbleText");
	  	var introNext = document.getElementById("introNext");
	  	var textIndex = 0;
	  	// sip text
	  	var sipText = document.getElementById("sipText");
	  	// var for showing javamon
	  	var toppx = 410;
	  	var leftpx = 380;
	  	var widthpx = 10;
	  	// bambi and austin
	  	var bambi = document.getElementById("bambi");
	  	var ethan = document.getElementById("ethan");
	  	var ethanLeft = 650;
	  	var textBubble2 = document.getElementById("textBubble2");
	  	var dudeOrBroText = document.getElementById("dudeOrBroText");
	  	// dude/bro button
	  	var dudeButton = document.getElementById("dudeButton");
	  	var broButton = document.getElementById("broButton");
	  	// username textbox and button
	  	var usernameTxt = document.getElementById("usernameTxt");
	  	var submitUsernameButton = document.getElementById("submitUsernameButton");
	  	// start game button
	  	var startGameButton = document.getElementById("startGameButton");
	  	// room scene elements
	  	var roomText = document.getElementById("roomText");
	  	var roomNextButton = document.getElementById("roomNextButton");
	  	var roomIndex = 0;
	  	// outside scene elements
	  	var outsideNextButton = document.getElementById("outsideNextButton");
	  	var outsideText = document.getElementById("outsideText");
	  	// lab scene elements
	  	var labNextButton = document.getElementById("labNextButton");
	  	var labText = document.getElementById("labText");
	  	// javamon selection scene elements
	  	var selectionText = document.getElementById("selectionText");
	  	var leftShoeBoxButton = document.getElementById("leftShoeBoxButton");
	  	var middleShoeBoxButton = document.getElementById("middleShoeBoxButton");
	  	var rightShoeBoxButton = document.getElementById("rightShoeBoxButton");
	  	var cokeButton = document.getElementById("cokeButton");
	  	var selectionYesButton = document.getElementById("selectionYesButton");
	  	var selectionNoButton = document.getElementById("selectionNoButton");
	  	// battle scene elements
	  	var battleText = document.getElementById("battleText");
	  	var battleBox = document.getElementById("battleBox");
	  	var fireBolt = document.getElementById("fireBolt");
	  	var razorLeaves = document.getElementById("razorLeaves");
	  	var watorBolt = document.getElementById("waterBolt");

	  	var button1 = document.getElementById("button1");
		var button2 = document.getElementById("button2");
		var button3 = document.getElementById("button3");
		var button4 = document.getElementById("button4");

		var leftCharacterHP = document.getElementById("leftCharacterHP");
		var rightCharacterHP = document.getElementById("rightCharacterHP");

	  	//
	  	// variables about user and rival
	  	//
	  	var username = "";

	  	var character = "";
	  	var characterElem;
	  	var characterJavamon = "";

	  	var rival = "";
	  	var rivalElem;
	  	var rivalJavamon = "";
		//
		function load() {

			// show canvas and title image
			showElem(canvas);
			showElem(titleImage);

			// title animation timer
			timer = setInterval(loadAnimation, 7);
		}

		// title screen animation
		function loadAnimation() {
			
			titleAnimationRunning = true;

			showElem(leftCharacter);
			showElem(rightCharacter);

			// move image and opacity
			titleImage.style.top = titleTop + "px";
			titleImage.style.opacity = titleOpacity;
			leftCharacter.style.opacity = titleOpacity;
			rightCharacter.style.opacity = titleOpacity;

			titleTop -= 0.3;
			titleOpacity += 0.0021;

			if (titleTop <= 40) {
				titleAnimationRunning = false;
				titleImage.style.opacity = 1;
				clearInterval(timer);
				showElem(startButton);

				startScreenActive = true;
				// start animation for javamon
				animateJavamon();
			}
		}

		// when start button is pressed
		function start(event) {
			// hide start button
			hideElem(startButton);
			hideElem(leftCharacter);
			hideElem(rightCharacter);
			//animateJavamon = false;

			// make profCoke visibility = visible
			showElem(profCoke);

			// set timer for game starting animation
			timer = setInterval(startAnimation, 15);
		}

		// animation for prof coke appearing
		function startAnimation() {
			
			// increment opacity
			opacityVar += 0.01;

			// set new opacity
			profCoke.style.opacity = opacityVar;

			// if prof coke is at full opacity, stop timer,
			// change img src, show text bubble and text inside bubble,
			// show next button
			if (opacityVar >= 1) {
				// stop timer
				clearInterval(timer);
				// make coke talk
				profCoke.src = "Images/CokeTalks.png";
				// show text, textbubble, and next button
				showElem(textBubble);
				showElem(introBubbleText);
				showElem(introNext);
			}
		}

		// WHEN USER CLICKS IN THE GAME/CANVAS
		async function canvasClick(event) {
			// if title is moving and user clicks, skip to end of animation and stop timer.
			if (titleAnimationRunning)
			{
				clearInterval(timer);
				titleImage.style.top = "40px";
				titleImage.style.opacity = 1;
				leftCharacter.style.opacity = 1;
				rightCharacter.style.opacity = 1;
				showElem(startButton);
				startScreenActive = true;
				titleAnimationRunning = false;
				// start animation for javamon
				animateJavamon();
			}
		}

		async function animateJavamon() {
			while (startScreenActive) {
				leftCharacter.src = "Images/PM1move.png";
				rightCharacter.src = "Images/PM3.png";

				await sleep(500);

				leftCharacter.src = "Images/PM1.png";
				rightCharacter.src = "Images/PM3move.png";

				await sleep(500);
			}
			
		} 

		async function introClick(elem) {

				// increment index for text in bubble
				textIndex++;
				// show text from array
				introBubbleText.innerHTML = introTextArray[textIndex];

				// if text is number 3, animate shoe coming off Javamon coming out
				if (textIndex == 3)
				{
					hideElem(introNext);
					
					await sleep(1000);

					introBubbleText.innerHTML = "";

					profCoke.src = "Images/CokeWithShoe.png";

					await sleep(1000);

					// animate
					
					timer = setInterval(showJavamon, 7);

					await sleep(2500);

					// animate
					profCoke.src = "Images/CokeTalks.png";

					textIndex++;
					introBubbleText.innerHTML = introTextArray[textIndex];

					showElem(introNext);
				}
				else if (textIndex == 9)
				{
					
					hideElem(introNext);

					introBubbleText.innerHTML = "";

					profCoke.src = "Images/profCoke.png";

					await sleep(1200);

					// sip coke
					profCoke.src = "Images/CokeDrinks.png";
					drinkCoke(profCoke);

					await sleep(2200);

					profCoke.src = "Images/profCoke.png";

					await sleep(1000);

					profCoke.src = "Images/CokeTalks.png";
					introBubbleText.innerHTML = introTextArray[textIndex];

					showElem(introNext);
				}
				else if (textIndex == 10)
				{
					startScreenActive = false;
					introNext.style.visibility = "hidden";
					timer = setInterval(fadeOutElemAfterIntro, 15);

					await sleep (2000);

					timer = setInterval(fadeInChoices, 15);

					await sleep(1800);

					showElem(dudeOrBroText);
					showElem(dudeButton);
					showElem(broButton);
				}
		}

		// function for sip text moving when Professor Coke takes a drink
		async function drinkCoke(elem) {

			// make img visible
			showElem(sipText);
			// wait one second
			await sleep(1000);
			// move img
			sipText.style.left = "320px";
			sipText.style.top = "285px";
			// wait another second
			await sleep(1000);
			// hide img
			hideElem(sipText);
		}

		function fadeOutElemAfterIntro() {
			// increment opacity
			opacityVar -= 0.01;

			// set new opacity
			profCoke.style.opacity = opacityVar;
			leftCharacter.style.opacity = opacityVar;
			introBubbleText.style.opacity = opacityVar;
			titleImage.style.opacity = opacityVar;
			textBubble.style.opacity = opacityVar;

			// if elements are at 0 opacity, stop timer
			if (opacityVar <= 0) {
				hideElem(profCoke);
				hideElem(leftCharacter);
				hideElem(introBubbleText);
				hideElem(titleImage);
				hideElem(textBubble);
				clearInterval(timer);
			}
		}

		function dudeButtonClick(event) {
			// reset opacity variable
			opacityVar = 1;

			hideElem(broButton);
			hideElem(dudeButton);

			timer = setInterval(fadeOutBambi, 10);
		}

		function broButtonClick(event) {
			opacityVar = 1;

			hideElem(broButton);
			hideElem(dudeButton);

			timer = setInterval(fadeOutEthan, 10);
		}

		function fadeOutBambi() {
			character = "ethan";
			rival = "bambi";
			characterElem = ethan;
			rivalElem = bambi;

			opacityVar -= 0.01;

			// set new opacity
			bambi.style.opacity = opacityVar;

			// if elem coke is at full opacity, stop timer,
			// show next button
			if (opacityVar <= 0) {
				// stop timer
				clearInterval(timer);

				// hide other person
				hideElem(bambi);

				// start timer again to move ethan over to proper position
				timer = setInterval(moveEthanOver, 15);
			}
		}

		async function fadeOutEthan() {
			character = "bambi";
			rival = "ethan";
			characterElem = bambi;
			rivalElem = ethan;

			// decrement opacity variable
			opacityVar -= 0.01;

			// set new opacity
			ethan.style.opacity = opacityVar;

			// if elem coke is at full opacity, stop timer,
			if (opacityVar <= 0) {
				hideElem(ethan);

				clearInterval(timer);

				await sleep(800);

				dudeOrBroText.innerHTML = "Ahh, of course. An obvious choice from the looks of you. I'll also need to know your name.";

				showElem(usernameTxt);
				showElem(submitUsernameButton);
			}
		}

		async function moveEthanOver() {

			ethanLeft += 1;

			ethan.style.left = ethanLeft + "px";

			if (ethan.style.left == "780px") {
				clearInterval(timer);

				await sleep(800);

				dudeOrBroText.innerHTML = "Ahh, of course. An obvious choice from the looks of you. I'll also need to know your name.";
				showElem(usernameTxt);
				showElem(submitUsernameButton);
			}
		}

		async function submitUsername() {

			var usernameTemp = usernameTxt.value.trim();

			if (usernameTemp === "" ||
				usernameTemp == "") {
				dudeOrBroText.innerHTML = "I'm sorry, you must tell me your name.";
			}
			else {
				hideElem(usernameTxt);
				hideElem(submitUsernameButton);

				username = usernameTemp.toUpperCase();

				dudeOrBroText.innerHTML = "So, your name is " + username + "? Glad to meet you! I'd shake your hand, but they smell like my feet now.";

				await sleep(4000);

				opacityVar = 1;

				timer = setInterval(fadeOutChoices, 10);
			}
		}

		function fadeInChoices() {
			// increment opacity
			opacityVar += 0.01;

			// set new opacity
			bambi.style.opacity = opacityVar;
			ethan.style.opacity = opacityVar;
			textBubble2.style.opacity = opacityVar;

			bambi.style.visibility = "visible";
			ethan.style.visibility = "visible";
			textBubble2.style.visibility = "visible";

			// if elements are at 0 opacity, stop timer
			if (opacityVar >= 1) {
				clearInterval(timer);
			}
		}

		function fadeOutChoices() {
			// decrement opacity
			opacityVar -= 0.01;

			dudeOrBroText.style.opacity = opacityVar;
			textBubble2.style.opacity = opacityVar;

			// if elements are at 0 opacity, stop timer
			if (opacityVar <= 0) {
				// hide elements
				hideElem(textBubble2);
				hideElem(dudeOrBroText);

				// stop timer
				clearInterval(timer);

				// reset opacity
				opacityVar = 0;

				// start timer to fade in coke and title
				timer = setInterval(fadeInFinalSendoff, 10);
			}
		}

		async function fadeInFinalSendoff() {
			// increment opacity
			opacityVar += 0.01;

			showElem(profCoke);
			showElem(titleImage);

			introBubbleText.innerHTML = "";

			profCoke.style.opacity = opacityVar;
			titleImage.style.opacity = opacityVar;

			// if elements are at full opacity
			if (opacityVar >= 1) {
				// show elements
				showElem(textBubble);
				showElem(introBubbleText);

				textBubble.style.opacity = 1;
				introBubbleText.style.opacity = 1;

				introBubbleText.innerHTML = "Your adventure is about to unfold, " + username + 
											". Go out there and experience the world of Java'mon to the fullest!";

				clearInterval(timer);

				showElem(startGameButton);
			}
		}

		async function startGame(event) {
			hideElem(startGameButton);

			await sleep(1000);

			opacityVar = 1;
			timer = setInterval(fadeIntoRoom, 10)
		}

		async function fadeIntoRoom() {
			// decrement opacity
			opacityVar -= 0.01;


			profCoke.style.opacity = opacityVar;
			titleImage.style.opacity = opacityVar;
			bambi.style.opacity = opacityVar;
			ethan.style.opacity = opacityVar;
			textBubble.style.opacity = opacityVar;
			introBubbleText.style.opacity = opacityVar;
			canvas.style.opacity = opacityVar;

			// if elements are at 0 opacity
			if (opacityVar <= 0) {
				clearInterval(timer);

				hideElem(profCoke);
				hideElem(titleImage);
				hideElem(bambi);
				hideElem(ethan);
				hideElem(textBubble);
				hideElem(introBubbleText);

				await sleep(1000);

				canvas.style.backgroundImage = "url('Images/Room.png')";

				fadeIn(canvas, 2);

				await sleep(1000);

				showCharacterInRoom();
			}
		}

		async function showCharacterInRoom() {
			
			// TEMP FOR SKIPPING INTRO
			// TEMP FOR SKIPPING INTRO
			// TEMP FOR SKIPPING INTRO
			// TEMP FOR SKIPPING INTRO
			// TEMP FOR SKIPPING INTRO
			// TEMP FOR SKIPPING INTRO
			// TEMP FOR SKIPPING INTRO
			/*
			canvas.style.opacity = 1;
			showElem(canvas);
			canvas.style.backgroundImage = "url('Images/Room.png')";
			username = "SANDRA";
			rival = "bambi";
			character = "ethan";
			*/
			// TEMP FOR SKIPPING INTRO
			// TEMP FOR SKIPPING INTRO
			// TEMP FOR SKIPPING INTRO
			// TEMP FOR SKIPPING INTRO
			// TEMP FOR SKIPPING INTRO
			// TEMP FOR SKIPPING INTRO
			// TEMP FOR SKIPPING INTRO

			// change styles for gameplay

			bambi.style.top = "240px";
			bambi.style.height = "321px";
			ethan.style.top = "240px";
			ethan.style.height = "321px";

			// change styles for text bubble, bubble text, and character
			if (character == "bambi") {
				// character
				bambi.style.left = "800px";
				showElem(bambi);
				fadeIn(bambi, 2);
				await sleep(2000);
				bambi.src = "Images/broTalks.png";
				}
			else if (character == "ethan") {
				// character
				ethan.style.left = "800px";
				showElem(ethan);
				fadeIn(ethan, 2);
				await sleep(2000);
				ethan.src = "Images/dudeTalks.png";
				
			}
			
			// text bubble
			textBubble.style.left = "100px";
			textBubble.style.top = "34px";
			textBubble.style.width = "550px";
			textBubble.style.transform = "scaleX(-1)";
			textBubble.style.opacity = 1;
			showElem(textBubble);
			showElem(roomText);
			showElem(roomNextButton);
		}

		async function roomNext(event) {
			if (roomIndex++ == 0) {
				roomText.innerHTML = "WAIT! I just remembered! It's Spaghetti Sunday! I really need to get going!";
			}
			else {
				
				roomText.innerHTML = "";
				hideElem(roomNextButton);

				if (character == "bambi") {
					bambi.src = "Images/bro.png";
					await sleep(1000);
					bambi.style.opacity = 1;
					fadeOut(bambi, 1);
				}
				else if (character == "ethan") { 
					ethan.src = "Images/dude.png";
					await sleep(1000);
					ethan.style.opacity = 1;
					fadeOut(ethan, 1);
				}

				textBubble.style.opacity = 1;
				fadeOut(textBubble, 1);
				canvas.style.opacity = 1;
				fadeOut(canvas, 1);

				await sleep(1000);

				canvas.style.backgroundImage = "url('Images/Outside.png')";

				await sleep(1000);

				fadeIn(canvas, 2);

				if (character == "bambi") {
					// fade in and move character
					bambi.style.left = "400px";
					bambi.style.transform = "scaleX(-1)";
					bambi.style.opacity = 0;
					showElem(bambi);
					fadeIn(bambi, 2);
					await sleep(2200);
					bambi.style.opacity = 1;
					moveCharacterRight(bambi);
					await sleep(2000);

				}
				else if (character == "ethan") {
					// fade in and move character
					ethan.style.left = "400px";
					ethan.style.transform = "scaleX(-1)";
					ethan.style.opacity = 0;
					showElem(ethan);
					fadeIn(ethan, 2);
					await sleep(2200);
					ethan.style.opacity = 1;
					moveCharacterRight(ethan);
					await sleep(2000);

				}

				// someone says hey
				textBubble.style.animation = null;
				textBubble.style.transform = null;
				textBubble.style.left = "437px";
				textBubble.style.top = "60px";
				textBubble.style.opacity = 1;
				showElem(textBubble);
				showElem(outsideNextButton);
				showElem(outsideText);


			}
		}

		var outsideTextIndex = 0;

		async function outsideNext(event) {
			outsideTextIndex++;

			if (outsideTextIndex == 1) {
				if (rival == "ethan") {

				hideElem(outsideNextButton);
				outsideText.innerHTML = "";

				// rival appears
				ethan.style.transform = "scaleX(-1)";
				ethan.style.left = "400px";
				fadeIn(ethan, 2);
				bambi.style.transform = null;

				await sleep(1200);

				ethan.src = "Images/dudeTalks.png";
				outsideText.innerHTML = "RIVAL: Bro, you going to get your Java'mon today?";

				showElem(outsideNextButton);
				}
				else if (rival == "bambi") {

				hideElem(outsideNextButton);

				// rival appears
				bambi.style.transform = "scaleX(-1)";
				bambi.style.opacity = 0;
				showElem(bambi);
				bambi.style.left = "400px";
				fadeIn(bambi, 2);
				ethan.style.transform = null;

				await sleep(1200);

				bambi.src = "Images/broTalks.png";
				outsideText.innerHTML = "RIVAL: Dude, you going to get your Java'mon today?";

				showElem(outsideNextButton);
				}
			}
			else if (outsideTextIndex == 2)
			{
				if (character == "bambi") {
					bambi.src = "Images/broTalks.png";
					ethan.src = "Images/dude.png";
				}
				else if (character == "ethan") {
					ethan.src = "Images/dudeTalks.png";
					bambi.src = "Images/bro.png";	
				}

				textBubble.style.transform = "scaleX(-1)";
				textBubble.style.left = "390px";
				outsideText.style.left = "430px";
				outsideNextButton.style.left = "825px";
				outsideText.innerHTML = username + ": Holy crud! I completely forgot! Thanks for reminding me. Let's head over there now!";
			}
			else if (outsideTextIndex == 3) {

				outsideText.innerHTML = "";
				hideElem(outsideNextButton);
				ethan.src = "Images/dude.png";
				bambi.src = "Images/bro.png";

				await sleep(1000);


				if (character == "bambi") {
					bambi.style.left = "850px";
				}
				else if (character == "ethan") {
					ethan.style.left = "850px";				
				}

				// fade out outside scene
				fadeOut(bambi, 1);
				fadeOut(ethan, 1);
				fadeOut(textBubble, 1);
				fadeOut(outsideNextButton, 1);
				fadeOut(canvas, 1);

				await sleep(2000);

				// change elements for lab scene
				canvas.style.backgroundImage = "url('Images/labCoke.png')";
				if (character == "bambi") {
					// move character
					bambi.style.transform = "scaleX(-1)";
					bambi.style.left = "175px";
					// move rival
					ethan.style.left = "75px";

				}
				else if (character == "ethan") {
					// move character
					ethan.style.transform = "scaleX(-1)";
					ethan.style.left = "175px";
					// move rival
					bambi.style.left = "75px";
				}

				textBubble.style.transform = "";
				textBubble.style.left = "310px";
				textBubble.style.top = "55px";
				textBubble.style.opacity = 1;

				labText.innerHTML = username + labText.innerHTML;

				// fade in lab scene
				fadeIn(canvas, 2.5);
				await sleep(500);
				fadeIn(bambi, 2);
				fadeIn(ethan, 2);
				await sleep(2000);

				if (character == "bambi") {
					bambi.src = "Images/broTalks.png";
				}
				else if (character == "ethan") {
					ethan.src = "Images/dudeTalks.png";
				}

				showElem(textBubble);
				showElem(labText);
				showElem(labNextButton);
			}
			
		}

		var labTextIndex = 0;

		async function labNext(event) {

			if (labTextIndex == 0) {
				if (character == "bambi") {
					bambi.src = "Images/bro.png";
				}
				else if (character == "ethan") {
					ethan.src = "Images/dude.png";
				}
				textBubble.style.left = "328px";
				textBubble.style.transform = "scaleX(-1)";

				labText.innerHTML = "PROF COKE: " + labTextArray[labTextIndex];
			}
			else if (labTextIndex == 1) {
				labText.innerHTML = "";
				hideElem(labNextButton);
				profCoke.style.left = "850px";
				profCoke.style.height = "321px";
				profCoke.style.top = "245px";
				profCoke.style.transform = null;
				profCoke.src = "Images/profCoke.png";
				fadeIn(profCoke, 1.5);
				await sleep(2000);
				showElem(labNextButton);
				profCoke.src = "Images/CokeTalks.png";
				profCoke.style.height = "326px";

				labText.innerHTML = "PROF COKE: " +  labTextArray[labTextIndex];
			}
			else if (labTextIndex == 2) {
				labText.innerHTML = "PROF COKE: " +  labTextArray[labTextIndex];
			}
			else if (labTextIndex == 3)
			{
				profCoke.src = "Images/profCoke.png";
				profCoke.style.height = "321px";
				textBubble.style.left = "310px";
				textBubble.style.transform = null;
				if (rival == "bambi") {
					bambi.src = "Images/broTalks.png";
				}
				else if (rival == "ethan") {
					ethan.src = "Images/dudeTalks.png";
				}
				labText.innerHTML = "RIVAL: " +  labTextArray[labTextIndex];
			}
			else if (labTextIndex == 4) {
				if (character == "bambi") {
					ethan.src = "Images/dude.png";
					bambi.src = "Images/broTalks.png";
				}
				else if (character == "ethan") {
					bambi.src = "Images/bro.png";
					ethan.src = "Images/dudeTalks.png";
				}
				labText.innerHTML = username + labTextArray[labTextIndex];
			}
			else if (labTextIndex == 5) {
				bambi.src = "Images/bro.png";
				ethan.src = "Images/dude.png";
				profCoke.src = "Images/CokeTalks.png";
				profCoke.style.height = "326px";
				textBubble.style.left = "328px";
				textBubble.style.transform = "scaleX(-1)";
				labText.innerHTML = "PROF COKE: " +  labTextArray[labTextIndex];
			}
			else if (labTextIndex == 6) {
				profCoke.src = "Images/profCoke.png";
				profCoke.style.height = "321px";
				hideElem(labText);
				hideElem(labNextButton);

				await sleep(1000);

				fadeOut(bambi, 1);
				fadeOut(ethan, 1);
				fadeOut(textBubble, 1);
				fadeOut(profCoke, 1);
				fadeOut(canvas, 1);

				await sleep(1000);
				canvas.style.backgroundImage = "url('Images/shoeBox.png')";
				textBubble.style.transform = null;
				await sleep(1000);

				fadeIn(canvas, 1);

				await sleep(1000);

				textBubble.style.opacity = 1;
				showElem(textBubble);
				textBubble.style.left = "351px";
				textBubble.style.top = "335px"; 

				selectionText.innerHTML = "PROF COKE: Go ahead and choose one! " + username + ", you can go first. Just hover over a box to see its contents!";
				await sleep(1000);
				showElem(selectionText);
				showElem(leftShoeBoxButton);
				showElem(middleShoeBoxButton);
				showElem(rightShoeBoxButton);
				showElem(cokeButton);


				
				rightCharacter.style.left = "153px";
				rightCharacter.style.top = "322px";
				rightCharacter.style.height = "200px";
				rightCharacter.style.width = "auto";
				rightCharacter.style.opacity = 1;
				rightCharacter.src = "";
				showElem(rightCharacter);
			}
			else if (labTextIndex == 7) {

				labText.innerHTML = "";
				hideElem(labNextButton);

				if (character == "ethan") {
					bambi.src = "Images/bro.png";
					characterMoveLeftLab(ethan);
				}
				else if (character == "bambi") {
					ethan.src = "Images/dude.png";
					characterMoveLeftLab(bambi);
				}

				await sleep(1000);

				if (character == "ethan") {
					ethan.src = "Images/dudeTalks.png";
				}
				else if (character == "bambi") {
					bambi.src = "Images/broTalks.png";
				}

				showElem(labNextButton);
				labText.innerHTML = username + ": What? You can't do that!";
				
			}
			else if (labTextIndex == 8) {
				if (rival == "ethan") {
					ethan.src = "Images/dudeTalks.png";
					bambi.src = "Images/bro.png";
				}
				else if (rival == "bambi") {
					bambi.src = "Images/broTalks.png";
					ethan.src = "Images/dude.png";
				}


				labText.innerHTML = "RIVAL: Oh yeah? Let's settle this like men! JAVA\'MON BATTLE!";
			}
			else if (labTextIndex == 9) {
				if (character == "ethan") {
					ethan.src = "Images/dudeTalks.png";
					bambi.src = "Images/bro.png";
				}
				else if (character == "bambi") {
					bambi.src = "Images/broTalks.png";
					ethan.src = "Images/dude.png";
				}


				labText.innerHTML = username + ": You're on! Outside! Right now!";
			}
			else if (labTextIndex == 10) {

				hideElem(labNextButton);
				hideElem(textBubble);
				labText.innerHTML = "";

				bambi.src = "Images/bro.png";
				ethan.src = "Images/dude.png";

				bambi.style.transform = null;
				ethan.style.transform = null;

				await sleep(1000);

				fadeOut(bambi, 1);
				fadeOut(ethan, 1);

				await sleep(1500);

				textBubble.style.transform = "scaleX(-1)";
				textBubble.style.left = "328px";

				showElem(labNextButton);
				showElem(textBubble);
				labText.innerHTML = "*thinking to himself* PROF COKE: I think im wearing two different socks...";
			}
			else if (labTextIndex == 11) {

				hideElem(labNextButton);
				hideElem(labText);

				await sleep(1000);

				fadeOut(profCoke, 1);
				fadeOut(canvas, 1);
				fadeOut(textBubble, 1);

				await sleep(1500);

				canvas.style.backgroundImage = "url('Images/Outside.png')";

				if (character == "ethan") {
					ethan.style.left = "850px";
					bambi.style.left = "400px";
					bambi.style.transform = "scaleX(-1)";
				}
				else if (character == "bambi") {
					bambi.style.left = "850px";
					ethan.style.left = "400px";
					ethan.style.transform = "scaleX(-1)";
				}

				fadeIn(canvas, 1);

				await sleep(1000);

				fadeIn(ethan, 1)
				fadeIn(bambi, 1)

				await sleep(1500);

				textBubble.style.left = "437px";
				textBubble.style.top = "60px";
				textBubble.style.opacity = 1;
				textBubble.style.transform = null;

				if (rival == "ethan") {
					ethan.src = "Images/dudeTalks.png";
				}
				else if (rival == "bambi") {
					bambi.src = "Images/broTalks.png";
				}

				outsideText.style.left = "495px";
				outsideText.innerHTML = "RIVAL: Alright! Let's battle!";
				showElem(textBubble);

				await sleep(2000);

				bambi.src = "Images/broTalks.png";
				ethan.src = "Images/dudeTalks.png";

				hideElem(outsideText);
				hideElem(textBubble);

				await sleep(1000);

				fadeOut(canvas, 1);
				fadeOut(bambi, 1);
				fadeOut(ethan, 1);

				await sleep(1500);

				startBattleScene();
			}
			
			labTextIndex++;

		}

		var selectionScreenActive = true;

		function leftShoeBoxHover(event) {
			if (selectionScreenActive == true) {
				selectionText.innerHTML = "PROF COKE: That's the left box! That box contains the grass-type Java'mon, ROOTLET.";
				rightCharacter.src = "Images/PM3.png";
			}
		}

		function middleShoeBoxHover(event) {
			if (selectionScreenActive == true) {
				selectionText.innerHTML = "PROF COKE: That's the middle box! That box contains the fire-type Java'mon, FLURGE.";
				rightCharacter.src = "Images/PM2.png";
			}
		}

		function rightShoeBoxHover(event) {
			if (selectionScreenActive == true) {
				selectionText.innerHTML = "PROF COKE: That's the right box! That box contains the water-type Java'mon, NIBBLER.";
				rightCharacter.src = "Images/PM1.png";
			}
		}

		function cokeHover(event) {
			if (selectionScreenActive == true) {
				selectionText.innerHTML = "PROF COKE: HEY! That's mine! Don't touch that. *sip sip*";
				rightCharacter.src = "";
			}
		}



		var boxSelected = "";

		function leftShoeBoxClick(event) {

			selectionScreenActive = false;
			boxSelected = "left";
			rightCharacter.src = "Images/PM3.png";

			selectionText.innerHTML = "Are you sure? You want to choose ROOTLET?";

			// show yes no
			showElem(selectionNoButton);
			showElem(selectionYesButton);
		}

		function middleShoeBoxClick(event) {

			selectionScreenActive = false;
			boxSelected = "middle";
			rightCharacter.src = "Images/PM2.png";

			selectionText.innerHTML = "Are you sure? You want to choose FLURGE?";

			// show yes no
			showElem(selectionNoButton);
			showElem(selectionYesButton);
		}

		function rightShoeBoxClick(event) {

			selectionScreenActive = false;
			boxSelected = "right";
			rightCharacter.src = "Images/PM1.png";

			selectionText.innerHTML = "PROF COKE: Are you sure? You want to choose NIBBLER?";

			// show yes no
			showElem(selectionNoButton);
			showElem(selectionYesButton);
		}

		async function selectionYes(event) {
			// complete selection
			if (boxSelected == "right") {
				characterJavamon = new Nibbler();
				rivalJavamon = new Rootlet();
			}
			else if (boxSelected == "left") {
				characterJavamon = new Rootlet();
				rivalJavamon = new Flurge();
			}
			else if (boxSelected == "middle") {


				characterJavamon = new Flurge();
				
				rivalJavamon = new Nibbler();

			}

			hideElem(selectionYesButton);
			hideElem(selectionNoButton);
			hideElem(leftShoeBoxButton);
			hideElem(middleShoeBoxButton);
			hideElem(rightShoeBoxButton);
			hideElem(cokeButton);

			selectionText.innerHTML = "PROF COKE: Great choice! " + characterJavamon.name + " is great starter Java'mon!";

			await sleep(3000);

			selectionText.innerHTML = "";

			await sleep(1000);

			fadeOut(canvas, 1);
			fadeOut(textBubble, 1);
			fadeOut(rightCharacter, 1);

			await sleep(1000);

			canvas.style.backgroundImage = "url('Images/labCoke.png')";
			await sleep(1000);

			fadeIn(bambi, 1.5);
			fadeIn(ethan, 1.5);
			fadeIn(profCoke, 1.5);
			fadeIn(canvas, 1.5);

			await sleep(2000);


			// 310px left 328px right
			textBubble.style.left = "310px";
			textBubble.style.top = "55px";
			textBubble.style.opacity = 1;
			showElem(textBubble);
			// coke

			if (rival == "ethan") {
				ethan.src = "Images/dudeTalks.png";
			}
			else if (rival == "bambi") {
				bambi.src = "Images/broTalks.png";
			}

			labText.innerHTML = "RIVAL: You chose " + characterJavamon.name + "? OK. I'll take the other two then.";
			showElem(labNextButton);
			showElem(labText);
		}

		function selectionNo(event) {
			
			selectionScreenActive = true;

			rightCharacter.src = "";
			hideElem(selectionYesButton);
			hideElem(selectionNoButton);

			selectionText.innerHTML = "PROF COKE: Go ahead and choose one! Just hover over a box to see its contents!";

		}

		// timer function to animate javamon coming from show
		function showJavamon() {
			showElem(leftCharacter);

			// set new values to javamon
			leftCharacter.style.top = toppx + "px";
			leftCharacter.style.left = leftpx + "px";
			leftCharacter.style.width = widthpx + "px";
			leftCharacter.style.height = "auto";

			// change px variables
			toppx -= 0.1;
			leftpx += 0.2;
			widthpx += 0.8;

			// if width is 170px or greater, stop timer
			if (widthpx >= 170) {
				clearInterval(timer);
			}
		}

		async function fadeIn(elem, seconds) {
			// reset animation
			elem.style.animation = null;
			// start opacity at 0
			elem.style.opacity = 0;
			// make element's visibility = visible
			showElem(elem);
			// wait 100ms
			await sleep(100);
			// set animation to fadeIn
			elem.style.animation = "fadeIn " + seconds + "s 1 forwards";
			// wait for animation to finish
			await sleep(seconds * 1000);
			// hard code new opacity
			elem.style.opacity = 1;
			// reset animation
			elem.style.animation = null;
		}

		async function fadeOut(elem, seconds) {
			elem.style.animation = null;
			elem.style.opacity = 1;
			await sleep(100);
			elem.style.animation = "fadeOut " + seconds + "s 1 forwards";
			await sleep(seconds * 1000);
			hideElem(elem);
			elem.style.opacity = 0;
			elem.style.animation = null;
		}

		async function moveCharacterRight(elem) {
			elem.style.animation = null;
			await sleep(40);
			elem.style.animation = "characterMoveLeft 2s 1 forwards";
		}

		async function characterMoveLeftLab(elem) {
			elem.style.animation = null;
			await sleep(40);
			elem.style.animation = "characterMoveLeftLab 2s 1 forwards";
			await sleep(500);
			elem.style.transform = null;
		}

		

		function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

		function showElem(elem) { elem.style.visibility = "visible"; }

		function hideElem(elem) { elem.style.visibility = "hidden"; }

	  	function button1Click(event){

	  		hideElem(button1)
	  		showElem(button2);
	  		showElem(button3);

	  	}

	  	// ability 1
	  	async function button2Click(event){

	  		hideElem(button2);
	  		hideElem(button3);

	  		showElem(battleText);
	  		battleText.innerHTML = characterJavamon.name + " used " + button2.innerHTML + "!";

	  		await sleep(1000);

	  		if (button2.innerHTML == "Fire Cough") {
	  			characterJavamonUseAbility(rightCharacter);
	  			await sleep(700);
	  			fireCoughFromRight();
	  		}
	  		else if (button2.innerHTML == "Water Squirt") {
	  			characterJavamonUseAbility(rightCharacter);
	  			await sleep(700);
	  			waterSquirtFromRight();
	  		}
	  		else if (button2.innerHTML == "Throwing Leaves") {
	  			characterJavamonUseAbility(rightCharacter);
	  			await sleep(700);
	  			throwingLeavesFromRight();
	  		}

	  		await sleep(1500);

	  		blinkCharacter(leftCharacter);
	  		battleText.innerHTML = "";

	  		rivalJavamon.hp = rivalJavamon.hp - (characterJavamon.getAttackPower() - rivalJavamon.defense);

	  		await sleep(1000);

	  		setHPColor(rivalJavamon.hp, leftCharacterHP);

	  		if (rivalJavamon.hp <= 0) 
	  		{
	  			leftCharacterHP.innerHTML = "HP: 0";
	  			
	  			battleText.innerHTML = rivalJavamon.name + " has fainted.";

	  			await sleep(2000);

	  			fadeOut(leftCharacterHP, 1);
	  			fadeOut(leftCharacter, 1);

	  			await sleep(3000);

	  			var exp = rivalJavamon.attack + rivalJavamon.defense + rivalJavamon.speed;

	  			battleText.innerHTML = characterJavamon.name + " gained " + exp + " experience!";

	  			await sleep(3000);

	  			hideElem(battleText);

	  			await sleep(1000);

	  			fadeOut(canvas, 1);
	  			fadeOut(rightCharacter, 1);
	  			fadeOut(battleBox, 1);
	  			fadeOut(rightCharacterHP, 1);
	  			fadeOut(rightCharacter, 1);

	  			await sleep(2000);

	  			textBubble.style.top = null;
	  			textBubble.style.left = null;
	  			textBubble.style.transform = null;
	  			textBubble.style.height = null;
	  			textBubble.style.width = null;

	  			profCoke.style.top = null;
	  			profCoke.style.left = null;
	  			profCoke.style.transform = "scaleX(-1)";
	  			profCoke.style.height = null;
	  			profCoke.style.width = null;

	  			canvas.style.backgroundImage = null;

	  			fadeIn(canvas, 1);
	  			fadeIn(profCoke, 1);
	  			fadeIn(textBubble, 1);
	  			fadeIn(titleImage, 1);

	  			await sleep(2000);

	  			profCoke.src = "Images/CokeTalks.png";
	  			introBubbleText.style.opacity = 1;
	  			showElem(introBubbleText);
	  			introBubbleText.innerHTML = "Congratulations, " + username + " you've won the game!<br>" +
	  										"Unfortunatly, that's all the time we had! Thanks for playing!";


	  		}
	  		else
	  		{
	  			leftCharacterHP.innerHTML = "HP: " + rivalJavamon.hp;
	  			
	  			await sleep(1000);

	  			opponentTurnGo();

	  		}	
	  	}

	  	// ability 2
	  	async function button3Click(event){

	  		hideElem(button2);
	  		hideElem(button3);

	  		showElem(battleText);
	  		battleText.innerHTML = characterJavamon.name + " used " + button3.innerHTML + "!";

	  		await sleep(1000);

	  		characterJavamonUseAbility(rightCharacter);

	  		battleText.innerHTML = "";
	  		await sleep(2000);

	  		if (characterJavamon.ability2StatChanged == "speed") {
	  			if (rivalJavamon.speed > rivalJavamon.minSpeed) 
	  			{
	  				rivalJavamon.speed += characterJavamon.ability2Alter;
	  				battleText.innerHTML = rivalJavamon.name + "\'s speed was lowered.";
	  			}
	  			else
	  			{
	  				battleText.innerHTML = rivalJavamon.name + "\'s speed can not be lowered anymore.";
	  			}
	  		}
	  		else if (characterJavamon.ability2StatChanged == "defense") {
	  			if (rivalJavamon.defense > rivalJavamon.minDefense) 
	  			{
	  				rivalJavamon.defense += characterJavamon.ability2Alter;
	  				battleText.innerHTML = rivalJavamon.name + "\'s defense was lowered.";
	  			}
	  			else
	  			{
	  				battleText.innerHTML = rivalJavamon.name + "\'s defense can not be lowered anymore.";
	  			}
	  		}
	  		else if (characterJavamon.ability2StatChanged == "attack") {
	  			if (rivalJavamon.attack > rivalJavamon.minAttack) 
	  			{
					rivalJavamon.attack += characterJavamon.ability2Alter;
	  				battleText.innerHTML = rivalJavamon.name + "\'s attack was lowered.";
	  			}
	  			else
	  			{
	  				battleText.innerHTML = rivalJavamon.name + "\'s attack can not be lowered anymore.";
	  			}
	  		}

	  		await sleep(1000);

	  		opponentTurnGo();

	  	}

	  	// function for opponent turn
	  	async function opponentTurnGo() {

	  		battleText.innerHTML = rivalJavamon.name + " used " + rivalJavamon.ability2 + "!";

	  		await sleep(1000);

	  		// move javamon for ability use
	  		rivalJavamonUseAbility(leftCharacter);
	  		battleText.innerHTML = "";

	  		await sleep(2000);

	  		if (rivalJavamon.ability2StatChanged == "speed") {
	  			if (characterJavamon.speed > characterJavamon.minSpeed)
	  			{
	  				characterJavamon.speed += rivalJavamon.ability2Alter;
	  				battleText.innerHTML = characterJavamon.name + "\'s speed was lowered.";
	  			}
	  			else
	  			{
	  				battleText.innerHTML = characterJavamon.name + "\'s speed can not be lowered anymore.";
	  			}
	  		}
	  		else if (rivalJavamon.ability2StatChanged == "defense") {
	  			if (characterJavamon.defense > characterJavamon.minDefense) 
	  			{
	  				characterJavamon.defense += rivalJavamon.ability2Alter;
	  				battleText.innerHTML = characterJavamon.name + "\'s defense was lowered.";
	  			}
	  			else
	  			{
	  				battleText.innerHTML = characterJavamon.name + "\'s defense can not be lowered anymore.";
	  			}
	  		}
	  		else if (rivalJavamon.ability2StatChanged == "attack") {
	  			if (characterJavamon.attack > characterJavamon.minAttack)
	  			{
					characterJavamon.attack += rivalJavamon.ability2Alter;
	  				battleText.innerHTML = characterJavamon.name + "\'s attack was lowered.";
	  			}
	  			else
	  			{
	  				battleText.innerHTML = characterJavamon.name + "\'s attack can not be lowered anymore.";
	  			}
	  		}

	  		await sleep(2000);

	  		battleText.innerHTML = "";

	  		await sleep(1000);

	  		showElem(button1);

	  	}

	  	async function startBattleScene() {

	  		// TEMP STYLES FOR DEGUBBING
	  		/*

	  		character = "bambi";
	  		rival = "ethan";
	  		characterJavamon = new Nibbler();
	  		rivalJavamon = new Rootlet();

			*/

	  		canvas.style.backgroundImage = "url('Images/BD10px.png')";

	  		fadeIn(canvas, 2);


	  		// GET READY FOR BATTLE
	  		// ASSIGN ELEMENTS TO CORREPSOND WITH SPECIFIC JAVA'MON
	  		leftCharacter.style.left = null;
	  		leftCharacter.style.top = null;
	  		leftCharacter.style.height = null;
	  		leftCharacter.style.width = null;
	  		rightCharacter.style.left = null;
	  		rightCharacter.style.top = null;
	  		rightCharacter.style.height = null;
	  		rightCharacter.style.width = null;

	  		leftCharacter.src = "Images/PM" + rivalJavamon.id + ".png";
	  		rightCharacter.src = "Images/PM" + characterJavamon.id + ".png";
	  		button2.innerHTML = characterJavamon.ability1;
	  		button3.innerHTML = characterJavamon.ability2;

	  		await sleep(1000);

	  		fadeIn(leftCharacter, 1);
	  		fadeIn(rightCharacter, 1);

	  		await sleep(1000);

	  		rightCharacterHP.innerHTML = "HP: " + characterJavamon.hp;
	  		leftCharacterHP.innerHTML = "HP: " + rivalJavamon.hp;

	  		fadeIn(rightCharacterHP, 1);
			fadeIn(leftCharacterHP, 1);
	  		fadeIn(battleBox, 1);
	  		fadeIn(button1, 1);
	  	
	  	}

	  	async function fireCoughFromLeft() {
	  		fireBolt.style.animation = null;
	  		await sleep(100);
	  		fireBolt.style.animation = "attackFromLeft 1.5s 1 forwards";
	  		await sleep(1500);
	  		fireBolt.style.animation = null;
	  	}

	  	async function fireCoughFromRight() {
	  		fireBolt.style.animation = null;
	  		await sleep(100);
	  		fireBolt.style.animation = "attackFromRight 1.5s 1 forwards";
	  		await sleep(1500);
	  		fireBolt.style.animation = null;
	  	}

	  	async function waterSquirtFromLeft() {
	  		waterBolt.style.animation = null;
	  		await sleep(100);
	  		waterBolt.style.animation = "attackFromLeft 1.5s 1 forwards";
	  		await sleep(1500);
	  		waterBolt.style.animation = null;
	  	}

	  	async function waterSquirtFromRight() {
	  		waterBolt.style.animation = null;
	  		await sleep(100);
	  		waterBolt.style.animation = "attackFromRight 1.5s 1 forwards";
	  		await sleep(1500);
	  		waterBolt.style.animation = null;
	  	}

	  	async function throwingLeavesFromLeft() {
	  		razorLeaves.style.animation = null;
	  		await sleep(100);
	  		razorLeaves.style.animation = "attackFromLeft 1.5s 1 forwards";
	  		await sleep(1500);
	  		razorLeaves.style.animation = null;
	  	}

	  	async function throwingLeavesFromRight() {
	  		razorLeaves.style.animation = null;
	  		await sleep(100);
	  		razorLeaves.style.animation = "attackFromRight 1.5s 1 forwards";
	  		await sleep(1500);
	  		razorLeaves.style.animation = null;
	  	}

	  	async function blinkCharacter(elem) {
	  		var originalSRC = elem.src;

	  		elem.src = "";
	  		await sleep(150);
	  		elem.src = originalSRC;
	  		await sleep(150);
	  		elem.src = "";
	  		await sleep(150);
	  		elem.src = originalSRC;

	  	}

	  	function setHPColor(hp, hpElem) {
	  		
	  		if (hp >= 16) {
	  			hpElem.style.backgroundColor = "rgb(0, 255, 0)";
	  		}
	  		else if (hp >= 12) {
	  			hpElem.style.backgroundColor = "rgb(204, 255, 0)";
	  		}
	  		else if (hp >= 8) {
	  			hpElem.style.backgroundColor = "rgb(255, 255, 0)";
	  		}
	  		else if (hp >= 4) {
	  			hpElem.style.backgroundColor = "rgb(255, 153, 0)";
	  		}
	  		else if (hp >= 0) {
	  			hpElem.style.backgroundColor = "rgb(255, 0, 0)";
	  		}
	  	}

	  	async function characterJavamonUseAbility(elem) {
	  		elem.src = "Images/PM" + characterJavamon.id + "move.png";
	  		await sleep(500);
	  		elem.src = "Images/PM" + characterJavamon.id + ".png";
	  		await sleep(500);
	  		elem.src = "Images/PM" + characterJavamon.id + "move.png";
	  		await sleep(500);
	  		elem.src = "Images/PM" + characterJavamon.id + ".png";
	  	}

	  	async function rivalJavamonUseAbility(elem) {
	  		elem.src = "Images/PM" + rivalJavamon.id + "move.png";
	  		await sleep(500);
	  		elem.src = "Images/PM" + rivalJavamon.id + ".png";
	  		await sleep(500);
	  		elem.src = "Images/PM" + rivalJavamon.id + "move.png";
	  		await sleep(500);
	  		elem.src = "Images/PM" + rivalJavamon.id + ".png";
	  	}

//window.addEventListener("load", startBattleScene())
//window.addEventListener("load", showCharacterInRoom())
window.addEventListener("load", load())
