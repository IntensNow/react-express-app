

export default function( Router, passport ) {
    
    Router.post('/sign_up', (req, res) => {
        console.log('обьект req.user key:value');
        console.log(req.user);
    });
    
};