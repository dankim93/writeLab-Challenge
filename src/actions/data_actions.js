export const RECEIVE_ALL = 'RECEIVE_ALL';
export const RECEIVE_2015 = 'RECEIVE_2015';
export const RECEIVE_2016 = 'RECEIVE_2016';
const file = require('./../sample_data.json');

export const receiveAll = () => dispatch => {
  let data = file;

  dispatch({type: RECEIVE_ALL, data: data});
}

export const receive2015 = () => dispatch => {
  let data = [];

  for(let i = 0; i < file.length; i++) {
    if (file[i].year === 2015) {
      data.push(file[i]);
    }
  }

  dispatch({type: RECEIVE_2015, data: data});
}

export const receive2016 = () => dispatch => {
  let data = [];

  for(let i = 0; i < file.length; i++) {
    if (file[i].year === 2016) {
      data.push(file[i]);
    }
  }

  dispatch({type: RECEIVE_2016, data: data});
}
