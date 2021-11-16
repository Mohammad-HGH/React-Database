// eslint-disable-next-line no-unused-vars
import axios from 'axios';
// eslint-disable-next-line no-unused-vars
const API_PATH = 'http://localhost:3000/index.php';
let handleFormSubmit;
// eslint-disable-next-line no-unused-vars
handleFormSubmit = e => {
    e.preventDefault();
    axios({
        method: 'post',
        url: `${API_PATH}`,
        headers: {'content-type': 'application/json'},
        data: this.state
    })
        .then(result => {
            this.setState({
                mailSent: result.data.sent
            })
        })
        .catch(error => this.setState({error: error.message}));
};
