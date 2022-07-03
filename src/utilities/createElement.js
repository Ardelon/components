
const createElement = (config) => {
    const {id,classList = [], type = 'div',innerText,innerHTML, src, contentEditable,row, options,optionValues,multiple,size, placeholder} = config

    const container = document.createElement(type);
    id              ? container.id = id                                                     : '';
    classList       ? classList.forEach(className => {container.classList.add(className)})  : '';
    innerText       ? container.innerText = innerText                                       : '';
    innerHTML       ? container.innerHTML = innerHTML                                       : '';

 

    return container;
}

export default createElement