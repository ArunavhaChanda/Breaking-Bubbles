<?php
	/*SPORTS! */
	$sportsText = "sports.csv";
	$sportsArray = array();
	$handle = fopen($sportsText, "r");
	while(! feof($handle))
	{
		$sportsArray[] = fgetcsv($handle);

	}
	$sportHeadline = $sportsArray[0][0];
	fclose($handle);

	/*Science */
	$scienceText = "science.csv";
	$scienceArray = array();
	$handle = fopen($scienceText, "r");
	while(! feof($handle))
	{
		$scienceArray[] = fgetcsv($handle);

	}
	$scienceHeadline = $scienceArray[0][0];
	fclose($handle);

	/*Politics */
	$politicsText = "politics.csv";
	$politicsArray = array();
	$handle = fopen($politicsText, "r");
	while(! feof($handle))
	{
		$politicsArray[] = fgetcsv($handle);

	}
	$politicsHeadline = $politicsArray[0][0];
	fclose($handle);

	/*Business */
	$businessText = "business.csv";
	$businessArray = array();
	$handle = fopen($businessText, "r");
	while(! feof($handle))
	{
		$businessArray[] = fgetcsv($handle);

	}
	$businessHeadline = $businessArray[1][0];
	fclose($handle);
?>

<!Doctype html>
<html>
	<head>
		<title> Bubbles! </title>
		<link href = "styles/bubble.css" type = "text/css" rel = "stylesheet" />
		<link rel="stylesheet" type="text/css" href="styles/toolbar.css"> 
	</head>
	<body>
		<section class="stage" id = "pos1">
      		<figure class="ball bubbleOrange"><p class="title"> <?php echo $businessHeadline ?> </p></figure>
		</section>

		<section class = "stage" id = "pos2">
			<figure class="ball bubblePurple"><p class="title"> <?php echo $scienceHeadline ?> </p> </figure>
		</section>

		<section class = "stage green" id = "pos3">
			<figure class="ball bubbleGreen"><p class="title"> <?php echo $sportHeadline ?> </p></figure>
		</section>

		<section class = "stage" id = "pos4">
			<figure class="ball bubbleBlue"><p class="title"> <?php echo $politicsHeadline ?> </p> </figure>
		</section>
		<div id = "frame">
		</div>

		<div id="footer">
			<table>
 			<tr>
    		<td><input type="button" id="btn1" value="Business" class="off1" onclick="togglestyle1(this)" /></td>
    		<td><input type="button" id="btn2" value="Politics" class="off2" onclick="togglestyle2(this)" /></td>
    		<td><input type="button" id="btn3" value="Science" class="off3" onclick="togglestyle3(this)" /></td>
    		<td><input type="button" id="btn4" value="Sports" class="off4" onclick="togglestyle4(this)" /></td>
  			</tr>
		</div>
	</body>
	<script src="scripts/jquery-1.11.3.js"></script>
	<script src="scripts/float.js"></script>  
</html>

