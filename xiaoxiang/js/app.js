var app = {
	//登录
	login:function(){
		$("#loginShow").on("click",function(){
			$("#popLogin").show()
		})
		$("#loginBtn").on("click",function(){
			var haoText = $("#haoText").val();//账号
			var passwordText = $("#passwordText").val();
			if(haoText == ''){
				$("#userTipShow").show().text("账号名称不能为空")
				$(".J_userBorder").css("borderColor","red")
			}else if(passwordText == ''){
				$("#pwTipShow").show().text("请输入密码")
				$(".J_pwBorder").css("borderColor","red")
			}
			//input触发的时候异常隐藏
			$("#haoText").focus(function(){
				$("#userTipShow").hide()
				$(".J_userBorder").css("borderColor","#d3d5dc")
			})
			$("#passwordText").focus(function(){
				$("#pwTipShow").hide()
				$(".J_pwBorder").css("borderColor","#d3d5dc")
			})
		})
		$("#loginClose").on("click",function(e){
			$("#popLogin").hide();
		})
	},

    //选项卡
    isTab: function() {
        $("#tabNav a").on("click", function() {
            //添加当前状态current，它的同辈元素(siblings)移除当前状态current
            $(this).addClass("current").siblings().removeClass("current");
            var z = $(this).index(); //索引
            //遍历找到对应的内容显示，同辈元素隐藏
            $("#tabContent .J_tab_list").eq(z).show().siblings('#tabContent .J_tab_list').hide();
        });
    },
    //表单
    isForm: function() {
        //公司简称修改
        $(".J_btnModify").on("click", function() {
            if ($(this).text() == '修改') {
                $(this).siblings(".J_input").removeAttr("readonly").focus().css('color', '#aaa');
                //按钮替换成保存
                $(this).text("保存")
            }else{
            	$(this).siblings(".J_input").attr("readonly", "readonly").css('color','#666');
            	$(this).text("修改")
            }
        })
        
        //套餐选择
        $(".J_setSmeal a").on("click", function() {
            $(this).addClass("current").siblings().removeClass("current")
        })
        //赠送月份
        var num = $('.J_num').val()
        // 减
        $('.J_reduce').click(function(){
        	if(num > 1){
        		num --
        		$('.J_num').val(num)
        	}else{
        		alert('不能小于1')
        	}
        })
        // 加
        $('.J_add').click(function(){
			num ++
			$('.J_num').val(num)
        })
        //祝福语
        $("#blessings").keyup(function(){
		   var len = $(this).val().length;
		   if(len > 40){
		    alert("祝福语不得超过40字")
		    $(this).val($(this).val().substring(0,41));
		   }
		  });
        //选择贺卡背景
        $("#picKa a").on("click",function(event){
        	event.stopPropagation();
        	$(this).addClass("current").siblings().removeClass("current");
        	$("#popKa").show();
        	var srcImg=$(this).find("img").attr("src");
        	$("#popKa").find("img").attr("src",srcImg);
        })
        //点击body空白处放大图片隐藏
	 	$('body').click(function() {
            if (!$("#popKa").is(":hidden")) {
                $("#popKa").hide();
            }
	    });
	    //批量导入
	    $(".J_BatchImport").on("click",function(){
	    	$("#popBatchImport").show()
	    })
	    //批量导入弹窗关闭按钮
	    $("#popClose").on("click",function(){
	    	$("#popBatchImport").hide()
	    })
	    //逐个添加
	    $(".J_oneAdd").on("click",function(){
	    	$("#popAdd").show()
	    })
	    //逐个添加弹窗关闭按钮
	    $("#popAddClose").on("click",function(){
	    	$("#popAdd").hide()
	    })
	    //名单详情
	    $(".J_addName").on("click",function(){
	    	$("#popNameDetail").show()
	    })
	    //名单详情弹窗关闭按钮
	    $("#popNameClose").on("click",function(){
	    	$("#popNameDetail").hide()
	    })
	    //点击预览
	    $(".J_showWeixin").on("click",function(){
	    	
	    })

	},
	/*
	**发放记录页
	*/
	// 全选
	isAll:function(){
		var num = 0 //保存class="J_checked"选中了几个
	    //监听全选按钮事件
	    $('.all').change(function () {
	        //判断全选按钮是否被选中
	        var status = $(this).is(":checked")
	        if (status) {//选中
	            $('.J_checked').prop('checked', true)
	            num = $('.J_checked').length
	        } else {//未选中
	            $('.J_checked').prop('checked', false)
	            num = 0
	        }

	    })
	    //监听非全选按钮事件
	    $('.J_checked').change(function () {
	        //判断非全选按钮是否被选中
	        if ($(this).is(":checked")) { //选中
	            num++
	            if (num == $('.J_checked').length) {
	                $('.all').prop('checked', true)
	            }else{
	                $('.all').prop('checked', false)
	            }
	        } else {
	            num --
	            $('.all').prop('checked', false)
	        }
	    })

	    //表格隔行变色
		$(".J_m_table tr:even").addClass("tr_even");
		$(".J_m_table tr:odd").addClass("tr_odd");

    	// input不可编辑
        var inputs = $(".J_table_input");
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].setAttribute("readOnly",'true');
        }  
        //点击编辑
        $(".J_tableEdit").on("click",function(){

        	if ($(this).text() == '编辑') {
                $(this).parent().siblings().find(".J_table_input").removeAttr("readonly").focus();
                //按钮替换成保存
                $(this).text("保存")
            }else{
            	$(this).parent().siblings().find(".J_table_input").attr("readonly", "readonly");
            	$(this).text("编辑")
            }

        })
	},
	


}
$(function() {
    //遍历执行app中的方法
    for (var key in app) {
        typeof app[key] == 'function' && app[key]();
    };
});