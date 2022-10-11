function renderizaHome(req, res, next) {
    res.render('index', { title: 'Express Legal demais' });
}

module.exports = {
    renderizaHome
}