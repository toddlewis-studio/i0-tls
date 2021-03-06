'nav',
`
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="nav-wrapper container">
        <div>
            <a href="#" class="navbar-brand tls-font"><img src="./asset/logo.PNG" width="32" height="32"></a>
            <a href="https://wispcrypto.com" class="navbar-brand tls-font"><img src="./asset/wisp.PNG" width="32" height="32"></a>
            <a href="https://i0framework.com" class="navbar-brand tls-font"><img src="./asset/i0.PNG" width="32" height="32"></a>
        </div>
       
    </div>
</nav>
`,
(ui, props) => {
    props.forEach(link => {
        ui.list.appendChild(
            i0.element(`<li class="nav-item tls-font"><a href="${link.href}" class="nav-link">${link.text}</a></li>`)
        )
    })
    /* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav" i0="list"></ul>
    </div> */
}