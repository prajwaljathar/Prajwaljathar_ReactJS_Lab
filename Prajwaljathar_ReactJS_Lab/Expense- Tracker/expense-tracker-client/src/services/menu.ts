import axios from 'axios';
import IDataList from '../model/IDataList';

const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

const getDataFromServer = () => {
    return axios.get<IDataList[]>(`${apiBaseUrl}/items`)
        .then(response => response.data)
};

const pushDataFromUser = (newpurchase: Omit<IDataList, 'id'>) => {
    return axios.post<IDataList>(
        `${apiBaseUrl}/items`,
        newpurchase,
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
        .then(response => response.data)
};

export {
    getDataFromServer,
    pushDataFromUser
}