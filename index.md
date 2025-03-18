---
layout: default
title: Home
---

<section id="hero">
    <div class="container">
        <div class="hero-content">
            <h2>Solving Technical Problems Through Thoughtful Development</h2>
            <p>"The most effective debugging tool is still careful thought, coupled with judiciously placed print statements." – Brian Kernighan</p>
            <div class="cta-buttons">
                <a href="#projects" class="btn primary">View Projects</a>
                <a href="#contact" class="btn secondary">Get in Touch</a>
            </div>
        </div>
    </div>
</section>

<section id="about">
    <div class="container">
        <h2>About Me</h2>
        <div class="about-content">
            <div class="about-text">
                <p>I've built my career around solving technical problems and helping team members and users do the same. My path has taken me from office administration, web design consulting, and IT support to software development at SUMURI.</p>
                <p>There, I contribute to MacOS Digital Forensics tools and assist with code modernization, system design, and other technical issues. I particularly enjoy breaking down complex technical challenges into clear, manageable solutions—from mapping out software requirements to helping users resolve system issues.</p>
                <p>While I primarily work with C++, Python, and software systems, my real motivation is applying technical expertise to practical problem-solving, ensuring seamless operations.</p>
                <div class="skills">
                    <div class="skill-category">
                        <h3>Languages</h3>
                        <ul>
                            <li>Python</li>
                            <li>C++</li>
                            <li>Swift</li>
                            <li>Java</li>
                            <li>Ruby</li>
                            <li>PHP</li>
                            <li>HTML/CSS</li>
                            <li>JavaScript</li>
                        </ul>
                    </div>
                    <div class="skill-category">
                        <h3>Platforms</h3>
                        <ul>
                            <li>MacOS</li>
                            <li>Windows</li>
                            <li>Linux (Fedora/Red Hat & Ubuntu/Debian)</li>
                        </ul>
                    </div>
                    <div class="skill-category">
                        <h3>Tools</h3>
                        <ul>
                            <li>Git</li>
                            <li>LaTeX</li>
                            <li>Markdown</li>
                            <li>Visual Studio Code</li>
                            <li>Xcode</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section id="projects">
    <div class="container">
        <h2>Featured Projects</h2>
        <div class="projects-grid">
            {% for project in site.projects limit:3 %}
            <div class="project-card">
                {% if project.image %}
                <div class="project-image">
                    <img src="{{ project.image | relative_url }}" alt="{{ project.title }}">
                </div>
                {% else %}
                <div class="project-image placeholder"></div>
                {% endif %}
                <h3>{{ project.title }}</h3>
                <p>{{ project.excerpt | strip_html | truncatewords: 20 }}</p>
                <div class="project-tags">
                    {% for tech in project.technologies %}
                    <span>{{ tech }}</span>
                    {% endfor %}
                </div>
                <a href="{{ project.url | relative_url }}" class="btn secondary">Learn More</a>
            </div>
            {% endfor %}
        </div>
        <div class="more-projects">
            <a href="{{ '/projects/' | relative_url }}" class="btn primary">View All Projects</a>
        </div>
    </div>
</section>

<section id="experience">
    <div class="container">
        <h2>Professional Experience</h2>
        <div class="experience-timeline">
            <div class="experience-item">
                <div class="experience-date">2022–Present</div>
                <div class="experience-content">
                    <h3>Software Specialist</h3>
                    <h4>SUMURI LLC — Magnolia, DE</h4>
                    <ul>
                        <li>Led technical documentation initiatives for multiple forensic tools</li>
                        <li>Spearheaded project planning for major codebase modernization</li>
                        <li>Manage development and support for RECON suite of MacOS Forensics Tools</li>
                        <li>Author and maintain product documentation and technical communications</li>
                    </ul>
                </div>
            </div>
            <div class="experience-item">
                <div class="experience-date">2019–2020</div>
                <div class="experience-content">
                    <h3>Ghostwriter, Editor, Proofreader</h3>
                    <h4>Childress Business Communications — Remote</h4>
                    <ul>
                        <li>Created and refined technical documentation while maintaining consistent style guidelines</li>
                        <li>Developed standardized formatting procedures using LaTeX and Markdown</li>
                    </ul>
                </div>
            </div>
            <div class="experience-item">
                <div class="experience-date">2015–2016</div>
                <div class="experience-content">
                    <h3>Desktop Support, Webmaster, Network Administrator</h3>
                    <h4>Fraunhoffer USA, CMB — Newark, DE</h4>
                    <ul>
                        <li>Administered network infrastructure for 100-user research organization</li>
                        <li>Maintained diverse technical environment including specialized laboratory equipment</li>
                        <li>Designed and implemented intranet applications to improve workflows</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="resume-link">
            <a href="{{ '/assets/resume.pdf' | relative_url }}" class="btn primary" target="_blank">View Full Resume</a>
        </div>
    </div>
</section>

<section id="contact">
    <div class="container">
        <h2>Get in Touch</h2>
        <div class="contact-content">
            <div class="contact-info">
                <div class="contact-item">
                    <i class="fas fa-envelope"></i>
                    <a href="mailto:{{ site.author.email }}">{{ site.author.email }}</a>
                </div>
                <div class="contact-item">
                    <i class="fas fa-phone"></i>
                    <a href="tel:{{ site.author.phone }}">{{ site.author.phone | slice: 0, 2 }}({{ site.author.phone | slice: 2, 3 }}) {{ site.author.phone | slice: 5, 3 }}-{{ site.author.phone | slice: 8, 4 }}</a>
                </div>
                <div class="contact-item">
                    <i class="fab fa-linkedin"></i>
                    <a href="https://linkedin.com/in/{{ site.author.linkedin }}" target="_blank">{{ site.author.linkedin }}</a>
                </div>
                <div class="contact-item">
                    <i class="fab fa-github"></i>
                    <a href="https://github.com/{{ site.author.github }}" target="_blank">{{ site.author.github }}</a>
                </div>
            </div>
        </div>
    </div>
</section>
