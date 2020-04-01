import {createClient} from 'contentful'

export default createClient({
    space : process.env.REACT_APP_API_SPACE,
    accessToken : process.env.REACT_APP_ACCESS_TOKEN
});


// const contentful = require('contentful-management')

// const Client = contentful.createClient({
//   accessToken: 'In0X2mVzpVlHOSQ17O9l1gEenXMptU0d8ddfKL3nlnk'
// })

// export default Client
