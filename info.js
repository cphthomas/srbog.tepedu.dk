// Info popup functionality
document.addEventListener('DOMContentLoaded', function() {
    // Tilføj styling til head
    const style = document.createElement('style');
    style.textContent = `
        .info-icon-container {
            position: relative;
            display: inline-block;
            margin-left: 10px;
        }
        
        .info-popup {
            visibility: hidden;
            width: 300px;
            background-color: #fff;
            color: #333;
            text-align: left;
            border-radius: 0;
            padding: 15px;
            position: absolute;
            z-index: 1000;
            top: 30px;
            left: 0;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            opacity: 0;
            transition: opacity 0.3s, visibility 0.3s;
            font-size: 0.9rem;
            border: 1px solid #ddd;
        }
        
        .info-popup img {
            width: 100%;
            height: auto;
        }
        
        .info-icon-container:hover .info-popup,
        .info-popup.show {
            visibility: visible;
            opacity: 1;
        }
        
        .info-icon {
            color: #000;
            cursor: pointer;
            font-size: 1.2rem;
            background-color: transparent;
            border-radius: 50%;
            padding: 2px;
        }
        
        .info-icon:hover {
            color: #333;
        }
    `;
    document.head.appendChild(style);
    
    // Find navbar-brandet (home-ikonet)
    const navbarBrand = document.querySelector('.navbar-brand');
    
    if (navbarBrand) {
        // Opret info-ikonet og container
        const infoContainer = document.createElement('div');
        infoContainer.className = 'info-icon-container';
        
        const infoIcon = document.createElement('i');
        infoIcon.className = 'bi bi-info-circle info-icon';
        
        const infoPopup = document.createElement('div');
        infoPopup.className = 'info-popup';
        infoPopup.id = 'infoPopup';
        
        // Tilføj indhold til popup
        infoPopup.innerHTML = `
            <h5>Om denne bog</h5>
            <p>Denne bog er udviklet af: </p>
            <img src="images/mig_moebius.png" alt="Thomas Petersen">
            <br><small>Thomas Petersen</small>
            <br><br>
            <p>I udviklingen er der benyttet kunstig intelligens både til at kodningen af selve strukturen i form af navigation, js-, html- og css-filer, samt indhold og eksempler. <br>Der er benyttet følgende LLM-modeller:</p>
            <ul>
                <li>Google Gemini</li>
                <li>Anthropic Claude</li>
                <li>OpenAI ChatGPT</li>
            </ul>
        `;
        
        // Sæt elementerne sammen
        infoContainer.appendChild(infoIcon);
        infoContainer.appendChild(infoPopup);
        
        // Indsæt efter navbar-brandet
        navbarBrand.parentNode.insertBefore(infoContainer, navbarBrand.nextSibling);
        
        // Tilføj event listeners
        infoIcon.addEventListener('click', function(e) {
            e.stopPropagation();
            infoPopup.classList.toggle('show');
        });
        
        document.addEventListener('click', function(e) {
            if (infoPopup.classList.contains('show')) {
                infoPopup.classList.remove('show');
            }
        });
        
        infoPopup.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
}); 