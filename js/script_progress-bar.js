window.onload = function() {
    window.addEventListener('scroll', function() {
        let picScr = window.pageYOffset;

        let contHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );

        let winHeight = document.querySelector('body').offsetHeight;

        let percentScroll = picScr/(contHeight - winHeight)*100;

        document.querySelector('.progress-bar').style.width = `${percentScroll}%`;
    });
};