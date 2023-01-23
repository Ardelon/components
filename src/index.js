import './assets/style.scss';
import loadPagination from './components/pagination';
import loadAccordion from './components/accordion';
import { accordionData } from './dumyData/accordionData';

console.log(accordionData);
const pagination = loadPagination(50)
const accordion = loadAccordion({accordionData});

document.body.append(pagination);
