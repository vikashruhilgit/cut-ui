const assetsPath: string = 'https://d3g7tb6xhtixy5.cloudfront.net/cut/assets/'

export const getAssetsPath = () => {
  if (location.hostname === 'localhost') {
    return '/assets/';
  } else {
    return assetsPath;
  }
}
