import React from 'react';
import ReactDOM from 'react-dom';
import api from './api/api.js';
import Main from '../client/components/app.jsx';
console.log(api.diaryList());

ReactDOM.render(<Main />, document.getElementById('root'));
