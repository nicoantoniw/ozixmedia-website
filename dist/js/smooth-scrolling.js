$('#navbar .navbar-content a, .btn, .btn-large, .image-contact, #footer .container .bottom a').on('click',function (event) {
    if (this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;

        $('html,body').animate({
            scrollTop: $(hash).offset().top
        },1000);
    }
});