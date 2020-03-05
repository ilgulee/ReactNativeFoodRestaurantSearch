import axios from 'axios';

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:'Bearer VCpseD5Hp-_ZUjT5NzXzFdK8b1ulZFtX_oXxKu74Gz0wOGTUkwUUHXCQEiQ0jjOvyMQnCb9hCKeDjqLRXIiDjmjaiyMDY6gDhFVJCqpiifvnaexN-mAIYK4z2kZaXnYx'
    }
});