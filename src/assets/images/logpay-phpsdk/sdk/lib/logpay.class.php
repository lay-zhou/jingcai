<?php
class logpay {

	public $uid;
	public $token;

	function __construct($uid, $token) {
		$this -> uid = $uid;
		$this -> token = $token;
	}

	function callbackSignCheck($Array) {
		if ($this -> Sign($Array) == $Array['callbackSign']) {
			return true;
		} else {
			return $this -> Sign($Array);
		}
	}
	
	function Sign($Array) {
		$Sign = md5($Array['price']. $Array['payType']. $Array['orderUid']. $Array['orderName']. $Array['orderNumber']. $Array['notify_url']. $Array['return_url']. $this -> uid. $this -> token);
		return $Sign;
	}
}
?>