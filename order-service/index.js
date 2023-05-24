const express = require('express');
const app = express();

app.use(express.json());

app.get('/v1/orders', (req, res, next) => {
    const { user_id } = req.query

    const orders = [
        {
            user_id,
            item_id: 1,
            item_name: 'susu kacang ijo',
            qty: 3,
            total: 6000,
        },
        {
            user_id,
            item_id: 2,
            item_name: 'kacang ijo roti',
            qty: 3,
            total: 1000,
        }
    ]

    return res.status(200).json({
        message: 'sugggeezz',
        data: orders
    })
});

app.listen(10123, () => {
    console.log('order service running on port 10123');
})