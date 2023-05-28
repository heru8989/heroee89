import toString from "./toString"
/**
 * 使用填充字符串填充原字符串达到指定长度。从原字符串起始开始填充。
 *
 * @example
 * //001
 * console.log(_.padStart('1',3,'0'))
 *
 * @param str 原字符串。如果非字符串则会自动转换成字符串
 * @param len 填充后的字符串长度，如果长度小于原字符串长度，返回原字符串
 * @param [padString=' '] 填充字符串，如果填充后超出指定长度，会自动截取并保留右侧字符串
 * @returns 在原字符串起始填充至指定长度后的字符串
 */
function padStart(str: any, len: number, padString?: string): string {
  str = toString(str)
  if (str.padStart) return str.padStart(len, padString)

  padString = padString || ' '
  const diff = len - str.length
  if (diff < 1) return str
  let fill = ''
  let i = Math.ceil(diff / padString.length)
  while (i--) {
    fill += padString
  }
  return fill.substring(fill.length - diff, fill.length) + str
}

export default padStart