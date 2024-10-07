<?php
	$fullName = $_POST['fullname'];
	$dob = $_POST['dob'];
	$gender = $_POST['gender'];
	$nationality = $_POST['nationality'];
	$email = $_POST['email'];
	$phone = $_POST['phone'];

    $schoolName = $_POST['school-name'];
	$passingYear = $_POST['passing-year'];
	$marksTenth = $_POST['marks_10th'];
	$srSchoolName = $_POST['sr-school-name'];
	$srPassingYear = $_POST['sr-passing-year'];
	$marksTwelth = $_POST['marks_12th'];

    $DMC_10th = $_POST['10th-DMC'];
	$DMC_10th = $_POST['12th-DMC'];
	$migration = $_POST['migration'];
	$character = $_POST['character'];
	$test_scores = $_POST['test-scores'];

    $fatherName = $_POST['father-name'];
	$fatherOcc = $_POST['father-occupation'];
	$fatherCont = $_POST['father-contact'];
	$motherName = $_POST['mother-name'];
	$motherOcc = $_POST['mother-occupation'];
	$motherCont = $_POST['mother-contact'];
	$income = $_POST['income'];

    $course = $_POST['course'];
	$disability = $_POST['disability'];
	$activities = $_POST['activities'];

    $birthCertificate = $_POST['birth-certificate'];
	$aadhar = $_POST['aadhar'];
	$domicile = $_POST['domicile'];
	$familyId = $_POST['family-id'];

    $facility = $_POST['facility'];

	// Database connection
	$conn= mysqli_connect('localhost','root','');
	$query = "insert into `test`.`registration`(`fullname` ,`dob` ,`gender`, `nationality`, `email`, `phone`) values ('$fullName', $dob, '$gender', '$nationality','$email',  $phone)";

	$result = mysqli_query($conn, $query);
	if($result) {
    	echo "data inserted";
	} else {
    	echo "query failed";
	}
?>