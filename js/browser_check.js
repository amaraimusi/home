
//ブラウザの種類を判定する。
function browserCheck(){
	var userAgent = window.navigator.userAgent.toLowerCase();
	var appVersion = window.navigator.appVersion.toLowerCase();

	if (userAgent.indexOf("msie") > -1) {
		return 'IE';
//		if (appVersion.indexOf("msie 6.0") > -1) {
//			alert("IE6");
//		}
//		else if (appVersion.indexOf("msie 7.0") > -1) {
//			alert("IE7");
//		}
//		else if (appVersion.indexOf("msie 8.0") > -1) {
//			alert("IE8");
//		}
//		else {
//			alert("Unknown");
//		}
	}
	else if (userAgent.indexOf("firefox") > -1) {
		return 'Firefox';
		//alert("Firefox");
	}
	else if (userAgent.indexOf("opera") > -1) {
		return 'Opera';
		//alert("Opera");
	}
	else if (userAgent.indexOf("chrome") > -1) {
		return 'chrome';
		//alert("Google Chrome");
	}
	else if (userAgent.indexOf("safari") > -1) {
		return 'safari';
		//alert("Safari");
	}
	else {
		return 'Unknown';
		//alert("Unknown");
	}
}