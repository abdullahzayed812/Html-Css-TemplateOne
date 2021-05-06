function fade() {
    let featureSection = document.getElementById('feature');
    if (document.body.scrollTop >= 120) {
        featureSection.classList.add('feature-fade-box');
    }
}

fade()