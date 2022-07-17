import './assets/style.scss';
import loadPagination from './components/pagination';

const pagination = loadPagination(50)
document.body.append(pagination);