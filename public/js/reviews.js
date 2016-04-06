var myJqueryAlias = jQuery.noConflict();
 myJqueryAlias( document ).ready(function() {
    // var reviews =  myJqueryAlias('#reviews_box');
       var reviews_array = [
    		{
    			title : 'Thank you Dan',
    			postedBy: 'Manuel',
    			review: 'Dan Kay has helped me out so much with two personal injury cases making sure I walked away without having to pay for any medical bill and got me treated as well as making sure I got payed for time off pain and suffering and his staff are amazing'
    		},
    		
    		{
    			title: 'Totally Satisfied',
    			postedBy: 'Client',
    			review: "I was injured in a car accident and the other company offered very little compensation and refused to budge. Mr. Kay persisted and got the full amount. I couldn't have been happier. His staff was friendly, helpful and efficient every time I called. Overall, I couldn't have asked for a better experience."
    		},
    		{
    			title: 'Awesome attorney',
    			postedBy: 'Eric',
    			review: "I came to Dan Kay when I was involved in a motor vehicle accident. With a free consultation, Dan was able to answer and my questions and took care of me!!! I highly recommend this attorney! -Eric"
    		},
    		{
    			title: 'Car accident need help and advice, Dan came through',
    			postedBy: 'Paula',
    			review: "I was involved in car accident that was not my fault and had trouble with the insurance company with the person that hit me. Was really helpful and positive on my case. I told Him what was going on and he helped me step by step with the case."
    		},
    		{
    			title: 'Thanks you Dan',
    			postedBy: 'Savannah',
    			review: "Me and my daughter had gotten into a bad car accident. We did not know what to do when I lost my job, but a friend recommended a lawyer Dan Kay. Dan Kay took care of everything my medical bills and kept demanding more money from the other insurance and I got a great settlement and now me and my daughters can buy home Thank you so much!"
    		},
    		{
    			title: 'Excellent Lawyer, Great Team, Wonderful Results',
    			postedBy: 'Geri',
    			review: 'From my first meeting with Daniel Kay I recognized his legal expertise, and was greatly relieved to have him handling my case. He was able to analyze the situation immediately and knew exactly what needed to be done. He kept me in the loop at all times, answering all my emails and phone calls in a timely manner. <br><br> He is extremely efficient and so is his staff. Good team, good results. Daniel handled my case with great legal clarity, strength, resolve, and determination to win an appropriate settlement for me. <br><br> For anyone contemplating the need for an excellent attorney, I highly recommend Daniel G. Kay, Attorney at Law. You wont be disappointed.'
    		},
    		{
    			title: 'Dan Saved Me',
    			postedBy: 'Dewayne',
    			review: "Words can not explain. I mean this was my first accident and had no clue of what to do what was going to happen. And he made everything clear for to understand and know what was going on with the case. Also keeping me very involved. And being there to assist me with any and every question and or concerns I had. And I must say I was more then surprised by the end result. Let's just say I got more then expected. And that's always good. Mr Dan kay is and has been the best Lawyer for the case. Very professional very knowledgeable and trustworthy."
    		},
    		{
    			title: 'Much appreciated David',
    			postedBy: 'David Sussman',
    			review: "I was arrested on a misdemeanor . The court system wanted me to plea to a charge in which I was innocent . David Margrave referred this case to Mr Kay . It was truly stressful but in the end Danny Kay fought like little Mike Tyson and within 10 minutes of fighting the D A dropped its case !!!!!!! Retain this man !!!! Worth every penny !!!!! I also had a domestic dispute with Rubi my wife and he got that dismissed !!!!!!! Retain This Man"
    		},
    		{
    			title: 'Thanks you Dan , from Cynthia Norris',
    			postedBy: 'Cynthia',
    			review: "Daniel Kay Has Been Our Family Attorney For Many Years. He Is Very Personable And We Trust Him With All Legal Issue That May Arise. His Confidence And Respect Amongst His Peers Is Admirable. I High Recommend Dan And Have Referred Him To Others."
    		},
    		{
    			title: 'Thanks you , from Richard',
    			postedBy: 'Richard',
    			review: "Mr. Kay has been a family attorney of mine for years. Well respected and mannered and the kicker is that every time I see him interact with any other attorney he his held in such high esteem. Smart, articulate, decisive and fights for every case he is not only a fighter but genuinely nice and always there for you. He is great I just can't say much more than that. Great man and stupendous lawyer. I would recommend him for anyone needing help. I have referred him to others and they have glowing recommendations as well."
    		},
    		{
    			title: 'For two traffic tickets, and accident injury',
    			postedBy: 'Brent',
    			review: "Amazing attorney, very helpful and took care of everything as best as possible and quickly."
    		},
    		{
    			title: "Personal Injury Case",
    			postedBy: "Client",
    			review: "I have been hurt in an auto accident. I needed help with my medical expenses incurred because of the accident. Mr. Kay was recommended to me by my friend. My friend definitely was not wrong. He is very professional, empathetic, timely. His office kept me up to date and made sure I had all the information needed. <br><br> I would definitely use him again and would recommend him to others."
    		},
    		{
    			title: "I know I can always count on Mr. Kay",
    			postedBy: "Jake",
    			review: "I used dan in 2005 and he went well above my expectations. He did more than I could ever expect. Dan always returns calls in a timely mannor when I have a concern. I recently had to retain him again in a domestic situation and just like before he is always there. He was at my bond hearing and fought hard with minimal time to prepare."
    		}
    	]

		var count = 0; 
		var time = 10000
    	reviewSlider(reviews_array, count);
    	changeSlides();
    	function changeSlides(){
    		// setTimeout(function() {
    		// 	count = count + 1
    		// 	fadeOut();
    		// 	fadeIn();
    		// 	reviewSlider(reviews_array, count)
    		// 	if(count < reviews_array.length - 1){
    		// 		changeSlides();
    		// 	}
    			
    		// }, time);
			count = count + 1
    			fadeOut();

    			reviewSlider(reviews_array, count)
    			
    	}
    	

    	function fadeOut(){
    		myJqueryAlias('#title').fadeOut(100);

		    myJqueryAlias('#postedBy').fadeOut(100);

		    myJqueryAlias('#review').fadeOut(100);

		    myJqueryAlias('#stars').fadeOut(100);

    	}
    	function fadeIn(){
    		myJqueryAlias('#title').fadeIn(1000);

    		myJqueryAlias('#stars').fadeIn(1000);

		    myJqueryAlias('#postedBy').fadeIn(1000);

		    myJqueryAlias('#review').fadeIn(1000);
            
    	}

		function reviewSlider(array, index){
				fadeIn();
		    	 myJqueryAlias('#title').html(array[index].title);

		    	 myJqueryAlias('#postedBy').html(array[index].postedBy);

		    	 myJqueryAlias('#review').html('<i>' + array[index].review + '</i>');
		    
		}

		 myJqueryAlias('#back').on('click', function(e) {
			console.log('clicked back button');
			if(count > 0){
				count = count - 1;
			}
			fadeOut();
			reviewSlider(reviews_array, count);
			
		});

		 myJqueryAlias('#forward').on('click', function(e) {
			console.log('clicked foward button');
			if(count < reviews_array.length - 1){
				count = count + 1;
			}else{
                count = 0;
            }
			fadeOut();
			reviewSlider(reviews_array, count);
			
		});
		
});