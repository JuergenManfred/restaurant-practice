export default function loadAbout() {
    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear existing content

    const aboutDiv = document.createElement('div');
    aboutDiv.style.textAlign = 'center';
    aboutDiv.style.margin = '20px';
    aboutDiv.style.padding = '20px';
    aboutDiv.style.backgroundColor = '#e0f7fa';

    const heading = document.createElement('h1');
    heading.textContent = 'About Us';
    heading.style.color = '#00796b';

    const description = document.createElement('p');
    description.textContent = 'We are passionate about serving the best food in town. Our chefs use the freshest ingredients to craft delicious meals.';
    description.style.fontSize = '18px';

    aboutDiv.appendChild(heading);
    aboutDiv.appendChild(description);
    content.appendChild(aboutDiv);
}