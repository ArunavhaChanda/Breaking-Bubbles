$('li em').addClass('seasonal');
$('li.hot').addClass('favorite');


$('li[id = "four"]').hide().delay(500).fadeIn(1500);

/*
var listText = $('ul').text();
$('ul').append('<p>' + listText + '</p>');
var listItemHTML = $('li').html();
$('li').append('<i>' + listItemHTML + '</i>');
*/

$(function()
	{
		//changing and removing content
		$('li:contains("pine")').text('almonds');
		$('li#one').remove();

		//adding content
		$('ul').before('<p class = "notice">Just Updated</p>');
		$('li.hot').prepend('+ ');
		$('li:last').after($('<li><em>gluten-free</em> soy sauce</li>'));

		//getting and setting attribute values
		$('li:last').addClass('hot');
		$('ul').attr('id', 'group');

		//changing CSS rules
		$('li').css(
			{
				'background-color': '#c5a996',
				'padding-left': '+=75',
				'margin-top': '+=10'
			}
		);

		//using .each()
		/*
		$('li').each( function()
			{
				var ids = this.id;
				$(this).append('<span class = "order">' + ids + '</span>');
			}
		);
		*/

		//events
		var ids = '';
		var listItems = $('li');

		listItems.on('mouseover click', function()
										{
											ids = this.id;
											listItems.children('span').remove();
											$(this).append('<span class = "priority">' + ids + '</span>');
										}
		);

		listItems.on('mouseout', function()		
								{
									$(this).children('span').remove();
								}
		);

		/*event object 
		$('li').on('click', function(e)
		{
			$('li span').remove();
			var date = new Date();
			date.setTime(e.timeStamp);  //does not work in FireFox
			var clicked = date.toDateString();
			$(this).append('<span class = "date">' + clicked + '' + e.type + '</span>');
		});
		*/

		//delegating events
		$('ul').on(
			'click mouseover',
			' :last-child',
			function(e)
			{
				$(this).hide().delay(100).fadeIn(900);
			}
		)

		//basic effects
		$('h2').hide().slideDown();
		var $li = $('li');
		$li.hide().each(function(index)
					{
						$(this).delay(700*index).fadeIn(700);
						index++;
					}
		);

		//using animation
		$('li').on('click', function()
							{
								$(this).animate(
								{
									opacity: 0.0,
									paddingLeft: '+=80'
								}, 500, function()
										{
											$(this).remove();
										}
								);
							}
		);

		//traversing
		/*
		var $h2 = $('h2');
		$('ul').hide();
		$h2.append('<a class = "show">show</a>');

		$h2.on('click', function()
						{
							$h2.next()
								.fadeIn()
								.children('.hot')
								.addClass('complete');
							$h2.find('a').fadeOut();
						}
				);
		*/

		//filters in use
		listItems.filter('.hot:last').removeClass('hot');
		$('li:not(.hot)').addClass('cool');
		listItems.has('em').addClass('complete');

		//using index numbers
		$('li:lt(2)'); //gets list items with an index number less than 2
		$('li').eq(0); //list item equal to 0
		$('li:gt(2)'); //list items greater than index number of 2

		//working with forms
		var $newItemButton = $('#newItemButton');
		var $newItemForm = $('#newItemForm');
		var $textInput = $('input:text');

		$newItemButton.show();
		$newItemForm.hide();

		$('#showForm').on('click', function()
									{
										$newItemButton.hide();
										$newItemForm.show();
									}
		);

		$newItemForm.on('submit', function(e)
									{
										e.preventDefault();
										var newText = $textInput.val();
										$('li:last').after('<li>' + newText + '</li>');
										$newItemForm.hide();
										$newItemButton.show();
										$textInput.val('');
									}
		);

		//cut, copy, paste
		/*
		var $p = $('p');
		var $clonedQuote = $p.clone();
		$p.remove();
		$clonedQuote.insertAfter('h2');

		var $moveItem = $('#one').detach();
		$moveItem.appendTo('ul');
		*/

		//changing dimensions
		var listHeight = $('#page').height();
		$('li').width('25%');
		$('li#two').width(125);

		/* Determining Position of Items on the Page
		var $window = $(window);
		var $slideAd = $('#slideAd');
		var endZone = $('#footer').offset().top - $window.height() - 500

		$window.on('scroll', function()
							{
								if((endZone) < $window.scrollTop())
								{
									$slideAd.animate({'right': '0px'}, 250);
								}
								else
								{
									$slideAd.stop(true).animate({'right':'-360px'}, 250)
								}
							});
		*/
	});
