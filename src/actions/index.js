import types from './types';
import axios from 'axios';

const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = '?key=c718todolistes';

export function getListData() {
    const resp = axios.get(`${BASE_URL}/todos${API_KEY}`);

    return {
        type: types.GET_LIST_DATA,
        payload: resp
    }
}

export function addListItem(item) {
    const resp = axios.post(`${BASE_URL}/todos${API_KEY}`, item);

    return {
        type: types.ADD_LIST_ITEM,
        payload: resp
    }
}

export function getSingleItem(id) {
    const resp = axios.get(`${BASE_URL}/todos/${id + API_KEY}`);

    return {
        type: types.GET_SINGLE_ITEM,
        payload: resp
    }
}

export function clearSingleItem() {
    return { type: types.CLEAR_SINGLE_ITEM };
}

export function toggleComplete(id) {
    const resp = axios.put(`${BASE_URL}/todos/${id + API_KEY}`);

    return {
        type: types.TOGGLE_COMPLETE,
        payload: resp
    }
}