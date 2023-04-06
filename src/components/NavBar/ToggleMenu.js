/* Function to toggle the 'active' class of the navigation menu. */

export default function ToggleMenu(){
    const Menu = document.querySelector('.NavBar__Menu')
    Menu.classList.toggle('active')
}