import './assets/style.scss';
import loadPagination from './components/pagination';
import accordion from './components/accordion';
import {accordionData} from './dumyData/accordionData'
console.log(accordionData);
// const pagination = loadPagination(50)
const as = accordion({accordionData});
document.body.append(as);