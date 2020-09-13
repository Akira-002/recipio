
if(process.env.NODE_ENV == 'development') {
    var API_ROUTE = 'http://127.0.0.1:8000/api/v1/recipes'
    console.log(`${process.env.NODE_ENV}`)

  } else {
    var API_ROUTE = '../../api/v1/recipes';

  }

  export default API_ROUTE;