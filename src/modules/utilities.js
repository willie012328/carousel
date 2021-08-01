export function generateURL(url = "", dataObj = {}) {
  const params = url.match(/[^?/&]+([{}])/g);
  const paramPlaceholders = url.match(/([{]+[\w]+[}])+/g);
  const paramKeys = url.match(/[^{}]+(?=})/g);

  params &&
    params.map((param, inx) => {
      const objKey = dataObj[paramKeys[inx]];

      if (objKey) {
        if (Array.isArray(objKey)) {
          if (objKey.length > 0) {
            let curUrl = "";
            for (let i = 0; i < objKey.length; i++) {
              if (i === 0) {
                curUrl += encodeURIComponent(objKey[i]);
              } else {
                curUrl += `&${paramKeys[inx]}=${encodeURIComponent(objKey[i])}`;
              }
            }
            url = url.replace(paramPlaceholders[inx], curUrl);
          } else {
            url = url.replace(param, "");
          }
        } else {
          url = url.replace(paramPlaceholders[inx], encodeURIComponent(objKey));
        }
      } else {
        url = url.replace(param, "");
      }

      return null;
    });

  return url
    .replace(/[&]{2,}/g, "&")
    .replace(/[?&]+$/g, "")
    .replace("?&", "?");
}
