import { ajax } from 'rxjs/ajax'
import { API_URL } from '../../common/environment';

export const getCustomers = () => ajax.getJSON(`${API_URL}/customers`);