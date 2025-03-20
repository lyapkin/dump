const DocExtention = ({ link }) => {
  const linkArr = link.split(".");
  const extention = linkArr[linkArr.length - 1];
  return "." + extention;
};

export default DocExtention;
