import './assets/style.scss';
import { accordionData as data } from './dumyData/accordionData';
import accordion from './components/accordion';

const accordionElement = accordion({data});
document.body.append(accordionElement);