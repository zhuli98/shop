// vuex 的 actions 模块

import {reqAddress,reqCategorys,reqShops} from "../api";
import {RECEIVE_ADDRESS,RECEIVE_CATEGORYS,RECEIVE_SHOPS} from "./mutation-types";

export default {
  // 异步获取地址
  async getAddress ({commit, state}) {
    // 发送异步ajax请求
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqAddress(geohash)
    // 提交一个mutation
    commit(RECEIVE_ADDRESS, {address: result.data})
  },

  // 异步获取食品分类列表
  async getCategorys ({commit, state}) { // 接口定义就不要求有参数，所以state不需要用到
    // 发送异步ajax请求
    const result = await reqCategorys()
    // 提交一个mutation
    commit(RECEIVE_CATEGORYS, {categorys: result.data})
  },

  // 异步获取商家列表
  async getShops ({commit, state}) {
    // 发送异步ajax请求
    const {latitude, longitude} = state
    const result = await reqShops(latitude, longitude)
    // 提交一个mutation
    commit(RECEIVE_SHOPS, {shops: result.data})
  },
}
