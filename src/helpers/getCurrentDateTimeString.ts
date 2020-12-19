import moment from 'moment';

export const getCurrentDateTimeString = () => {
    return moment().format('YYYY-MM-DD hh:mm');
};
