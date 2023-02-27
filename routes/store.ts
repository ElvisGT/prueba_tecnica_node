import Router from 'express';

const router = Router();

router.get('/',(req,res) => {
    res.json({
        msg:"Anda"
    })
});

router.get('/:id',(req,res) => {
    res.json({
        msg:"Anda"
    })
});


router.post('/',(req,res) => {
    res.json({
        msg:"Anda"
    })
});


router.put('/:id',(req,res) => {
    res.json({
        msg:"Anda"
    })
});

router.delete('/:id',(req,res) => {
    res.json({
        msg:"Anda"
    })
});

export default router;