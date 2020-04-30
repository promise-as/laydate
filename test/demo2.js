define(function(){
    'use strict';

    laydate({
        elem: '#J-xl',
        format: 'YYYY-MM-DD hh:mm:ss', // 分隔符可以任意定义，该例子表示只显示年月
        istime: true, // 是否开启时间选择
    });
});