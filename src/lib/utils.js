const basePath = "/web-tips/";
const categoryPath = "/class/";
export const isArchivePage = (url) => {
  const regex = new RegExp(`^${categoryPath}.+`);
  if (url === basePath || regex.test(url)) {
    console.log("アーカイブページです");
    return true;
  } else {
    console.log("アーカイブページではありません");
    return false;
  }
};
export const isBlogPage = (url) => {
  const regex = new RegExp(`^${basePath}.+`);
  if (regex.test(url)) {
    console.log("ブログページです");
    return true;
  } else {
    console.log("ブログページではありません");
    return false;
  }
};
