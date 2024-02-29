// sk_test_51HvxCeIviwSD55xp043bBfKz7HLb8ONZjo0J9aXUQ7FpEIvZwADFf0s1fgyQtVPm6xx1ebYFIk8e73HLwFFZ7t2O00JpG8hp5s
// coffee: price_1OjWYyIviwSD55xp3WiX0bbY
// sun glasses: price_1OjWZzIviwSD55xppEMIevNK
// camera: price_1OjWbjIviwSD55xpz4ia9tsW
const express = require('express')
var cors = require('cors')
const stripe = require('stripe')('sk_test_51HvxCeIviwSD55xp043bBfKz7HLb8ONZjo0J9aXUQ7FpEIvZwADFf0s1fgyQtVPm6xx1ebYFIk8e73HLwFFZ7t2O00JpG8hp5s')

const app = express()
app.use(cors())
app.use(express.static('public'))
app.use(express.json())

app.post('/checkout', async(req, res) => {
    const items = req.body.items;
    let lineItems = [];
    items.forEach((item ) => {
        lineItems.push(
            {
                price: item.id,
                quantity: item.quantity,
            }
        )
    });

    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: 'http://localhost:3000/success',
        cancel_url: 'http://localhost:3000/cancel'
    });

    res.send(JSON.stringify({
        url: session.url
    }))
})


app.listen(4000, () => console.log('server started'))