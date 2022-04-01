const articleFactory = (title, subTitle, description, date, image) => {
    const display = (index) => {
        const main = document.querySelector("main");
        main.innerHTML += `
            <article style="background-image: url('${image}');" data-index="${index}">
                <section class="article-title">
                    <h2>${title}</h2>
                    <h3>${subTitle}</h3>
                    <h4>${date}</h4>
                </section>
            </article>
            <div class="expand-article" data-index="${index}"></div>
        `;
    }
    return {
        display
    }
}






const displayModule = (() => {
    const articleArray = [
        articleFactory("Titre", "Sous-Titre", "Quelquechose", 2021, '../img/Photos/HipstamaticPhoto-536749753.114594.jpg'),
        articleFactory("Titre", "Sous-Titre", "Quelquechose", 2021, '../img/Photos/HipstamaticPhoto-545994889.179368.jpg'),
        articleFactory("Titre", "Sous-Titre", "Quelquechose", 2021, '../img/Photos/HipstamaticPhoto-637506426.719583.jpg'),
        articleFactory("Titre", "Sous-Titre", "Quelquechose", 2021, '../img/Photos/HipstamaticPhoto-498832253.956148.jpg'),
        articleFactory("Titre", "Sous-Titre", "Quelquechose", 2021, '../img/Photos/IMG_1430.jpg'),
        articleFactory("Titre", "Sous-Titre", "Quelquechose", 2021, '../img/Photos/HipstamaticPhoto-498744696.735542.jpg')
    ]
    const displayArticles = () => {
        for (i = 0; i < articleArray.length; i++) {
            articleArray[i].display(i);
        };
    }
    return {
        displayArticles
    }
})()


window.addEventListener("load", displayModule.displayArticles());

window.addEventListener("click", (e) => {
    if (e.target.tagName == "ARTICLE") {
        const expandedArticleAll = document.querySelectorAll(".expand-article");

        // A extraire et encapsuler
        for (i = 0; i < expandedArticleAll.length; i ++) {
            expandedArticleAll[i].innerHTML = "";
        }

        expandedArticleAll[e.target.attributes["data-index"].value].innerHTML = `
        
    <div class="expand-size">
    <div class="image-wrapper">
        <div class="expand-image" style="background-image: url('../img/Photos/HipstamaticPhoto-536749753.114594.jpg');"></div>
    </div>
    <aside>
        <div class="expand-description">
            <div class="expand-header">
                <h2>Beat Tape #2</h2>
                <h3>Harlem.Prod. by Buster</h3>
                <h4>2022</h4>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro sint beatae nisi, natus iste deserunt voluptatem similique facere sequi architecto consequatur illum praesentium temporibus repellat, neque quaerat, tempore labore totam.</p>
        </div>
        <div class="expand-soundcloud">
            <iframe width="100%" height="200" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1196965657&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/redandbuster" title="Red &amp; Buster" target="_blank" style="color: #cccccc; text-decoration: none;">Red &amp; Buster</a> · <a href="https://soundcloud.com/redandbuster/beat-tape-2-harem-harlem-by-buster" title="Beat Tape #2 _ Harem / Harlem Prod. by Buster" target="_blank" style="color: #cccccc; text-decoration: none;">Beat Tape #2 _ Harem / Harlem Prod. by Buster</a></div>
        </div>
    </aside>
</div>
        `;
    };
})

