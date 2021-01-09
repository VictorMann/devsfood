import Cookie from 'js-cookie';

// const BASE_URL = 'https://api.b7web.com.br/devsfood/api';
const BASE_URL = 'http://localhost:8000/api/devsfood';

function handleFetch(endpoint, dados = {}, verbo = 'GET') {

    return new Promise((resolve, reject) => {

        let url = BASE_URL + endpoint;
        let token = Cookie.get('token');
        
        if (verbo == 'POST' || verbo == 'PUT') {
            if (dados instanceof FormData) {
                fetch(url, {
                    method: verbo,
                    body: dados,
                    headers: {
                        'Authorization': `Bearer ${token}`
                    },
                })
                .then(res => res.ok ? res.json() : Promise.reject())
                .then(resolve)
                .catch(err => {
                    console.error(err);
                    reject(err);
                });
            } else {
                fetch(url, {
                    method: verbo,
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify(dados)
                })
                .then(res => res.ok ? res.json() : Promise.reject())
                .then(resolve)
                .catch(err => {
                    console.error(err);
                    reject(err);
                });
            }
        } else {
            let query = new URLSearchParams(dados).toString();
            fetch(query ? `${url}?${query}` : url, { 
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(res => res.ok ? res.json() : Promise.reject())
            .then(resolve)
            .catch(err => {
                console.error(err);
                reject(err);
            });
        }
    });


};

export default {
    login(email, password) {
        let data = {email, password};
        return handleFetch('/auth/login', data, 'POST');
    },

    createUser(name, email, password) {
        let data = {name, email, password};
        return handleFetch('/user', data, 'POST');
    },

    /**
     * 
     * @param {Object} data {name, email, password}
     */
    updateUser(data) {
        for (let p in data) !data[p] && (delete data[p]);
        return handleFetch('/user', data, 'PUT');
    },

    getCategories() {
        return handleFetch('/categories');
    },

    getProducts(category, page, search) {
        let filter = {category, page, search};
        for (let p in filter) !filter[p] && (delete filter[p]);
        
        return handleFetch(
            '/products',
            filter
        );
    },

    createAddress(data) {
        return handleFetch('/address', data, 'POST');
    },

    getAddress() {
        return handleFetch('/address');
    },

    addOrders(data) {
        return handleFetch('/orders', data, 'POST');
    },

    getOrders(id = null) {
        return handleFetch(`/orders${id ? `/${id}` : ''}`);
    },

    /**
     * 
     * @param {String} cep 
     * @param {Float} peso 
     */
    getFrete(cep, peso) {
        let data = { cep, peso };
        return handleFetch('/frete', data);
    }
};