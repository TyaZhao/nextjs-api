import paypal from '../../data/image/paypal.svg'

export default function handler(req, res) {
    res.status(200).json({i:paypal})
  }
  