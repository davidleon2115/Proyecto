const User = {
    get: (req,res) => {
        res.status(200).send('showing just one...')
    },
    list: (req,res) => {
        res.status(200).send('listing...')
    },
    create: (req,res) => {
        res.status(201).send('creating...')
    },
    update: (req,res) => {
        res.status(204).send('Updating...')
    },
    destroy: (req,res) => {
        res.status(204).send('Destroyed...')
    }
}

module.exports = User