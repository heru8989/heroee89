import { Collection, NonFuncItee, UnknownMapKey } from "../types"
import _eachIterator from "../_eachIterator";
import _iteratee from "../_iteratee";
import each from "./each";

/**
 * 返回一个新数组，该数组中的每个元素是调用一次callback函数后的返回值
 *
 * @example
 * const libs = [
 *  {name:'func.js',platform:['web','nodejs'],tags:{utils:true},js:false},
 *  {name:'juth2',platform:['web','java'],tags:{utils:false,middleware:true},js:true},
 *  {name:'soya2d',platform:['web'],tags:{utils:true},js:true}
 * ];
 *
 * //[2,4,6]
 * console.log(_.map(new Set([1,2,3]),v => v*2))
 * //[1,2,3]
 * console.log(_.map({'1':'a','2':'b','3':'c'},(v,k)=>k))
 * //[true,false,false]
 * console.log(_.map([1,{a:1},[2,3]],v => _.isNumber(v)))
 * //["H", "O", "L", "Y", "H", "I", "G", "H"]
 * console.log(_.map('holyhigh',v => String.fromCharCode(v.charCodeAt(0)-32)))
 * //[true,false,true]
 * console.log(_.map(libs,'tags.utils'))
 * //["func.js", "juth2", "soya2d"]
 * console.log(_.map(libs,'name'))
 * //[1,2,3]
 * console.log(_.map({a:1,b:2,c:3}))
 *
 * @param collection 任何可遍历的集合类型，比如array / arraylike / set / map / object / ...
 * @param [iteratee=identity] (value[,index|key[,collection]]) 回调函数，返回值作为新数组元素。
 * 如果是字符串，表示返回集中的对象类型的元素的key值
 * @returns 映射值的新数组
 */
function map<V>(
  collection: Collection<V>,
  itee:
    | ((value: V, index: UnknownMapKey, collection: Collection<V>) => V)
    | NonFuncItee
): V[]
function map<V, K extends string | number | symbol>(
  collection: Collection<V>,
  itee: ((value: V, index: K, collection: Collection<V>) => V) | NonFuncItee
): V[]
function map<V, K extends string | number | symbol, U>(
  collection: Collection<V>,
  itee: ((value: V, index: K, collection: Collection<V>) => U) | NonFuncItee
): U[]
function map<V, K extends string | number | symbol, U>(
  collection: Collection<V>,
  itee: ((value: V, index: K, collection: Collection<V>) => U) | NonFuncItee
): U[] {
  const rs: U[] = []
  const cb = _iteratee(itee)
  each(collection, (v, k, c) => {
    const r = cb(v, k, c)
    rs.push(r)
  })
  return rs
}

export default map