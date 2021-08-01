exports.getUsers = (req, res) => {
    const users = [
        {
            name: "Silvia"
        }
    ];

    res.send(users);
}