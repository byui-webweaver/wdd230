const baseURL = "https://byui-webweaver.github.io/wdd230/";
const linksURL = "https://byui-webweaver.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.lessons);

  }
  
  getLinks();

  function displayLinks(weeks) {
    const linksContainer = document.querySelector('.card-1');

    const activitiesList = document.createElement('ul');

    weeks.forEach(lesson => {
        const lessonItem = document.createElement('li');
        
        lessonItem.textContent = lesson.lesson + ':';

        lesson.links.forEach(link => {
            const anchor = document.createElement('a');
            anchor.href = link.url;
            anchor.textContent = link.title;
            anchor.target = '_blank';

            lessonItem.appendChild(anchor);

            const separator = document.createElement('span');
            separator.textContent = ' | ';
            lessonItem.appendChild(separator);
        });

        lessonItem.lastChild.remove();

        activitiesList.appendChild(lessonItem);
    });

    linksContainer.appendChild(activitiesList);
  }

