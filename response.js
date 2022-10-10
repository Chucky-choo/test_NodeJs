'use strict';

exports.status = (value, res) => {

    const data = {
        status: 200,
        value: value
    }
    console.log(data)
    res.json(data)
    res.end()
}