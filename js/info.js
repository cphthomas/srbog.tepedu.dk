// Info popup functionality
document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.textContent = `
        .info-icon-container {
            position: relative;
            display: inline-block;
            margin-left: 10px;
        }

        .info-popup {
            visibility: hidden;
            width: 260px;
            background-color: #fff;
            color: #333;
            text-align: left;
            border-radius: 0;
            padding: 18px;
            position: absolute;
            z-index: 1000;
            top: 40px;
            left: 50%;
            transform: translateX(-50%);
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            opacity: 0;
            transition: opacity 0.3s, visibility 0.3s;
            font-size: 0.82rem;
            line-height: 1.5;
            border: 1px solid #ddd;
            max-height: 80vh;
            overflow-y: auto;
        }

        .info-popup img {
            width: 100%;
            height: 140px;
            object-fit: cover;
            object-position: center 20%;
            display: block;
            margin: 8px auto;
        }

        .info-popup img[alt="Thomas Petersen"] {
            object-position: center 30%;
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
            transition: color 0.3s ease;
        }

        .info-icon:hover {
            color: #1a3a5c;
        }

        [data-theme="dark"] .info-icon {
            color: #ffffff !important;
        }

        [data-theme="dark"] .info-icon:hover {
            color: #4a7fa8 !important;
        }

        [data-theme="dark"] .info-popup {
            background-color: #111827 !important;
            color: #f3f4f6 !important;
            border-color: rgba(255,255,255,0.15) !important;
        }

        [data-theme="dark"] .info-popup h6 {
            color: #ffffff !important;
        }

        [data-theme="dark"] .info-popup small,
        [data-theme="dark"] .info-popup p {
            color: #d1d5db !important;
        }
    `;
    document.head.appendChild(style);

    const navbarBrand = document.querySelector('.navbar-brand');

    if (navbarBrand) {
        const infoContainer = document.createElement('div');
        infoContainer.className = 'info-icon-container';

        const infoIcon = document.createElement('i');
        infoIcon.className = 'bi bi-info-circle info-icon';

        const infoPopup = document.createElement('div');
        infoPopup.className = 'info-popup';
        infoPopup.id = 'infoPopup';

        infoPopup.innerHTML = `
            <h6 style="font-family: 'Space Grotesk', sans-serif; font-weight: 700; margin-bottom: 10px; color: #1a3a5c;">Om denne bog</h6>
            <small>
                Faglig redaktør:<br>
                <img src="images/henrik_image.jpg" alt="Henrik Strøyer">
                <strong>Henrik Strøyer</strong><br>
                Lektor, finansiel rådgivning<br>
                <br>
                Teknisk udvikler:<br>
                <img src="images/mig.jpg" alt="Thomas Petersen">
                <strong>Thomas Petersen</strong><br>
                Lektor, CBS<br>
                <br>
                <p>Onlinebogen er udviklet med anvendelse af kunstig intelligens til teknisk struktur (HTML, CSS, JavaScript) og fagligt indhold.</p>
            </small>
        `;

        infoContainer.appendChild(infoIcon);
        infoContainer.appendChild(infoPopup);

        navbarBrand.parentNode.insertBefore(infoContainer, navbarBrand.nextSibling);

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
