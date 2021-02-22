// 与后台交互模块(包含n个接口请求函数，并通过ajax发送请求)，返回值是promise对象
import ajax from "./ajax";
import {saveScrollPosition} from "vue-router/src/util/scroll";
const BASE_URL='/api'

// 1.获取地址信息(根据经纬度串)，query参数：,{}，param参数写在路径里面：/${}
export const reqAddress=geohash=>ajax(`/position/${geohash}`)
// 2.获取 msite 页面食品分类列表
export const reqCategorys=()=>ajax('/index_category')
// 3.获取 msite 商铺列表(根据经纬度)
export const reqShops=(longitude,latitude)=>ajax(BASE_URL+'shops', {longitude,latitude})
// 4.据经纬度和关键字搜索商铺列表
// 5.获取一次性验证码
// 6.账号密码登录
export const reqPwdLogin=(name,pwd,captcha)=>ajax('/api/login_pwd',{name,pwd,captcha},'POST')
// 7.获取短信验证码
export const reqSendCode=phone=>ajax('/api/sendcode',{phone})
// 8.手机号验证码登录
export const reqSmsLogin=(phone,code)=>ajax('/api/login_sms',{phone,code},'POST')
// 9.获取用户信息(根据会话)
export const reqUser=()=>ajax('/api/userinfo')
// 10.请求登出
export const reqLogout=()=>ajax('/api/logout')
