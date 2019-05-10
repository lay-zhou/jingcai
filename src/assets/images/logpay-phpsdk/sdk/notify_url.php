<?php
/*
 * 异步回调通知页面 (需商户在下单请求中传递notify_url)
 */
//接受通知返回的支付方式
require_once 'config.php';
date_default_timezone_set('Asia/Shanghai');
$data = file_get_contents('php://input');
$body = json_decode($data);

//返回数据
$Array['orderUid'] = $body->orderUid;// (支付用户账号)
$Array['pay_price'] = $body->pay_price; //(实际支付价格)
$Array['price'] = $body->price;  //(1.00)
$Array['orderNumber'] = $body->orderNumber; //(商户订单号)
$Array['sign1'] = $body->sign1;
$Array['token'] = $config['token'];

// 签名函数
$sign = md5( $Array['pay_price']. $Array['price']. $Array['orderNumber']. $Array['orderUid']. $Array['sign1']. $Array['token'] );
// 对比签名
if($sign == $body->sign2) {
    // do something update database
    
    echo 'SUCCESS';
} else {
    header("HTTP/1.0 405 Method Not Allowed");
    exit();
};
?>