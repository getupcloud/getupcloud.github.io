<?php

header('Content-type: application/json');

if (!$_REQUEST)
	die;

require_once 'php/MCAPI.class.php';
require_once 'php/config.inc.php'; //contains apikey

$api = new MCAPI($apikey);

$name = urldecode($_REQUEST['name']);
$email = urldecode($_REQUEST['email']);



list($first_name, $last_name) = explode(' ', $name, 2);

$merge_vars = array('FNAME' => $first_name, 'LNAME' => $last_name);

// By default this sends a confirmation email - you will not see new members
// until the link contained in it is clicked!
$retval = $api->listSubscribe($listId, $email, $merge_vars, 'html', true, true, false, false);

if ($api->errorCode)
	echo json_encode(array('success' => false, 'errorCode' => $api->errorCode, 'errorMessage' => $api->errorMessage));
else
    echo json_encode(array('success' => true));

?>
