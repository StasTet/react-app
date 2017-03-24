import axios from 'axios';

import { apiPrefix } from '../../server/config/config.json';

export default {
    diaryList() {
        return axios.get(`${apiPrefix}/api/diary`);
    },

    createDiary(data) {
        return axios.post(`${apiPrefix}/api/diary`, data);
    },

    deleteDiary(diary_id) {
        return axios.delete(`${apiPrefix}/api/diary/${diary_id}`);
    }
}
