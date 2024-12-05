import axios from 'axios';

const parseInstance = axios.create({
    baseURL: 'https://parseapi.back4app.com',
    headers: {
        'X-Parse-Application-Id': 'mJqu2PabcrwWlV529oobL5aITjjUUCJjJyROVGmb',
        'X-Parse-REST-API-Key': 'hsGjDoh8YgE0GqexWhsc0J18viEuOPJr8EeT7MqK',
    }
});

export default parseInstance;