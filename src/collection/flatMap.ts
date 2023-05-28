import { Collection, NonFuncItee } from "../types"
import _eachIterator from "../_eachIterator";
import _iteratee from "../_iteratee";
import map from "./map";
import flat from "../array/flat";

/**
 * 类似<code>map</code>，但会对返回值进行<code>flat</code>处理。
 * 除此之外，与map函数最大的不同在于返回值与元素的映射关系并不一定是一一对应，此时更像<code>filter</code>
 *
 * @example
 * //[1, 2, [3]]
 * console.log(_.flatMap([[1,2],[[3]]]))
 * //[3,5]
 * console.log(_.flatMap([[1,2],3,4,5],n=>n%2?n:[]))
 *
 * @param collection 任何可遍历的集合类型，比如array / arraylike / set / map / object / ...
 * @param [iteratee=identity] (value[,index|key[,collection]]) 回调函数，返回值作为新数组元素。
 * @param [depth=1] 嵌套深度
 * @returns 映射值的新数组
 * @since 1.0.0
 */
function flatMap<V>(
  collection: Collection<V>,
  itee:
    | ((
      value: V,
      index: string | number | symbol,
      collection: Collection<V>
    ) => V)
    | NonFuncItee,
  depth?: number
): V[]
function flatMap<V, K extends string | number | symbol>(
  collection: Collection<V>,
  itee: ((value: V, index: K, collection: Collection<V>) => V) | NonFuncItee,
  depth?: number
): V[]
function flatMap<V, K extends string | number | symbol, U>(
  collection: Collection<V>,
  itee: ((value: V, index: K, collection: Collection<V>) => U) | NonFuncItee,
  depth?: number
): U[]
function flatMap<V, K extends string | number | symbol, U>(
  collection: Collection<V>,
  itee: ((value: V, index: K, collection: Collection<V>) => U) | NonFuncItee,
  depth?: number
): U[] {
  return flat(map<V, K, U>(collection, itee), depth || 1)
}

export default flatMap