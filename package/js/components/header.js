
class common_header_class extends HTMLElement{
    connectedCallback(){
        this.innerHTML =`
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <!--<meta name="viewport" content="width=device-width, initial-scale=1.0">-->

            <!--google font Montserrat-->
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital
            ,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
            rel="stylesheet">

            <!-- Google font -->
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" 
            rel="stylesheet">

            <!-- Noto Sans -->
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@700&display=swap" rel="stylesheet">

            <!-- Latex -->
            <script type="text/x-mathjax-config">
                MathJax.Hub.Config({            
                    tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}            
                });
            </script>
            <script src='https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/latest.js?config=TeX-MML-AM_CHTML' async></script>

            <!-- common - javascript -->
            <script src="package/js/main.js" defer></script>
            <script src="package/js/components/nav.js" sync></script>
            <script src="package/js/components/footer.js" sync></script>

        </head>
        `
    }
}

customElements.define('common-header-component', common_header_class);