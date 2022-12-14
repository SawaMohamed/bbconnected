const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const interestUsers = asyncHandler(async (req, res) => {
  let {interest,profession} = req.query
  if (interest === 'job') {
    interest = 'hiring'
    const query = { interest: { $eq: interest },profession: { $eq: profession } }
    const foundUsers = await User.find(query)
    res.json(foundUsers)
  } else if (interest === 'hiring') {
    interest = 'job'
    const query = { interest: { $eq: interest },profession: { $eq: profession } }
    const foundUsers = await User.find(query)
    res.json(foundUsers)
  } else {
    const foundUsers = await User.find()
    res.json(foundUsers)
  }
})

module.exports = { interestUsers }
