/*
 * @Author: 490273789 wangshaonan1993@outlook.com
 * @Date: 2023-03-07 11:41:23
 * @LastEditors: 490273789 wangshaonan1993@outlook.com
 * @LastEditTime: 2023-03-07 13:03:10
 * @FilePath: /react-study/doc/reg.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 限定符
// ? 表示这个字符可以出现0或1次
// * 表示这个祖父可以出现0次或者多次
// + 出现至少一次
// b{5} 设置b要是出现5次
// b{2,} 设置b要是出现2次以上
// b{2,5}设置b要是出现2到5次

// 匹配多个字符
// (ab)+
// [] 区间

// 或 |
// /a (cat|dog)/ a cat \ a dog
// [^0-9] ^出现在[]中代表非

//元字符
// \d  数字
// \D 非数字

// \w 所有的英文字符
// \W 非单词字符
// \s 空白符（Tab和换行符）
// \S 非空白
// \b 单词边界
// . 任意字符不包含换行符 \n

// ^行首
// $ 行尾

// 贪婪匹配
// <.+?> 这个？会将贪婪匹配变为懒惰匹配

// \转义字符
