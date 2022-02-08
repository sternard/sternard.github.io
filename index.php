<?php include("header.php"); ?>
    <div class="content-container blue-background">
        <div class="hero-image">
            <p>hi there, I'm</p>
            <h1>Stephen Bernard</h1>
            <h2 id="typewriter">I'm a web developer</h2>
            <div class="scroll-div">
                <a href="#portfolio"><i class="fas fa-angle-double-down"></i></a>
            </div>
        </div>
        <div class="projects-container" id="portfolio">
            <div class="parent">
                <div class="child arrays-example">
                    <div id="card"> 
                        <div class="front"> 
                            <span><strong>Javascript Arrays</strong>
                            Photo selector registration to demonstrate arrays.</span>
                        </div> 
                        <div class="back">
                            <span>
                                <button onclick="window.open('https://stephen-bernard.netmatters-scs.co.uk/arrays/')"><i class="fas fa-external-link-alt"></i> Live Preview</button>
                                <button onclick="window.open('https://github.com/sternard/javascript-arrays/')"><i class="fab fa-github"></i> Open in GitHub</button>
                            </span>
                        </div> 
                    </div>
                </div>
            </div>
            <div class="parent">
                <div class="child togglemenu-example">
                    <div id="card2"> 
                        <div class="front"> 
                            <span><strong>Example card</strong>
                            This is what a card looks like.</span>
                        </div> 
                        <div class="back">
                            <span>Links to GitHub and live demo on back</span>
                        </div> 
                    </div>
                </div>
            </div>
            <div class="parent">
                <div class="child netmatters-example">
                    <div id="card3"> 
                        <div class="front"> 
                            <span><strong>Netmatters Homepage</strong>
                                A recreation of Netmatters' website using HTML, CSS/SASS and Javascript.</span>
                        </div> 
                        <div class="back">
                            <span>
                                <button onclick="window.open('https://netmatters.stephen-bernard.netmatters-scs.co.uk/')"><i class="fas fa-external-link-alt"></i> Live Preview</button>
                                <button onclick="window.open('https://github.com/sternard/netmatters-website')"><i class="fab fa-github"></i> Open in GitHub</button>
                            </span>
                        </div> 
                    </div>
                </div>
            </div>
            <div class="parent">
                <div class="child">
                    <span>Project 4<br><br><a href="#"><b>View Project</b></a> <i class="fas fa-arrow-right"></i></span>
                </div>
            </div>
            <div class="parent">
                <div class="child">
                    <span>Project 5<br><br><a href="#"><b>View Project</b></a> <i class="fas fa-arrow-right"></i></span>
                </div>
            </div>
        </div>
        <div class="scroll-div">
            <a href="#top"><i class="fas fa-angle-double-up"></i></a>
        </div>
    </div>
<?php include("footer.php"); ?>