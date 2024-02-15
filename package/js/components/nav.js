class nav_class extends HTMLElement{
    connectedCallback(){
        this.innerHTML =
        '<nav class="navigator">' +
        '<h3 class="site-name"><a href="TAYLEE Home.html">TAYLEE\'s <a class="name-archive">Archive</a></a></h3>' +
        '<ul class="menu_ul">' +
            '<li class="list_menu"><a id="dropdownButton" class="dropbtn" onclick="">Main</a>' +
                '<div id="dropdownContent" class="dropdown-content">' +
                    '<a class="nav_menu" href="TAYLEE Home.html">Archive</a>' +
                    '<a class="nav_menu" href="index.html">Page</a>' +
                '</div></li>' +
            '<li class="list_menu"><a class="nav_menu" href="TAYLEE Info.html">Info</a></li>' +
            '<li class="list_menu"><a class="nav_menu" href="TAYLEE documents.html">Documents</a></li>' +
            '<li class="list_menu"><a class="nav_menu" href="TAYLEE research.html">Research</a></li>' +
            '<li class="list_menu"><a class="nav_menu" href="TAYLEE project.html">Project</a></li>' +
        '</ul>' +
        '<a href="#" class="nav__toogle">' +
        '<i class="hamburger"><img id="ham_menu" alt="hamburger" src="./resources/main/hamburger menu.png" width=24 height=24></i>' +
        '</a>' +
        '</nav>';        
    }
}

customElements.define('nav-component', nav_class);


//project nav 경로가 달라서 어쩔수 없이 따로 해줘야 한다.
class other_nav_class extends HTMLElement{
    connectedCallback(){
        this.innerHTML =
        '<nav class="navigator">' +
        '<h3 class="site-name"><a href="../TAYLEE Home.html">TAYLEE\'s <a class="name-archive">Archive</a></a></h3>' +
        '<ul class="menu_ul">' +
            '<li class="list_menu"><a id="dropdownButton" class="dropbtn" onclick="">Main</a>' +
                '<div id="dropdownContent" class="dropdown-content">' +
                    '<a class="nav_menu" href="../TAYLEE Home.html">Archive</a>' +
                    '<a class="nav_menu" href="../index.html">Page</a>' +
                '</div></li>' +
            '<li class="list_menu"><a class="nav_menu" href="../TAYLEE Info.html">Info</a></li>' +
            '<li class="list_menu"><a class="nav_menu" href="../TAYLEE documents.html">Documents</a></li>' +
            '<li class="list_menu"><a class="nav_menu" href="../TAYLEE research.html">Research</a></li>' +
            '<li class="list_menu"><a class="nav_menu" href="../TAYLEE project.html">Project</a></li>' +
        '</ul>' +
        '<a href="#" class="nav__toogle">' +
        '<i class="hamburger"><img id="ham_menu" alt="hamburger" src="../resources/main/hamburger menu.png" width=24 height=24></i>' +
        '</a>' +
        '</nav>';        
    }
}

customElements.define('other-nav-component', other_nav_class);