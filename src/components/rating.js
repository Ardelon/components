import createElement from "../utilities/createElement";
import * as starSrc from '../assets/star.svg';
const loadRating = () => {

    //#region Constants

    const ratingContainer = createElement({classList : ['rating-container']});
    const ratingScaleContainer = createElement({classList:['rating-scale-container']});
    const ratingScaleBackground = createElement({classList:['rating-scale-background']});
    const ratingScaleIconContainer = createElement({classList:['rating-scale-icon-container']});
    const ratingInformationContainer = createElement({classList:['rating-information-container']});
    const ratingCountSpan = createElement({type:'span', classList:['rating-count-span']});

    
    

    //#endregion


    //#region Append
    for (let i = 0; i < 5; i++) {
        const ratingIcon = createElement({type:'span', classList:['rating-icon']})
        ratingIcon.style.backgroundImage  = `url(${starSrc.default})`
        ratingScaleIconContainer.append(ratingIcon)
    }

    ratingScaleContainer.append(ratingScaleBackground,ratingScaleIconContainer);
    ratingInformationContainer.append(ratingCountSpan)

    ratingContainer.append(ratingScaleContainer,ratingInformationContainer)

    //#endregion

    return ratingContainer


}

export default loadRating