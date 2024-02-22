class Cardnews extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode: 'open'});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build(){
        const componentRoot = document.createElement('div');
        componentRoot.setAttribute('class', 'card');

        const cardLeft = document.createElement('div');
        cardLeft.classList.add('card-left');

        const author = document.createElement('span');
        author.textContent = `By ${this.getAttribute('author') || 'Anonymous'}`;

        const linkTitle = document.createElement('a');
        linkTitle.textContent = this.getAttribute('title');
        linkTitle.href = this.getAttribute('linkHref') || 'https://www.youtube.com';

        const description = document.createElement('p');
        description.textContent = this.getAttribute('description');

        cardLeft.appendChild(author);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(description);


        const cardRight = document.createElement('div');
        cardRight.classList.add('card-right');

        const newsImage = document.createElement('img');
        newsImage.src = this.getAttribute('photo') || './assets/default-image.png';
        newsImage.alt = 'Imagem da Noticia'

        cardRight.appendChild(newsImage);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    styles(){
        const style = document.createElement('style');
        style.textContent = `
            .card{
                display: flex;
                box-shadow: 2px 2px 30px 1px #000;
                padding: 5px;
                max-width: 600px;
                border-radius: 10px;
            }
            .card-left{
                display: flex;
                flex-direction: column;
                justify-content: center;
            }
            .card-left a{
                font-size: 28px;
                margin-top: 5px;
                text-decoration: none;
                color: #000;
            }
            .card-right{
                max-width: 250px;
            }
            .card-right img{
                width: 100%;
            }
        `;
        return style;
    }
}

customElements.define('card-news', Cardnews);