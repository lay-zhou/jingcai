<?php
require_once 'config.php';
date_default_timezone_set('Asia/Shanghai');
// GET返回数据
$Array['orderUid'] = $_GET['orderUid'];// (支付用户账号)
$Array['pay_price'] = $_GET['pay_price']; //(实际支付价格)
$Array['price'] = $_GET['price'];  //(1.00)
$Array['orderNumber'] = $_GET['orderNumber']; //(商户订单号)
$Array['sign1'] = $_GET['sign1'];
$Array['token'] = $config['token'];

// 签名函数
$sign = md5( $Array['pay_price']. $Array['price']. $Array['orderNumber']. $Array['orderUid']. $Array['sign1']. $Array['token'] );
// 对比签名
if($sign == !$_GET['sign2']) {
	echo "签名失败";
}
?>
<html lang="en">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0">
		<title>支付成功</title>
		<link rel="stylesheet" href="./static/css/success.css">
		<style>
			* {
				font-family: "微软雅黑";
			}
		</style>
	</head>
	<body ontouchstart="">
		<div class="container js_container">
			<div class="page msg">
				<div class="bd">
					<div class="weui_msg" style="padding: 10px 0 0;">
						<div class="weui_icon_area"><i class="weui_icon_msg weui_icon_success_no_circle"></i></div>
						<div class="weui_text_area">
							<h2 class="weui_msg_title">付款成功</h2>
							<p class="weui_msg_desc">
								<p style="color:#67C23A;display: inline;"> <?php echo $Array['orderUid']; ?></p> 成功支付 <span style="color:#67C23A;display: inline;"><?php echo $Array['price']; ?> 元</span></p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</body>
</html>