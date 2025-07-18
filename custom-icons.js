class CustomIconSet extends HTMLElement {
  connectedCallback() {
    const iconset = document.createElement('iron-iconset-svg');
    iconset.setAttribute('name', 'lifedomus');
    iconset.setAttribute('size', '200');

    iconset.innerHTML = `
      <svg>
        <defs>
          <g id="jeux-off">
            <image xlink:href="/hacsfiles/hass-icons-lifedomus/custom_icons/JEUX-OFF-200x200.svg" height="200" width="200"/>
          </g>
          <g id="jeux-on">
            <image xlink:href="/hacsfiles/hass-icons-lifedomus/custom_icons/JEUX-ON-200x200.svg" height="200" width="200"/>
          </g>
          <g id="lampe-off">
            <image xlink:href="/hacsfiles/hass-icons-lifedomus/custom_icons/LAMPE-OFF-149x75.svg" height="200" width="200"/>
          </g>
          <g id="lampe-on">
            <image xlink:href="/hacsfiles/hass-icons-lifedomus/custom_icons/LAMPE-ON-149x75.svg" height="200" width="200"/>
          </g>
          <g id="led">
            <image xlink:href="/hacsfiles/hass-icons-lifedomus/custom_icons/LED-200x200.svg" height="200" width="200"/>
          </g>
          <g id="lit">
            <image xlink:href="/hacsfiles/hass-icons-lifedomus/custom_icons/LIT-128x128.svg" height="200" width="200"/>
          </g>
          <g id="livre">
            <image xlink:href="/hacsfiles/hass-icons-lifedomus/custom_icons/LIVRE-200x200.svg" height="200" width="200"/>
          </g>
          <g id="loupe">
            <image xlink:href="/hacsfiles/hass-icons-lifedomus/custom_icons/LOUPE-200x200.svg" height="200" width="200"/>
          </g>
          <g id="lune">
            <image xlink:href="/hacsfiles/hass-icons-lifedomus/custom_icons/LUNE-128x128.svg" height="200" width="200"/>
          </g>
          <g id="main">
            <image xlink:href="/hacsfiles/hass-icons-lifedomus/custom_icons/MAIN-50x50.svg" height="200" width="200"/>
          </g>
          <g id="maison">
            <image xlink:href="/hacsfiles/hass-icons-lifedomus/custom_icons/Maison.svg" height="200" width="200"/>
          </g>
          <g id="maison-v2">
            <image xlink:href="/hacsfiles/hass-icons-lifedomus/custom_icons/MAISON-200x200.svg" height="200" width="200"/>
          </g>
          <g id="musique-off">
            <image xlink:href="/hacsfiles/hass-icons-lifedomus/custom_icons/MUSIQUE-OFF-200x200.svg" height="200" width="200"/>
          </g>
          <g id="musique-on">
            <image xlink:href="/hacsfiles/hass-icons-lifedomus/custom_icons/MUSIQUE-ON-200x200.svg" height="200" width="200"/>
          </g>
          <g id="musique-on-v2">
            <image xlink:href="/hacsfiles/hass-icons-lifedomus/custom_icons/MUSIQUE-ON-V2-200x200.svg" height="200" width="200"/>
          </g>
          <g id="mute">
            <image xlink:href="/hacsfiles/hass-icons-lifedomus/custom_icons/MUTE-200x200.svg" height="200" width="200"/>
          </g>
          <g id="nas">
            <image xlink:href="/hacsfiles/hass-icons-lifedomus/custom_icons/NAS-200x200.svg" height="200" width="200"/>
          </g>
          <g id="nas-noir-telecommande">
            <image xlink:href="/hacsfiles/hass-icons-lifedomus/custom_icons/NAS-NOIR-TELECOMMANDE-200x200.svg" height="200" width="200"/>
          </g>
          <g id="nas-telecommande">
            <image xlink:href="/hacsfiles/hass-icons-lifedomus/custom_icons/NAS-TELECOMMANDE-200x200.svg" height="200" width="200"/>
          </g>
          <g id="note">
            <image xlink:href="/hacsfiles/hass-icons-lifedomus/custom_icons/NOTE-200x200.svg" height="200" width="200"/>
          </g>
        </defs>
      </svg>
    `;

    this.appendChild(iconset);
  }
}

customElements.define('custom-icon-set-lifedomus', CustomIconSet);
