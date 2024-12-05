// Home Module
export default function loadHome() {
    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear existing content

    const homeDiv = document.createElement('div');
    homeDiv.style.textAlign = 'center';
    homeDiv.style.margin = '20px';
    homeDiv.style.padding = '20px';
    homeDiv.style.backgroundColor = '#f9f9f9';

    const heading = document.createElement('h1');
    heading.textContent = 'Welcome to Our Restaurant!';
    heading.style.color = '#333';

    const description = document.createElement('p');
    description.textContent = 'Enjoy the finest dining experience with our exquisite dishes.';
    description.style.fontSize = '18px';

    homeDiv.appendChild(heading);
    homeDiv.appendChild(description);
    content.appendChild(homeDiv);
}