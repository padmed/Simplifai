import { popupContentId } from "../utils/constants";

const createPopupContent = () => {
  const popupContent = document.createElement("p");
  popupContent.setAttribute("id", popupContentId);

  popupContent.style.cssText = `color: rgb(249, 246, 238);
    margin: 0;
    height: calc(100% - 35px);
    padding-right: 15px;
    padding-left: 15px;
    padding-top: 15px;
    padding-bottom: 15px;
    font-size: 15px;
    overflow: scroll;
    position: relative;
    `;

  return popupContent;
};

export default createPopupContent;