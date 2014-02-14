/**
**author:sharp

*/

(function($) {
	$.fn.extend({
		fileTypeJudge : function(str) {
			return this.each(function() {
				var rightFileType;
				var fileType;
				var pojo;
				if (str == "photo") {
					rightFileType = new Array("jpg", "bmp", "gif", "png","jpeg");
					pojo = "图片";
				} else if (str == "package") {
					rightFileType = new Array("jar", "six", "sisx", "apk","jad");
					pojo = "游戏包";
				} else {
					return;
				}
				var fileType = $(this).val().substring($(this).val().lastIndexOf(".") + 1);
				if (!in_array(fileType,rightFileType)) {
					this.outerHTML += '';   
				    this.value =""; 
				    alert("只支持" + pojo + "文件上传！");
				}
			})
		}
	})
})(jQuery)

function in_array(needle, haystack) {
    // 得到needle的类型
    var type = typeof needle;
    if(type == 'string' || type =='number') {
        for(var i in haystack) {
            if(haystack[i] == needle) {
                return true;
            }
        }
    }
    return false;
}