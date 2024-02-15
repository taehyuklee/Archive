class footer_class extends HTMLElement{
    connectedCallback(){
        this.innerHTML =`
        <footer class="footer">
            <h3 class="contact">CONTACT ME</h3>
            <ul class="links">
                <li class="Con_list"><a class="blog" rel="noopener" href="https://blog.naver.com/fish991" target='_blank'><img id="Con-img" alt="MainBlog" src="../resources/main/Blog.png" height="18" width="18"/> BLOG</a></li>
                <li class="Con_list"><a class="instagram" rel="noopener" href="https://www.instagram.com/lee_taehyuk/" target='_blank'><img id="Con-img" alt="Instagram" src="../resources/main/Instagram.png" height="18" width="18"/> INSTAGRAM</a></li>
                <li class="Con_list"><a class="facebook" rel="noopener" href="https://www.facebook.com/Gogizip91/" target='_blank'><img id="Con-img" alt="Facebook" src="../resources/main/Facebook.png" height="18" width="18"/> FACEBOOK</a></li>
            </ul>
            <p>feel free to contact me!</p>
        </footer>
    `;
    }
}

customElements.define('footer-component', footer_class);


//project nav 경로가 달라서 어쩔수 없이 따로 해줘야 한다.
class other_footer_class extends HTMLElement{
    connectedCallback(){
        this.innerHTML =`
        <footer class="footer">
            <h3 class="contact">CONTACT ME</h3>
            <ul class="links">
                <li class="Con_list"><a class="blog" rel="noopener" href="https://blog.naver.com/fish991" target='_blank'><img id="Con-img" alt="MainBlog" src="../../resources/main/Blog.png" height="18" width="18"/> BLOG</a></li>
                <li class="Con_list"><a class="instagram" rel="noopener" href="https://www.instagram.com/lee_taehyuk/" target='_blank'><img id="Con-img" alt="Instagram" src="../../resources/main/Instagram.png" height="18" width="18"/> INSTAGRAM</a></li>
                <li class="Con_list"><a class="facebook" rel="noopener" href="https://www.facebook.com/Gogizip91/" target='_blank'><img id="Con-img" alt="Facebook" src="../../resources/main/Facebook.png" height="18" width="18"/> FACEBOOK</a></li>
            </ul>
            <p>feel free to contact me!</p>
        </footer>
    `;     
    }
}

customElements.define('other-footer-component', other_footer_class);