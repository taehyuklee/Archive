class info_class extends HTMLElement{
    connectedCallback(){
        this.innerHTML =`

        <body bgproperties="fixed" oncontextmenu='return false'>

        <nav-component></nav-component>
    
        <div class = "frame"> <!--div for grouping-->
    
            <!--profile section-->
            <div class ="profile-section">
                <img id="profile-picture", alt="myPics", src="./portfolio/resources/infoImg/Lee's pics.jpg" width=400 height=530>
                
                <div class ="Introduction">
                    <p class ="About_me">ABOUT ME</p>
    
                    <p class="Personal-info">
                        Name: Lee, Tae Hyuk<br>
                        Nationality: Republic of Korea<br>
                        E-mail: thlee991@gmail.com<br><br>
                    </p>
    
                    <p class="Interests">
                        -Interests- <br>
                        &nbsp 1. Fluid mechanics<br>
                        &nbsp 2. Machine learning & Mathematics<br>
                        &nbsp 3. Data Analysis based on statistics<br>
                        &nbsp 4. Environmental issue<br>
                        &nbsp 5. Information technologies<br>
                        &nbsp 6. Algorithm<br>
                    </p>
    
    
                    <p class="About_me">Major</p>
    
                    <p class="major">
                        Environment engineering<br> 
                        Mechanical engineering<br> 
                    </p>
                    
                </div>
    
            </div>
            
            <div class = "For_center_CV">
                <div class = "CV">
                    <!--Education-->
                    <h5 class = "Resmue-title">Education</h5>
    
                    <!--Education section-->
                    <div class="Education-section">
    
                        <p class="school">Yonsei univ Mechanical engineering (Master's course)</p> 
                        - Entered the Department of mechanical engineering (2020)<br>
                        - Graduation with a master's in mechanical engineering (2022)<br>
                        (thesis title - Turbulence control through deep reinforcement learning)<br><br>
                        
                        <p class="school">Yonsei univ Mechanical engineering (Bachelor's course)</p> 
                        - Entered the Department of mechanical engineering (2018)<br>
                        - Graduated from Department of mechanical engineering (2020)<br>
                        - Bachelor in environmental engineering (Transition from Completion to Graduation) (2020)<br><br>
    
                        <p class="school">Yonsei univ Environmental engineering (Bachelor's course)</p>
                        - Entered the Department of Environmental engineering (2012)<br>
                        - Completion of Bachelor in environmental engineering (2018)<br><br>
    
                        <p id="army">Military service as KATUSA(Korean Augmentation To the USA) (2014-2016)</p>
    
                        
                    </div><br>

    
    
                    <h5 class = "Resmue-title">Capability</h5>
                    <div class="Capability">
                        <p class = "Cap-sub">1. Programming language & Framework</p> 
                        &nbsp<p class = "LanguageTypes">Programming language</p>
                        &nbsp&nbsp - Java, Python, C, R script <br>
                        &nbsp<img class="logo", alt="JavaLogo", src="./portfolio/resources/infoImg/Logo/Java-logo.png">
                        &nbsp<img class="logo", alt="PythonLog", src="./portfolio/resources/infoImg/Logo/python-logo.png">
                        &nbsp<img class="logo", alt="RLogo", src="./portfolio/resources/infoImg/Logo/R-logo.png">
                        &nbsp<img class="logo", alt="CLogo", src="./portfolio/resources/infoImg/Logo/C-logo.png"> <br>
    
    
                        &nbsp<p class = "LanguageTypes">Framework</p>
                        &nbsp&nbsp - Tensorflow, Spring Boot <br>
                        &nbsp<img class="logo", alt="TensorflowLogo", src="./portfolio/resources/infoImg/Logo/TF logo.png">         
                        &nbsp<img class="logo", alt="SpringBootLogo" src="./portfolio/resources/infoImg/Logo/SpringBoot-logo.png"> <br>
    
                        
                        <li class= "git-logo-list"><a class = "git_menu", rel="noopener", href="https://github.com/TAEHYUKLEE" target='_blank'>
                            <img src="./portfolio/resources/infoImg/Logo/Github-logo.png", alt="GitLogo", height="20" width="20"/>&nbsp Github (Link)</a></li>
                        <br><br>
                        <p class = "Cap-sub">2. Data anylsis<br> </p>
                        &nbsp - Basic statistics (Correlation coefficient, R-squared, Skewness)<br>
                        &nbsp - Model selection based on linear regression (Variable selection)<br>
                        &nbsp - Imputation for NA (Not Available) <br><br>
    
                        <p class = "Cap-sub">3. Machine learning<br></p>
                        &nbsp - Reinforcement learning (Control, Time forecasting)<br>
                        &nbsp - Supervised learning (Time forecasting)<br><br>
    
                        <p class = "Cap-sub">4. Numerical simulation(CFD)<br></p>
                        &nbsp - Finite Difference method (Cavity Lid driven)<br>
                        &nbsp - Spectral method (Burgers equation, Channel flow)<br><br>
    
                        <p class = "Cap-sub">5. Server Engineering & Development of Back-end system <br></p>
                        &nbsp - Development  of monitoring system (API gateway system etc.)<br>
                        &nbsp - Data collection & totalization system<br>
                        &nbsp - Server Configuration (Web Server, WAS, Middle-ware etc.)
                    </div>
    
                    <h5 class = "Resmue-title">Awards</h5>
                    <div class="Awards">
                        Engineering Contest - 2nd prize<br>
                        <a class = "Orga_menu" href="http://eng.ksme.or.kr/"> -Issuing organization: The Korean Society of Mechanical Engineers- 
                            &nbsp <a class = "refer_paper", href="https://www.dbpia.co.kr/author/authorDetail?ancId=4023861">Conference paper</a></a>
                        <br><br>
                        Conference Poster presentation - Awards<br>
                        <a class = "Orga_menu" href = "http://www.cse.or.kr/">-Issuing organization: Korean Society for Computational Science and Engeering-</a>
                    </div>
    
                    <h5 class = "Resmue-title">Certificate</h5>
    
                    <div class="certificate"> 
                        <div class="Certificate_img">
                            <img id="kdataLogo", alt="kdata" , src="./portfolio/resources/infoImg/Logo/Kdata-Logo.png" width=150 height=70>
                            <a class = "Orga_menu", id="kdataImg", href="https://www.dataq.or.kr/www/main.do"> -Issuing organization-</a>
                        </div>
    
                        <div class="certificate_cluster">
                            <span class="certificate_element">1. Advanced Data Analytics semi-Professional (ADsP)</span><br>
                            <span class="certificate_element">2. Data Architecture semi-Professional (DAsP)</span>
                        </div>
                    </div>
    
                    <h5 class = "Resmue-title">Careers</h5>
    
                    <div class="careers">
                        <div class="Company_img">
                            <img id="sk-img", alt="sk" , src="./portfolio/resources/infoImg/Logo/SK-logo.png" width=150 height=100>
                        </div>
    
                    <div class = "Career_element">
                        <a class = "Company_title", href="https://www.skcc.co.kr/"> SK Inc. AX(C&C) <a class="fromdate">(from 2023-01-01)</a> </a>
                        <p class = "Company_role"> &nbsp Software Engineer & Manager</p>
                        <p class = "Company_project", id="apiGwPj"> &nbsp &nbsp 1. Development of I-FACTs Data Analysis Systems</p>
                        <p class = "Company_project", id="apiGwPj"> &nbsp &nbsp 2. Development of AI Service (Reinforced Security Agent)</p>
                        <p class = "Company_project", id="apiGwPj"> &nbsp &nbsp 3. Public Cloud Infrastructure</p>
                        <!-- <p class = "Company_project", id="apiGwPj"> &nbsp &nbsp 1. in training <a class="project_sttus"> </a></p> -->
                    </div>
    
                    </div><br>
    
                    <hr width = "90%" color = "#E6E6E6">
    
                    <div class="careers">
                        <div class="Company_img">
                            <img id="ktds-image", alt="ktds" , src="./portfolio/resources/infoImg/Logo/ktds-logo.png" width=150 height=100>
                        </div>
    
                        <div class = "Career_element">
                            <a class = "Company_title", href="https://www.ktds.com/index.jsp"> KT DataSystems <a class="fromdate">(from 2022-01-10 to 2023-12-29)</a> </a>
                            <p class = "Company_role"> &nbsp Back-end Server Engineer</p>
                            <p class = "Company_project", id="apiGwPj"> &nbsp &nbsp 1. Development of API Gateway solution <a class="project_sttus"> - completed</a></p>
                            <p class = "Company_project", id="apiGwPj"> &nbsp &nbsp 2. Management of Open Source  <a class="project_sttus"></a></p>
                        </div>
                    </div><br><br>
    
                </div>
            </div>
    
    
        </div>

        
    </body>
    `;
    }
}

customElements.define('info-component', info_class);