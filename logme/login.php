<?php

$link = mysqli_connect("localhost", "root", "", "python_test");

$email=$_POST['email1']; // Fetching Values from URL.
$password= $_POST['password1']; // Password Encryption, If you like you can also leave sha1.
// check if e-mail address syntax is valid or not

// Matching user input email and password with stored email and password in database.

$all_insert_query = "SELECT * FROM allspuser WHERE User_Name='".$email."' AND User_Password='".$password."'";
//echo $all_insert_query;
$rt=mysqli_query($link, $all_insert_query);
$row = mysqli_fetch_array($rt);
$last_saved_code= $row['Last_Saved_Code'];
$user_short_code= $row['User_Short_Code'];
//echo $data;
if($last_saved_code!=""){
$last_saved_code=$last_saved_code+1;	
echo "true#".$last_saved_code."#".$user_short_code;
}else{
echo "username or Password is wrong...!!!!";

}
mysqli_close($link); // Connection Closed.



?>