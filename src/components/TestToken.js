const data = type => {
    if (type === 'dev') {
        return {
            'URL': 'http://localhost:8000',
            'token': 'fd8068e77a29c03af33aed4981333cc2c2f6c5ae'
        }
    } else if (type === 'prod') {
        return {
            'URL': 'https://bluguard-attendance.herokuapp.com',
            'token': '3d7fbc0bc2ea8cb3c5e8afb4a7d289d04880b14f'
        }
    }
}

export const GetToken = () => {
    return data('dev');
}
