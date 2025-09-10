import { convert } from "html-to-text";

export const extractText = (html, length = 60, more = "...") => {
  const text = convert(html, {
    selectors: [
      { selector: "img", format: "skip" },
      { selector: "a", options: { ignoreHref: true } },
    ],
  });

  if (text.length <= length) {
    return text;
  }

  //指定された長さで区切った後、句読点を探す
  let sliceEnd = length;
  const lastCharacter = text[length - 1];

  //切り取り位置が句読点でない場合、手前の句読点まで戻る。
  if (lastCharacter !== "。" && lastCharacter !== "、" && lastCharacter !== "," && lastCharacter !== "." && lastCharacter !== "!" && lastCharacter !== "?" && lastCharacter !== "？" && lastCharacter !== "！") {
    const lastPunctuationIndex = text.lastIndexOf("。", length);
    if (lastPunctuationIndex !== -1) {
      sliceEnd = lastPunctuationIndex + 1; //句点の次の位置まで切り取る
    }
  }
  return text.slice(0, sliceEnd) + more;
};
