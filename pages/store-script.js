document.addEventListener('DOMContentLoaded', () => {
    fetch('story-content.json')
        .then(response => response.json())
        .then(data => {
            populateStoryPage(data);
        })
        .catch(error => {
            console.error('Error loading page content:', error);
            document.body.innerHTML = '<p style="text-align:center; padding: 50px;">Sorry, the content could not be loaded.</p>';
        });
});

function populateStoryPage(data) {
    // Populate Navbar
    const navContent = document.getElementById('nav-content');
    navContent.innerHTML = `
        <div class="container nav-container">
            <a href="https://www.threadlock.ai" class="nav-logo">
                <img src="${data.nav.logoUrl}" alt="ThreadLock Logo">
            </a>
            <a href="${data.cta.button.href}" class="btn btn-nav">${data.nav.cta.text}</a>
        </div>
    `;

    // Populate Hero
    const heroSection = document.getElementById('story-hero');
    heroSection.style.backgroundImage = `url('${data.hero.backgroundUrl}')`;
    const heroContent = document.getElementById('hero-content');
    heroContent.innerHTML = `<h1>${data.hero.headline}</h1>`;

    // Populate Story Body
    const storyContent = document.getElementById('story-content');
    let storyParagraphsHTML = data.story.paragraphs.map(p => `<p>${p}</p>`).join('');
    storyContent.innerHTML = storyParagraphsHTML;

    // Populate CTA
    const ctaContent = document.getElementById('cta-content');
    ctaContent.innerHTML = `
        <h2>${data.cta.headline}</h2>
        <p class="subtitle">${data.cta.subtitle}</p>
        <a href="${data.cta.button.href}" class="btn">${data.cta.button.text}</a>
    `;

    // Populate Footer
    const footerContent = document.getElementById('footer-content');
    footerContent.innerHTML = `<div class="container"><p>${data.footer.text}</p></div>`;
}
