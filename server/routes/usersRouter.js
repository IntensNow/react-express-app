

export default function( Router, passport ) {
    
    Router.post('/sign_up', passport.authenticate('local-signup'), (req, res) => {
        console.log('обьект req.user key:value');
        console.log(req.user);
        res.json(req.user);
    });
    
    Router.post('/sign_in', passport.authenticate('local-signin'), (req, res) => {
        console.log('обьект req.user key:value');
        console.log(req.user);
        res.json(req.user);
    });
    
};